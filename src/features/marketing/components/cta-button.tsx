import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CtaButtonProps {
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  className?: string
}

export function CtaButton({
  children,
  variant = 'default',
  size = 'default',
  className,
}: CtaButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={() => {
        // Placeholder for Calendly integration
        console.log('Request demo clicked - Calendly integration coming soon')
      }}
    >
      {children}
    </Button>
  )
}

