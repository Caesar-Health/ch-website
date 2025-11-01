/**
 * Mock Fax Data
 * Realistic examples for development and testing
 */

import type { Fax } from '@/types/fax'

// Helper to create dates relative to now
const now = new Date()
const minutesAgo = (mins: number) => new Date(now.getTime() - mins * 60000)
const hoursAgo = (hours: number) => new Date(now.getTime() - hours * 3600000)
const daysAgo = (days: number) => new Date(now.getTime() - days * 86400000)
const daysFromNow = (days: number) => new Date(now.getTime() + days * 86400000)

export const mockFaxes: Fax[] = [
  // =========================================================================
  // Fax 1: Lab results (multi-page, high quality OCR)
  // =========================================================================
  {
    id: 'fax-001',
    
    sender: {
      name: 'LabCorp',
      faxNumber: '+1-555-LABS',
      organization: 'LabCorp Main Lab',
    },
    
    patient: {
      id: 'pt-fax-001',
      name: 'Jennifer Taylor',
      mrn: 'MRN-22001',
      phone: '+1-555-1111',
    },
    
    subject: 'Lab Results - Jennifer Taylor',
    
    direction: 'inbound',
    timestamp: hoursAgo(2),
    priority: 'routine',
    
    status: 'read',
    workflowState: 'completed-by-ai',
    
    categories: ['lab-results'],
    
    documents: [
      {
        id: 'doc-fax-001-1',
        name: 'Lab_Results_Taylor_20251012.pdf',
        type: 'pdf',
        mimeType: 'application/pdf',
        url: 'https://storage.example.com/fax/taylor-labs.pdf',
        thumbnailUrl: 'https://storage.example.com/thumbs/taylor-labs.jpg',
        size: 189234,
        pages: 3,
        uploadedAt: hoursAgo(2),
        category: 'labs',
        status: 'extracted',
        ocrConfidence: 0.97,
        extractedData: {
          patient: {
            name: 'Jennifer Taylor',
            mrn: 'MRN-22001',
            dateOfBirth: '08/10/1982',
          },
          documentDate: new Date('2025-10-12'),
          facility: 'LabCorp Main Lab',
          labs: [
            {
              id: 'lab-fax-001',
              testName: 'Lipid Panel',
              value: 'See detailed results',
              confidence: 0.98,
            },
            {
              id: 'lab-fax-002',
              testName: 'Total Cholesterol',
              value: '215',
              unit: 'mg/dL',
              referenceRange: '<200',
              abnormal: true,
              confidence: 0.97,
            },
            {
              id: 'lab-fax-003',
              testName: 'HDL',
              value: '48',
              unit: 'mg/dL',
              referenceRange: '>40',
              abnormal: false,
              confidence: 0.96,
            },
            {
              id: 'lab-fax-004',
              testName: 'LDL',
              value: '145',
              unit: 'mg/dL',
              referenceRange: '<100',
              abnormal: true,
              confidence: 0.95,
            },
          ],
        },
        ai: {
          model: 'gpt-4o-vision',
          processedAt: hoursAgo(1.9),
          extractionConfidence: 0.95,
        },
      }
    ],
    
    totalPages: 3,
    
    ocrQuality: {
      overall: 0.97,
      lowQualityPages: [],
      unreadablePages: [],
    },
    
    appointments: [],
    medications: [],
    
    tasks: [
      {
        id: 'task-fax-001',
        title: 'Review lipid panel results for Jennifer Taylor',
        description: 'Cholesterol and LDL elevated. Consider medication adjustment.',
        type: 'review-results',
        priority: 'normal',
        assignedTo: 'Dr. Chen',
        assignedToRole: 'provider',
        dueDate: daysFromNow(3),
        status: 'todo',
        confidence: 0.91,
        aiGenerated: true,
      }
    ],
    
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    summary: 'Lipid panel results show elevated total cholesterol (215) and LDL (145).',
    
    ai: {
      confidence: 0.95,
      model: 'gpt-4o',
      processedAt: hoursAgo(1.9),
      requiresReview: false,
      ocrModel: 'tesseract-ocr',
    },
    
    createdAt: hoursAgo(2),
    updatedAt: hoursAgo(1.9),
  },

  // =========================================================================
  // Fax 2: Referral with patient history
  // =========================================================================
  {
    id: 'fax-002',
    
    sender: {
      name: 'Dr. Susan Park',
      faxNumber: '+1-555-3344',
      organization: 'Park Family Medicine',
    },
    
    patient: {
      id: 'pt-fax-002',
      name: 'Thomas Williams',
      mrn: 'MRN-33002',
      phone: '+1-555-2222',
    },
    
    subject: 'Referral to Orthopedics - Thomas Williams',
    coverSheet: 'Referring patient for orthopedic evaluation of chronic knee pain.',
    
    direction: 'inbound',
    timestamp: hoursAgo(5),
    priority: 'routine',
    
    status: 'read',
    workflowState: 'completed-hybrid',
    
    categories: ['referral', 'authorization'],
    
    documents: [
      {
        id: 'doc-fax-002-1',
        name: 'Referral_Williams_Ortho.pdf',
        type: 'pdf',
        mimeType: 'application/pdf',
        url: 'https://storage.example.com/fax/williams-ortho.pdf',
        size: 234567,
        pages: 4,
        uploadedAt: hoursAgo(5),
        category: 'referral',
        status: 'extracted',
        ocrConfidence: 0.94,
        extractedData: {
          patient: {
            name: 'Thomas Williams',
            mrn: 'MRN-33002',
            dateOfBirth: '12/05/1968',
          },
          documentDate: daysAgo(0.2),
          provider: 'Dr. Susan Park',
          facility: 'Park Family Medicine',
          referrals: [
            {
              id: 'ref-fax-001',
              specialty: 'Orthopedics',
              reason: 'Chronic left knee pain, possible arthritis',
              urgency: 'routine',
              confidence: 0.95,
            }
          ],
        },
        ai: {
          model: 'gpt-4o-vision',
          processedAt: hoursAgo(4.9),
          extractionConfidence: 0.93,
        },
      }
    ],
    
    totalPages: 4,
    
    ocrQuality: {
      overall: 0.94,
      lowQualityPages: [],
      unreadablePages: [],
    },
    
    appointments: [],
    medications: [],
    
    tasks: [
      {
        id: 'task-fax-002',
        title: 'Schedule orthopedic referral for Thomas Williams',
        description: 'Patient referred for chronic knee pain evaluation. Schedule with orthopedic surgeon.',
        type: 'referral',
        priority: 'normal',
        assignedToRole: 'front-desk',
        dueDate: daysFromNow(5),
        status: 'completed',
        completedBy: 'Front Desk',
        completedAt: hoursAgo(3),
        aiGenerated: false,
      }
    ],
    
    referrals: [
      {
        id: 'ref-fax-email-001',
        specialty: 'Orthopedics',
        reason: 'Chronic left knee pain, possible arthritis',
        urgency: 'routine',
        status: 'scheduled',
        confidence: 0.95,
        aiGenerated: true,
      }
    ],
    
    authorizations: [],
    otherActions: [],
    
    summary: 'Orthopedic referral for chronic left knee pain evaluation.',
    notes: 'Referral scheduled with Dr. Johnson at Orthopedic Associates for next week.',
    
    ai: {
      confidence: 0.93,
      model: 'gpt-4o',
      processedAt: hoursAgo(4.9),
      requiresReview: false,
      ocrModel: 'tesseract-ocr',
    },
    
    review: {
      status: 'approved',
      reviewedBy: 'Dr. Martinez',
      reviewedAt: hoursAgo(4),
    },
    
    createdAt: hoursAgo(5),
    updatedAt: hoursAgo(3),
  },

  // =========================================================================
  // Fax 3: Imaging report
  // =========================================================================
  {
    id: 'fax-003',
    
    sender: {
      name: 'City Radiology',
      faxNumber: '+1-555-XRAY',
      organization: 'City Radiology Center',
    },
    
    patient: {
      id: 'pt-fax-003',
      name: 'Daniel Lee',
      mrn: 'MRN-44003',
      phone: '+1-555-3333',
    },
    
    subject: 'Chest X-Ray Results - Daniel Lee',
    
    direction: 'inbound',
    timestamp: daysAgo(1),
    priority: 'routine',
    
    status: 'read',
    workflowState: 'completed-by-ai',
    
    categories: ['imaging'],
    
    documents: [
      {
        id: 'doc-fax-003-1',
        name: 'CXR_Lee_20251011.pdf',
        type: 'pdf',
        mimeType: 'application/pdf',
        url: 'https://storage.example.com/fax/lee-cxr.pdf',
        size: 156789,
        pages: 2,
        uploadedAt: daysAgo(1),
        category: 'imaging',
        status: 'extracted',
        ocrConfidence: 0.95,
        extractedData: {
          patient: {
            name: 'Daniel Lee',
            mrn: 'MRN-44003',
            dateOfBirth: '04/20/1975',
          },
          documentDate: new Date('2025-10-11'),
          facility: 'City Radiology Center',
          provider: 'Dr. Rachel Kim',
          imaging: [
            {
              id: 'img-fax-001',
              studyType: 'Chest X-Ray',
              bodyPart: 'Chest',
              findings: 'Lungs are clear bilaterally. No acute infiltrate. Heart size normal. No pleural effusion.',
              impression: 'Normal chest x-ray.',
              date: new Date('2025-10-11'),
              radiologist: 'Dr. Rachel Kim',
              confidence: 0.94,
            }
          ],
        },
        ai: {
          model: 'gpt-4o-vision',
          processedAt: daysAgo(0.99),
          extractionConfidence: 0.94,
        },
      }
    ],
    
    totalPages: 2,
    
    ocrQuality: {
      overall: 0.95,
      lowQualityPages: [],
      unreadablePages: [],
    },
    
    appointments: [],
    medications: [],
    tasks: [],
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    summary: 'Normal chest x-ray. No acute findings.',
    
    ai: {
      confidence: 0.94,
      model: 'gpt-4o',
      processedAt: daysAgo(0.99),
      requiresReview: false,
      ocrModel: 'tesseract-ocr',
    },
    
    createdAt: daysAgo(1),
    updatedAt: daysAgo(0.99),
  },

  // =========================================================================
  // Fax 4: Prescription from pharmacy (needs review, poor quality)
  // =========================================================================
  {
    id: 'fax-004',
    
    sender: {
      name: 'Walgreens Pharmacy',
      faxNumber: '+1-555-8888',
      organization: 'Walgreens #4521',
    },
    
    patient: {
      id: 'pt-fax-004',
      name: 'Mary Johnson',
      mrn: 'MRN-55004',
      phone: '+1-555-4444',
    },
    
    subject: 'Prescription Authorization Request',
    
    direction: 'inbound',
    timestamp: hoursAgo(6),
    priority: 'urgent',
    
    status: 'read',
    workflowState: 'poor-quality',
    
    categories: ['prescription', 'authorization'],
    
    documents: [
      {
        id: 'doc-fax-004-1',
        name: 'Rx_Auth_Johnson.pdf',
        type: 'pdf',
        mimeType: 'application/pdf',
        url: 'https://storage.example.com/fax/rx-auth-johnson.pdf',
        size: 98765,
        pages: 1,
        uploadedAt: hoursAgo(6),
        category: 'prescription',
        status: 'error',
        ocrConfidence: 0.52,
        ai: {
          model: 'gpt-4o-vision',
          processedAt: hoursAgo(5.9),
          extractionConfidence: 0.45,
        },
      }
    ],
    
    totalPages: 1,
    
    ocrQuality: {
      overall: 0.52,
      lowQualityPages: [1],
      unreadablePages: [],
    },
    
    appointments: [],
    medications: [],
    
    tasks: [
      {
        id: 'task-fax-003',
        title: 'Manual review required - Poor quality fax',
        description: 'Fax quality too poor for reliable OCR. Manual review needed for prescription authorization.',
        type: 'documentation',
        priority: 'high',
        assignedToRole: 'provider',
        dueDate: daysFromNow(1),
        status: 'todo',
        aiGenerated: false,
      }
    ],
    
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    summary: 'Prescription authorization request - poor fax quality, manual review required.',
    
    ai: {
      confidence: 0.45,
      model: 'gpt-4o',
      processedAt: hoursAgo(5.9),
      requiresReview: true,
      ocrModel: 'tesseract-ocr',
    },
    
    review: {
      status: 'pending',
    },
    
    createdAt: hoursAgo(6),
    updatedAt: hoursAgo(5.9),
  },

  // =========================================================================
  // Fax 5: Insurance authorization approval
  // =========================================================================
  {
    id: 'fax-005',
    
    sender: {
      name: 'Aetna',
      faxNumber: '+1-555-INSUR',
      organization: 'Aetna Insurance',
    },
    
    patient: {
      id: 'pt-fax-005',
      name: 'Carol White',
      mrn: 'MRN-66005',
      phone: '+1-555-5555',
    },
    
    subject: 'Authorization Approval - Carol White',
    
    direction: 'inbound',
    timestamp: daysAgo(1),
    priority: 'routine',
    
    status: 'read',
    workflowState: 'completed-by-ai',
    
    categories: ['authorization', 'insurance'],
    
    documents: [
      {
        id: 'doc-fax-005-1',
        name: 'Auth_Approval_White.pdf',
        type: 'pdf',
        mimeType: 'application/pdf',
        url: 'https://storage.example.com/fax/auth-white.pdf',
        size: 67890,
        pages: 1,
        uploadedAt: daysAgo(1),
        category: 'authorization',
        status: 'extracted',
        ocrConfidence: 0.98,
        extractedData: {
          patient: {
            name: 'Carol White',
            mrn: 'MRN-66005',
          },
          documentDate: daysAgo(1),
          authorizations: [
            {
              id: 'auth-fax-001',
              type: 'procedure-auth',
              procedure: 'Physical Therapy - 12 sessions',
              status: 'approved',
              authNumber: 'AUTH-2025-99887',
              expirationDate: daysFromNow(90),
              insurancePayer: 'Aetna',
              confidence: 0.97,
            }
          ],
        },
        ai: {
          model: 'gpt-4o-vision',
          processedAt: daysAgo(0.99),
          extractionConfidence: 0.97,
        },
      }
    ],
    
    totalPages: 1,
    
    appointments: [],
    medications: [],
    tasks: [],
    referrals: [],
    
    authorizations: [
      {
        id: 'auth-fax-email-001',
        type: 'procedure-auth',
        service: 'Physical Therapy',
        status: 'approved',
        authNumber: 'AUTH-2025-99887',
        insurancePayer: 'Aetna',
        approvalDate: daysAgo(1),
        expirationDate: daysFromNow(90),
        confidence: 0.97,
        aiGenerated: true,
      }
    ],
    
    otherActions: [],
    
    summary: 'Physical therapy authorization approved - 12 sessions, valid for 90 days.',
    
    ai: {
      confidence: 0.97,
      model: 'gpt-4o',
      processedAt: daysAgo(0.99),
      requiresReview: false,
      ocrModel: 'tesseract-ocr',
    },
    
    createdAt: daysAgo(1),
    updatedAt: daysAgo(0.99),
  },

  // =========================================================================
  // Fax 6: New fax (just received, OCR processing)
  // =========================================================================
  {
    id: 'fax-006',
    
    sender: {
      name: 'Unknown',
      faxNumber: '+1-555-9999',
    },
    
    patient: undefined,
    
    subject: 'Incoming Fax - 3 pages',
    
    direction: 'inbound',
    timestamp: minutesAgo(5),
    priority: 'routine',
    
    status: 'new',
    workflowState: 'ocr-processing',
    
    categories: [],
    
    documents: [
      {
        id: 'doc-fax-006-1',
        name: 'Incoming_Fax_20251012.pdf',
        type: 'pdf',
        mimeType: 'application/pdf',
        url: 'https://storage.example.com/fax/incoming-20251012.pdf',
        size: 123456,
        pages: 3,
        uploadedAt: minutesAgo(5),
        status: 'processing',
      }
    ],
    
    totalPages: 3,
    
    appointments: [],
    medications: [],
    tasks: [],
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    createdAt: minutesAgo(5),
    updatedAt: minutesAgo(5),
  },

  // =========================================================================
  // Fax 7: Prescription fax
  // =========================================================================
  {
    id: 'fax-007',
    
    sender: {
      name: 'CVS Pharmacy',
      faxNumber: '+1-555-7777',
      organization: 'CVS Pharmacy #1234',
    },
    
    patient: {
      id: 'pt-fax-007',
      name: 'Angela Rodriguez',
      mrn: 'MRN-77007',
      phone: '+1-555-6666',
    },
    
    subject: 'Prescription Refill Request - Angela Rodriguez',
    
    direction: 'inbound',
    timestamp: hoursAgo(8),
    priority: 'routine',
    
    status: 'read',
    workflowState: 'completed-by-human',
    
    categories: ['prescription'],
    
    documents: [
      {
        id: 'doc-fax-007-1',
        name: 'Rx_Refill_Rodriguez.pdf',
        type: 'pdf',
        mimeType: 'application/pdf',
        url: 'https://storage.example.com/fax/rx-rodriguez.pdf',
        size: 87654,
        pages: 1,
        uploadedAt: hoursAgo(8),
        category: 'prescription',
        status: 'extracted',
        ocrConfidence: 0.91,
        extractedData: {
          patient: {
            name: 'Angela Rodriguez',
            mrn: 'MRN-77007',
          },
          documentDate: hoursAgo(8),
          medications: [
            {
              id: 'med-fax-001',
              name: 'Synthroid 75mcg',
              dosage: '75mcg',
              frequency: 'Once daily',
              confidence: 0.93,
            }
          ],
        },
        ai: {
          model: 'gpt-4o-vision',
          processedAt: hoursAgo(7.9),
          extractionConfidence: 0.91,
        },
      }
    ],
    
    totalPages: 1,
    
    appointments: [],
    
    medications: [
      {
        id: 'med-fax-001',
        type: 'refill',
        medicationName: 'Synthroid 75mcg',
        dosage: '75mcg',
        frequency: 'Once daily',
        quantity: 90,
        pharmacy: {
          name: 'CVS Pharmacy #1234',
          phone: '+1-555-7777',
        },
        status: 'sent-to-pharmacy',
        approvedBy: 'Dr. Chen',
        approvedAt: hoursAgo(7),
        requiresProviderApproval: false,
        confidence: 0.93,
        aiGenerated: true,
      }
    ],
    
    tasks: [],
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    summary: 'Prescription refill request for Synthroid 75mcg. Approved and sent to pharmacy.',
    notes: 'Refill approved by Dr. Chen, sent to CVS.',
    
    ai: {
      confidence: 0.91,
      model: 'gpt-4o',
      processedAt: hoursAgo(7.9),
      requiresReview: false,
      ocrModel: 'tesseract-ocr',
    },
    
    createdAt: hoursAgo(8),
    updatedAt: hoursAgo(7),
  },

  // =========================================================================
  // Fax 8: Consult note
  // =========================================================================
  {
    id: 'fax-008',
    
    sender: {
      name: 'Dr. Michael Brown',
      faxNumber: '+1-555-DERM',
      organization: 'Dermatology Associates',
    },
    
    patient: {
      id: 'pt-fax-008',
      name: 'Nancy Garcia',
      mrn: 'MRN-88008',
      phone: '+1-555-7777',
    },
    
    subject: 'Dermatology Consultation - Nancy Garcia',
    
    direction: 'inbound',
    timestamp: daysAgo(3),
    priority: 'routine',
    
    status: 'read',
    workflowState: 'filed',
    
    categories: ['consult'],
    
    documents: [
      {
        id: 'doc-fax-008-1',
        name: 'Derm_Consult_Garcia.pdf',
        type: 'pdf',
        mimeType: 'application/pdf',
        url: 'https://storage.example.com/fax/derm-garcia.pdf',
        size: 234567,
        pages: 2,
        uploadedAt: daysAgo(3),
        category: 'consult',
        status: 'extracted',
        ocrConfidence: 0.96,
        extractedData: {
          patient: {
            name: 'Nancy Garcia',
            mrn: 'MRN-88008',
            dateOfBirth: '11/30/1985',
          },
          documentDate: daysAgo(3.1),
          provider: 'Dr. Michael Brown',
          facility: 'Dermatology Associates',
          procedures: [
            {
              id: 'proc-fax-001',
              description: 'Skin biopsy - left forearm',
              cptCode: '11102',
              date: daysAgo(3.1),
              provider: 'Dr. Michael Brown',
              confidence: 0.95,
            }
          ],
          diagnoses: [
            {
              id: 'diag-fax-001',
              description: 'Actinic keratosis',
              icdCode: 'L57.0',
              status: 'active',
              confidence: 0.94,
            }
          ],
        },
        ai: {
          model: 'gpt-4o-vision',
          processedAt: daysAgo(2.99),
          extractionConfidence: 0.94,
        },
      }
    ],
    
    totalPages: 2,
    
    appointments: [],
    medications: [],
    tasks: [],
    referrals: [],
    authorizations: [],
    otherActions: [],
    
    summary: 'Dermatology consult for actinic keratosis. Biopsy performed.',
    notes: 'Filed in patient chart. No follow-up needed.',
    
    ai: {
      confidence: 0.94,
      model: 'gpt-4o',
      processedAt: daysAgo(2.99),
      requiresReview: false,
      ocrModel: 'tesseract-ocr',
    },
    
    createdAt: daysAgo(3),
    updatedAt: daysAgo(2.5),
  },
]

