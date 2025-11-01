import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X, ChevronDown } from 'lucide-react'
import { CaesarHealthLogo } from '@/assets/caesar-health-logo'
import { ThemeSwitch } from '@/components/theme-switch'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { agentCategories, getAgentsByCategory } from '@/data/ai-agents'

const solutions = [
  {
    title: 'EMR Integration',
    href: '/solutions/emr-integration',
    description: 'Make your EMR smarter without ripping it out',
  },
  {
    title: 'Behavioral Health',
    href: '/solutions/behavioral-health',
    description: 'Built for how therapists actually work',
  },
  {
    title: 'Value-Based Care',
    href: '/solutions/value-based-care',
    description: 'Stop just aligning. Start executing.',
  },
  {
    title: 'Dermatology',
    href: '/solutions/dermatology',
    description: 'The EMR that sees what you see',
  },
  {
    title: 'Private Equity',
    href: '/solutions/private-equity',
    description: 'One platform. Entire portfolio.',
  },
]

// Import agent data from centralized source

export function MarketingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <CaesarHealthLogo className="h-14 w-14" />
          <span className="gold-gradient-text text-xl font-bold">Caesar Health</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {/* 1. Communication Agents */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Communication AI</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[200px] p-2">
                    {getAgentsByCategory('communication').map((agent) => (
                      <li key={agent.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={agent.href}
                            className="hover:bg-accent block rounded px-3 py-2 text-sm transition-colors"
                          >
                            {agent.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 2. Clinical */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Clinical AI</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[220px] p-2">
                    {getAgentsByCategory('clinical').map((agent) => (
                      <li key={agent.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={agent.href}
                            className="hover:bg-accent block rounded px-3 py-2 text-sm transition-colors"
                          >
                            {agent.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 3. All AI Agents - Other Categories */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>All Agents</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-[420px] gap-6 p-3">
                    <div className="flex-1 space-y-3">
                      {['patient-experience', 'revenue-cycle'].map((catId) => {
                        const category = agentCategories[catId as keyof typeof agentCategories]
                        const agents = getAgentsByCategory(catId as any)
                        
                        return (
                          <div key={catId}>
                            <Link
                              to={`/ai-agents/${catId}` as any}
                              className="hover:bg-accent mb-1 block rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide transition-colors"
                            >
                              {category.name}
                            </Link>
                            <div className="space-y-0.5">
                              {agents.map((agent) => (
                                <NavigationMenuLink key={agent.id} asChild>
                                  <Link
                                    to={agent.href}
                                    className="hover:bg-accent block rounded px-2 py-1 text-sm transition-colors"
                                  >
                                    {agent.title}
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <div className="flex-1">
                      {['care-coordination'].map((catId) => {
                        const category = agentCategories[catId as keyof typeof agentCategories]
                        const agents = getAgentsByCategory(catId as any)
                        
                        return (
                          <div key={catId}>
                            <Link
                              to={`/ai-agents/${catId}` as any}
                              className="hover:bg-accent mb-1 block rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide transition-colors"
                            >
                              {category.name}
                            </Link>
                            <div className="space-y-0.5">
                              {agents.map((agent) => (
                                <NavigationMenuLink key={agent.id} asChild>
                                  <Link
                                    to={agent.href}
                                    className="hover:bg-accent block rounded px-2 py-1 text-sm transition-colors"
                                  >
                                    {agent.title}
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 4. Solutions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutions.map((solution) => (
                      <li key={solution.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={solution.href}
                            className={cn(
                              'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors group'
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {solution.title}
                            </div>
                            <p className="text-muted-foreground group-hover:text-white line-clamp-2 text-sm leading-snug">
                              {solution.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <ThemeSwitch />
          <a href="https://app.caesarhealth.com">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </a>
          <Button size="sm">Request Demo</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitch />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t md:hidden">
          <div className="container mx-auto max-w-7xl space-y-1 px-4 py-4">
            {/* 1. Communication Expandable */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm font-medium">
                Communication AI
                <ChevronDown className="group-open:rotate-180 h-4 w-4 transition-transform" />
              </summary>
              <div className="mt-1 space-y-0.5 pl-4">
                {getAgentsByCategory('communication').map((agent) => (
                  <Link
                    key={agent.id}
                    to={agent.href}
                    className="block rounded px-3 py-1.5 text-sm transition-colors hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {agent.title}
                  </Link>
                ))}
              </div>
            </details>

            {/* 2. Clinical Expandable */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm font-medium">
                Clinical AI
                <ChevronDown className="group-open:rotate-180 h-4 w-4 transition-transform" />
              </summary>
              <div className="mt-1 space-y-0.5 pl-4">
                {getAgentsByCategory('clinical').map((agent) => (
                  <Link
                    key={agent.id}
                    to={agent.href}
                    className="block rounded px-3 py-1.5 text-sm transition-colors hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {agent.title}
                  </Link>
                ))}
              </div>
            </details>

            {/* 3. All AI Agents Expandable */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm font-medium">
                All Agents
                <ChevronDown className="group-open:rotate-180 h-4 w-4 transition-transform" />
              </summary>
              <div className="mt-2 space-y-3 pl-4">
                {['patient-experience', 'revenue-cycle', 'care-coordination'].map((catId) => {
                  const category = agentCategories[catId as keyof typeof agentCategories]
                  const agents = getAgentsByCategory(catId as any)
                  
                  return (
                    <details key={catId} className="group/category">
                      <summary className="flex cursor-pointer items-center justify-between rounded px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-accent">
                        {category.name}
                        <ChevronDown className="group-open/category:rotate-180 h-3 w-3 transition-transform" />
                      </summary>
                      <div className="mt-1 space-y-0.5 pl-3">
                          <Link
                            to={`/ai-agents/${catId}` as any}
                            className="block rounded px-3 py-1 text-xs transition-colors hover:bg-accent"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                          View all
                        </Link>
                        {agents.map((agent) => (
                          <Link
                            key={agent.id}
                            to={agent.href}
                            className="block rounded px-3 py-1 text-sm transition-colors hover:bg-accent"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {agent.title}
                          </Link>
                        ))}
                      </div>
                    </details>
                  )
                })}
              </div>
            </details>

            {/* 4. Solutions Expandable */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm font-medium">
                Solutions
                <ChevronDown className="group-open:rotate-180 h-4 w-4 transition-transform" />
              </summary>
              <div className="mt-2 space-y-1 pl-4">
                {solutions.map((solution) => (
                  <Link
                    key={solution.href}
                    to={solution.href}
                    className="block rounded-md px-3 py-2 text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="font-medium">{solution.title}</div>
                    <div className="text-muted-foreground text-xs">
                      {solution.description}
                    </div>
                  </Link>
                ))}
              </div>
            </details>

            <div className="border-t pt-4">
              <a href="https://app.caesarhealth.com" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full">
                  Login
                </Button>
              </a>
              <Button size="sm" className="mt-2 w-full">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

