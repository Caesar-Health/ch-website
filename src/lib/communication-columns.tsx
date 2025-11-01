/**
 * Generic Communication Column Builder
 * Creates standard columns for any communication entity (Email, Call, Fax, SMS)
 */

// @ts-nocheck - Needs type refactoring
import { ColumnDef } from '@tanstack/react-table'
import { SenderCell } from '@/components/data-table/columns'
import type { CommunicationEntity } from '@/types/communication-entity'
import { 
  createPatientColumn, 
  createTimestampColumn, 
  createCategoryColumn, 
  createPriorityColumn, 
  createWorkflowColumn 
} from './column-builders'

export interface CommunicationColumnsOptions<T> {
  /** View type (inbox/sent/etc.) */
  view: string
  /** Communication type for icon */
  type: 'call' | 'email' | 'sms' | 'fax'
  /** ViewModel class for workflow column */
  ViewModelClass: any
  /** Entity-specific columns (like subject, status, duration, etc.) */
  specificColumns: ColumnDef<T>[]
}

/**
 * Build standard communication columns
 * Returns columns in order: From/To, ...specific, Date, Patient, Category, Priority, Workflow
 */
export function createCommunicationColumns<T extends Record<string, any>>(
  options: CommunicationColumnsOptions<T>
): ColumnDef<T>[] {
  const { view, type, ViewModelClass, specificColumns } = options
  const isOutboundView = view === 'sent' || view === 'outgoing'
  const dateLabel = type === 'call' ? 'Time' : (isOutboundView ? 'Sent' : 'Received')
  
  return [
    // 1. From/To - Generic sender column
    {
      accessorKey: 'sender',
      header: () => isOutboundView ? "To" : "From",
      cell: ({ row }) => {
        const comm = row.original as any
        // Handle different entity structures
        const direction = comm.direction || comm.lastMessage?.direction
        const senderName = comm.sender?.name || comm.caller?.name || comm.lastMessage?.sender?.name
        const senderContact = comm.sender?.email || comm.sender?.phone || comm.sender?.faxNumber || comm.caller?.phone || comm.lastMessage?.sender?.phone
        const recipientName = comm.recipient?.name || comm.patient?.name || comm.lastMessage?.recipient?.name
        const recipientContact = comm.recipient?.email || comm.recipient?.phone || comm.recipient?.faxNumber || comm.patient?.phone || comm.lastMessage?.recipient?.phone
        
        return (
          <SenderCell
            direction={direction}
            name={senderName}
            contact={senderContact}
            recipientName={recipientName}
            recipientContact={recipientContact}
            type={type}
          />
        )
      },
    },
    // 2. Entity-specific columns (subject, status, etc.)
    ...specificColumns,
    // 3. Date - Generic timestamp
    createTimestampColumn<any>(dateLabel as any) as ColumnDef<T>,
    // 4. Patient - Generic patient
    createPatientColumn<any>() as ColumnDef<T>,
    // 5. Category - Generic category
    createCategoryColumn<any>() as ColumnDef<T>,
    // 6. Priority - Generic priority (optional)
    createPriorityColumn<any>() as ColumnDef<T>,
    // 7. Workflow - Generic workflow
    createWorkflowColumn<any>(ViewModelClass) as ColumnDef<T>,
  ]
}

