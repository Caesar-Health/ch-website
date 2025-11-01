import { Link } from '@tanstack/react-router'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getIconComponent } from '@/lib/get-icon'
import { 
  type AgentCategory, 
  getAgentsByCategory,
  agentCategories 
} from '@/data/ai-agents'

interface CategoryPageProps {
  category: AgentCategory
}

export function CategoryPage({ category }: CategoryPageProps) {
  const categoryConfig = agentCategories[category]
  const agents = getAgentsByCategory(category)
  const CategoryIcon = getIconComponent(categoryConfig.icon)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative overflow-hidden py-20"
        style={{
          background: `linear-gradient(135deg, ${categoryConfig.color.primary}15 0%, ${categoryConfig.color.light}10 100%)`,
        }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Category Icon */}
            <div 
              className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl"
              style={{
                backgroundColor: `${categoryConfig.color.primary}20`,
                borderColor: categoryConfig.color.primary,
                borderWidth: '2px',
              }}
            >
              <CategoryIcon className="h-10 w-10" style={{ color: categoryConfig.color.primary }} />
            </div>

            {/* Category Name */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {categoryConfig.name}
              <span className="block mt-2">AI Agents</span>
            </h1>

            {/* Category Description */}
            <p className="mb-8 text-xl text-muted-foreground">
              {categoryConfig.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/">
                View All Agents
              </Link>
            </Button>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div 
            className="absolute -top-40 -right-40 h-80 w-80 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: categoryConfig.color.primary }}
          />
          <div 
            className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: categoryConfig.color.light }}
          />
        </div>
      </div>

      {/* Agents Grid */}
      <div className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Available Agents
            </h2>
            <p className="text-muted-foreground text-lg">
              {agents.length} specialized AI agents in this category
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => {
              const AgentIcon = agent.icon ? getIconComponent(agent.icon) : null
              return (
                <Link
                  key={agent.id}
                  to={agent.href}
                  className="group"
                >
                  <Card 
                    className="h-full transition-all hover:shadow-lg border-l-4"
                    style={{ borderLeftColor: categoryConfig.color.primary }}
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div 
                          className="flex h-12 w-12 items-center justify-center rounded-lg"
                          style={{ backgroundColor: `${categoryConfig.color.primary}20` }}
                        >
                          {AgentIcon && <AgentIcon className="h-6 w-6" style={{ color: categoryConfig.color.primary }} />}
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                      </div>

                    <h3 className="mb-2 text-xl font-semibold">
                      {agent.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 text-sm">
                      {agent.description}
                    </p>

                    {/* Key Capabilities */}
                    {agent.capabilities && (
                      <div className="space-y-2">
                        {agent.capabilities.slice(0, 3).map((capability, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: categoryConfig.color.primary }} />
                            <span className="text-muted-foreground">{capability}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Impact Metrics */}
                    {agent.impact && agent.impact.length > 0 && (
                      <div className="mt-4 pt-4 border-t">
                        <div className="space-y-1">
                          {agent.impact.slice(0, 2).map((metric, index) => (
                            <div key={index} className="text-sm font-medium" style={{ color: categoryConfig.color.primary }}>
                              {metric}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Key Benefits & Stats Section */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Stats */}
          {categoryConfig.stats && (
            <div className="mb-12">
              <h2 className="mb-6 text-center text-2xl font-bold">
                Category Impact
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {categoryConfig.stats.map((stat, index) => (
                  <Card 
                    key={index}
                    className="border-2"
                    style={{ borderColor: `${categoryConfig.color.primary}40` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div 
                        className="mb-2 text-3xl font-bold"
                        style={{ color: categoryConfig.color.primary }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Category Benefits */}
          {categoryConfig.benefits && (
            <div className="mb-12">
              <h2 className="mb-6 text-center text-2xl font-bold">
                Key Benefits
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {categoryConfig.benefits.map((benefit, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Check 
                          className="h-6 w-6 mt-0.5 flex-shrink-0"
                          style={{ color: categoryConfig.color.primary }}
                        />
                        <p className="text-base font-medium">
                          {benefit}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* General Benefits */}
          <div>
            <h2 className="mb-6 text-center text-2xl font-bold">
              Why Choose Caesar Health AI Agents
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">24/7 Availability</h3>
                  <p className="text-muted-foreground text-sm">
                    Your AI agents never sleep, never call in sick, and never need breaks
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">HIPAA Compliant</h3>
                  <p className="text-muted-foreground text-sm">
                    Enterprise-grade security and compliance built into every interaction
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">Seamless Integration</h3>
                  <p className="text-muted-foreground text-sm">
                    Works with your existing EHR and practice management systems
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card 
            className="border-2"
            style={{ borderColor: categoryConfig.color.primary }}
          >
            <CardContent className="p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Ready to Transform Your {categoryConfig.name}?
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                See how our AI agents can help you deliver better care, reduce costs, and improve outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/">
                  View All Agent Categories
                </Link>
              </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

