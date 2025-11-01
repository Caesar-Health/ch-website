/**
 * Outline Builder
 * Helper functions to build outline items from different entity types
 */

import type { Email } from '@/types/email'
import type { Fax } from '@/types/fax'
import type { SMSConversation } from '@/types/sms'
import type { Call } from '@/types/call'
import type { OutlineItem } from '@/types/navigation'

/**
 * Build outline from Email
 */
export function buildEmailOutline(email: Email): OutlineItem[] {
  const outline: OutlineItem[] = []
  
  // Message section
  outline.push({
    id: 'message',
    type: 'message',
    label: 'Message',
    icon: 'mail',
    collapsible: false,
  })
  
  // Documents section
  if (email.documents.length > 0) {
    outline.push({
      id: 'documents',
      type: 'section',
      label: 'Documents',
      icon: 'file-text',
      count: email.documents.length,
      collapsible: true,
      collapsed: false,
      children: email.documents.map(doc => ({
        id: `document-${doc.id}`,
        type: 'document',
        label: doc.name,
        icon: 'file-text',
        status: doc.status === 'extracted' ? 'completed' : doc.status === 'processing' ? 'pending' : 'none',
        data: doc,
      })),
    })
  }
  
  // Actions section
  const totalActions = 
    email.appointments.length +
    email.tasks.length
  
  if (totalActions > 0) {
    const actionChildren: OutlineItem[] = []
    
    // Appointments
    if (email.appointments.length > 0) {
      actionChildren.push({
        id: 'appointments',
        type: 'section',
        label: 'Appointments',
        icon: 'calendar',
        count: email.appointments.length,
        collapsible: true,
        collapsed: false,
        children: email.appointments.map(apt => ({
          id: `appointment-${apt.id}`,
          type: 'appointment',
          label: apt.type.replace('-', ' '),
          icon: 'calendar',
          status: apt.status === 'completed' ? 'completed' : apt.status === 'pending' ? 'pending' : 'none',
          data: apt,
        })),
      })
    }
    
    // Tasks
    if (email.tasks.length > 0) {
      actionChildren.push({
        id: 'tasks',
        type: 'section',
        label: 'Tasks',
        icon: 'list-todo',
        count: email.tasks.length,
        collapsible: true,
        collapsed: false,
        children: email.tasks.map(task => ({
          id: `task-${task.id}`,
          type: 'task',
          label: task.title,
          icon: 'list-todo',
          status: task.status === 'completed' ? 'completed' : task.status === 'in-progress' ? 'pending' : 'none',
          data: task,
        })),
      })
    }
    
    outline.push({
      id: 'actions',
      type: 'section',
      label: 'Actions',
      icon: 'activity',
      count: totalActions,
      collapsible: true,
      collapsed: false,
      children: actionChildren,
    })
  }
  
  // Clinical Entities section
  const totalClinical = 
    email.medications.length +
    email.referrals.length +
    email.authorizations.length
  
  if (totalClinical > 0) {
    const clinicalChildren: OutlineItem[] = []
    
    // Medications
    if (email.medications.length > 0) {
      clinicalChildren.push({
        id: 'medications',
        type: 'section',
        label: 'Medications',
        icon: 'pill',
        count: email.medications.length,
        collapsible: true,
        collapsed: false,
        children: email.medications.map(med => ({
          id: `medication-${med.id}`,
          type: 'medication',
          label: med.medicationName,
          icon: 'pill',
          status: med.status === 'approved' ? 'completed' : med.status === 'pending' ? 'pending' : 'none',
          data: med,
        })),
      })
    }
    
    // Referrals
    if (email.referrals.length > 0) {
      clinicalChildren.push({
        id: 'referrals',
        type: 'section',
        label: 'Referrals',
        icon: 'user-plus',
        count: email.referrals.length,
        collapsible: true,
        collapsed: false,
        children: email.referrals.map(ref => ({
          id: `referral-${ref.id}`,
          type: 'referral',
          label: ref.specialty,
          icon: 'user-plus',
          status: ref.status === 'completed' ? 'completed' : ref.status === 'pending' ? 'pending' : 'none',
          data: ref,
        })),
      })
    }
    
    // Authorizations
    if (email.authorizations.length > 0) {
      clinicalChildren.push({
        id: 'authorizations',
        type: 'section',
        label: 'Authorizations',
        icon: 'shield',
        count: email.authorizations.length,
        collapsible: true,
        collapsed: false,
        children: email.authorizations.map(auth => ({
          id: `authorization-${auth.id}`,
          type: 'authorization',
          label: auth.type.replace('-', ' '),
          icon: 'shield',
          status: auth.status === 'approved' ? 'completed' : auth.status === 'pending' ? 'pending' : 'none',
          data: auth,
        })),
      })
    }
    
    outline.push({
      id: 'clinical',
      type: 'section',
      label: 'Clinical',
      icon: 'activity',
      count: totalClinical,
      collapsible: true,
      collapsed: false,
      children: clinicalChildren,
    })
  }
  
  return outline
}

/**
 * Build outline from Fax
 */
export function buildFaxOutline(fax: Fax): OutlineItem[] {
  const outline: OutlineItem[] = []
  
  // Message section (cover sheet)
  if (fax.coverSheet) {
    outline.push({
      id: 'cover-sheet',
      type: 'message',
      label: 'Cover Sheet',
      icon: 'mail',
      collapsible: false,
    })
  }
  
  // Documents section (pages)
  if (fax.documents.length > 0) {
    outline.push({
      id: 'pages',
      type: 'section',
      label: 'Pages',
      icon: 'file-text',
      count: fax.documents.length,
      collapsible: true,
      collapsed: false,
      children: fax.documents.map((doc, index) => ({
        id: `page-${doc.id}`,
        type: 'document',
        label: `Page ${index + 1}`,
        icon: 'file-text',
        status: doc.status === 'extracted' ? 'completed' : doc.status === 'processing' ? 'pending' : 'none',
        data: doc,
      })),
    })
  }
  
  // Actions section (same as email)
  const totalActions = 
    fax.appointments.length +
    fax.tasks.length
  
  if (totalActions > 0) {
    const actionChildren: OutlineItem[] = []
    
    if (fax.appointments.length > 0) {
      actionChildren.push({
        id: 'appointments',
        type: 'section',
        label: 'Appointments',
        icon: 'calendar',
        count: fax.appointments.length,
        collapsible: true,
        collapsed: false,
        children: fax.appointments.map(apt => ({
          id: `appointment-${apt.id}`,
          type: 'appointment',
          label: apt.type.replace('-', ' '),
          icon: 'calendar',
          status: apt.status === 'completed' ? 'completed' : apt.status === 'pending' ? 'pending' : 'none',
          data: apt,
        })),
      })
    }
    
    if (fax.tasks.length > 0) {
      actionChildren.push({
        id: 'tasks',
        type: 'section',
        label: 'Tasks',
        icon: 'list-todo',
        count: fax.tasks.length,
        collapsible: true,
        collapsed: false,
        children: fax.tasks.map(task => ({
          id: `task-${task.id}`,
          type: 'task',
          label: task.title,
          icon: 'list-todo',
          status: task.status === 'completed' ? 'completed' : task.status === 'in-progress' ? 'pending' : 'none',
          data: task,
        })),
      })
    }
    
    outline.push({
      id: 'actions',
      type: 'section',
      label: 'Actions',
      icon: 'activity',
      count: totalActions,
      collapsible: true,
      collapsed: false,
      children: actionChildren,
    })
  }
  
  // Clinical Entities section (same as email)
  const totalClinical = 
    fax.medications.length +
    fax.referrals.length +
    fax.authorizations.length
  
  if (totalClinical > 0) {
    const clinicalChildren: OutlineItem[] = []
    
    if (fax.medications.length > 0) {
      clinicalChildren.push({
        id: 'medications',
        type: 'section',
        label: 'Medications',
        icon: 'pill',
        count: fax.medications.length,
        collapsible: true,
        collapsed: false,
        children: fax.medications.map(med => ({
          id: `medication-${med.id}`,
          type: 'medication',
          label: med.medicationName,
          icon: 'pill',
          status: med.status === 'approved' || med.status === 'sent-to-pharmacy' ? 'completed' : med.status === 'pending' ? 'pending' : 'none',
          data: med,
        })),
      })
    }
    
    if (fax.referrals.length > 0) {
      clinicalChildren.push({
        id: 'referrals',
        type: 'section',
        label: 'Referrals',
        icon: 'user-plus',
        count: fax.referrals.length,
        collapsible: true,
        collapsed: false,
        children: fax.referrals.map(ref => ({
          id: `referral-${ref.id}`,
          type: 'referral',
          label: ref.specialty,
          icon: 'user-plus',
          status: ref.status === 'completed' ? 'completed' : ref.status === 'pending' ? 'pending' : 'none',
          data: ref,
        })),
      })
    }
    
    if (fax.authorizations.length > 0) {
      clinicalChildren.push({
        id: 'authorizations',
        type: 'section',
        label: 'Authorizations',
        icon: 'shield',
        count: fax.authorizations.length,
        collapsible: true,
        collapsed: false,
        children: fax.authorizations.map(auth => ({
          id: `authorization-${auth.id}`,
          type: 'authorization',
          label: auth.type.replace('-', ' '),
          icon: 'shield',
          status: auth.status === 'approved' ? 'completed' : auth.status === 'pending' ? 'pending' : 'none',
          data: auth,
        })),
      })
    }
    
    outline.push({
      id: 'clinical',
      type: 'section',
      label: 'Clinical',
      icon: 'activity',
      count: totalClinical,
      collapsible: true,
      collapsed: false,
      children: clinicalChildren,
    })
  }
  
  return outline
}

/**
 * Build outline from SMS Conversation
 */
export function buildSMSOutline(conversation: SMSConversation): OutlineItem[] {
  const outline: OutlineItem[] = []
  
  // Messages section
  outline.push({
    id: 'messages',
    type: 'message',
    label: 'Conversation',
    icon: 'mail',
    count: conversation.messages.length,
    collapsible: false,
  })
  
  // Media section (MMS attachments)
  const allMedia = conversation.messages.flatMap(m => m.media)
  if (allMedia.length > 0) {
    outline.push({
      id: 'media',
      type: 'section',
      label: 'Media',
      icon: 'file-text',
      count: allMedia.length,
      collapsible: true,
      collapsed: false,
      children: allMedia.map(doc => ({
        id: `media-${doc.id}`,
        type: 'document',
        label: doc.name,
        icon: 'file-text',
        status: doc.status === 'extracted' ? 'completed' : doc.status === 'processing' ? 'pending' : 'none',
        data: doc,
      })),
    })
  }
  
  // Actions section
  const totalActions = 
    conversation.appointments.length +
    conversation.tasks.length
  
  if (totalActions > 0) {
    const actionChildren: OutlineItem[] = []
    
    if (conversation.appointments.length > 0) {
      actionChildren.push({
        id: 'appointments',
        type: 'section',
        label: 'Appointments',
        icon: 'calendar',
        count: conversation.appointments.length,
        collapsible: true,
        collapsed: false,
        children: conversation.appointments.map(apt => ({
          id: `appointment-${apt.id}`,
          type: 'appointment',
          label: apt.type.replace('-', ' '),
          icon: 'calendar',
          status: apt.status === 'completed' ? 'completed' : apt.status === 'pending' ? 'pending' : 'none',
          data: apt,
        })),
      })
    }
    
    if (conversation.tasks.length > 0) {
      actionChildren.push({
        id: 'tasks',
        type: 'section',
        label: 'Tasks',
        icon: 'list-todo',
        count: conversation.tasks.length,
        collapsible: true,
        collapsed: false,
        children: conversation.tasks.map(task => ({
          id: `task-${task.id}`,
          type: 'task',
          label: task.title,
          icon: 'list-todo',
          status: task.status === 'completed' ? 'completed' : task.status === 'in-progress' ? 'pending' : 'none',
          data: task,
        })),
      })
    }
    
    outline.push({
      id: 'actions',
      type: 'section',
      label: 'Actions',
      icon: 'activity',
      count: totalActions,
      collapsible: true,
      collapsed: false,
      children: actionChildren,
    })
  }
  
  return outline
}

/**
 * Build outline from Call
 */
export function buildCallOutline(call: Call): OutlineItem[] {
  const outline: OutlineItem[] = []
  
  // Call summary/details
  outline.push({
    id: 'call-details',
    type: 'message',
    label: 'Call Details',
    icon: 'activity',
    collapsible: false,
  })
  
  // Recording section
  if (call.recordingUrl) {
    outline.push({
      id: 'recording',
      type: 'message',
      label: 'Recording',
      icon: 'audio-lines',
      collapsible: false,
    })
  }
  
  // Transcript section
  if (call.transcription) {
    outline.push({
      id: 'transcript',
      type: 'message',
      label: 'Transcript',
      icon: 'file-text',
      collapsible: false,
    })
  }
  
  // Actions section
  const totalActions = 
    call.appointments.length +
    call.medications.length +
    call.tasks.length
  
  if (totalActions > 0) {
    const actionChildren: OutlineItem[] = []
    
    if (call.appointments.length > 0) {
      actionChildren.push({
        id: 'appointments',
        type: 'section',
        label: 'Appointments',
        icon: 'calendar',
        count: call.appointments.length,
        collapsible: true,
        collapsed: false,
        children: call.appointments.map(apt => ({
          id: `appointment-${apt.id}`,
          type: 'appointment',
          label: apt.type.replace('-', ' '),
          icon: 'calendar',
          status: apt.status === 'completed' ? 'completed' : apt.status === 'pending' ? 'pending' : 'none',
          data: apt,
        })),
      })
    }
    
    if (call.medications.length > 0) {
      actionChildren.push({
        id: 'medications-actions',
        type: 'section',
        label: 'Medications',
        icon: 'pill',
        count: call.medications.length,
        collapsible: true,
        collapsed: false,
        children: call.medications.map(med => ({
          id: `medication-${med.id}`,
          type: 'medication',
          label: med.medicationName,
          icon: 'pill',
          status: med.status === 'approved' || med.status === 'sent-to-pharmacy' ? 'completed' : med.status === 'pending' ? 'pending' : 'none',
          data: med,
        })),
      })
    }
    
    if (call.tasks.length > 0) {
      actionChildren.push({
        id: 'tasks',
        type: 'section',
        label: 'Tasks',
        icon: 'list-todo',
        count: call.tasks.length,
        collapsible: true,
        collapsed: false,
        children: call.tasks.map(task => ({
          id: `task-${task.id}`,
          type: 'task',
          label: task.title,
          icon: 'list-todo',
          status: task.status === 'completed' ? 'completed' : task.status === 'in-progress' ? 'pending' : 'none',
          data: task,
        })),
      })
    }
    
    outline.push({
      id: 'actions',
      type: 'section',
      label: 'Actions',
      icon: 'activity',
      count: totalActions,
      collapsible: true,
      collapsed: false,
      children: actionChildren,
    })
  }
  
  return outline
}

/**
 * Find outline item by ID (recursive)
 */
export function findOutlineItem(items: OutlineItem[], id: string): OutlineItem | null {
  for (const item of items) {
    if (item.id === id) {
      return item
    }
    if (item.children) {
      const found = findOutlineItem(item.children, id)
      if (found) return found
    }
  }
  return null
}

/**
 * Build outline from Scribe Encounter
 */
export function buildScribeOutline(
  encounterState: 'pre-recording' | 'active-recording' | 'post-recording',
  hasPatient: boolean = false
): OutlineItem[] {
  const outline: OutlineItem[] = []
  
  // Patient section - always visible
  outline.push({
    id: 'patient',
    type: 'section',
    label: 'Patient',
    icon: 'user-plus',
    collapsible: false,
    children: hasPatient ? [
      {
        id: 'patient-info',
        type: 'message',
        label: 'John Doe - MRN: 123456',
        icon: 'user-plus',
        collapsible: false,
        data: {
          name: 'John Doe',
          mrn: '123456',
          age: 45,
          gender: 'Male'
        }
      }
    ] : [],
  })
  
  // Transcript - only show after encounter starts
  if (encounterState !== 'pre-recording' && hasPatient) {
    outline.push({
      id: 'transcript',
      type: 'message',
      label: 'Transcript',
      icon: 'file-text',
      collapsible: false,
    })
  }
  
  // Documents section - always visible
  const documentChildren: OutlineItem[] = []
  
  if (hasPatient) {
    // Session Files subsection
    if (encounterState !== 'pre-recording') {
      documentChildren.push({
        id: 'session-files',
        type: 'section',
        label: 'Session Files',
        icon: 'file-text',
        count: 2,
        collapsible: true,
        collapsed: false,
        children: [
          {
            id: 'audio-recording',
            type: 'document',
            label: 'Audio Recording',
            icon: 'file-text',
            status: 'completed',
            data: { 
              id: 'audio-1',
              name: 'Audio Recording',
              type: 'audio',
              duration: '06:23',
              size: '5.8 MB'
            },
          },
          {
            id: 'lab-results',
            type: 'document',
            label: 'Lab Results.pdf',
            icon: 'file-text',
            status: 'none',
            data: {
              id: 'lab-1',
              name: 'Lab Results.pdf',
              type: 'pdf',
              uploadTime: 'Just now',
              size: '245 KB'
            },
          },
        ],
      })
    }
    
    // Session Notes subsection - only show if encounter has started
    if (encounterState === 'post-recording') {
      documentChildren.push({
        id: 'session-notes',
        type: 'section',
        label: 'Session Notes',
        icon: 'file-text',
        count: 1,
        collapsible: true,
        collapsed: false,
        children: [
          {
            id: 'soap-note-draft',
            type: 'document',
            label: 'SOAP Note',
            icon: 'file-text',
            status: 'pending',
            data: {
              id: 'note-1',
              name: 'SOAP Note',
              type: 'note',
              status: 'Draft',
              time: 'Just now'
            },
          },
        ],
      })
    }
    
    // Previous Notes subsection
    documentChildren.push({
      id: 'previous-notes',
      type: 'section',
      label: 'Previous Notes',
      icon: 'file-text',
      count: 5,
      collapsible: true,
      collapsed: true,
      children: [
        {
          id: 'prev-soap-1',
          type: 'document',
          label: 'SOAP Note',
          icon: 'file-text',
          status: 'none',
          data: { id: 'prev-1', name: 'SOAP Note', time: '2 weeks ago' },
        },
        {
          id: 'prev-hp-1',
          type: 'document',
          label: 'H&P',
          icon: 'file-text',
          status: 'none',
          data: { id: 'prev-2', name: 'H&P', time: '1 month ago' },
        },
        {
          id: 'prev-progress-1',
          type: 'document',
          label: 'Progress Note',
          icon: 'file-text',
          status: 'none',
          data: { id: 'prev-3', name: 'Progress Note', time: '2 months ago' },
        },
      ],
    })
    
    // Patient Files subsection
    documentChildren.push({
      id: 'patient-files',
      type: 'section',
      label: 'Patient Files',
      icon: 'file-text',
      count: 3,
      collapsible: true,
      collapsed: true,
      children: [
        {
          id: 'ekg-results',
          type: 'document',
          label: 'EKG Results',
          icon: 'file-text',
          status: 'none',
          data: { id: 'file-1', name: 'EKG Results', time: '3 months ago' },
        },
        {
          id: 'blood-work',
          type: 'document',
          label: 'Blood Work',
          icon: 'file-text',
          status: 'none',
          data: { id: 'file-2', name: 'Blood Work', time: '6 months ago' },
        },
        {
          id: 'imaging-report',
          type: 'document',
          label: 'Imaging Report',
          icon: 'file-text',
          status: 'none',
          data: { id: 'file-3', name: 'Imaging Report', time: '1 year ago' },
        },
      ],
    })
  }
  
  outline.push({
    id: 'documents',
    type: 'section',
    label: 'Documents',
    icon: 'file-text',
    count: documentChildren.length > 0 ? documentChildren.reduce((acc, child) => acc + (child.count || 0), 0) : undefined,
    collapsible: true,
    collapsed: false,
    children: documentChildren,
  })
  
  return outline
}

/**
 * Build outline from Document Extraction Session
 */
export function buildDocumentOutline(
  sessionState: 'no-documents' | 'uploading' | 'processing' | 'viewing',
  documents: any[] = []
): OutlineItem[] {
  const outline: OutlineItem[] = []
  
  // Documents section - always visible
  if (documents.length > 0) {
    outline.push({
      id: 'documents',
      type: 'section',
      label: 'Documents',
      icon: 'file-text',
      count: documents.length,
      collapsible: true,
      collapsed: false,
      children: documents.map((doc) => ({
        id: `document-${doc.id}`,
        type: 'document',
        label: doc.name,
        icon: 'file-text',
        status: doc.status === 'completed' ? 'completed' : 
                doc.status === 'processing' ? 'pending' : 'none',
        data: doc,
      })),
    })
  }
  
  // Extracted Data section - only show when viewing
  if (sessionState === 'viewing') {
    outline.push({
      id: 'extracted-data',
      type: 'section',
      label: 'Extracted Data',
      icon: 'beaker',
      collapsible: false,
    })
  }
  
  return outline
}

/**
 * Get all item IDs (for collapse/expand all)
 */
export function getAllItemIds(items: OutlineItem[]): string[] {
  const ids: string[] = []
  for (const item of items) {
    ids.push(item.id)
    if (item.children) {
      ids.push(...getAllItemIds(item.children))
    }
  }
  return ids
}

