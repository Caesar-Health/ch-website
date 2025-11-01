/**
 * Mock Appointment Data
 * Realistic appointment examples across providers and time periods
 */

import type { Appointment } from '@/types/appointment'
import { mockProviders } from './mock-providers'

// Helper to create dates relative to now
const now = new Date()
const minutesFromNow = (mins: number) => new Date(now.getTime() + mins * 60000)
const hoursFromNow = (hours: number) => new Date(now.getTime() + hours * 3600000)
const daysFromNow = (days: number) => new Date(now.getTime() + days * 86400000)
const daysAgo = (days: number) => new Date(now.getTime() - days * 86400000)

// Helper to create appointment time
const createAppointmentTime = (daysOffset: number, hour: number, minute: number, durationMins: number) => {
  const start = daysFromNow(daysOffset)
  start.setHours(hour, minute, 0, 0)
  const end = new Date(start.getTime() + durationMins * 60000)
  return { start, end }
}

export const mockAppointments: Appointment[] = [
  // =========================================================================
  // TODAY'S APPOINTMENTS
  // =========================================================================
  
  // Appointment 1: Morning - Arrived
  {
    id: 'apt-001',
    
    patient: {
      id: 'pt-001',
      name: 'Jane Smith',
      mrn: 'MRN-001',
      phone: '+1-555-0001',
      email: 'jane.smith@email.com',
      dateOfBirth: new Date('1985-03-15'),
      age: 40,
    },
    
    provider: {
      id: mockProviders[0].id,
      name: mockProviders[0].fullName,
      role: 'physician',
      specialty: 'Family Medicine',
      color: mockProviders[0].color,
    },
    
    appointmentType: 'annual-physical',
    ...createAppointmentTime(0, 9, 0, 60),
    duration: 60,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
      room: 'Exam Room 1',
    },
    
    status: 'arrived',
    workflowState: 'checked-in',
    
    categories: ['preventive'],
    
    reason: 'Annual physical examination',
    visitType: 'in-person',
    
    insuranceVerified: true,
    copay: 25,
    
    arrivedAt: minutesFromNow(-15),
    checkedInAt: minutesFromNow(-10),
    
    tasks: [],
    documents: [],
    
    createdBy: 'patient',
    
    createdAt: daysAgo(14),
    updatedAt: minutesFromNow(-10),
  },

  // Appointment 2: Mid-morning - In Progress
  {
    id: 'apt-002',
    
    patient: {
      id: 'pt-002',
      name: 'Robert Johnson',
      mrn: 'MRN-002',
      phone: '+1-555-0002',
      dateOfBirth: new Date('1972-07-22'),
      age: 53,
    },
    
    provider: {
      id: mockProviders[1].id,
      name: mockProviders[1].fullName,
      role: 'physician',
      specialty: 'Internal Medicine',
      color: mockProviders[1].color,
    },
    
    appointmentType: 'follow-up',
    ...createAppointmentTime(0, 10, 30, 30),
    duration: 30,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
      room: 'Exam Room 3',
    },
    
    status: 'in-progress',
    workflowState: 'with-provider',
    
    categories: ['follow-up'],
    
    chiefComplaint: 'Follow-up for hypertension',
    reason: 'Blood pressure check and medication review',
    visitType: 'in-person',
    
    insuranceVerified: true,
    
    arrivedAt: minutesFromNow(-25),
    checkedInAt: minutesFromNow(-20),
    roomAssignedAt: minutesFromNow(-5),
    roomNumber: 'Exam Room 3',
    
    tasks: [],
    documents: [],
    
    createdBy: 'staff',
    createdByName: 'Front Desk',
    
    createdAt: daysAgo(7),
    updatedAt: minutesFromNow(-5),
  },

  // Appointment 3: Afternoon - Confirmed
  {
    id: 'apt-003',
    
    patient: {
      id: 'pt-003',
      name: 'Emily Davis',
      mrn: 'MRN-003',
      phone: '+1-555-0003',
      email: 'emily.d@email.com',
      dateOfBirth: new Date('1990-11-08'),
      age: 35,
    },
    
    provider: {
      id: mockProviders[0].id,
      name: mockProviders[0].fullName,
      role: 'physician',
      specialty: 'Family Medicine',
      color: mockProviders[0].color,
    },
    
    appointmentType: 'sick-visit',
    ...createAppointmentTime(0, 14, 0, 20),
    duration: 20,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
      room: 'Exam Room 2',
    },
    
    status: 'confirmed',
    workflowState: 'confirmed',
    
    categories: ['urgent'],
    
    chiefComplaint: 'Sore throat and fever',
    visitType: 'in-person',
    
    insuranceVerified: true,
    
    remindersSent: [
      {
        type: 'sms',
        sentAt: hoursFromNow(-2),
        status: 'delivered',
      }
    ],
    
    tasks: [],
    documents: [],
    
    createdBy: 'ai',
    
    ai: {
      confidence: 0.95,
      model: 'gpt-4o',
      processedAt: daysAgo(1),
      requiresReview: false,
      extractedFrom: 'call-002',
    },
    
    createdAt: daysAgo(1),
    updatedAt: hoursFromNow(-2),
  },

  // Appointment 4: Late afternoon - Scheduled
  {
    id: 'apt-004',
    
    patient: {
      id: 'pt-004',
      name: 'Michael Chen',
      mrn: 'MRN-004',
      phone: '+1-555-0004',
      dateOfBirth: new Date('1988-05-30'),
      age: 37,
    },
    
    provider: {
      id: mockProviders[3].id,
      name: mockProviders[3].fullName,
      role: 'nurse-practitioner',
      color: mockProviders[3].color,
    },
    
    appointmentType: 'consultation',
    ...createAppointmentTime(0, 16, 30, 30),
    duration: 30,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
    },
    
    status: 'scheduled',
    workflowState: 'pending-confirmation',
    
    categories: ['routine'],
    
    reason: 'Discuss lab results',
    visitType: 'in-person',
    
    tasks: [],
    documents: [],
    
    createdBy: 'staff',
    
    createdAt: daysAgo(3),
    updatedAt: daysAgo(3),
  },

  // =========================================================================
  // TOMORROW'S APPOINTMENTS
  // =========================================================================
  
  {
    id: 'apt-005',
    
    patient: {
      id: 'pt-005',
      name: 'Sarah Williams',
      mrn: 'MRN-005',
      phone: '+1-555-0005',
      email: 'sarah.w@email.com',
      dateOfBirth: new Date('1995-02-14'),
      age: 30,
    },
    
    provider: {
      id: mockProviders[2].id,
      name: mockProviders[2].fullName,
      role: 'physician',
      specialty: 'Pediatrics',
      color: mockProviders[2].color,
    },
    
    appointmentType: 'new-patient',
    ...createAppointmentTime(1, 9, 0, 45),
    duration: 45,
    
    location: {
      id: 'loc-002',
      name: 'Downtown Clinic',
    },
    
    status: 'confirmed',
    workflowState: 'confirmed',
    
    categories: ['routine'],
    
    reason: 'New patient visit',
    visitType: 'in-person',
    
    insuranceVerified: true,
    copay: 30,
    
    remindersSent: [
      {
        type: 'email',
        sentAt: daysAgo(1),
        status: 'delivered',
      }
    ],
    
    tasks: [],
    documents: [],
    
    createdBy: 'online-booking',
    
    createdAt: daysAgo(10),
    updatedAt: daysAgo(1),
  },

  {
    id: 'apt-006',
    
    patient: {
      id: 'pt-006',
      name: 'Thomas Martinez',
      mrn: 'MRN-006',
      phone: '+1-555-0006',
      dateOfBirth: new Date('1960-09-12'),
      age: 65,
    },
    
    provider: {
      id: mockProviders[1].id,
      name: mockProviders[1].fullName,
      role: 'physician',
      specialty: 'Internal Medicine',
      color: mockProviders[1].color,
    },
    
    appointmentType: 'follow-up',
    ...createAppointmentTime(1, 11, 0, 30),
    duration: 30,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
    },
    
    status: 'confirmed',
    workflowState: 'reminder-sent',
    
    categories: ['follow-up'],
    
    chiefComplaint: 'Diabetes follow-up',
    reason: 'Review A1C results and adjust medication',
    visitType: 'in-person',
    
    cptCodes: ['99213'],
    
    remindersSent: [
      {
        type: 'sms',
        sentAt: hoursFromNow(-12),
        status: 'delivered',
      }
    ],
    
    tasks: [],
    documents: [],
    
    createdBy: 'staff',
    
    createdAt: daysAgo(14),
    updatedAt: hoursFromNow(-12),
  },

  {
    id: 'apt-007',
    
    patient: {
      id: 'pt-007',
      name: 'Lisa Park',
      mrn: 'MRN-007',
      phone: '+1-555-0007',
      dateOfBirth: new Date('2010-04-18'),
      age: 15,
    },
    
    provider: {
      id: mockProviders[2].id,
      name: mockProviders[2].fullName,
      role: 'physician',
      specialty: 'Pediatrics',
      color: mockProviders[2].color,
    },
    
    appointmentType: 'screening',
    ...createAppointmentTime(1, 14, 30, 20),
    duration: 20,
    
    location: {
      id: 'loc-002',
      name: 'Downtown Clinic',
    },
    
    status: 'scheduled',
    workflowState: 'pending-confirmation',
    
    categories: ['preventive'],
    
    reason: 'Sports physical for school',
    visitType: 'in-person',
    
    tasks: [],
    documents: [],
    
    createdBy: 'patient',
    
    createdAt: daysAgo(5),
    updatedAt: daysAgo(5),
  },

  {
    id: 'apt-008',
    
    patient: {
      id: 'pt-008',
      name: 'David Brown',
      mrn: 'MRN-008',
      phone: '+1-555-0008',
      dateOfBirth: new Date('1978-12-03'),
      age: 46,
    },
    
    provider: {
      id: mockProviders[3].id,
      name: mockProviders[3].fullName,
      role: 'nurse-practitioner',
      color: mockProviders[3].color,
    },
    
    appointmentType: 'urgent-care',
    ...createAppointmentTime(1, 16, 0, 30),
    duration: 30,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
    },
    
    status: 'confirmed',
    workflowState: 'confirmed',
    
    categories: ['urgent'],
    
    chiefComplaint: 'Back pain',
    visitType: 'in-person',
    
    tasks: [],
    documents: [],
    
    createdBy: 'staff',
    
    createdAt: hoursFromNow(-4),
    updatedAt: hoursFromNow(-3),
  },

  // =========================================================================
  // THIS WEEK - UPCOMING APPOINTMENTS
  // =========================================================================
  
  // Day +2
  {
    id: 'apt-009',
    
    patient: {
      id: 'pt-009',
      name: 'Amanda Garcia',
      mrn: 'MRN-009',
      phone: '+1-555-0009',
      email: 'amanda.g@email.com',
      dateOfBirth: new Date('1982-06-25'),
      age: 43,
    },
    
    provider: {
      id: mockProviders[0].id,
      name: mockProviders[0].fullName,
      role: 'physician',
      specialty: 'Family Medicine',
      color: mockProviders[0].color,
    },
    
    appointmentType: 'follow-up',
    ...createAppointmentTime(2, 10, 0, 30),
    duration: 30,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
    },
    
    status: 'confirmed',
    workflowState: 'confirmed',
    
    categories: ['follow-up'],
    
    reason: 'Cholesterol management follow-up',
    visitType: 'in-person',
    
    tasks: [],
    documents: [],
    
    createdBy: 'staff',
    
    createdAt: daysAgo(21),
    updatedAt: daysAgo(20),
  },

  {
    id: 'apt-010',
    
    patient: {
      id: 'pt-010',
      name: 'Kevin Rodriguez',
      mrn: 'MRN-010',
      phone: '+1-555-0010',
      dateOfBirth: new Date('2015-01-10'),
      age: 10,
    },
    
    provider: {
      id: mockProviders[2].id,
      name: mockProviders[2].fullName,
      role: 'physician',
      specialty: 'Pediatrics',
      color: mockProviders[2].color,
    },
    
    appointmentType: 'sick-visit',
    ...createAppointmentTime(2, 11, 30, 20),
    duration: 20,
    
    location: {
      id: 'loc-002',
      name: 'Downtown Clinic',
    },
    
    status: 'scheduled',
    workflowState: 'pending-confirmation',
    
    categories: ['routine'],
    
    chiefComplaint: 'Ear infection symptoms',
    visitType: 'in-person',
    
    tasks: [],
    documents: [],
    
    createdBy: 'ai',
    
    ai: {
      confidence: 0.92,
      model: 'gpt-4o',
      processedAt: daysAgo(0.5),
      requiresReview: false,
      extractedFrom: 'email-010',
    },
    
    createdAt: daysAgo(0.5),
    updatedAt: daysAgo(0.5),
  },

  // Day +3
  {
    id: 'apt-011',
    
    patient: {
      id: 'pt-011',
      name: 'Patricia Lee',
      mrn: 'MRN-011',
      phone: '+1-555-0011',
      dateOfBirth: new Date('1955-08-19'),
      age: 70,
    },
    
    provider: {
      id: mockProviders[1].id,
      name: mockProviders[1].fullName,
      role: 'physician',
      specialty: 'Internal Medicine',
      color: mockProviders[1].color,
    },
    
    appointmentType: 'annual-physical',
    ...createAppointmentTime(3, 9, 30, 60),
    duration: 60,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
    },
    
    status: 'confirmed',
    workflowState: 'confirmed',
    
    categories: ['preventive'],
    
    reason: 'Medicare annual wellness visit',
    visitType: 'in-person',
    
    cptCodes: ['G0438'],
    insuranceVerified: true,
    
    tasks: [],
    documents: [],
    
    createdBy: 'staff',
    
    createdAt: daysAgo(30),
    updatedAt: daysAgo(25),
  },

  {
    id: 'apt-012',
    
    patient: {
      id: 'pt-012',
      name: 'Brandon Scott',
      mrn: 'MRN-012',
      phone: '+1-555-0012',
      dateOfBirth: new Date('1998-03-07'),
      age: 27,
    },
    
    provider: {
      id: mockProviders[3].id,
      name: mockProviders[3].fullName,
      role: 'nurse-practitioner',
      color: mockProviders[3].color,
    },
    
    appointmentType: 'consultation',
    ...createAppointmentTime(3, 15, 0, 30),
    duration: 30,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
    },
    
    status: 'scheduled',
    workflowState: 'pending-confirmation',
    
    categories: ['routine'],
    
    reason: 'Discuss medication side effects',
    visitType: 'telehealth',
    
    tasks: [],
    documents: [],
    
    createdBy: 'online-booking',
    
    createdAt: daysAgo(2),
    updatedAt: daysAgo(2),
  },

  // Day +4
  {
    id: 'apt-013',
    
    patient: {
      id: 'pt-013',
      name: 'Nancy White',
      mrn: 'MRN-013',
      phone: '+1-555-0013',
      email: 'nancy.w@email.com',
      dateOfBirth: new Date('1968-10-22'),
      age: 57,
    },
    
    provider: {
      id: mockProviders[0].id,
      name: mockProviders[0].fullName,
      role: 'physician',
      specialty: 'Family Medicine',
      color: mockProviders[0].color,
    },
    
    appointmentType: 'procedure',
    ...createAppointmentTime(4, 10, 0, 45),
    duration: 45,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
      room: 'Procedure Room',
    },
    
    status: 'confirmed',
    workflowState: 'confirmed',
    
    categories: ['therapeutic'],
    
    reason: 'Joint injection - knee',
    visitType: 'in-person',
    
    cptCodes: ['20610'],
    insuranceVerified: true,
    
    tasks: [],
    documents: [],
    
    createdBy: 'staff',
    
    createdAt: daysAgo(14),
    updatedAt: daysAgo(10),
  },

  // =========================================================================
  // PAST APPOINTMENTS
  // =========================================================================
  
  // Yesterday - Completed
  {
    id: 'apt-014',
    
    patient: {
      id: 'pt-014',
      name: 'Carlos Hernandez',
      mrn: 'MRN-014',
      phone: '+1-555-0014',
      dateOfBirth: new Date('1980-07-30'),
      age: 45,
    },
    
    provider: {
      id: mockProviders[1].id,
      name: mockProviders[1].fullName,
      role: 'physician',
      specialty: 'Internal Medicine',
      color: mockProviders[1].color,
    },
    
    appointmentType: 'follow-up',
    ...createAppointmentTime(-1, 14, 0, 30),
    duration: 30,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
    },
    
    status: 'completed',
    workflowState: 'billed',
    
    categories: ['follow-up'],
    
    chiefComplaint: 'Blood pressure check',
    visitType: 'in-person',
    
    arrivedAt: daysAgo(1).setHours(13, 55, 0, 0) as any,
    checkedInAt: daysAgo(1).setHours(13, 58, 0, 0) as any,
    completedAt: daysAgo(1).setHours(14, 25, 0, 0) as any,
    
    encounterNoteId: 'enc-note-014',
    
    tasks: [],
    documents: [],
    
    createdBy: 'staff',
    
    createdAt: daysAgo(20),
    updatedAt: daysAgo(1),
  },

  // 2 days ago - No Show
  {
    id: 'apt-015',
    
    patient: {
      id: 'pt-015',
      name: 'Jessica Moore',
      mrn: 'MRN-015',
      phone: '+1-555-0015',
      dateOfBirth: new Date('1992-11-05'),
      age: 33,
    },
    
    provider: {
      id: mockProviders[0].id,
      name: mockProviders[0].fullName,
      role: 'physician',
      specialty: 'Family Medicine',
      color: mockProviders[0].color,
    },
    
    appointmentType: 'sick-visit',
    ...createAppointmentTime(-2, 10, 30, 20),
    duration: 20,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
    },
    
    status: 'no-show',
    workflowState: 'no-show',
    
    categories: ['urgent'],
    
    chiefComplaint: 'Cold symptoms',
    visitType: 'in-person',
    
    noShow: true,
    noShowNotifiedAt: daysAgo(2).setHours(10, 45, 0, 0) as any,
    
    tasks: [
      {
        id: 'task-apt-015',
        title: 'Follow up with no-show patient',
        description: 'Patient Jessica Moore missed appointment. Attempt to reschedule.',
        type: 'callback',
        priority: 'normal',
        assignedToRole: 'front-desk',
        status: 'completed',
        completedAt: daysAgo(1),
        aiGenerated: false,
      }
    ],
    documents: [],
    
    createdBy: 'staff',
    
    createdAt: daysAgo(7),
    updatedAt: daysAgo(2),
  },

  // 3 days ago - Cancelled
  {
    id: 'apt-016',
    
    patient: {
      id: 'pt-016',
      name: 'Ryan Kim',
      mrn: 'MRN-016',
      phone: '+1-555-0016',
      dateOfBirth: new Date('1987-05-14'),
      age: 38,
    },
    
    provider: {
      id: mockProviders[1].id,
      name: mockProviders[1].fullName,
      role: 'physician',
      specialty: 'Internal Medicine',
      color: mockProviders[1].color,
    },
    
    appointmentType: 'follow-up',
    ...createAppointmentTime(-3, 11, 0, 30),
    duration: 30,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
    },
    
    status: 'cancelled',
    workflowState: 'cancelled',
    
    categories: ['follow-up'],
    
    reason: 'Lab results review',
    visitType: 'in-person',
    
    cancelled: true,
    cancellationReason: 'Patient requested - schedule conflict',
    cancelledAt: daysAgo(4),
    cancelledBy: 'Patient',
    
    rescheduledTo: 'apt-017',
    
    tasks: [],
    documents: [],
    
    createdBy: 'staff',
    
    createdAt: daysAgo(15),
    updatedAt: daysAgo(4),
  },

  // Rescheduled appointment for apt-016
  {
    id: 'apt-017',
    
    patient: {
      id: 'pt-016',
      name: 'Ryan Kim',
      mrn: 'MRN-016',
      phone: '+1-555-0016',
      dateOfBirth: new Date('1987-05-14'),
      age: 38,
    },
    
    provider: {
      id: mockProviders[1].id,
      name: mockProviders[1].fullName,
      role: 'physician',
      specialty: 'Internal Medicine',
      color: mockProviders[1].color,
    },
    
    appointmentType: 'follow-up',
    ...createAppointmentTime(5, 14, 30, 30),
    duration: 30,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
    },
    
    status: 'scheduled',
    workflowState: 'pending-confirmation',
    
    categories: ['follow-up'],
    
    reason: 'Lab results review (rescheduled)',
    visitType: 'in-person',
    
    rescheduledFrom: 'apt-016',
    rescheduledAt: daysAgo(4),
    rescheduledReason: 'Patient schedule conflict',
    
    tasks: [],
    documents: [],
    
    createdBy: 'staff',
    
    createdAt: daysAgo(4),
    updatedAt: daysAgo(4),
  },

  // Continue with more appointments across the week...
  // Day +5, +6, +7, etc.

  {
    id: 'apt-018',
    
    patient: {
      id: 'pt-018',
      name: 'Michelle Taylor',
      mrn: 'MRN-018',
      phone: '+1-555-0018',
      dateOfBirth: new Date('1975-09-08'),
      age: 50,
    },
    
    provider: {
      id: mockProviders[0].id,
      name: mockProviders[0].fullName,
      role: 'physician',
      specialty: 'Family Medicine',
      color: mockProviders[0].color,
    },
    
    appointmentType: 'wellness-visit',
    ...createAppointmentTime(5, 9, 0, 60),
    duration: 60,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
    },
    
    status: 'confirmed',
    workflowState: 'confirmed',
    
    categories: ['preventive'],
    
    reason: '50-year wellness exam',
    visitType: 'in-person',
    
    tasks: [],
    documents: [],
    
    createdBy: 'online-booking',
    
    createdAt: daysAgo(20),
    updatedAt: daysAgo(15),
  },

  {
    id: 'apt-019',
    
    patient: {
      id: 'pt-019',
      name: 'Daniel Wilson',
      mrn: 'MRN-019',
      phone: '+1-555-0019',
      dateOfBirth: new Date('2008-02-20'),
      age: 17,
    },
    
    provider: {
      id: mockProviders[2].id,
      name: mockProviders[2].fullName,
      role: 'physician',
      specialty: 'Pediatrics',
      color: mockProviders[2].color,
    },
    
    appointmentType: 'screening',
    ...createAppointmentTime(7, 13, 0, 20),
    duration: 20,
    
    location: {
      id: 'loc-002',
      name: 'Downtown Clinic',
    },
    
    status: 'scheduled',
    workflowState: 'pending-confirmation',
    
    categories: ['preventive'],
    
    reason: 'College health screening',
    visitType: 'in-person',
    
    tasks: [],
    documents: [],
    
    createdBy: 'patient',
    
    createdAt: daysAgo(12),
    updatedAt: daysAgo(12),
  },

  {
    id: 'apt-020',
    
    patient: {
      id: 'pt-020',
      name: 'Angela Thompson',
      mrn: 'MRN-020',
      phone: '+1-555-0020',
      dateOfBirth: new Date('1991-12-12'),
      age: 34,
    },
    
    provider: {
      id: mockProviders[3].id,
      name: mockProviders[3].fullName,
      role: 'nurse-practitioner',
      color: mockProviders[3].color,
    },
    
    appointmentType: 'post-op',
    ...createAppointmentTime(7, 15, 30, 30),
    duration: 30,
    
    location: {
      id: 'loc-001',
      name: 'Main Office',
    },
    
    status: 'confirmed',
    workflowState: 'confirmed',
    
    categories: ['follow-up'],
    
    reason: 'Post-surgical follow-up',
    visitType: 'in-person',
    
    tasks: [],
    documents: [],
    
    createdBy: 'staff',
    
    createdAt: daysAgo(10),
    updatedAt: daysAgo(8),
  },
]

/**
 * Get appointments for a specific date
 */
export function getAppointmentsForDate(date: Date): Appointment[] {
  return mockAppointments.filter(apt => {
    return (
      apt.start.getDate() === date.getDate() &&
      apt.start.getMonth() === date.getMonth() &&
      apt.start.getFullYear() === date.getFullYear()
    )
  })
}

/**
 * Get appointments for a provider
 */
export function getAppointmentsByProvider(providerId: string): Appointment[] {
  return mockAppointments.filter(apt => apt.provider.id === providerId)
}

/**
 * Get upcoming appointments
 */
export function getUpcomingAppointments(): Appointment[] {
  return mockAppointments.filter(apt => apt.start > now).sort((a, b) => a.start.getTime() - b.start.getTime())
}

/**
 * Get today's appointments
 */
export function getTodayAppointments(): Appointment[] {
  return getAppointmentsForDate(now)
}

