import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SectionHeroProps {
  headline: string
  subheadline: string
  primaryCta?: {
    text: string
    href?: string
  }
  secondaryCta?: {
    text: string
    href?: string
  }
  className?: string
}

export function SectionHero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  className,
}: SectionHeroProps) {
  return (
    <div className={cn('py-16 text-center sm:py-24 lg:py-32', className)}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-8 sm:text-xl">
            {subheadline}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryCta && (
                <Button size="lg" className="w-full sm:w-auto">
                  {primaryCta.text}
                </Button>
              )}
              {secondaryCta && (
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

