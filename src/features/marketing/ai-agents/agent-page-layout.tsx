import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface AgentPageLayoutProps {
  children: ReactNode
}

export function AgentPageLayout({ children }: AgentPageLayoutProps) {
  return (
    <div className="min-h-screen">
      {children}
      
      {/* CTA Section */}
      <div className="gold-gradient py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Deploy Your AI Workforce?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              See how Caesar Health agents can transform your practice in a live demo.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                Schedule Agent Demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white bg-white/10 text-white hover:bg-white hover:text-[#8B6914]">
                Download Agent Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

