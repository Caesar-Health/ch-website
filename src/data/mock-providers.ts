/**
 * Mock Provider Data
 * Healthcare providers/staff for appointment scheduling
 */

import type { Provider } from '@/types/provider'

const now = new Date()
const yearsAgo = (years: number) => new Date(now.getFullYear() - years, now.getMonth(), now.getDate())

export const mockProviders: Provider[] = [
  // =========================================================================
  // Dr. Anderson - Family Medicine Physician
  // =========================================================================
  {
    id: 'prov-001',
    firstName: 'Sarah',
    lastName: 'Anderson',
    fullName: 'Sarah Anderson',
    title: 'Dr.',
    
    role: 'physician',
    specialty: 'family-medicine',
    specialtyDescription: 'Family Medicine',
    
    npi: '1234567890',
    boardCertified: true,
    licenseNumber: 'MD-12345',
    licenseState: 'CA',
    
    email: 'sanderson@caesarhealth.com',
    phone: '+1-555-1001',
    
    defaultAppointmentDuration: 30,
    allowsOnlineBooking: true,
    acceptsNewPatients: true,
    
    workingHours: {
      monday: [{ start: '08:00', end: '12:00' }, { start: '13:00', end: '17:00' }],
      tuesday: [{ start: '08:00', end: '12:00' }, { start: '13:00', end: '17:00' }],
      wednesday: [{ start: '08:00', end: '12:00' }, { start: '13:00', end: '17:00' }],
      thursday: [{ start: '08:00', end: '12:00' }, { start: '13:00', end: '17:00' }],
      friday: [{ start: '08:00', end: '12:00' }],
    },
    
    primaryLocation: 'Main Office',
    locations: ['Main Office', 'Downtown Clinic'],
    
    color: '#3B82F6',  // Blue
    
    isActive: true,
    onVacation: false,
    
    hireDate: yearsAgo(8),
    bio: 'Board-certified family medicine physician with 8+ years of experience',
    education: ['MD - Stanford University', 'Residency - UCSF'],
    languages: ['English', 'Spanish'],
    
    createdAt: yearsAgo(8),
    updatedAt: now,
  },

  // =========================================================================
  // Dr. Chen - Internal Medicine Physician
  // =========================================================================
  {
    id: 'prov-002',
    firstName: 'Michael',
    lastName: 'Chen',
    fullName: 'Michael Chen',
    title: 'Dr.',
    
    role: 'physician',
    specialty: 'internal-medicine',
    specialtyDescription: 'Internal Medicine',
    
    npi: '2345678901',
    boardCertified: true,
    licenseNumber: 'MD-23456',
    licenseState: 'CA',
    
    email: 'mchen@caesarhealth.com',
    phone: '+1-555-1002',
    
    defaultAppointmentDuration: 30,
    allowsOnlineBooking: true,
    acceptsNewPatients: true,
    
    workingHours: {
      monday: [{ start: '09:00', end: '17:00' }],
      tuesday: [{ start: '09:00', end: '17:00' }],
      wednesday: [{ start: '09:00', end: '17:00' }],
      thursday: [{ start: '09:00', end: '17:00' }],
      friday: [{ start: '09:00', end: '13:00' }],
    },
    
    primaryLocation: 'Main Office',
    
    color: '#10B981',  // Green
    
    isActive: true,
    
    hireDate: yearsAgo(6),
    bio: 'Internist specializing in chronic disease management',
    education: ['MD - Johns Hopkins', 'Residency - Mayo Clinic'],
    languages: ['English', 'Mandarin'],
    
    createdAt: yearsAgo(6),
    updatedAt: now,
  },

  // =========================================================================
  // Dr. Martinez - Pediatrician
  // =========================================================================
  {
    id: 'prov-003',
    firstName: 'Maria',
    lastName: 'Martinez',
    fullName: 'Maria Martinez',
    title: 'Dr.',
    
    role: 'physician',
    specialty: 'pediatrics',
    specialtyDescription: 'Pediatrics',
    
    npi: '3456789012',
    boardCertified: true,
    licenseNumber: 'MD-34567',
    licenseState: 'CA',
    
    email: 'mmartinez@caesarhealth.com',
    phone: '+1-555-1003',
    
    defaultAppointmentDuration: 20,  // Shorter appointments for kids
    allowsOnlineBooking: true,
    acceptsNewPatients: true,
    
    workingHours: {
      monday: [{ start: '08:00', end: '16:00' }],
      tuesday: [{ start: '08:00', end: '16:00' }],
      wednesday: [{ start: '08:00', end: '16:00' }],
      thursday: [{ start: '08:00', end: '16:00' }],
      friday: [{ start: '08:00', end: '14:00' }],
    },
    
    primaryLocation: 'Downtown Clinic',
    
    color: '#8B5CF6',  // Purple
    
    isActive: true,
    
    hireDate: yearsAgo(5),
    bio: 'Pediatrician passionate about preventive care and child development',
    education: ['MD - UCLA', 'Residency - Children\'s Hospital LA'],
    languages: ['English', 'Spanish'],
    
    createdAt: yearsAgo(5),
    updatedAt: now,
  },

  // =========================================================================
  // Jennifer Williams, NP - Nurse Practitioner
  // =========================================================================
  {
    id: 'prov-004',
    firstName: 'Jennifer',
    lastName: 'Williams',
    fullName: 'Jennifer Williams',
    title: 'NP',
    
    role: 'nurse-practitioner',
    specialty: 'family-medicine',
    
    npi: '4567890123',
    licenseNumber: 'NP-45678',
    licenseState: 'CA',
    
    email: 'jwilliams@caesarhealth.com',
    phone: '+1-555-1004',
    
    defaultAppointmentDuration: 30,
    allowsOnlineBooking: true,
    acceptsNewPatients: true,
    
    workingHours: {
      monday: [{ start: '10:00', end: '18:00' }],
      tuesday: [{ start: '10:00', end: '18:00' }],
      wednesday: [{ start: '10:00', end: '18:00' }],
      thursday: [{ start: '10:00', end: '18:00' }],
      friday: [{ start: '10:00', end: '16:00' }],
    },
    
    primaryLocation: 'Main Office',
    
    color: '#F59E0B',  // Amber
    
    isActive: true,
    
    hireDate: yearsAgo(4),
    bio: 'Experienced nurse practitioner focusing on primary care',
    education: ['MSN - University of Washington', 'BSN - Seattle University'],
    languages: ['English'],
    
    createdAt: yearsAgo(4),
    updatedAt: now,
  },

  // =========================================================================
  // Dr. Thompson - On Vacation
  // =========================================================================
  {
    id: 'prov-005',
    firstName: 'Robert',
    lastName: 'Thompson',
    fullName: 'Robert Thompson',
    title: 'Dr.',
    
    role: 'physician',
    specialty: 'internal-medicine',
    
    npi: '5678901234',
    boardCertified: true,
    licenseNumber: 'MD-56789',
    licenseState: 'CA',
    
    email: 'rthompson@caesarhealth.com',
    phone: '+1-555-1005',
    
    defaultAppointmentDuration: 30,
    allowsOnlineBooking: false,  // On vacation
    acceptsNewPatients: true,
    
    workingHours: {
      monday: [{ start: '09:00', end: '17:00' }],
      tuesday: [{ start: '09:00', end: '17:00' }],
      wednesday: [{ start: '09:00', end: '17:00' }],
      thursday: [{ start: '09:00', end: '17:00' }],
    },
    
    primaryLocation: 'Main Office',
    
    color: '#6B7280',  // Gray (on vacation)
    
    isActive: true,
    onVacation: true,
    vacationFrom: new Date(now.getTime() - 2 * 86400000),  // Started 2 days ago
    vacationTo: new Date(now.getTime() + 5 * 86400000),    // Ends in 5 days
    
    hireDate: yearsAgo(12),
    bio: 'Veteran internist with expertise in geriatric care',
    education: ['MD - Harvard Medical School', 'Residency - Massachusetts General'],
    languages: ['English'],
    
    createdAt: yearsAgo(12),
    updatedAt: now,
  },

  // =========================================================================
  // Lisa Park, PA - Physician Assistant
  // =========================================================================
  {
    id: 'prov-006',
    firstName: 'Lisa',
    lastName: 'Park',
    fullName: 'Lisa Park',
    title: 'PA',
    
    role: 'physician-assistant',
    specialty: 'family-medicine',
    
    npi: '6789012345',
    licenseNumber: 'PA-67890',
    licenseState: 'CA',
    
    email: 'lpark@caesarhealth.com',
    phone: '+1-555-1006',
    
    defaultAppointmentDuration: 30,
    allowsOnlineBooking: true,
    acceptsNewPatients: true,
    
    workingHours: {
      monday: [{ start: '08:00', end: '16:00' }],
      tuesday: [{ start: '08:00', end: '16:00' }],
      wednesday: [{ start: '08:00', end: '16:00' }],
      thursday: [{ start: '08:00', end: '16:00' }],
      friday: [{ start: '08:00', end: '16:00' }],
    },
    
    primaryLocation: 'Downtown Clinic',
    
    color: '#EC4899',  // Pink
    
    isActive: true,
    
    hireDate: yearsAgo(3),
    bio: 'Dedicated physician assistant with focus on preventive medicine',
    education: ['MS - Duke University', 'BS - UC Berkeley'],
    languages: ['English', 'Korean'],
    
    createdAt: yearsAgo(3),
    updatedAt: now,
  },

  // =========================================================================
  // Dr. Johnson - Part-time, Limited Hours
  // =========================================================================
  {
    id: 'prov-007',
    firstName: 'David',
    lastName: 'Johnson',
    fullName: 'David Johnson',
    title: 'Dr.',
    
    role: 'physician',
    specialty: 'family-medicine',
    
    npi: '7890123456',
    boardCertified: true,
    licenseNumber: 'MD-78901',
    licenseState: 'CA',
    
    email: 'djohnson@caesarhealth.com',
    phone: '+1-555-1007',
    
    defaultAppointmentDuration: 30,
    allowsOnlineBooking: true,
    acceptsNewPatients: false,  // Part-time, existing patients only
    
    workingHours: {
      wednesday: [{ start: '09:00', end: '13:00' }],
      friday: [{ start: '09:00', end: '13:00' }],
    },
    
    primaryLocation: 'Main Office',
    
    color: '#14B8A6',  // Teal
    
    isActive: true,
    
    hireDate: yearsAgo(15),
    bio: 'Semi-retired physician, part-time practice',
    education: ['MD - Columbia University'],
    languages: ['English'],
    
    createdAt: yearsAgo(15),
    updatedAt: now,
  },
]

/**
 * Get provider by ID
 */
export function getProviderById(id: string): Provider | undefined {
  return mockProviders.find(p => p.id === id)
}

/**
 * Get active providers
 */
export function getActiveProviders(): Provider[] {
  return mockProviders.filter(p => p.isActive && !p.onVacation)
}

/**
 * Get providers by role
 */
export function getProvidersByRole(role: string): Provider[] {
  return mockProviders.filter(p => p.role === role && p.isActive)
}

