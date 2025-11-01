/**
 * Mock Email Data
 * Realistic examples for development and testing
 */

import type { Email } from '@/types/email'

// Helper to create dates relative to now
const now = new Date()
const minutesAgo = (mins: number) => new Date(now.getTime() - mins * 60000)
const hoursAgo = (hours: number) => new Date(now.getTime() - hours * 3600000)
const daysAgo = (days: number) => new Date(now.getTime() - days * 86400000)
const daysFromNow = (days: number) => new Date(now.getTime() + days * 86400000)

export const mockEmails: Email[] = [
  // =========================================================================
  // Email 1: Simple patient inquiry (no attachments, AI completed)
  // =========================================================================
  {
    id: 'email-001',
    
    sender: {
      name: 'Sarah Williams',
      email: 'sarah.williams@email.com',
    },
    
    patient: {
      id: 'pt-11111',
      name: 'Sarah Williams',
      mrn: 'MRN-11111',
      phone: '+1-555-1234',
      email: 'sarah.williams@email.com',
    },
    
    subject: 'Question about my upcoming appointment',
    body: 'Hi, I have an appointment scheduled for next Tuesday but I need to reschedule. Are there any available slots on Thursday or Friday? Thanks!',
    preview: 'Hi, I have an appointment scheduled for next Tuesday but I need to reschedule...',
    
    direction: 'inbound',
    timestamp: hoursAgo(2),
    priority: 'routine',
    
    status: 'read',
    workflowState: 'completed-by-ai',
    
    categories: ['appointment'],
    
    documents: [],
    
    appointments: [
      {
        id: 'apt-email-001',
        type: 'reschedule',
        appointmentId: 'apt-999',
        date: daysFromNow(5),
        time: '10:00 AM',
        duration: 30,
        appointmentType: 'Follow-up',
        provider: 'Dr. Martinez',
        status: 'completed',
        originalDate: daysFromNow(3),
        reason: 'Patient schedule conflict',
        confidence: 0.94,
        aiGenerated: true,
      }
    ],
    
    medications: [],
    tasks: [],
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    summary: 'Patient requesting to reschedule appointment from Tuesday to Thursday or Friday.',
    
    ai: {
      confidence: 0.94,
      model: 'gpt-4o',
      processedAt: hoursAgo(1.9),
      requiresReview: false,
    },
    
    createdAt: hoursAgo(2),
    updatedAt: hoursAgo(1.9),
  },

  // =========================================================================
  // Email 2: Lab results with PDF attachment (needs review)
  // =========================================================================
  {
    id: 'email-002',
    
    sender: {
      name: 'Quest Diagnostics',
      email: 'results@questdiagnostics.com',
      organization: 'Quest Diagnostics',
    },
    
    patient: {
      id: 'pt-22222',
      name: 'Michael Chen',
      mrn: 'MRN-22222',
      phone: '+1-555-5678',
    },
    
    subject: 'Lab Results - Michael Chen',
    body: 'Please find attached lab results for patient Michael Chen (DOB: 03/15/1978). Results completed on 10/10/2025.',
    preview: 'Please find attached lab results for patient Michael Chen...',
    
    direction: 'inbound',
    timestamp: hoursAgo(4),
    priority: 'urgent',
    
    status: 'read',
    workflowState: 'ai-needs-review',
    
    categories: ['lab-results'],
    
    documents: [
      {
        id: 'doc-email-002-1',
        name: 'Lab_Results_Chen_20251010.pdf',
        type: 'pdf',
        mimeType: 'application/pdf',
        url: 'https://storage.example.com/labs/chen-20251010.pdf',
        thumbnailUrl: 'https://storage.example.com/thumbs/chen-20251010.jpg',
        size: 245678,
        pages: 3,
        uploadedAt: hoursAgo(4),
        category: 'labs',
        status: 'extracted',
        ocrConfidence: 0.96,
        extractedData: {
          patient: {
            name: 'Michael Chen',
            dateOfBirth: '03/15/1978',
            mrn: 'MRN-22222',
          },
          documentDate: new Date('2025-10-10'),
          facility: 'Quest Diagnostics - Downtown Lab',
          labs: [
            {
              id: 'lab-001',
              testName: 'Complete Blood Count (CBC)',
              testCode: '58410-2',
              value: 'See detailed results',
              confidence: 0.98,
            },
            {
              id: 'lab-002',
              testName: 'White Blood Cell Count',
              testCode: '6690-2',
              value: '11.2',
              unit: 'K/uL',
              referenceRange: '4.5-11.0',
              abnormal: true,
              confidence: 0.97,
            },
            {
              id: 'lab-003',
              testName: 'Hemoglobin',
              testCode: '718-7',
              value: '14.2',
              unit: 'g/dL',
              referenceRange: '13.5-17.5',
              abnormal: false,
              confidence: 0.96,
            },
            {
              id: 'lab-004',
              testName: 'Glucose',
              testCode: '2345-7',
              value: '142',
              unit: 'mg/dL',
              referenceRange: '70-100',
              abnormal: true,
              critical: false,
              confidence: 0.95,
            },
          ],
        },
        ai: {
          model: 'gpt-4o-vision',
          processedAt: hoursAgo(3.9),
          extractionConfidence: 0.91,
        },
      }
    ],
    
    appointments: [],
    medications: [],
    
    tasks: [
      {
        id: 'task-email-001',
        title: 'Review abnormal lab results for Michael Chen',
        description: 'WBC elevated at 11.2 K/uL and glucose at 142 mg/dL. Patient may need follow-up.',
        type: 'review-results',
        priority: 'high',
        assignedTo: 'Dr. Anderson',
        assignedToRole: 'provider',
        dueDate: daysFromNow(1),
        status: 'todo',
        confidence: 0.89,
        aiGenerated: true,
      }
    ],
    
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    summary: 'Lab results received with 2 abnormal values (WBC, glucose). Requires provider review.',
    
    ai: {
      confidence: 0.85,
      model: 'gpt-4o',
      processedAt: hoursAgo(3.9),
      requiresReview: true,
    },
    
    review: {
      status: 'pending',
    },
    
    createdAt: hoursAgo(4),
    updatedAt: hoursAgo(3.9),
  },

  // =========================================================================
  // Email 3: Referral with multiple documents
  // =========================================================================
  {
    id: 'email-003',
    
    sender: {
      name: 'Dr. Jennifer Lee',
      email: 'jlee@cardiologyspecialists.com',
      organization: 'Cardiology Specialists',
    },
    
    patient: {
      id: 'pt-33333',
      name: 'Robert Martinez',
      mrn: 'MRN-33333',
      phone: '+1-555-9876',
    },
    
    subject: 'Referral - Robert Martinez - Cardiology Consult',
    body: 'Please see attached referral for Robert Martinez for cardiology consultation. Patient has history of hypertension and recent chest pain. Attached are recent ECG and patient history. Urgent evaluation recommended.',
    preview: 'Please see attached referral for Robert Martinez for cardiology consultation...',
    
    direction: 'inbound',
    timestamp: daysAgo(1),
    priority: 'urgent',
    
    status: 'read',
    workflowState: 'completed-hybrid',
    
    categories: ['referral', 'authorization'],
    
    documents: [
      {
        id: 'doc-email-003-1',
        name: 'Referral_Martinez_Cardiology.pdf',
        type: 'pdf',
        mimeType: 'application/pdf',
        url: 'https://storage.example.com/referrals/martinez-card.pdf',
        size: 156789,
        pages: 2,
        uploadedAt: daysAgo(1),
        category: 'referral',
        status: 'extracted',
        extractedData: {
          patient: {
            name: 'Robert Martinez',
            mrn: 'MRN-33333',
            dateOfBirth: '05/22/1965',
          },
          documentDate: daysAgo(1),
          provider: 'Dr. Jennifer Lee',
          facility: 'Cardiology Specialists',
          referrals: [
            {
              id: 'ref-001',
              specialty: 'Cardiology',
              provider: 'Dr. Jennifer Lee',
              organization: 'Cardiology Specialists',
              reason: 'Chest pain evaluation, hypertension management',
              urgency: 'urgent',
              confidence: 0.96,
            }
          ],
        },
        ai: {
          model: 'gpt-4o-vision',
          processedAt: daysAgo(0.99),
          extractionConfidence: 0.96,
        },
      },
      {
        id: 'doc-email-003-2',
        name: 'ECG_Martinez_20251011.pdf',
        type: 'pdf',
        mimeType: 'application/pdf',
        url: 'https://storage.example.com/ecg/martinez-20251011.pdf',
        size: 89456,
        pages: 1,
        uploadedAt: daysAgo(1),
        category: 'imaging',
        status: 'extracted',
        extractedData: {
          patient: {
            name: 'Robert Martinez',
          },
          documentDate: new Date('2025-10-11'),
          imaging: [
            {
              id: 'img-001',
              studyType: 'ECG',
              bodyPart: 'Heart',
              findings: 'Normal sinus rhythm. No acute ST changes.',
              date: new Date('2025-10-11'),
              confidence: 0.92,
            }
          ],
        },
        ai: {
          model: 'gpt-4o-vision',
          processedAt: daysAgo(0.99),
          extractionConfidence: 0.92,
        },
      }
    ],
    
    appointments: [
      {
        id: 'apt-email-002',
        type: 'create',
        appointmentId: 'apt-card-001',
        date: daysFromNow(3),
        time: '2:30 PM',
        duration: 60,
        appointmentType: 'Cardiology Consult',
        provider: 'Dr. Jennifer Lee',
        location: 'Cardiology Specialists',
        status: 'completed',
        reason: 'Urgent cardiology evaluation',
        confidence: 0.96,
        aiGenerated: true,
      }
    ],
    
    medications: [],
    
    tasks: [
      {
        id: 'task-email-002',
        title: 'Complete insurance authorization for cardiology consult',
        description: 'Submit prior auth for urgent cardiology referral for Robert Martinez',
        type: 'documentation',
        priority: 'high',
        assignedToRole: 'billing',
        dueDate: daysFromNow(1),
        status: 'completed',
        completedBy: 'Sarah Johnson',
        completedAt: daysAgo(0.5),
        aiGenerated: false,
      }
    ],
    
    referrals: [
      {
        id: 'ref-email-001',
        specialty: 'Cardiology',
        provider: 'Dr. Jennifer Lee',
        organization: 'Cardiology Specialists',
        reason: 'Chest pain evaluation, hypertension management',
        urgency: 'urgent',
        status: 'scheduled',
        phoneNumber: '+1-555-CARD',
        confidence: 0.96,
        aiGenerated: true,
      }
    ],
    
    authorizations: [
      {
        id: 'auth-email-001',
        type: 'referral-auth',
        service: 'Cardiology consultation',
        status: 'approved',
        insurancePayer: 'Blue Cross',
        authNumber: 'AUTH-2025-12345',
        approvalDate: daysAgo(0.5),
        expirationDate: daysFromNow(90),
        confidence: 0.88,
        aiGenerated: false,
      }
    ],
    
    otherActions: [],
    
    summary: 'Urgent cardiology referral for chest pain evaluation. Appointment scheduled, authorization approved.',
    notes: 'Patient contacted and confirmed appointment. Auth approved by insurance.',
    
    ai: {
      confidence: 0.92,
      model: 'gpt-4o',
      processedAt: daysAgo(0.99),
      requiresReview: false,
    },
    
    review: {
      status: 'approved',
      reviewedBy: 'Dr. Anderson',
      reviewedAt: daysAgo(0.8),
    },
    
    createdAt: daysAgo(1),
    updatedAt: daysAgo(0.5),
  },

  // =========================================================================
  // Email 4: Appointment confirmation (outbound, automated)
  // =========================================================================
  {
    id: 'email-004',
    
    sender: {
      name: 'Caesar Health',
      email: 'noreply@caesarhealth.com',
      organization: 'Caesar Health',
    },
    
    recipient: {
      name: 'Lisa Park',
      email: 'lisa.park@email.com',
    },
    
    patient: {
      id: 'pt-44444',
      name: 'Lisa Park',
      mrn: 'MRN-44444',
      phone: '+1-555-7777',
      email: 'lisa.park@email.com',
    },
    
    subject: 'Appointment Reminder - October 15, 2025',
    body: 'This is a reminder of your upcoming appointment:\n\nDate: Tuesday, October 15, 2025\nTime: 9:00 AM\nProvider: Dr. Chen\nLocation: Main Office\n\nPlease reply CONFIRM to confirm or call us to reschedule.',
    preview: 'This is a reminder of your upcoming appointment: Date: Tuesday, October 15, 2025...',
    
    direction: 'outbound',
    timestamp: daysAgo(2),
    priority: 'routine',
    
    status: 'read',
    workflowState: 'replied',
    
    categories: ['appointment'],
    
    documents: [],
    
    appointments: [],
    medications: [],
    tasks: [],
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    createdAt: daysAgo(2),
    updatedAt: daysAgo(1.5),
  },

  // =========================================================================
  // Email 5: Billing inquiry
  // =========================================================================
  {
    id: 'email-005',
    
    sender: {
      name: 'David Thompson',
      email: 'david.t@email.com',
    },
    
    patient: {
      id: 'pt-55555',
      name: 'David Thompson',
      mrn: 'MRN-55555',
      phone: '+1-555-3333',
      email: 'david.t@email.com',
    },
    
    subject: 'Question about recent bill',
    body: 'I received a bill for $350 from my visit last month, but I thought my insurance covered it. Can someone explain the charges? My visit was on September 15th.',
    preview: 'I received a bill for $350 from my visit last month...',
    
    direction: 'inbound',
    timestamp: hoursAgo(6),
    priority: 'routine',
    
    status: 'read',
    workflowState: 'under-review',
    
    categories: ['billing', 'insurance'],
    
    documents: [],
    
    appointments: [],
    medications: [],
    
    tasks: [
      {
        id: 'task-email-003',
        title: 'Review billing inquiry - David Thompson',
        description: 'Patient questions $350 charge from Sept 15 visit. Verify insurance claim status.',
        type: 'other',
        priority: 'normal',
        assignedToRole: 'billing',
        dueDate: daysFromNow(1),
        status: 'in-progress',
        confidence: 0.90,
        aiGenerated: true,
      }
    ],
    
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    summary: 'Patient inquiring about $350 bill from September 15 visit. Believes insurance should have covered it.',
    
    ai: {
      confidence: 0.90,
      model: 'gpt-4o',
      processedAt: hoursAgo(5.9),
      requiresReview: false,
    },
    
    createdAt: hoursAgo(6),
    updatedAt: hoursAgo(5.5),
  },

  // =========================================================================
  // Email 6: Prescription request with side effects
  // =========================================================================
  {
    id: 'email-006',
    
    sender: {
      name: 'Emma Wilson',
      email: 'emma.w@email.com',
    },
    
    patient: {
      id: 'pt-66666',
      name: 'Emma Wilson',
      mrn: 'MRN-66666',
      phone: '+1-555-4444',
      email: 'emma.w@email.com',
    },
    
    subject: 'Medication refill needed',
    body: 'Hi, I need a refill on my metformin prescription. I\'m also experiencing some stomach discomfort - is this normal? Should I be concerned?',
    preview: 'Hi, I need a refill on my metformin prescription. I\'m also experiencing some stomach discomfort...',
    
    direction: 'inbound',
    timestamp: hoursAgo(8),
    priority: 'urgent',
    
    status: 'read',
    workflowState: 'ai-needs-review',
    
    categories: ['prescription', 'clinical-question'],
    
    documents: [],
    
    appointments: [],
    
    medications: [
      {
        id: 'med-email-001',
        type: 'refill',
        medicationName: 'Metformin 500mg',
        dosage: '500mg',
        frequency: 'Twice daily',
        quantity: 180,
        pharmacy: {
          name: 'CVS Pharmacy',
        },
        status: 'pending',
        sideEffects: ['stomach discomfort'],
        requiresProviderApproval: true,
        confidence: 0.76,
        aiGenerated: true,
      }
    ],
    
    tasks: [
      {
        id: 'task-email-004',
        title: 'Review metformin side effects for Emma Wilson',
        description: 'Patient reports stomach discomfort while taking metformin. Review before approving refill.',
        type: 'review-results',
        priority: 'high',
        assignedTo: 'Dr. Chen',
        assignedToRole: 'provider',
        dueDate: daysFromNow(1),
        status: 'todo',
        confidence: 0.92,
        aiGenerated: true,
      }
    ],
    
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    summary: 'Patient requesting metformin refill but reports stomach discomfort. Requires provider review.',
    
    ai: {
      confidence: 0.72,
      model: 'gpt-4o',
      processedAt: hoursAgo(7.9),
      requiresReview: true,
    },
    
    review: {
      status: 'pending',
    },
    
    createdAt: hoursAgo(8),
    updatedAt: hoursAgo(7.9),
  },

  // =========================================================================
  // Email 7: Insurance authorization request
  // =========================================================================
  {
    id: 'email-007',
    
    sender: {
      name: 'Blue Cross Blue Shield',
      email: 'authorizations@bcbs.com',
      organization: 'Blue Cross Blue Shield',
    },
    
    patient: {
      id: 'pt-77777',
      name: 'Patricia Brown',
      mrn: 'MRN-77777',
      phone: '+1-555-8888',
    },
    
    subject: 'Prior Authorization Approved - Patricia Brown',
    body: 'Prior authorization for MRI imaging has been approved for patient Patricia Brown.\n\nAuthorization Number: AUTH-2025-67890\nProcedure: MRI Lumbar Spine\nApproved Date: 10/10/2025\nExpiration: 01/10/2026',
    preview: 'Prior authorization for MRI imaging has been approved for patient Patricia Brown...',
    
    direction: 'inbound',
    timestamp: daysAgo(2),
    priority: 'routine',
    
    status: 'read',
    workflowState: 'completed-by-ai',
    
    categories: ['authorization', 'insurance'],
    
    documents: [],
    
    appointments: [],
    medications: [],
    
    tasks: [
      {
        id: 'task-email-005',
        title: 'Schedule MRI for Patricia Brown',
        description: 'Prior auth approved. Schedule MRI lumbar spine.',
        type: 'other',
        priority: 'normal',
        assignedToRole: 'front-desk',
        dueDate: daysFromNow(3),
        status: 'todo',
        confidence: 0.94,
        aiGenerated: true,
      }
    ],
    
    referrals: [],
    
    authorizations: [
      {
        id: 'auth-email-002',
        type: 'procedure-auth',
        procedure: 'MRI Lumbar Spine',
        status: 'approved',
        authNumber: 'AUTH-2025-67890',
        insurancePayer: 'Blue Cross Blue Shield',
        approvalDate: new Date('2025-10-10'),
        expirationDate: new Date('2026-01-10'),
        confidence: 0.98,
        aiGenerated: true,
      }
    ],
    
    otherActions: [],
    
    summary: 'Prior authorization approved for MRI lumbar spine. Valid until January 10, 2026.',
    
    ai: {
      confidence: 0.96,
      model: 'gpt-4o',
      processedAt: daysAgo(1.99),
      requiresReview: false,
    },
    
    createdAt: daysAgo(2),
    updatedAt: daysAgo(1.99),
  },

  // =========================================================================
  // Email 8: Multi-category (appointment + prescription)
  // =========================================================================
  {
    id: 'email-008',
    
    sender: {
      name: 'James Anderson',
      email: 'james.a@email.com',
    },
    
    patient: {
      id: 'pt-88888',
      name: 'James Anderson',
      mrn: 'MRN-88888',
      phone: '+1-555-2222',
      email: 'james.a@email.com',
    },
    
    subject: 'Appointment and prescription refill',
    body: 'Hi, I\'d like to schedule my annual physical for next month, and I also need refills on my blood pressure and cholesterol medications. Can you help with both? Thanks!',
    preview: 'Hi, I\'d like to schedule my annual physical for next month, and I also need refills...',
    
    direction: 'inbound',
    timestamp: hoursAgo(10),
    priority: 'routine',
    
    status: 'read',
    workflowState: 'completed-by-ai',
    
    categories: ['appointment', 'prescription'],
    
    documents: [],
    
    appointments: [
      {
        id: 'apt-email-003',
        type: 'create',
        appointmentId: 'apt-annual-001',
        date: daysFromNow(25),
        time: '9:00 AM',
        duration: 45,
        appointmentType: 'Annual Physical',
        provider: 'Dr. Martinez',
        status: 'completed',
        reason: 'Annual physical exam',
        confidence: 0.95,
        aiGenerated: true,
      }
    ],
    
    medications: [
      {
        id: 'med-email-002',
        type: 'refill',
        medicationName: 'Lisinopril 20mg',
        dosage: '20mg',
        frequency: 'Once daily',
        quantity: 90,
        status: 'sent-to-pharmacy',
        approvedBy: 'Dr. Martinez',
        approvedAt: hoursAgo(9),
        requiresProviderApproval: false,
        confidence: 0.94,
        aiGenerated: true,
      },
      {
        id: 'med-email-003',
        type: 'refill',
        medicationName: 'Atorvastatin 40mg',
        dosage: '40mg',
        frequency: 'Once daily at bedtime',
        quantity: 90,
        status: 'sent-to-pharmacy',
        approvedBy: 'Dr. Martinez',
        approvedAt: hoursAgo(9),
        requiresProviderApproval: false,
        confidence: 0.93,
        aiGenerated: true,
      }
    ],
    
    tasks: [],
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    summary: 'Patient requesting annual physical appointment and refills for 2 medications (blood pressure, cholesterol).',
    
    ai: {
      confidence: 0.94,
      model: 'gpt-4o',
      processedAt: hoursAgo(9.9),
      requiresReview: false,
    },
    
    createdAt: hoursAgo(10),
    updatedAt: hoursAgo(9),
  },

  // =========================================================================
  // Email 9: Unread urgent email
  // =========================================================================
  {
    id: 'email-009',
    
    sender: {
      name: 'Emergency Department',
      email: 'ed@memorial-hospital.com',
      organization: 'Memorial Hospital',
    },
    
    patient: {
      id: 'pt-99999',
      name: 'Margaret Davis',
      mrn: 'MRN-99999',
      phone: '+1-555-6666',
    },
    
    subject: 'URGENT: ER Visit - Margaret Davis',
    body: 'Patient Margaret Davis was seen in our ED this morning for chest pain. Cardiac workup negative. Discharged home with follow-up recommended within 48 hours. Please contact patient to schedule.',
    preview: 'Patient Margaret Davis was seen in our ED this morning for chest pain...',
    
    direction: 'inbound',
    timestamp: hoursAgo(3),
    priority: 'stat',
    
    status: 'unread',
    workflowState: 'queued-for-review',
    
    categories: ['clinical-question', 'follow-up'],
    
    documents: [],
    
    appointments: [],
    medications: [],
    
    tasks: [
      {
        id: 'task-email-006',
        title: 'Schedule urgent follow-up for Margaret Davis',
        description: 'Patient seen in ED for chest pain. Needs follow-up within 48 hours per ED recommendation.',
        type: 'follow-up',
        priority: 'urgent',
        assignedTo: 'Dr. Williams',
        assignedToRole: 'provider',
        dueDate: daysFromNow(2),
        status: 'todo',
        confidence: 0.96,
        aiGenerated: true,
      }
    ],
    
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    summary: 'URGENT: Patient seen in ED for chest pain. Cardiac workup negative. Needs follow-up within 48 hours.',
    
    ai: {
      confidence: 0.96,
      model: 'gpt-4o',
      processedAt: hoursAgo(2.9),
      requiresReview: false,
    },
    
    createdAt: hoursAgo(3),
    updatedAt: hoursAgo(2.9),
  },

  // =========================================================================
  // Email 10: Simple general inquiry
  // =========================================================================
  {
    id: 'email-010',
    
    sender: {
      name: 'Kevin Rodriguez',
      email: 'kevin.r@email.com',
    },
    
    patient: {
      id: 'pt-10000',
      name: 'Kevin Rodriguez',
      mrn: 'MRN-10000',
      phone: '+1-555-9999',
      email: 'kevin.r@email.com',
    },
    
    subject: 'Office hours question',
    body: 'What are your office hours on Fridays? I\'d like to come in for a walk-in visit if possible.',
    preview: 'What are your office hours on Fridays? I\'d like to come in for a walk-in visit...',
    
    direction: 'inbound',
    timestamp: minutesAgo(30),
    priority: 'routine',
    
    status: 'unread',
    workflowState: 'new',
    
    categories: ['general'],
    
    documents: [],
    
    appointments: [],
    medications: [],
    tasks: [],
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    createdAt: minutesAgo(30),
    updatedAt: minutesAgo(30),
  },
]

