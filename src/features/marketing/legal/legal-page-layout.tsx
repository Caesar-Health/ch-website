import { ReactNode } from 'react'

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg border p-8 shadow-sm md:p-12">
          <div className="mb-8 border-b pb-6">
            <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h1>
            <p className="text-muted-foreground text-sm">
              Last Updated: {lastUpdated}
            </p>
          </div>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

