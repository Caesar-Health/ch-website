import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Zap, Network, FileCheck } from 'lucide-react'

interface TechnicalDetail {
  label: string
  value: string
}

interface AgentTechnicalProps {
  title?: string
  details: TechnicalDetail[]
  compliance?: string[]
}

export function AgentTechnical({
  title = 'Technical Details',
  details,
  compliance = ['HIPAA Compliant', 'SOC 2 Type II Certified'],
}: AgentTechnicalProps) {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
          {title}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Network className="h-5 w-5 text-primary" />
                <CardTitle>Integration & Features</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <dl className="space-y-3">
                {details.map((detail, index) => (
                  <div key={index}>
                    <dt className="text-sm font-medium">{detail.label}</dt>
                    <dd className="text-muted-foreground text-sm">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>Security & Compliance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {compliance.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground text-sm">
                    Real-time processing and logging
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground text-sm">
                    End-to-end encryption
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

