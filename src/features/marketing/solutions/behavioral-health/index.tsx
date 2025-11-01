import { Brain, Shield, Users, Video, Heart, TrendingUp } from 'lucide-react'
import { SectionHero } from '../../components/section-hero'
import { SectionWrapper } from '../../components/section-wrapper'
import { CtaButton } from '../../components/cta-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function BehavioralHealth() {
  return (
    <div>
      {/* Hero Section */}
      <SectionHero
        headline="The EMR Built for How Therapists Actually Work"
        subheadline="Generic EMRs force behavioral health providers into rigid medical workflows. Caesar Health understands therapy: flexible note templates, outcome tracking, integrated patient engagement, and privacy that goes beyond HIPAA."
        primaryCta={{ text: 'See Behavioral Health Demo' }}
        secondaryCta={{ text: 'Talk to a Specialist' }}
      />

      {/* The Problem */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Your EMR Was Built for Medical Doctors, Not Mental Health Providers
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Documentation Burden is Worse</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Therapy sessions are 45-60 minutes of conversation
              </p>
              <p className="text-muted-foreground">
                • Progress notes require detailed narrative, not checkbox templates
              </p>
              <p className="text-muted-foreground">
                • Treatment plans are individualized, not protocol-driven
              </p>
              <p className="text-muted-foreground">
                • Providers spend 2-3 hours on notes after a full day of sessions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Generic Templates Don't Fit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Medical SOAP notes don't capture therapeutic process
              </p>
              <p className="text-muted-foreground">
                • No support for modality-specific documentation (CBT, DBT, EMDR,
                etc.)
              </p>
              <p className="text-muted-foreground">
                • Outcome measures (PHQ-9, GAD-7) are manual add-ons
              </p>
              <p className="text-muted-foreground">
                • Group therapy notes are an afterthought
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy & Stigma Concerns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Patients fear their mental health data being shared
              </p>
              <p className="text-muted-foreground">
                • Psychotherapy notes need extra protection (42 CFR Part 2)
              </p>
              <p className="text-muted-foreground">
                • Staff need granular access controls (billing can't see clinical
                notes)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Patient Engagement is Critical</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Therapy homework and between-session check-ins are manual
              </p>
              <p className="text-muted-foreground">
                • No-show rates are higher (20-30% vs. 5-10% in primary care)
              </p>
              <p className="text-muted-foreground">
                • Crisis management requires 24/7 availability
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reimbursement Challenges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Complex billing rules (individual vs. group, telehealth modifiers)
              </p>
              <p className="text-muted-foreground">
                • Prior authorizations for ongoing therapy
              </p>
              <p className="text-muted-foreground">
                • Insurance denials for "medical necessity"
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* The Solution */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Purpose-Built for Behavioral Health Workflows
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Intelligent Therapy Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • AI Scribe for Therapy: Understands therapeutic language, not just
                medical terminology
              </p>
              <p className="text-muted-foreground">
                • Modality-Specific Templates: Pre-built structures for CBT, DBT,
                psychodynamic, EMDR, family therapy
              </p>
              <p className="text-muted-foreground">
                • Flexible Narrative: AI generates drafts that capture therapeutic
                process
              </p>
              <p className="text-muted-foreground">
                • Separate Psychotherapy Notes: HIPAA-compliant separation of
                billing and protected notes
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Integrated Outcome Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Automated Assessments: PHQ-9, GAD-7, PCL-5, OQ-45 via patient
                portal
              </p>
              <p className="text-muted-foreground">
                • Measurement-Based Care: Track symptom changes over time with
                visual dashboards
              </p>
              <p className="text-muted-foreground">
                • Session-by-Session Feedback: Real-time alerts if patient is
                deteriorating
              </p>
              <p className="text-muted-foreground">
                • Outcomes Reporting: Demonstrate effectiveness to payers
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Patient Engagement Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Therapy Homework Portal: Assign worksheets, thought records, and
                exercises
              </p>
              <p className="text-muted-foreground">
                • Between-Session Check-Ins: Automated SMS or app-based mood
                tracking
              </p>
              <p className="text-muted-foreground">
                • Crisis Support: 24/7 AI triage for urgent messages, escalates to
                on-call provider
              </p>
              <p className="text-muted-foreground">
                • Appointment Reminders: Reduce no-shows with multi-channel
                reminders
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Group Therapy Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Group Scheduling: Manage recurring sessions with roster tracking
              </p>
              <p className="text-muted-foreground">
                • Group Notes: Document group process and individual participation
              </p>
              <p className="text-muted-foreground">
                • Billing Automation: Correct CPT codes and modifiers for group vs.
                individual
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Enhanced Privacy Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Role-Based Access: Billing staff see demographics only, not
                clinical content
              </p>
              <p className="text-muted-foreground">
                • 42 CFR Part 2 Compliance: Extra protections for substance use
                disorder treatment
              </p>
              <p className="text-muted-foreground">
                • Patient Consent Management: Granular control over information
                sharing
              </p>
              <p className="text-muted-foreground">
                • Encrypted Messaging: Secure patient-provider communication
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Telehealth-Native</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Integrated Video: HIPAA-compliant video sessions directly in the
                platform
              </p>
              <p className="text-muted-foreground">
                • Hybrid Scheduling: Seamlessly mix in-person and virtual
                appointments
              </p>
              <p className="text-muted-foreground">
                • State Licensing Tracking: Alerts for out-of-state telehealth
                compliance
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Specialty Workflows */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            We Support Your Specific Practice Model
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Individual & Group Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Solo therapists to multi-provider groups
              </p>
              <p className="text-muted-foreground">
                • Shared calendar and coverage management
              </p>
              <p className="text-muted-foreground">
                • Centralized billing and credentialing
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intensive Outpatient Programs (IOP)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Track attendance across multiple weekly sessions
              </p>
              <p className="text-muted-foreground">
                • Progress tracking toward treatment goals
              </p>
              <p className="text-muted-foreground">
                • Insurance authorization management
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Substance Use Disorder Treatment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • 42 CFR Part 2 compliance built-in
              </p>
              <p className="text-muted-foreground">
                • Medication-Assisted Treatment (MAT) tracking
              </p>
              <p className="text-muted-foreground">
                • Urine drug screen results integration
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Child & Adolescent Therapy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Parent portal for homework and communication
              </p>
              <p className="text-muted-foreground">• School collaboration tools</p>
              <p className="text-muted-foreground">
                • Developmental assessments and tracking
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Psychiatric Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Medication management workflows
              </p>
              <p className="text-muted-foreground">
                • Prescription tracking and refill management
              </p>
              <p className="text-muted-foreground">
                • Integration with e-prescribing (EPCS-enabled)
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Benefits by Role */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Benefits by Role
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-semibold">For Therapists</h3>
            <ul className="text-muted-foreground space-y-3">
              <li>• Spend 60% less time on documentation with AI-generated notes</li>
              <li>• Better clinical outcomes with measurement-based care</li>
              <li>• Reduce burnout by eliminating administrative friction</li>
              <li>
                • Focus on the therapeutic relationship, not the computer
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">For Psychiatrists</h3>
            <ul className="text-muted-foreground space-y-3">
              <li>
                • Streamlined med management with prescription tracking and drug
                interaction alerts
              </li>
              <li>
                • Integrated therapy + medication notes for collaborative care
              </li>
              <li>• Faster documentation for brief med checks</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">For Practice Managers</h3>
            <ul className="text-muted-foreground space-y-3">
              <li>
                • Reduce no-show rate by 40%+ with automated reminders and
                engagement
              </li>
              <li>• Faster reimbursement with clean claims and denial management</li>
              <li>
                • Staff efficiency: 1 admin can support 10+ providers (vs. 5-7 with
                manual systems)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">For Patients</h3>
            <ul className="text-muted-foreground space-y-3">
              <li>• Easy access to care with online scheduling and telehealth</li>
              <li>
                • Active participation through homework portal and check-ins
              </li>
              <li>
                • Privacy assurance with transparent consent and access controls
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Affordable for Practices of All Sizes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Solo/Small Practice</CardTitle>
              <p className="text-muted-foreground mt-2">1-5 providers</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-3xl font-bold">$199</p>
              <p className="text-muted-foreground mb-4 text-sm">/provider/month</p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• EMR, AI scribe, patient portal</li>
                <li>• Telehealth</li>
                <li>• Billing</li>
                <li>• No setup fees</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <CardTitle>Group Practice</CardTitle>
              <p className="text-muted-foreground mt-2">6-20 providers</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-3xl font-bold">$149</p>
              <p className="text-muted-foreground mb-4 text-sm">/provider/month</p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Everything in Solo</li>
                <li>• Group therapy tools</li>
                <li>• Outcome tracking</li>
                <li>• Dedicated account manager</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Large Organization</CardTitle>
              <p className="text-muted-foreground mt-2">21+ providers</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-3xl font-bold">Custom</p>
              <p className="text-muted-foreground mb-4 text-sm">pricing</p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Everything in Group</li>
                <li>• API access</li>
                <li>• Custom integrations</li>
                <li>• White-label options</li>
                <li>• Implementation support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-center text-xl font-semibold">Add-Ons</h3>
          <div className="mx-auto max-w-2xl space-y-3">
            <Card>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="font-semibold">RCM Services</p>
                  <p className="text-muted-foreground text-sm">
                    vs. 7-10% industry standard
                  </p>
                </div>
                <p className="text-xl font-bold">5%</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="font-semibold">Patient Engagement Suite</p>
                  <p className="text-muted-foreground text-sm">
                    Homework portal, check-ins, crisis triage
                  </p>
                </div>
                <p className="text-xl font-bold">$2/patient/month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="bg-primary/5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Finally, an EMR That Understands Behavioral Health
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
            Join hundreds of therapists, psychiatrists, and behavioral health
            organizations who've reclaimed their time and improved patient outcomes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton size="lg">Schedule a Behavioral Health Demo</CtaButton>
            <CtaButton size="lg" variant="outline">
              Download: The Complete Guide to Behavioral Health EMR Selection
            </CtaButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

