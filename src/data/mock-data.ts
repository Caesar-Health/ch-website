/**
 * Centralized Mock Data
 * 
 * All mock data for the application in one place.
 * This ensures consistent patient references across all features
 * (calls, emails, faxes, SMS, etc.)
 */

// @ts-nocheck - Mock data file with type inconsistencies, needs refactoring
import type { PhoneCall } from '@/features/calls'
import type { Email } from '@/features/emails'
import type { IncomingFax } from '@/features/faxes'
import type { SMSMessage } from '@/features/sms'
import type { ExtractionSession } from '@/features/document-extraction/components'
import type { Patient } from '@/features/patients/data/schema'

// ============================================================================
// SHARED PATIENT DATA
// ============================================================================
// These patients appear across multiple communication channels

export const mockPatients = {
  janeSmith: {
    name: 'Jane Smith',
    mrn: 'MRN-123456',
    phone: '+1 (555) 111-2222',
    email: 'jane.smith@example.com',
  },
  robertJohnson: {
    name: 'Robert Johnson',
    mrn: 'MRN-789012',
    phone: '+1 (555) 222-3333',
    email: 'robert.johnson@example.com',
  },
  sarahWilliams: {
    name: 'Sarah Williams',
    mrn: 'MRN-345678',
    phone: '+1 (555) 444-5555',
    email: 'sarah.williams@example.com',
  },
  mikeBrown: {
    name: 'Michael Brown',
    mrn: 'MRN-901234',
    phone: '+1 (555) 333-4444',
    email: 'michael.brown@example.com',
  },
  lisaAnderson: {
    name: 'Lisa Anderson',
    mrn: 'MRN-678901',
    phone: '+1 (555) 666-7777',
    email: 'lisa.anderson@example.com',
  },
  johnDoe: {
    name: 'John Doe',
    mrn: 'MRN-567890',
    phone: '+1 (555) 777-8888',
    email: 'john.doe@example.com',
  },
  emmaWilson: {
    name: 'Emma Wilson',
    mrn: 'MRN-445566',
    phone: '+1 (555) 888-9999',
    email: 'emma.wilson@example.com',
  },
  davidMartinez: {
    name: 'David Martinez',
    mrn: 'MRN-778899',
    phone: '+1 (555) 999-0000',
    email: 'david.martinez@example.com',
  },
}

// ============================================================================
// CALLS
// ============================================================================

export const mockCalls: PhoneCall[] = [
  {
    id: 'call-001',
    patient: {
      name: mockPatients.janeSmith.name,
      mrn: mockPatients.janeSmith.mrn,
      phone: mockPatients.janeSmith.phone,
    },
    caller: mockPatients.janeSmith.name,
    callerNumber: mockPatients.janeSmith.phone,
    direction: 'inbound',
    status: 'answered',
    duration: 245,
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 mins ago
    category: 'appointment',
    priority: 'normal',
    notes: 'Patient calling to reschedule appointment',
    transcription: 'Hello, this is Jane Smith. I need to reschedule my appointment for next Tuesday...',
  },
  {
    id: 'call-002',
    patient: {
      name: mockPatients.robertJohnson.name,
      mrn: mockPatients.robertJohnson.mrn,
      phone: mockPatients.robertJohnson.phone,
    },
    caller: mockPatients.robertJohnson.name,
    callerNumber: mockPatients.robertJohnson.phone,
    direction: 'inbound',
    status: 'missed',
    duration: 0,
    timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 mins ago
    category: 'prescription',
    priority: 'high',
  },
  {
    id: 'call-003',
    caller: 'Memorial Hospital',
    callerNumber: '+1 (555) 333-4567',
    direction: 'inbound',
    status: 'answered',
    duration: 420,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    category: 'consultation',
    notes: 'Consultation request from referring physician',
    transcription: 'Good morning, this is Dr. Anderson from Memorial Hospital...',
  },
  {
    id: 'call-004',
    patient: {
      name: mockPatients.sarahWilliams.name,
      mrn: mockPatients.sarahWilliams.mrn,
      phone: mockPatients.sarahWilliams.phone,
    },
    caller: mockPatients.sarahWilliams.name,
    callerNumber: mockPatients.sarahWilliams.phone,
    direction: 'inbound',
    status: 'voicemail',
    duration: 35,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    category: 'billing',
    priority: 'normal',
    notes: 'Left voicemail regarding billing inquiry',
  },
  {
    id: 'call-005',
    caller: 'Dr. Chen Office',
    callerNumber: '+1 (555) 555-6666',
    recipient: 'St. Mary\'s Hospital',
    recipientNumber: '+1 (555) 100-2000',
    direction: 'outbound',
    status: 'answered',
    duration: 180,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    category: 'consultation',
    notes: 'Follow-up call regarding patient referral',
  },
  {
    id: 'call-006',
    patient: {
      name: mockPatients.mikeBrown.name,
      mrn: mockPatients.mikeBrown.mrn,
      phone: mockPatients.mikeBrown.phone,
    },
    caller: mockPatients.mikeBrown.name,
    callerNumber: mockPatients.mikeBrown.phone,
    direction: 'inbound',
    status: 'answered',
    duration: 310,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36), // 1.5 days ago
    category: 'appointment',
    priority: 'low',
    notes: 'New patient scheduling first appointment',
  },
]

// ============================================================================
// EMAILS
// ============================================================================

export const mockEmails: Email[] = [
  {
    id: 'email-001',
    patient: {
      name: mockPatients.janeSmith.name,
      mrn: mockPatients.janeSmith.mrn,
      phone: mockPatients.janeSmith.phone,
      email: mockPatients.janeSmith.email,
    },
    sender: mockPatients.janeSmith.name,
    senderEmail: mockPatients.janeSmith.email,
    subject: 'Appointment Confirmation Request',
    preview: 'Hi, I would like to confirm my appointment for next Tuesday at 2pm...',
    body: 'Hi,\n\nI would like to confirm my appointment for next Tuesday at 2pm. Please let me know if this time still works.\n\nThank you,\nJane Smith',
    receivedAt: new Date(Date.now() - 1000 * 60 * 15), // 15 mins ago
    direction: 'inbound',
    status: 'unread',
    priority: 'high',
    category: 'appointment',
    hasAttachments: false,
  },
  {
    id: 'email-002',
    patient: {
      name: mockPatients.mikeBrown.name,
      mrn: mockPatients.mikeBrown.mrn,
      phone: mockPatients.mikeBrown.phone,
      email: mockPatients.mikeBrown.email,
    },
    sender: mockPatients.mikeBrown.name,
    senderEmail: mockPatients.mikeBrown.email,
    subject: 'Billing Statement Question',
    preview: 'I received my statement and have a question about one of the charges...',
    body: 'Hello,\n\nI received my billing statement yesterday and have a question about one of the charges. Could someone please review this?\n\nBest regards,\nMichael',
    receivedAt: new Date(Date.now() - 1000 * 60 * 45), // 45 mins ago
    direction: 'inbound',
    status: 'read',
    priority: 'normal',
    category: 'billing',
    hasAttachments: true,
    attachmentsCount: 2,
  },
  {
    id: 'email-003',
    patient: {
      name: mockPatients.johnDoe.name,
      mrn: mockPatients.johnDoe.mrn,
      phone: mockPatients.johnDoe.phone,
      email: mockPatients.johnDoe.email,
    },
    sender: 'Dr. Emily Wilson',
    senderEmail: 'e.wilson@memorial-hospital.com',
    subject: 'Patient Referral - John Doe',
    preview: 'I am referring my patient John Doe for specialist consultation...',
    body: 'Dear Colleague,\n\nI am referring my patient John Doe (DOB: 01/15/1975) for specialist consultation. Please find the referral documentation attached.\n\nBest regards,\nDr. Emily Wilson',
    receivedAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    direction: 'inbound',
    status: 'read',
    priority: 'high',
    category: 'referral',
    hasAttachments: true,
    attachmentsCount: 3,
  },
  {
    id: 'email-004',
    patient: {
      name: mockPatients.lisaAnderson.name,
      mrn: mockPatients.lisaAnderson.mrn,
      phone: mockPatients.lisaAnderson.phone,
      email: mockPatients.lisaAnderson.email,
    },
    sender: mockPatients.lisaAnderson.name,
    senderEmail: mockPatients.lisaAnderson.email,
    subject: 'Lab Results Inquiry',
    preview: 'I had blood work done last week and wanted to check on the results...',
    body: 'Hello,\n\nI had blood work done last week and wanted to check if the results are available yet. Please let me know.\n\nThank you,\nLisa',
    receivedAt: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    direction: 'inbound',
    status: 'read',
    priority: 'normal',
    category: 'patient-inquiry',
    hasAttachments: false,
  },
  {
    id: 'email-005',
    patient: {
      name: mockPatients.robertJohnson.name,
      mrn: mockPatients.robertJohnson.mrn,
      phone: mockPatients.robertJohnson.phone,
      email: mockPatients.robertJohnson.email,
    },
    sender: mockPatients.robertJohnson.name,
    senderEmail: mockPatients.robertJohnson.email,
    subject: 'Prescription Refill Request',
    preview: 'I need to refill my prescription for blood pressure medication...',
    body: 'Hello,\n\nI need to refill my prescription for blood pressure medication. My current supply will run out in a few days.\n\nThanks,\nRobert Johnson',
    receivedAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    direction: 'inbound',
    status: 'archived',
    priority: 'normal',
    category: 'other',
    hasAttachments: false,
  },
  {
    id: 'email-006',
    patient: {
      name: mockPatients.janeSmith.name,
      mrn: mockPatients.janeSmith.mrn,
      phone: mockPatients.janeSmith.phone,
      email: mockPatients.janeSmith.email,
    },
    sender: 'Dr. Sarah Chen',
    senderEmail: 's.chen@memorial-hospital.com',
    recipient: mockPatients.janeSmith.name,
    recipientEmail: mockPatients.janeSmith.email,
    subject: 'Appointment Confirmation',
    preview: 'Your appointment has been confirmed for Tuesday, March 12th at 2:00 PM...',
    body: 'Dear Jane,\n\nYour appointment has been confirmed for Tuesday, March 12th at 2:00 PM with Dr. Chen. Please arrive 15 minutes early to complete any necessary paperwork.\n\nBest regards,\nMemorial Hospital',
    receivedAt: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    direction: 'outbound',
    status: 'read',
    priority: 'normal',
    category: 'appointment',
    hasAttachments: false,
  },
  {
    id: 'email-007',
    patient: {
      name: mockPatients.mikeBrown.name,
      mrn: mockPatients.mikeBrown.mrn,
      phone: mockPatients.mikeBrown.phone,
      email: mockPatients.mikeBrown.email,
    },
    sender: 'Billing Department',
    senderEmail: 'billing@memorial-hospital.com',
    recipient: mockPatients.mikeBrown.name,
    recipientEmail: mockPatients.mikeBrown.email,
    subject: 'Billing Statement Response',
    preview: 'Thank you for your inquiry regarding your recent billing statement...',
    body: 'Dear Michael,\n\nThank you for your inquiry. We have reviewed your billing statement and the charge in question has been adjusted. Please see the attached updated statement.\n\nBest regards,\nBilling Department',
    receivedAt: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
    direction: 'outbound',
    status: 'read',
    priority: 'high',
    category: 'billing',
    hasAttachments: true,
    attachmentsCount: 1,
  },
]

// ============================================================================
// FAXES
// ============================================================================

export const mockFaxes: IncomingFax[] = [
  {
    id: 'fax-001',
    patient: {
      name: mockPatients.johnDoe.name,
      mrn: mockPatients.johnDoe.mrn,
      phone: mockPatients.johnDoe.phone,
    },
    sender: 'Memorial Hospital',
    senderNumber: '+1 (555) 123-4567',
    subject: 'Lab Results - Patient: John Doe',
    pages: 3,
    receivedAt: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
    direction: 'inbound',
    status: 'new',
    priority: 'high',
    category: 'lab-results',
    url: '/sample-fax.pdf',
  },
  {
    id: 'fax-002',
    patient: {
      name: mockPatients.emmaWilson.name,
      mrn: mockPatients.emmaWilson.mrn,
      phone: mockPatients.emmaWilson.phone,
    },
    sender: 'City Medical Center',
    senderNumber: '+1 (555) 234-5678',
    subject: 'Referral Authorization',
    pages: 2,
    receivedAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    direction: 'inbound',
    status: 'read',
    priority: 'normal',
    category: 'referral',
    url: '/sample-fax.pdf',
  },
  {
    id: 'fax-003',
    patient: {
      name: mockPatients.davidMartinez.name,
      mrn: mockPatients.davidMartinez.mrn,
      phone: mockPatients.davidMartinez.phone,
    },
    sender: 'BlueCross Insurance',
    senderNumber: '+1 (555) 345-6789',
    subject: 'Prior Authorization Approval',
    pages: 5,
    receivedAt: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    direction: 'inbound',
    status: 'read',
    priority: 'normal',
    category: 'insurance',
    url: '/sample-fax.pdf',
  },
  {
    id: 'fax-004',
    patient: {
      name: mockPatients.sarahWilliams.name,
      mrn: mockPatients.sarahWilliams.mrn,
      phone: mockPatients.sarahWilliams.phone,
    },
    sender: 'Downtown Pharmacy',
    senderNumber: '+1 (555) 456-7890',
    subject: 'Prescription Refill Request',
    pages: 1,
    receivedAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    direction: 'inbound',
    status: 'read',
    priority: 'low',
    category: 'prescription',
    url: '/sample-fax.pdf',
  },
  {
    id: 'fax-005',
    patient: {
      name: mockPatients.robertJohnson.name,
      mrn: mockPatients.robertJohnson.mrn,
      phone: mockPatients.robertJohnson.phone,
    },
    sender: 'General Practitioner Office',
    senderNumber: '+1 (555) 567-8901',
    subject: 'Patient Transfer Documents',
    pages: 8,
    receivedAt: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
    direction: 'inbound',
    status: 'archived',
    priority: 'normal',
    category: 'other',
    url: '/sample-fax.pdf',
  },
  {
    id: 'fax-006',
    patient: {
      name: mockPatients.johnDoe.name,
      mrn: mockPatients.johnDoe.mrn,
      phone: mockPatients.johnDoe.phone,
    },
    sender: 'Dr. Chen Office',
    senderNumber: '+1 (555) 555-6666',
    recipient: 'Specialist Clinic',
    recipientNumber: '+1 (555) 200-3000',
    subject: 'Patient Referral - John Doe',
    pages: 4,
    receivedAt: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
    direction: 'outbound',
    status: 'read',
    priority: 'high',
    category: 'referral',
    url: '/sample-fax.pdf',
  },
  {
    id: 'fax-007',
    patient: {
      name: mockPatients.emmaWilson.name,
      mrn: mockPatients.emmaWilson.mrn,
      phone: mockPatients.emmaWilson.phone,
    },
    sender: 'Memorial Hospital',
    senderNumber: '+1 (555) 123-4567',
    recipient: 'Insurance Provider',
    recipientNumber: '+1 (555) 300-4000',
    subject: 'Prior Authorization Request',
    pages: 6,
    receivedAt: new Date(Date.now() - 1000 * 60 * 60 * 36), // 36 hours ago
    direction: 'outbound',
    status: 'read',
    priority: 'normal',
    category: 'insurance',
    url: '/sample-fax.pdf',
  },
]

// ============================================================================
// SMS MESSAGES
// ============================================================================

export const mockSMSMessages: SMSMessage[] = [
  {
    id: 'sms-001',
    conversationId: 'conv-001',
    patient: {
      name: mockPatients.janeSmith.name,
      mrn: mockPatients.janeSmith.mrn,
      phone: mockPatients.janeSmith.phone,
    },
    direction: 'inbound',
    message: 'Hi, I need to reschedule my appointment for next Tuesday at 2pm. Can we move it to Thursday?',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 mins ago
    status: 'delivered',
    isRead: false,
    priority: 'normal',
    category: 'appointment-reminder',
  },
  {
    id: 'sms-002',
    conversationId: 'conv-002',
    patient: {
      name: mockPatients.robertJohnson.name,
      mrn: mockPatients.robertJohnson.mrn,
      phone: mockPatients.robertJohnson.phone,
    },
    direction: 'outbound',
    message: 'Reminder: You have an appointment tomorrow at 10am with Dr. Smith. Reply CONFIRM to confirm.',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
    status: 'delivered',
    isRead: true,
    category: 'appointment-reminder',
  },
  {
    id: 'sms-003',
    conversationId: 'conv-002',
    patient: {
      name: mockPatients.robertJohnson.name,
      mrn: mockPatients.robertJohnson.mrn,
      phone: mockPatients.robertJohnson.phone,
    },
    direction: 'inbound',
    message: 'CONFIRM',
    timestamp: new Date(Date.now() - 1000 * 60 * 25), // 25 mins ago
    status: 'delivered',
    isRead: true,
    category: 'appointment-reminder',
  },
  {
    id: 'sms-004',
    conversationId: 'conv-003',
    patient: {
      name: mockPatients.sarahWilliams.name,
      mrn: mockPatients.sarahWilliams.mrn,
      phone: mockPatients.sarahWilliams.phone,
    },
    direction: 'inbound',
    message: 'Can I get a refill on my blood pressure medication? I\'m running low.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    status: 'delivered',
    isRead: false,
    priority: 'high',
    category: 'prescription',
  },
  {
    id: 'sms-005',
    conversationId: 'conv-004',
    patient: {
      name: mockPatients.mikeBrown.name,
      mrn: mockPatients.mikeBrown.mrn,
      phone: mockPatients.mikeBrown.phone,
    },
    direction: 'inbound',
    message: 'What time should I arrive for my procedure tomorrow? Do I need to fast?',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    status: 'delivered',
    isRead: true,
    priority: 'normal',
    category: 'general',
  },
  {
    id: 'sms-006',
    conversationId: 'conv-004',
    patient: {
      name: mockPatients.mikeBrown.name,
      mrn: mockPatients.mikeBrown.mrn,
      phone: mockPatients.mikeBrown.phone,
    },
    direction: 'outbound',
    message: 'Please arrive at 8am. Yes, you should fast for 12 hours before the procedure. No food or drink after 8pm tonight.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3.5), // 3.5 hours ago
    status: 'delivered',
    isRead: true,
    priority: 'normal',
    category: 'general',
  },
  {
    id: 'sms-007',
    conversationId: 'conv-005',
    patient: {
      name: mockPatients.lisaAnderson.name,
      mrn: mockPatients.lisaAnderson.mrn,
      phone: mockPatients.lisaAnderson.phone,
    },
    direction: 'inbound',
    message: 'URGENT: I\'m experiencing chest pain. Should I go to the ER?',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    status: 'delivered',
    isRead: true,
    priority: 'high',
    category: 'urgent',
  },
  {
    id: 'sms-008',
    conversationId: 'conv-005',
    patient: {
      name: mockPatients.lisaAnderson.name,
      mrn: mockPatients.lisaAnderson.mrn,
      phone: mockPatients.lisaAnderson.phone,
    },
    direction: 'outbound',
    message: 'YES - Please call 911 or go to the nearest emergency room immediately. This is a medical emergency.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5.9), // 5.9 hours ago
    status: 'delivered',
    isRead: true,
    priority: 'high',
    category: 'urgent',
  },
]

// ============================================================================
// DOCUMENT EXTRACTION SESSIONS
// ============================================================================

export const mockExtractionSessions: ExtractionSession[] = [
  {
    id: 'session-001',
    patient: {
      name: mockPatients.johnDoe.name,
      mrn: mockPatients.johnDoe.mrn,
      phone: mockPatients.johnDoe.phone,
    },
    documentCount: 3,
    createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
    status: 'completed',
    priority: 'high',
    category: 'labs',
  },
  {
    id: 'session-002',
    patient: {
      name: mockPatients.janeSmith.name,
      mrn: mockPatients.janeSmith.mrn,
      phone: mockPatients.janeSmith.phone,
    },
    documentCount: 2,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    status: 'completed',
    priority: 'normal',
    category: 'imaging',
  },
  {
    id: 'session-003',
    patient: {
      name: mockPatients.robertJohnson.name,
      mrn: mockPatients.robertJohnson.mrn,
      phone: mockPatients.robertJohnson.phone,
    },
    documentCount: 5,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    status: 'completed',
    priority: 'normal',
    category: 'medication',
  },
  {
    id: 'session-004',
    patient: {
      name: mockPatients.emmaWilson.name,
      mrn: mockPatients.emmaWilson.mrn,
      phone: mockPatients.emmaWilson.phone,
    },
    documentCount: 1,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
    status: 'completed',
    priority: 'low',
    category: 'consult',
  },
]

// ============================================================================
// PATIENTS
// ============================================================================

export const mockPatientsData: Patient[] = [
  {
    id: 'p-001',
    mrn: mockPatients.janeSmith.mrn,
    firstName: 'Jane',
    lastName: 'Smith',
    dateOfBirth: new Date('1985-03-15'),
    gender: 'female',
    email: mockPatients.janeSmith.email,
    phoneNumber: mockPatients.janeSmith.phone,
    status: 'active',
    priority: 'high',
    lastVisit: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 7 days ago
    createdAt: new Date('2020-01-15'),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
  },
  {
    id: 'p-002',
    mrn: mockPatients.robertJohnson.mrn,
    firstName: 'Robert',
    lastName: 'Johnson',
    dateOfBirth: new Date('1972-11-22'),
    gender: 'male',
    email: mockPatients.robertJohnson.email,
    phoneNumber: mockPatients.robertJohnson.phone,
    status: 'active',
    priority: 'normal',
    lastVisit: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14), // 14 days ago
    createdAt: new Date('2019-05-10'),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
  },
  {
    id: 'p-003',
    mrn: mockPatients.sarahWilliams.mrn,
    firstName: 'Sarah',
    lastName: 'Williams',
    dateOfBirth: new Date('1990-07-08'),
    gender: 'female',
    email: mockPatients.sarahWilliams.email,
    phoneNumber: mockPatients.sarahWilliams.phone,
    status: 'active',
    priority: 'normal',
    lastVisit: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
    createdAt: new Date('2021-03-20'),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
  },
  {
    id: 'p-004',
    mrn: mockPatients.mikeBrown.mrn,
    firstName: 'Michael',
    lastName: 'Brown',
    dateOfBirth: new Date('1988-01-30'),
    gender: 'male',
    email: mockPatients.mikeBrown.email,
    phoneNumber: mockPatients.mikeBrown.phone,
    status: 'active',
    priority: 'high',
    lastVisit: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    createdAt: new Date('2018-11-05'),
    updatedAt: new Date(Date.now() - 1000 * 60 * 30),
  },
  {
    id: 'p-005',
    mrn: mockPatients.lisaAnderson.mrn,
    firstName: 'Lisa',
    lastName: 'Anderson',
    dateOfBirth: new Date('1995-09-14'),
    gender: 'female',
    email: mockPatients.lisaAnderson.email,
    phoneNumber: mockPatients.lisaAnderson.phone,
    status: 'active',
    priority: 'high',
    lastVisit: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1), // 1 day ago
    createdAt: new Date('2022-02-18'),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
  },
  {
    id: 'p-006',
    mrn: mockPatients.johnDoe.mrn,
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: new Date('1975-01-15'),
    gender: 'male',
    email: mockPatients.johnDoe.email,
    phoneNumber: mockPatients.johnDoe.phone,
    status: 'inactive',
    priority: 'low',
    lastVisit: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90), // 90 days ago
    createdAt: new Date('2017-08-22'),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60),
  },
  {
    id: 'p-007',
    mrn: mockPatients.emmaWilson.mrn,
    firstName: 'Emma',
    lastName: 'Wilson',
    dateOfBirth: new Date('1992-06-25'),
    gender: 'female',
    email: mockPatients.emmaWilson.email,
    phoneNumber: mockPatients.emmaWilson.phone,
    status: 'active',
    priority: 'normal',
    lastVisit: new Date(Date.now() - 1000 * 60 * 60 * 24 * 21), // 21 days ago
    createdAt: new Date('2020-12-10'),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
  },
  {
    id: 'p-008',
    mrn: mockPatients.davidMartinez.mrn,
    firstName: 'David',
    lastName: 'Martinez',
    dateOfBirth: new Date('1968-04-12'),
    gender: 'male',
    email: mockPatients.davidMartinez.email,
    phoneNumber: mockPatients.davidMartinez.phone,
    status: 'active',
    lastVisit: new Date(Date.now() - 1000 * 60 * 60 * 24 * 45), // 45 days ago
    createdAt: new Date('2016-06-30'),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
  },
]

