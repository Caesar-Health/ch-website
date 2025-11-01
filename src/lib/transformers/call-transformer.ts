/**
 * Call Data Transformers
 * Convert between backend API types and frontend UI types
 */

import type { Call, CallerRelationship, CallCategory, CallStatus, WorkflowState } from '@/types/call'
import type { ApiCallResponse, ApiCallList } from '@/types/api/call'

/**
 * Map backend status to frontend CallStatus
 */
function mapCallStatus(backendStatus: string): CallStatus {
  const statusMap: Record<string, CallStatus> = {
    'completed': 'answered',
    'in-progress': 'answered',
    'missed': 'missed',
    'voicemail': 'voicemail',
    'abandoned': 'abandoned',
    'transferred': 'transferred',
  }
  return statusMap[backendStatus] || 'answered'
}

/**
 * Map backend workflow_state to frontend WorkflowState
 */
function mapWorkflowState(backendState: string | null): WorkflowState {
  if (!backendState) return 'new'
  
  const stateMap: Record<string, WorkflowState> = {
    'new': 'new',
    'transcribing': 'transcribing',
    'ai-processing': 'ai-processing',
    'ai-completed': 'ai-completed',
    'ai-needs-review': 'ai-needs-review',
    'queued-for-review': 'queued-for-review',
    'under-review': 'under-review',
    'awaiting-info': 'awaiting-info',
    'completed-by-ai': 'completed-by-ai',
    'completed-by-human': 'completed-by-human',
    'completed-hybrid': 'completed-hybrid',
    'requires-callback': 'requires-callback',
    'escalated': 'escalated',
    'cancelled': 'cancelled',
    'failed': 'failed',
  }
  
  return stateMap[backendState] || 'new'
}

/**
 * Infer caller relationship from call metadata
 * This is a simple heuristic until backend provides this field
 */
function inferCallerRelationship(apiCall: ApiCallResponse): CallerRelationship {
  // Check metadata for relationship hints
  if (apiCall.call_metadata?.relationship) {
    return apiCall.call_metadata.relationship as CallerRelationship
  }
  
  // If patient_id is set and caller matches patient, it's self
  if (apiCall.patient_id) {
    return 'self'
  }
  
  // Default to other
  return 'other'
}

/**
 * Infer call categories from extracted data or metadata
 * This is a simple heuristic until backend provides this field
 */
function inferCallCategories(apiCall: ApiCallResponse): CallCategory[] {
  const categories: CallCategory[] = []
  
  // Check extracted_data for category hints
  if (apiCall.extracted_data) {
    const data = apiCall.extracted_data
    
    if (data.appointment || data.scheduling) categories.push('appointment')
    if (data.medication || data.prescription || data.refill) categories.push('prescription')
    if (data.billing || data.payment) categories.push('billing')
    if (data.insurance) categories.push('insurance')
    if (data.lab_results || data.labs) categories.push('lab-results')
    if (data.referral) categories.push('referral')
    if (data.clinical || data.symptoms) categories.push('clinical-question')
    if (data.follow_up) categories.push('follow-up')
    if (data.emergency || data.urgent) categories.push('emergency')
  }
  
  // Default to general if no categories found
  if (categories.length === 0) {
    categories.push('general')
  }
  
  return categories
}

/**
 * Infer priority from call data
 */
function inferPriority(apiCall: ApiCallResponse): 'routine' | 'urgent' | 'stat' {
  // Check metadata for priority
  if (apiCall.call_metadata?.priority) {
    return apiCall.call_metadata.priority as 'routine' | 'urgent' | 'stat'
  }
  
  // Check extracted_data for urgency indicators
  if (apiCall.extracted_data?.emergency || apiCall.extracted_data?.urgent) {
    return 'stat'
  }
  
  if (apiCall.extracted_data?.priority === 'high') {
    return 'urgent'
  }
  
  return 'routine'
}

/**
 * Build transcription string from structured transcript messages
 * 
 * Backend returns Retell's transcript_object which includes:
 * - role: "agent" or "user"
 * - content: Full message text
 * - words: Array with word-level timings (optional, preserved for future features)
 * - metadata: Additional Retell metadata (optional)
 */
function buildTranscription(transcript: any[] | null): string | undefined {
  if (!transcript || transcript.length === 0) return undefined
  
  return transcript
    .map(msg => {
      const role = msg.role.charAt(0).toUpperCase() + msg.role.slice(1)
      return `${role}: ${msg.content}`
    })
    .join('\n\n')
}

/**
 * Transform backend API call response to frontend Call type
 */
export function transformApiCallToCall(apiCall: ApiCallResponse): Call {
  const call: Call = {
    // Identity
    id: apiCall.id,
    
    // Caller Information
    caller: {
      name: apiCall.caller_name || 'Unknown',
      phone: apiCall.caller_phone,
      relationship: inferCallerRelationship(apiCall),
      organization: apiCall.call_metadata?.caller_organization,
    },
    
    // Patient Information (if available)
    patient: apiCall.patient_id ? {
      id: apiCall.patient_id,
      name: apiCall.call_metadata?.patient_name || 'Unknown Patient',
      mrn: apiCall.call_metadata?.patient_mrn || `MRN-${apiCall.patient_id.slice(0, 8)}`,
      phone: apiCall.call_metadata?.patient_phone,
      email: apiCall.call_metadata?.patient_email,
      avatar: apiCall.call_metadata?.patient_avatar,
    } : undefined,
    
    // Call Metadata
    direction: apiCall.direction === 'outbound' ? 'outbound' : 'inbound',
    timestamp: new Date(apiCall.created_at),
    duration: apiCall.duration || 0,
    recordingUrl: apiCall.recording_url || undefined,
    
    // Categories & Priority (inferred from data until backend provides)
    categories: inferCallCategories(apiCall),
    priority: inferPriority(apiCall),
    
    // Status & Workflow
    status: mapCallStatus(apiCall.status),
    workflowState: mapWorkflowState(apiCall.workflow_state),
    
    // Content
    transcription: buildTranscription(apiCall.transcript),
    summary: apiCall.extracted_data?.summary,
    notes: apiCall.extracted_data?.notes,
    
    // Related Actions/Entities (empty until backend provides)
    // These will be populated in future backend updates
    appointments: [],
    medications: [],
    tasks: [],
    otherActions: [],
    
    // AI Metadata (if available in extracted_data)
    ai: apiCall.extracted_data?.ai_metadata ? {
      confidence: apiCall.extracted_data.ai_metadata.confidence || 0,
      model: apiCall.extracted_data.ai_metadata.model || 'unknown',
      processedAt: new Date(apiCall.extracted_data.ai_metadata.processed_at || apiCall.updated_at),
      requiresReview: apiCall.extracted_data.ai_metadata.requires_review || false,
    } : undefined,
    
    // Review/Approval (if available in metadata)
    review: apiCall.call_metadata?.review,
    
    // Timestamps
    createdAt: new Date(apiCall.created_at),
    updatedAt: new Date(apiCall.updated_at),
  }
  
  return call
}

/**
 * Transform backend API call list to frontend format
 */
export function transformApiCallListToCalls(apiCallList: ApiCallList): Call[] {
  return apiCallList.calls.map(transformApiCallToCall)
}

/**
 * Transform frontend Call to backend update format
 * Only include fields that have changed
 */
export function transformCallToApiUpdate(call: Partial<Call>): Record<string, any> {
  const update: Record<string, any> = {}
  
  if (call.notes !== undefined) {
    if (!update.extracted_data) update.extracted_data = {}
    update.extracted_data.notes = call.notes
  }
  
  if (call.workflowState !== undefined) {
    update.workflow_state = call.workflowState
  }
  
  if (call.patient?.id !== undefined) {
    update.patient_id = call.patient.id
  }
  
  return update
}

