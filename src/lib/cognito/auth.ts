import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
  CognitoUserSession,
} from 'amazon-cognito-identity-js'
import { cognitoConfig, isCognitoConfigured } from './config'

// Initialize Cognito User Pool (only if configured)
let userPool: CognitoUserPool | null = null

function getUserPool(): CognitoUserPool {
  if (!userPool && isCognitoConfigured()) {
    userPool = new CognitoUserPool({
      UserPoolId: cognitoConfig.userPoolId,
      ClientId: cognitoConfig.userPoolClientId,
    })
  }
  
  if (!userPool) {
    throw new Error('Cognito is not configured. Please set up environment variables.')
  }
  
  return userPool
}

export interface CognitoAuthUser {
  username: string
  email: string
  attributes: Record<string, string>
}

export interface SignInResult {
  success: boolean
  user?: CognitoAuthUser
  session?: CognitoUserSession
  error?: string
  challengeName?: string
}

export interface SignUpResult {
  success: boolean
  user?: CognitoUser
  userConfirmed?: boolean
  error?: string
}

export interface ConfirmSignUpResult {
  success: boolean
  error?: string
}

export interface ForgotPasswordResult {
  success: boolean
  error?: string
}

export interface ResetPasswordResult {
  success: boolean
  error?: string
}

/**
 * Sign in a user with email and password
 */
export async function signIn(
  email: string,
  password: string
): Promise<SignInResult> {
  return new Promise((resolve) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    })

    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: getUserPool(),
    })

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (session: CognitoUserSession) => {
        cognitoUser.getUserAttributes((err, attributes) => {
          if (err) {
            resolve({
              success: false,
              error: err.message || 'Failed to get user attributes',
            })
            return
          }

          const userAttributes: Record<string, string> = {}
          attributes?.forEach((attr) => {
            userAttributes[attr.getName()] = attr.getValue()
          })

          resolve({
            success: true,
            user: {
              username: cognitoUser.getUsername(),
              email: userAttributes['email'] || email,
              attributes: userAttributes,
            },
            session,
          })
        })
      },
      onFailure: (err) => {
        resolve({
          success: false,
          error: err.message || 'Authentication failed',
        })
      },
      newPasswordRequired: () => {
        resolve({
          success: false,
          error: 'New password required',
          challengeName: 'NEW_PASSWORD_REQUIRED',
        })
      },
    })
  })
}

/**
 * Sign up a new user
 */
export async function signUp(
  email: string,
  password: string,
  attributes?: { name?: string; phone_number?: string; [key: string]: string | undefined }
): Promise<SignUpResult> {
  return new Promise((resolve) => {
    const attributeList: CognitoUserAttribute[] = []

    // Email is required
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      })
    )

    // Add optional attributes
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        if (value) {
          attributeList.push(
            new CognitoUserAttribute({
              Name: key,
              Value: value,
            })
          )
        }
      })
    }

    getUserPool().signUp(email, password, attributeList, [], (err, result) => {
      if (err) {
        resolve({
          success: false,
          error: err.message || 'Sign up failed',
        })
        return
      }

      resolve({
        success: true,
        user: result?.user,
        userConfirmed: result?.userConfirmed,
      })
    })
  })
}

/**
 * Confirm user registration with verification code
 */
export async function confirmSignUp(
  email: string,
  code: string
): Promise<ConfirmSignUpResult> {
  return new Promise((resolve) => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: getUserPool(),
    })

    cognitoUser.confirmRegistration(code, true, (err) => {
      if (err) {
        resolve({
          success: false,
          error: err.message || 'Confirmation failed',
        })
        return
      }

      resolve({
        success: true,
      })
    })
  })
}

/**
 * Resend confirmation code
 */
export async function resendConfirmationCode(
  email: string
): Promise<{ success: boolean; error?: string }> {
  return new Promise((resolve) => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: getUserPool(),
    })

    cognitoUser.resendConfirmationCode((err) => {
      if (err) {
        resolve({
          success: false,
          error: err.message || 'Failed to resend code',
        })
        return
      }

      resolve({
        success: true,
      })
    })
  })
}

/**
 * Initiate forgot password flow
 */
export async function forgotPassword(
  email: string
): Promise<ForgotPasswordResult> {
  return new Promise((resolve) => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: getUserPool(),
    })

    cognitoUser.forgotPassword({
      onSuccess: () => {
        resolve({
          success: true,
        })
      },
      onFailure: (err) => {
        resolve({
          success: false,
          error: err.message || 'Failed to initiate password reset',
        })
      },
    })
  })
}

/**
 * Confirm password reset with code
 */
export async function confirmPassword(
  email: string,
  code: string,
  newPassword: string
): Promise<ResetPasswordResult> {
  return new Promise((resolve) => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: getUserPool(),
    })

    cognitoUser.confirmPassword(code, newPassword, {
      onSuccess: () => {
        resolve({
          success: true,
        })
      },
      onFailure: (err) => {
        resolve({
          success: false,
          error: err.message || 'Failed to reset password',
        })
      },
    })
  })
}

/**
 * Sign out the current user
 */
export function signOut(): void {
  try {
    const cognitoUser = getUserPool().getCurrentUser()
    if (cognitoUser) {
      cognitoUser.signOut()
    }
  } catch (error) {
    // Cognito not configured, nothing to sign out from
    console.warn('Cognito not configured:', error)
  }
}

/**
 * Get current authenticated user
 */
export async function getCurrentUser(): Promise<CognitoAuthUser | null> {
  return new Promise((resolve) => {
    try {
      const cognitoUser = getUserPool().getCurrentUser()

      if (!cognitoUser) {
        resolve(null)
        return
      }

      cognitoUser.getSession((err: Error | null, session: CognitoUserSession | null) => {
        if (err || !session || !session.isValid()) {
          resolve(null)
          return
        }

        cognitoUser.getUserAttributes((err, attributes) => {
          if (err) {
            resolve(null)
            return
          }

          const userAttributes: Record<string, string> = {}
          attributes?.forEach((attr) => {
            userAttributes[attr.getName()] = attr.getValue()
          })

          resolve({
            username: cognitoUser.getUsername(),
            email: userAttributes['email'] || '',
            attributes: userAttributes,
          })
        })
      })
    } catch (error) {
      // Cognito not configured
      resolve(null)
    }
  })
}

/**
 * Get current session
 */
export async function getCurrentSession(): Promise<CognitoUserSession | null> {
  return new Promise((resolve) => {
    try {
      const cognitoUser = getUserPool().getCurrentUser()

      if (!cognitoUser) {
        resolve(null)
        return
      }

      cognitoUser.getSession((err: Error | null, session: CognitoUserSession | null) => {
        if (err || !session || !session.isValid()) {
          resolve(null)
          return
        }

        resolve(session)
      })
    } catch (error) {
      // Cognito not configured
      resolve(null)
    }
  })
}

/**
 * Get ID token (JWT) for API authentication
 */
export async function getIdToken(): Promise<string | null> {
  const session = await getCurrentSession()
  return session?.getIdToken().getJwtToken() || null
}

/**
 * Get access token
 */
export async function getAccessToken(): Promise<string | null> {
  const session = await getCurrentSession()
  return session?.getAccessToken().getJwtToken() || null
}

/**
 * Refresh the current session
 */
export async function refreshSession(): Promise<CognitoUserSession | null> {
  return new Promise((resolve) => {
    try {
      const cognitoUser = getUserPool().getCurrentUser()

      if (!cognitoUser) {
        resolve(null)
        return
      }

      cognitoUser.getSession((err: Error | null, session: CognitoUserSession | null) => {
        if (err || !session) {
          resolve(null)
          return
        }

        const refreshToken = session.getRefreshToken()

      cognitoUser.refreshSession(refreshToken, (err, newSession) => {
        if (err) {
          resolve(null)
          return
        }

        resolve(newSession)
      })
    })
    } catch (error) {
      // Cognito not configured
      resolve(null)
    }
  })
}
