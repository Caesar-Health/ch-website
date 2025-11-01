import { Check, X, AlertCircle } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface ComparisonRow {
  feature: string
  caesarHealth: boolean | string
  traditional: boolean | string
  careCoordination: boolean | string
}

interface ComparisonTableProps {
  rows: ComparisonRow[]
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="h-5 w-5 text-green-600" />
    ) : (
      <X className="h-5 w-5 text-red-600" />
    )
  }
  
  if (value.startsWith('⚠️')) {
    return (
      <div className="flex items-center gap-2">
        <AlertCircle className="h-5 w-5 text-orange-600" />
        <span className="text-sm">{value.replace('⚠️ ', '')}</span>
      </div>
    )
  }
  
  return <span className="text-sm">{value}</span>
}

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Feature</TableHead>
            <TableHead className="text-center">Caesar Health</TableHead>
            <TableHead className="text-center">Traditional EMR + Add-Ons</TableHead>
            <TableHead className="text-center">Care Coordination Only</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{row.feature}</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center">
                  <CellValue value={row.caesarHealth} />
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center">
                  <CellValue value={row.traditional} />
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center">
                  <CellValue value={row.careCoordination} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

