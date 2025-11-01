/**
 * Mock SMS Data
 * Realistic examples for development and testing
 */

import type { SMSConversation } from '@/types/sms'

// Helper to create dates relative to now
const now = new Date()
const minutesAgo = (mins: number) => new Date(now.getTime() - mins * 60000)
const hoursAgo = (hours: number) => new Date(now.getTime() - hours * 3600000)
const daysAgo = (days: number) => new Date(now.getTime() - days * 86400000)
const daysFromNow = (days: number) => new Date(now.getTime() + days * 86400000)

export const mockSMSConversations: SMSConversation[] = [
  // =========================================================================
  // SMS 1: Appointment confirmation (simple)
  // =========================================================================
  {
    id: 'sms-conv-001',
    
    patient: {
      id: 'pt-sms-001',
      name: 'Jessica Moore',
      mrn: 'MRN-SMS-001',
      phone: '+1-555-1111',
    },
    
    messages: [
      {
        id: 'sms-msg-001-1',
        conversationId: 'sms-conv-001',
        sender: {
          name: 'Caesar Health',
          phone: '+1-555-OFFICE',
        },
        recipient: {
          name: 'Jessica Moore',
          phone: '+1-555-1111',
        },
        direction: 'outbound',
        message: 'Reminder: You have an appointment tomorrow at 10:00 AM with Dr. Martinez. Reply CONFIRM to confirm or RESCHEDULE to change.',
        timestamp: daysAgo(1),
        status: 'delivered',
        media: [],
        isRead: true,
      },
      {
        id: 'sms-msg-001-2',
        conversationId: 'sms-conv-001',
        sender: {
          name: 'Jessica Moore',
          phone: '+1-555-1111',
        },
        recipient: {
          name: 'Caesar Health',
          phone: '+1-555-OFFICE',
        },
        direction: 'inbound',
        message: 'CONFIRM',
        timestamp: hoursAgo(20),
        status: 'read',
        media: [],
        isRead: true,
      }
    ],
    
    lastMessage: {
      id: 'sms-msg-001-2',
      conversationId: 'sms-conv-001',
      sender: {
        name: 'Jessica Moore',
        phone: '+1-555-1111',
      },
      recipient: {
        name: 'Caesar Health',
        phone: '+1-555-OFFICE',
      },
      direction: 'inbound',
      message: 'CONFIRM',
      timestamp: hoursAgo(20),
      status: 'read',
      media: [],
      isRead: true,
    },
    
    unreadCount: 0,
    priority: 'routine',
    workflowState: 'completed-by-ai',
    
    categories: ['appointment-confirmation'],
    
    appointments: [
      {
        id: 'apt-sms-001',
        type: 'confirm',
        appointmentId: 'apt-tomorrow-001',
        date: daysFromNow(1),
        time: '10:00 AM',
        duration: 30,
        appointmentType: 'Follow-up',
        provider: 'Dr. Martinez',
        status: 'completed',
        confidence: 0.98,
        aiGenerated: true,
      }
    ],
    
    tasks: [],
    otherActions: [],
    
    ai: {
      confidence: 0.98,
      model: 'gpt-4o',
      processedAt: hoursAgo(19.9),
      requiresReview: false,
    },
    
    createdAt: daysAgo(1),
    updatedAt: hoursAgo(19.9),
  },

  // =========================================================================
  // SMS 2: Insurance card image (MMS)
  // =========================================================================
  {
    id: 'sms-conv-002',
    
    patient: {
      id: 'pt-sms-002',
      name: 'Carlos Hernandez',
      mrn: 'MRN-SMS-002',
      phone: '+1-555-2222',
    },
    
    messages: [
      {
        id: 'sms-msg-002-1',
        conversationId: 'sms-conv-002',
        sender: {
          name: 'Caesar Health',
          phone: '+1-555-OFFICE',
        },
        recipient: {
          name: 'Carlos Hernandez',
          phone: '+1-555-2222',
        },
        direction: 'outbound',
        message: 'Hi Carlos! We need a copy of your updated insurance card. Can you text us a photo?',
        timestamp: hoursAgo(6),
        status: 'delivered',
        media: [],
        isRead: true,
      },
      {
        id: 'sms-msg-002-2',
        conversationId: 'sms-conv-002',
        sender: {
          name: 'Carlos Hernandez',
          phone: '+1-555-2222',
        },
        recipient: {
          name: 'Caesar Health',
          phone: '+1-555-OFFICE',
        },
        direction: 'inbound',
        message: 'Sure, here it is',
        timestamp: hoursAgo(5),
        status: 'read',
        media: [
          {
            id: 'img-sms-002-1',
            name: 'insurance_card_front.jpg',
            type: 'image',
            mimeType: 'image/jpeg',
            url: 'https://storage.example.com/sms/insurance-card-front.jpg',
            size: 456789,
            uploadedAt: hoursAgo(5),
            category: 'identification',
            status: 'extracted',
            extractedData: {
              patient: {
                name: 'Carlos Hernandez',
              },
              pii: {
                insurance: 'UHC-123-456-789',
              },
              customFields: [
                { field: 'Insurance Provider', value: 'UnitedHealthcare', confidence: 0.96 },
                { field: 'Member ID', value: 'UHC-123-456-789', confidence: 0.97 },
                { field: 'Group Number', value: 'GRP-12345', confidence: 0.94 },
                { field: 'Effective Date', value: '01/01/2025', confidence: 0.92 },
              ],
            },
            ai: {
              model: 'gpt-4o-vision',
              processedAt: hoursAgo(4.9),
              extractionConfidence: 0.94,
            },
          }
        ],
        isRead: true,
      }
    ],
    
    lastMessage: {
      id: 'sms-msg-002-2',
      conversationId: 'sms-conv-002',
      sender: {
        name: 'Carlos Hernandez',
        phone: '+1-555-2222',
      },
      recipient: {
        name: 'Caesar Health',
        phone: '+1-555-OFFICE',
      },
      direction: 'inbound',
      message: 'Sure, here it is',
      timestamp: hoursAgo(5),
      status: 'read',
      media: [
        {
          id: 'img-sms-002-1',
          name: 'insurance_card_front.jpg',
          type: 'image',
          mimeType: 'image/jpeg',
          url: 'https://storage.example.com/sms/insurance-card-front.jpg',
          size: 456789,
          uploadedAt: hoursAgo(5),
          category: 'identification',
          status: 'extracted',
          extractedData: {
            patient: {
              name: 'Carlos Hernandez',
            },
            pii: {
              insurance: 'UHC-123-456-789',
            },
            customFields: [
              { field: 'Insurance Provider', value: 'UnitedHealthcare', confidence: 0.96 },
              { field: 'Member ID', value: 'UHC-123-456-789', confidence: 0.97 },
              { field: 'Group Number', value: 'GRP-12345', confidence: 0.94 },
              { field: 'Effective Date', value: '01/01/2025', confidence: 0.92 },
            ],
          },
          ai: {
            model: 'gpt-4o-vision',
            processedAt: hoursAgo(4.9),
            extractionConfidence: 0.94,
          },
        }
      ],
      isRead: true,
    },
    
    unreadCount: 0,
    priority: 'routine',
    workflowState: 'completed-by-ai',
    
    categories: ['general'],
    
    appointments: [],
    tasks: [],
    otherActions: [],
    
    ai: {
      confidence: 0.94,
      model: 'gpt-4o',
      processedAt: hoursAgo(4.9),
      requiresReview: false,
    },
    
    createdAt: hoursAgo(6),
    updatedAt: hoursAgo(4.9),
  },

  // =========================================================================
  // SMS 3: Prescription pickup reminder
  // =========================================================================
  {
    id: 'sms-conv-003',
    
    patient: {
      id: 'pt-sms-003',
      name: 'Ryan Kim',
      mrn: 'MRN-SMS-003',
      phone: '+1-555-3333',
    },
    
    messages: [
      {
        id: 'sms-msg-003-1',
        conversationId: 'sms-conv-003',
        sender: {
          name: 'CVS Pharmacy',
          phone: '+1-555-PHARMACY',
        },
        recipient: {
          name: 'Ryan Kim',
          phone: '+1-555-3333',
        },
        direction: 'inbound',
        message: 'Your prescription for Lisinopril is ready for pickup at CVS on Main St. Store hours: 8am-10pm.',
        timestamp: hoursAgo(12),
        status: 'read',
        media: [],
        isRead: true,
      }
    ],
    
    lastMessage: {
      id: 'sms-msg-003-1',
      conversationId: 'sms-conv-003',
      sender: {
        name: 'CVS Pharmacy',
        phone: '+1-555-PHARMACY',
      },
      recipient: {
        name: 'Ryan Kim',
        phone: '+1-555-3333',
      },
      direction: 'inbound',
      message: 'Your prescription for Lisinopril is ready for pickup at CVS on Main St. Store hours: 8am-10pm.',
      timestamp: hoursAgo(12),
      status: 'read',
      media: [],
      isRead: true,
    },
    
    unreadCount: 0,
    priority: 'routine',
    workflowState: 'completed-by-ai',
    
    categories: ['prescription-reminder'],
    
    appointments: [],
    tasks: [],
    otherActions: [],
    
    createdAt: hoursAgo(12),
    updatedAt: hoursAgo(12),
  },

  // =========================================================================
  // SMS 4: Appointment reschedule request (new, unread)
  // =========================================================================
  {
    id: 'sms-conv-004',
    
    patient: {
      id: 'pt-sms-004',
      name: 'Sophia Chen',
      mrn: 'MRN-SMS-004',
      phone: '+1-555-4444',
    },
    
    messages: [
      {
        id: 'sms-msg-004-1',
        conversationId: 'sms-conv-004',
        sender: {
          name: 'Sophia Chen',
          phone: '+1-555-4444',
        },
        recipient: {
          name: 'Caesar Health',
          phone: '+1-555-OFFICE',
        },
        direction: 'inbound',
        message: 'Hi, I need to move my appointment on Friday to next week. Can someone help?',
        timestamp: minutesAgo(15),
        status: 'delivered',
        media: [],
        isRead: false,
      }
    ],
    
    lastMessage: {
      id: 'sms-msg-004-1',
      conversationId: 'sms-conv-004',
      sender: {
        name: 'Sophia Chen',
        phone: '+1-555-4444',
      },
      recipient: {
        name: 'Caesar Health',
        phone: '+1-555-OFFICE',
      },
      direction: 'inbound',
      message: 'Hi, I need to move my appointment on Friday to next week. Can someone help?',
      timestamp: minutesAgo(15),
      status: 'delivered',
      media: [],
      isRead: false,
    },
    
    unreadCount: 1,
    priority: 'routine',
    workflowState: 'ai-processing',
    
    categories: ['appointment-reminder'],
    
    appointments: [],
    tasks: [],
    otherActions: [],
    
    ai: {
      confidence: 0,
      model: 'gpt-4o',
      processedAt: minutesAgo(14),
      requiresReview: true,
    },
    
    createdAt: minutesAgo(15),
    updatedAt: minutesAgo(14),
  },

  // =========================================================================
  // SMS 5: Lab results notification with image
  // =========================================================================
  {
    id: 'sms-conv-005',
    
    patient: {
      id: 'pt-sms-005',
      name: 'Michelle Lee',
      mrn: 'MRN-SMS-005',
      phone: '+1-555-5555',
    },
    
    messages: [
      {
        id: 'sms-msg-005-1',
        conversationId: 'sms-conv-005',
        sender: {
          name: 'Caesar Health',
          phone: '+1-555-OFFICE',
        },
        recipient: {
          name: 'Michelle Lee',
          phone: '+1-555-5555',
        },
        direction: 'outbound',
        message: 'Your lab results are ready. Please call the office to discuss with your provider.',
        timestamp: hoursAgo(4),
        status: 'delivered',
        media: [],
        isRead: true,
      },
      {
        id: 'sms-msg-005-2',
        conversationId: 'sms-conv-005',
        sender: {
          name: 'Michelle Lee',
          phone: '+1-555-5555',
        },
        recipient: {
          name: 'Caesar Health',
          phone: '+1-555-OFFICE',
        },
        direction: 'inbound',
        message: 'Can I get a copy? Here\'s my updated insurance card',
        timestamp: hoursAgo(3),
        status: 'read',
        media: [
          {
            id: 'img-sms-005-1',
            name: 'insurance_card.jpg',
            type: 'image',
            mimeType: 'image/jpeg',
            url: 'https://storage.example.com/sms/insurance-card-lee.jpg',
            size: 345678,
            uploadedAt: hoursAgo(3),
            category: 'identification',
            status: 'extracted',
            extractedData: {
              patient: {
                name: 'Michelle Lee',
              },
              pii: {
                insurance: 'BCBS-987-654-321',
              },
              customFields: [
                { field: 'Insurance Provider', value: 'Blue Cross Blue Shield', confidence: 0.95 },
                { field: 'Member ID', value: 'BCBS-987-654-321', confidence: 0.96 },
              ],
            },
            ai: {
              model: 'gpt-4o-vision',
              processedAt: hoursAgo(2.9),
              extractionConfidence: 0.95,
            },
          }
        ],
        isRead: true,
      }
    ],
    
    lastMessage: {
      id: 'sms-msg-005-2',
      conversationId: 'sms-conv-005',
      sender: {
        name: 'Michelle Lee',
        phone: '+1-555-5555',
      },
      recipient: {
        name: 'Caesar Health',
        phone: '+1-555-OFFICE',
      },
      direction: 'inbound',
      message: 'Can I get a copy? Here\'s my updated insurance card',
      timestamp: hoursAgo(3),
      status: 'read',
      media: [
        {
          id: 'img-sms-005-1',
          name: 'insurance_card.jpg',
          type: 'image',
          mimeType: 'image/jpeg',
          url: 'https://storage.example.com/sms/insurance-card-lee.jpg',
          size: 345678,
          uploadedAt: hoursAgo(3),
          category: 'identification',
          status: 'extracted',
          extractedData: {
            patient: {
              name: 'Michelle Lee',
            },
            pii: {
              insurance: 'BCBS-987-654-321',
            },
            customFields: [
              { field: 'Insurance Provider', value: 'Blue Cross Blue Shield', confidence: 0.95 },
              { field: 'Member ID', value: 'BCBS-987-654-321', confidence: 0.96 },
            ],
          },
          ai: {
            model: 'gpt-4o-vision',
            processedAt: hoursAgo(2.9),
            extractionConfidence: 0.95,
          },
        }
      ],
      isRead: true,
    },
    
    unreadCount: 0,
    priority: 'routine',
    workflowState: 'completed-by-ai',
    
    categories: ['lab-results', 'general'],
    
    appointments: [],
    
    tasks: [
      {
        id: 'task-sms-001',
        title: 'Send lab results to Michelle Lee',
        description: 'Patient requested copy of lab results. Update insurance info on file.',
        type: 'documentation',
        priority: 'normal',
        assignedToRole: 'front-desk',
        status: 'todo',
        confidence: 0.89,
        aiGenerated: true,
      }
    ],
    
    otherActions: [],
    
    ai: {
      confidence: 0.92,
      model: 'gpt-4o',
      processedAt: hoursAgo(2.9),
      requiresReview: false,
    },
    
    createdAt: hoursAgo(6),
    updatedAt: hoursAgo(2.9),
  },

  // =========================================================================
  // SMS 6: Urgent message (unread)
  // =========================================================================
  {
    id: 'sms-conv-006',
    
    patient: {
      id: 'pt-sms-006',
      name: 'Brandon Scott',
      mrn: 'MRN-SMS-006',
      phone: '+1-555-6666',
    },
    
    messages: [
      {
        id: 'sms-msg-006-1',
        conversationId: 'sms-conv-006',
        sender: {
          name: 'Brandon Scott',
          phone: '+1-555-6666',
        },
        recipient: {
          name: 'Caesar Health',
          phone: '+1-555-OFFICE',
        },
        direction: 'inbound',
        message: 'I\'m having severe abdominal pain and vomiting. What should I do?',
        timestamp: minutesAgo(10),
        status: 'delivered',
        media: [],
        isRead: false,
      }
    ],
    
    lastMessage: {
      id: 'sms-msg-006-1',
      conversationId: 'sms-conv-006',
      sender: {
        name: 'Brandon Scott',
        phone: '+1-555-6666',
      },
      recipient: {
        name: 'Caesar Health',
        phone: '+1-555-OFFICE',
      },
      direction: 'inbound',
      message: 'I\'m having severe abdominal pain and vomiting. What should I do?',
      timestamp: minutesAgo(10),
      status: 'delivered',
      media: [],
      isRead: false,
    },
    
    unreadCount: 1,
    priority: 'stat',
    workflowState: 'queued-for-review',
    
    categories: ['urgent'],
    
    appointments: [],
    
    tasks: [
      {
        id: 'task-sms-002',
        title: 'URGENT: Contact Brandon Scott immediately',
        description: 'Patient reports severe abdominal pain and vomiting. Requires immediate medical attention.',
        type: 'callback',
        priority: 'urgent',
        assignedToRole: 'nurse',
        dueDate: minutesAgo(-5),  // 5 minutes from now (ASAP)
        status: 'todo',
        confidence: 0.98,
        aiGenerated: true,
      }
    ],
    
    otherActions: [],
    
    ai: {
      confidence: 0.98,
      model: 'gpt-4o',
      processedAt: minutesAgo(9),
      requiresReview: false,
    },
    
    createdAt: minutesAgo(10),
    updatedAt: minutesAgo(9),
  },
]

