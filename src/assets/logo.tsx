import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/images/caesar-health-simplified.svg"
      alt="Caesar Health"
      className={cn('size-6', className)}
      style={{
        filter: 'drop-shadow(0 1px 4px rgba(255, 118, 0, 0.2))',
      }}
    />
  )
}
