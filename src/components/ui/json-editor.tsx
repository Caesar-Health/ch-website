/**
 * JSON Editor Component
 * A textarea-based JSON editor with validation and formatting
 */

import { useState, useEffect } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { AlertCircle, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface JsonEditorProps {
  value: Record<string, any>
  onChange: (value: Record<string, any>) => void
  label?: string
  description?: string
  className?: string
  rows?: number
  disabled?: boolean
}

export function JsonEditor({
  value,
  onChange,
  label = 'Configuration',
  description,
  className,
  rows = 10,
  disabled = false,
}: JsonEditorProps) {
  const [jsonString, setJsonString] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isValid, setIsValid] = useState(true)

  // Initialize with formatted JSON
  useEffect(() => {
    try {
      setJsonString(JSON.stringify(value, null, 2))
      setError(null)
      setIsValid(true)
    } catch (err) {
      setError('Invalid JSON object')
      setIsValid(false)
    }
  }, [value])

  const handleChange = (newValue: string) => {
    setJsonString(newValue)

    // Try to parse and validate
    try {
      const parsed = JSON.parse(newValue)
      setError(null)
      setIsValid(true)
      onChange(parsed)
    } catch (err) {
      setError((err as Error).message)
      setIsValid(false)
    }
  }

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(jsonString)
      const formatted = JSON.stringify(parsed, null, 2)
      setJsonString(formatted)
      setError(null)
      setIsValid(true)
      onChange(parsed)
    } catch (err) {
      setError((err as Error).message)
      setIsValid(false)
    }
  }

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between">
        <div>
          <Label>{label}</Label>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleFormat}
          disabled={disabled || !isValid}
        >
          Format JSON
        </Button>
      </div>

      <div className="relative">
        <Textarea
          value={jsonString}
          onChange={(e) => handleChange(e.target.value)}
          rows={rows}
          className={cn(
            'font-mono text-sm',
            !isValid && 'border-destructive focus-visible:ring-destructive'
          )}
          disabled={disabled}
          placeholder='{\n  "key": "value"\n}'
        />

        {/* Validation indicator */}
        <div className="absolute top-2 right-2">
          {isValid ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <AlertCircle className="h-4 w-4 text-destructive" />
          )}
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="flex items-start gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

