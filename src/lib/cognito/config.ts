// AWS Cognito Configuration

export const cognitoConfig = {
  region: import.meta.env.VITE_AWS_REGION || 'us-east-1',
  userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID || '',
  userPoolClientId: import.meta.env.VITE_COGNITO_CLIENT_ID || '',
}

// Validate required configuration
export function validateCognitoConfig() {
  const missing: string[] = []

  if (!cognitoConfig.userPoolId) {
    missing.push('VITE_COGNITO_USER_POOL_ID')
  }

  if (!cognitoConfig.userPoolClientId) {
    missing.push('VITE_COGNITO_CLIENT_ID')
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required Cognito configuration: ${missing.join(', ')}`
    )
  }

  return true
}

// Check if Cognito is configured (without throwing)
export function isCognitoConfigured(): boolean {
  return Boolean(cognitoConfig.userPoolId && cognitoConfig.userPoolClientId)
}
