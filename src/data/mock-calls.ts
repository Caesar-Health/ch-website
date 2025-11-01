/**
 * Mock Call Data
 * Realistic examples for development and testing
 */

import type { Call } from '@/types/call'

// Helper to create dates relative to now
const now = new Date()
const minutesAgo = (mins: number) => new Date(now.getTime() - mins * 60000)
const hoursAgo = (hours: number) => new Date(now.getTime() - hours * 3600000)
const daysAgo = (days: number) => new Date(now.getTime() - days * 86400000)
const daysFromNow = (days: number) => new Date(now.getTime() + days * 86400000)

export const mockCalls: Call[] = [
  // =========================================================================
  // Call 1: Simple appointment rescheduling (AI completed)
  // =========================================================================
  {
    id: 'call-001',
    
    caller: {
      name: 'Jane Smith',
      phone: '+1-555-0123',
      relationship: 'self',
    },
    
    patient: {
      id: 'pt-12345',
      name: 'Jane Smith',
      mrn: 'MRN-12345',
      phone: '+1-555-0123',
    },
    
    direction: 'inbound',
    timestamp: minutesAgo(15),
    duration: 245,
    recordingUrl: 'https://storage.caesar.health/recordings/call-001.mp3',
    
    categories: ['appointment'],
    priority: 'routine',
    
    status: 'answered',
    workflowState: 'completed-by-ai',
    
    transcription: 'Hi, this is Jane Smith. I need to reschedule my appointment next Tuesday to Thursday if possible.',
    summary: 'Patient requesting to reschedule appointment from Oct 15 to Oct 17.',
    
    appointments: [
      {
        id: 'apt-001',
        type: 'reschedule',
        appointmentId: 'apt-789',
        date: daysFromNow(5),
        time: '2:00 PM',
        duration: 30,
        appointmentType: 'Follow-up',
        provider: 'Dr. Anderson',
        status: 'completed',
        originalDate: daysFromNow(3),
        reason: 'Patient schedule conflict',
        confidence: 0.95,
        aiGenerated: true,
      }
    ],
    
    medications: [],
    tasks: [],
    otherActions: [],
    
    ai: {
      confidence: 0.95,
      model: 'gpt-4o',
      processedAt: minutesAgo(13),
      requiresReview: false,
    },
    
    createdAt: minutesAgo(15),
    updatedAt: minutesAgo(13),
  },

  // =========================================================================
  // Call 2: Medication refill with side effects (needs review)
  // =========================================================================
  {
    id: 'call-002',
    
    caller: {
      name: 'Robert Johnson',
      phone: '+1-555-9876',
      relationship: 'self',
    },
    
    patient: {
      id: 'pt-67890',
      name: 'Robert Johnson',
      mrn: 'MRN-67890',
      phone: '+1-555-9876',
    },
    
    direction: 'inbound',
    timestamp: minutesAgo(45),
    duration: 420,
    recordingUrl: 'https://storage.caesar.health/recordings/call-002.mp3',
    
    categories: ['prescription', 'clinical-question'],
    priority: 'urgent',
    
    status: 'answered',
    workflowState: 'ai-needs-review',
    
    transcription: 'This is Robert Johnson. I need a refill on my blood pressure medication, and also wanted to ask about some side effects I\'ve been experiencing - feeling dizzy in the mornings.',
    summary: 'Patient requesting medication refill but reports side effects (dizziness). Requires provider review before approval.',
    
    appointments: [],
    
    medications: [
      {
        id: 'med-001',
        type: 'refill',
        medicationName: 'Lisinopril 10mg',
        dosage: '10mg',
        frequency: 'Once daily',
        quantity: 90,
        refillsRemaining: 2,
        pharmacy: {
          name: 'CVS Pharmacy',
          phone: '+1-555-7777',
          address: '123 Main St',
        },
        status: 'pending',
        sideEffects: ['dizziness', 'lightheadedness in morning'],
        requiresProviderApproval: true,
        confidence: 0.72,
        aiGenerated: true,
      }
    ],
    
    tasks: [
      {
        id: 'task-001',
        title: 'Review blood pressure medication side effects',
        description: 'Patient Robert Johnson reports dizziness/lightheadedness in mornings while taking Lisinopril 10mg. Review before approving refill request.',
        type: 'review-results',
        priority: 'high',
        assignedTo: 'Dr. Anderson',
        assignedToRole: 'provider',
        dueDate: hoursAgo(-8), // 8 hours from now (end of day)
        estimatedDuration: 15,
        status: 'todo',
        confidence: 0.88,
        aiGenerated: true,
      }
    ],
    
    otherActions: [],
    
    ai: {
      confidence: 0.68,
      model: 'gpt-4o',
      processedAt: minutesAgo(42),
      requiresReview: true,
    },
    
    review: {
      status: 'pending',
    },
    
    createdAt: minutesAgo(45),
    updatedAt: minutesAgo(42),
  },

  // =========================================================================
  // Call 3: Multi-action call (appointment + prescription)
  // =========================================================================
  {
    id: 'call-003',
    
    caller: {
      name: 'Maria Garcia',
      phone: '+1-555-3456',
      relationship: 'self',
    },
    
    patient: {
      id: 'pt-33333',
      name: 'Maria Garcia',
      mrn: 'MRN-33333',
      phone: '+1-555-3456',
    },
    
    direction: 'inbound',
    timestamp: hoursAgo(2),
    duration: 380,
    
    categories: ['appointment', 'prescription', 'lab-results'],
    priority: 'routine',
    
    status: 'answered',
    workflowState: 'completed-hybrid',
    
    transcription: 'Hi, it\'s Maria Garcia. I need to schedule a follow-up appointment to discuss my recent lab results, and I also need a refill on my diabetes medication.',
    summary: 'Patient needs follow-up for lab results discussion and medication refill.',
    notes: 'Confirmed appointment and sent refill to pharmacy. Lab results reviewed with Dr. Chen.',
    
    appointments: [
      {
        id: 'apt-002',
        type: 'create',
        appointmentId: 'apt-234',
        date: daysFromNow(7),
        time: '10:30 AM',
        duration: 30,
        appointmentType: 'Follow-up',
        provider: 'Dr. Chen',
        location: 'Main Office',
        status: 'completed',
        reason: 'Discuss lab results',
        confidence: 0.92,
        aiGenerated: true,
      }
    ],
    
    medications: [
      {
        id: 'med-002',
        type: 'refill',
        medicationName: 'Metformin 500mg',
        dosage: '500mg',
        frequency: 'Twice daily',
        quantity: 180,
        refillsRemaining: 3,
        pharmacy: {
          name: 'Walgreens',
          phone: '+1-555-8888',
        },
        status: 'sent-to-pharmacy',
        requiresProviderApproval: false,
        approvedBy: 'Dr. Chen',
        approvedAt: hoursAgo(1.5),
        confidence: 0.94,
        aiGenerated: true,
      }
    ],
    
    tasks: [],
    otherActions: [],
    
    ai: {
      confidence: 0.89,
      model: 'gpt-4o',
      processedAt: hoursAgo(1.9),
      requiresReview: false,
    },
    
    review: {
      status: 'approved',
      reviewedBy: 'Dr. Chen',
      reviewedAt: hoursAgo(1.5),
      comments: 'All actions approved',
    },
    
    createdAt: hoursAgo(2),
    updatedAt: hoursAgo(1.5),
  },

  // =========================================================================
  // Call 4: Missed call (no transcription)
  // =========================================================================
  {
    id: 'call-004',
    
    caller: {
      name: 'Unknown',
      phone: '+1-555-2222',
      relationship: 'other',
    },
    
    patient: undefined,
    
    direction: 'inbound',
    timestamp: hoursAgo(3),
    duration: 0,
    
    categories: ['general'],
    priority: 'routine',
    
    status: 'missed',
    workflowState: 'requires-callback',
    
    appointments: [],
    medications: [],
    tasks: [
      {
        id: 'task-002',
        title: 'Return missed call',
        description: 'Return call to +1-555-2222',
        type: 'callback',
        priority: 'normal',
        assignedToRole: 'front-desk',
        status: 'todo',
        aiGenerated: false,
      }
    ],
    otherActions: [],
    
    createdAt: hoursAgo(3),
    updatedAt: hoursAgo(3),
  },

  // =========================================================================
  // Call 5: Pharmacy calling (no patient)
  // =========================================================================
  {
    id: 'call-005',
    
    caller: {
      name: 'Sarah Martinez',
      phone: '+1-555-3333',
      relationship: 'pharmacy',
      organization: 'Walgreens Pharmacy',
    },
    
    patient: undefined,
    
    direction: 'inbound',
    timestamp: hoursAgo(4),
    duration: 180,
    
    categories: ['prescription', 'insurance'],
    priority: 'routine',
    
    status: 'answered',
    workflowState: 'completed-by-human',
    
    transcription: 'Hi, this is Sarah from Walgreens. We need authorization for a prescription for patient Mary Wilson. Insurance is requiring prior auth.',
    summary: 'Pharmacy requesting prior authorization for patient Mary Wilson\'s prescription.',
    notes: 'Spoke with pharmacy. Sent prior auth form to Dr. Smith for signature.',
    
    appointments: [],
    medications: [],
    
    tasks: [
      {
        id: 'task-003',
        title: 'Complete prior authorization for Mary Wilson',
        description: 'Walgreens needs prior auth for prescription. Form sent to Dr. Smith.',
        type: 'documentation',
        priority: 'normal',
        assignedTo: 'Dr. Smith',
        assignedToRole: 'provider',
        dueDate: daysFromNow(2),
        status: 'todo',
        aiGenerated: false,
      }
    ],
    
    otherActions: [],
    
    createdAt: hoursAgo(4),
    updatedAt: hoursAgo(3.8),
  },

  // =========================================================================
  // Call 6: Emergency/urgent clinical question
  // =========================================================================
  {
    id: 'call-006',
    
    caller: {
      name: 'Emily Davis',
      phone: '+1-555-7890',
      relationship: 'self',
    },
    
    patient: {
      id: 'pt-44444',
      name: 'Emily Davis',
      mrn: 'MRN-44444',
      phone: '+1-555-7890',
    },
    
    direction: 'inbound',
    timestamp: hoursAgo(5),
    duration: 600,
    
    categories: ['emergency', 'clinical-question'],
    priority: 'stat',
    
    status: 'answered',
    workflowState: 'completed-by-human',
    
    transcription: 'This is Emily Davis. I\'m having severe chest pain and shortness of breath. What should I do?',
    summary: 'EMERGENCY: Patient reporting chest pain and shortness of breath.',
    notes: 'Patient instructed to call 911 immediately. Confirmed ambulance dispatched. Will follow up at hospital.',
    
    appointments: [],
    medications: [],
    
    tasks: [
      {
        id: 'task-004',
        title: 'Follow up with Emily Davis - ER visit',
        description: 'Patient was sent to ER for chest pain. Check on status and coordinate care.',
        type: 'follow-up',
        priority: 'urgent',
        assignedTo: 'Dr. Anderson',
        assignedToRole: 'provider',
        dueDate: hoursAgo(-2),
        status: 'in-progress',
        aiGenerated: false,
      }
    ],
    
    otherActions: [],
    
    createdAt: hoursAgo(5),
    updatedAt: hoursAgo(4.9),
  },

  // =========================================================================
  // Call 7: Billing inquiry
  // =========================================================================
  {
    id: 'call-007',
    
    caller: {
      name: 'David Martinez',
      phone: '+1-555-9999',
      relationship: 'self',
    },
    
    patient: {
      id: 'pt-55555',
      name: 'David Martinez',
      mrn: 'MRN-55555',
      phone: '+1-555-9999',
    },
    
    direction: 'inbound',
    timestamp: daysAgo(1),
    duration: 320,
    
    categories: ['billing', 'insurance'],
    priority: 'routine',
    
    status: 'answered',
    workflowState: 'completed-by-ai',
    
    transcription: 'Hello, I received a bill for $250 but my insurance was supposed to cover it. Can you help me understand what happened?',
    summary: 'Patient inquiring about insurance coverage and billing statement.',
    
    appointments: [],
    medications: [],
    
    tasks: [
      {
        id: 'task-005',
        title: 'Review billing for David Martinez',
        description: 'Patient questions insurance coverage on $250 charge. Verify claim status.',
        type: 'other',
        priority: 'normal',
        assignedToRole: 'billing',
        dueDate: daysFromNow(1),
        status: 'todo',
        confidence: 0.91,
        aiGenerated: true,
      }
    ],
    
    otherActions: [],
    
    ai: {
      confidence: 0.91,
      model: 'gpt-4o',
      processedAt: daysAgo(0.99),
      requiresReview: false,
    },
    
    createdAt: daysAgo(1),
    updatedAt: daysAgo(0.99),
  },

  // =========================================================================
  // Call 8: Family member calling
  // =========================================================================
  {
    id: 'call-008',
    
    caller: {
      name: 'Susan Williams',
      phone: '+1-555-6666',
      relationship: 'family',
    },
    
    patient: {
      id: 'pt-66666',
      name: 'George Williams',
      mrn: 'MRN-66666',
      phone: '+1-555-6665',
    },
    
    direction: 'inbound',
    timestamp: daysAgo(2),
    duration: 290,
    
    categories: ['appointment', 'follow-up'],
    priority: 'routine',
    
    status: 'answered',
    workflowState: 'completed-by-ai',
    
    transcription: 'Hi, this is Susan Williams calling for my father George Williams. He had surgery last week and needs to schedule a follow-up appointment.',
    summary: 'Daughter calling to schedule post-surgery follow-up for patient.',
    
    appointments: [
      {
        id: 'apt-003',
        type: 'create',
        appointmentId: 'apt-567',
        date: daysFromNow(5),
        time: '9:00 AM',
        duration: 45,
        appointmentType: 'Post-Op Follow-up',
        provider: 'Dr. Williams',
        status: 'completed',
        reason: 'Post-surgery check',
        confidence: 0.93,
        aiGenerated: true,
      }
    ],
    
    medications: [],
    tasks: [],
    otherActions: [],
    
    ai: {
      confidence: 0.93,
      model: 'gpt-4o',
      processedAt: daysAgo(1.99),
      requiresReview: false,
    },
    
    createdAt: daysAgo(2),
    updatedAt: daysAgo(1.99),
  },

  // =========================================================================
  // Call 9: Lab results inquiry (in progress)
  // =========================================================================
  {
    id: 'call-009',
    
    caller: {
      name: 'Lisa Chen',
      phone: '+1-555-4444',
      relationship: 'self',
    },
    
    patient: {
      id: 'pt-77777',
      name: 'Lisa Chen',
      mrn: 'MRN-77777',
      phone: '+1-555-4444',
    },
    
    direction: 'inbound',
    timestamp: minutesAgo(5),
    duration: 145,
    
    categories: ['lab-results'],
    priority: 'routine',
    
    status: 'answered',
    workflowState: 'ai-processing',
    
    transcription: 'Hi, I had bloodwork done last week and I\'m calling to check if the results are in yet.',
    
    appointments: [],
    medications: [],
    tasks: [],
    otherActions: [],
    
    ai: {
      confidence: 0,
      model: 'gpt-4o',
      processedAt: minutesAgo(4),
      requiresReview: true,
    },
    
    createdAt: minutesAgo(5),
    updatedAt: minutesAgo(4),
  },

  // =========================================================================
  // Call 10: Voicemail (transcribing)
  // =========================================================================
  {
    id: 'call-010',
    
    caller: {
      name: 'Michael Brown',
      phone: '+1-555-1111',
      relationship: 'self',
    },
    
    patient: {
      id: 'pt-88888',
      name: 'Michael Brown',
      mrn: 'MRN-88888',
      phone: '+1-555-1111',
    },
    
    direction: 'inbound',
    timestamp: minutesAgo(2),
    duration: 60,
    recordingUrl: 'https://storage.caesar.health/recordings/call-010.mp3',
    
    categories: ['general'],
    priority: 'routine',
    
    status: 'voicemail',
    workflowState: 'transcribing',
    
    appointments: [],
    medications: [],
    tasks: [],
    otherActions: [],
    
    createdAt: minutesAgo(2),
    updatedAt: minutesAgo(2),
  },
]

