import { Link } from '@tanstack/react-router'
import { CaesarHealthLogo } from '@/assets/caesar-health-logo'

export function MarketingFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <CaesarHealthLogo className="h-14 w-14" />
              <span className="gold-gradient-text text-xl font-bold">Caesar Health</span>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm">
              The first AI-native healthcare platform built for the value-based
              care era.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://caesarhealth.com/solutions/emr-integration"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EMR Integration
                </a>
              </li>
              <li>
                <a
                  href="https://caesarhealth.com/solutions/behavioral-health"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behavioral Health
                </a>
              </li>
              <li>
                <a
                  href="https://caesarhealth.com/solutions/value-based-care"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Value-Based Care
                </a>
              </li>
              <li>
                <a
                  href="https://caesarhealth.com/solutions/dermatology"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dermatology
                </a>
              </li>
              <li>
                <a
                  href="https://caesarhealth.com/solutions/private-equity"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Private Equity
                </a>
              </li>
            </ul>
          </div>

          {/* AI Agents */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">AI Agents</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://caesarhealth.com"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="https://caesarhealth.com/ai-agents/phone"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Phone Agent
                </a>
              </li>
              <li>
                <a
                  href="https://caesarhealth.com/ai-agents/scribe"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AI Scribe
                </a>
              </li>
              <li>
                <a
                  href="https://caesarhealth.com/ai-agents/coding-billing"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coding & Billing
                </a>
              </li>
              <li>
                <a
                  href="https://caesarhealth.com/ai-agents/care-gap"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Care Gap Agent
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="https://app.caesarhealth.com"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="https://caesarhealth.com/privacy-policy"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://caesarhealth.com/terms-of-service"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <p className="text-muted-foreground text-center text-sm">
            © {currentYear} Caesar Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

