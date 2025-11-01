/**
 * Reusable Column Builders
 * Generic column definitions that can be shared across all entity tables
 */

// @ts-nocheck - Needs type refactoring
import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { DataTableColumnHeader } from '@/components/data-table'
import { PatientCell, PriorityCell, CategoryCell, TimestampCell } from '@/components/data-table/columns'
import { AlertCircle, Bot, User } from 'lucide-react'

/**
 * Patient column - works for any entity with patient field
 */
export function createPatientColumn<T extends { patient?: any }>(): ColumnDef<T> {
  return {
    accessorKey: 'patient',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Patient" />
    ),
    cell: ({ row }) => <PatientCell patient={row.original.patient} />,
    filterFn: (row, id, value) => {
      if (!value || !row.original.patient) return true
      return row.original.patient.mrn === value
    },
  }
}

/**
 * Timestamp column - works for any entity with timestamp field
 */
export function createTimestampColumn<T extends Record<string, any>>(
  title: 'Received' | 'Sent' | 'Time' = 'Received'
): ColumnDef<T> {
  return {
    accessorKey: 'timestamp',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={title} />
    ),
    cell: ({ row }) => {
      // Handle different timestamp locations
      const timestamp = (row.original as any).timestamp || (row.original as any).lastMessage?.timestamp
      return <TimestampCell timestamp={timestamp} />
    },
  }
}

/**
 * Category column - works for any entity with categories array
 */
export function createCategoryColumn<T extends { categories: string[] }>(): ColumnDef<T> {
  return {
    accessorKey: 'categories',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      const categories = row.original.categories
      if (categories.length === 0) return null
      
      return (
        <div className="flex items-center gap-1">
          <CategoryCell category={categories[0] as any} />
          {categories.length > 1 && (
            <Badge variant="secondary" className="text-xs">
              +{categories.length - 1}
            </Badge>
          )}
        </div>
      )
    },
    filterFn: (row, id, value) => {
      if (!value || !Array.isArray(value) || value.length === 0) return true
      const categories = row.original.categories || []
      return value.some((v: string) => categories.includes(v))
    },
  }
}

/**
 * Priority column - works for any entity with priority field
 */
export function createPriorityColumn<T extends { priority: any }>(): ColumnDef<T> {
  return {
    accessorKey: 'priority',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => <PriorityCell priority={row.original.priority} />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  }
}

/**
 * Workflow column - works for any entity with workflowState and ViewModel
 */
export function createWorkflowColumn<T extends { workflowState: string }>(
  ViewModelClass: any
): ColumnDef<T> {
  return {
    accessorKey: 'workflowState',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Workflow" />
    ),
    cell: ({ row }) => {
      const vm = new ViewModelClass(row.original)
      const needsAttention = vm.needsAttention
      
      const variantMap = {
        'success': 'default' as const,
        'warning': 'outline' as const,
        'destructive': 'destructive' as const,
        'default': 'secondary' as const,
      }
      const badgeVariant = variantMap[vm.statusColor]
      
      return (
        <div className="flex items-center gap-2">
          {needsAttention && (
            <AlertCircle className="h-3 w-3 text-amber-600" />
          )}
          {row.original.workflowState.includes('ai') && (
            <Bot className="h-3 w-3 text-blue-600" />
          )}
          {row.original.workflowState.includes('human') && (
            <User className="h-3 w-3 text-green-600" />
          )}
          <Badge variant={badgeVariant} className="text-xs">
            {vm.statusDisplay}
          </Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  }
}

