import { Image, DollarSign, FileText, Video, Sparkles } from 'lucide-react'
import { SectionHero } from '../../components/section-hero'
import { SectionWrapper } from '../../components/section-wrapper'
import { CtaButton } from '../../components/cta-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Dermatology() {
  return (
    <div>
      {/* Hero Section */}
      <SectionHero
        headline="The EMR That Sees What You See"
        subheadline="Dermatology is visual. Your EMR should be too. Caesar Health combines AI-powered image analysis, cosmetic/medical billing intelligence, and telemedicine-optimized workflows in one platform built for dermatologists."
        primaryCta={{ text: 'See Dermatology Demo' }}
        secondaryCta={{ text: 'Talk to a Derm Specialist' }}
      />

      {/* The Problem */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Generic EMRs Don't Understand Dermatology
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                Images Are Everything, But EMRs Treat Them as Attachments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Clinical photography is central to derm care
              </p>
              <p className="text-muted-foreground">
                • Generic EMRs: Upload images as PDFs or JPEGs, buried in documents
              </p>
              <p className="text-muted-foreground">
                • No image comparison tools (baseline vs. follow-up)
              </p>
              <p className="text-muted-foreground">
                • No AI analysis of lesions, rashes, or treatment response
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cosmetic vs. Medical Billing is a Nightmare</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Same visit might include medical (insurance) and cosmetic
                (self-pay) procedures
              </p>
              <p className="text-muted-foreground">
                • Generic EMRs can't split billing automatically
              </p>
              <p className="text-muted-foreground">
                • Manual tracking leads to errors and lost revenue
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Procedure Documentation is Tedious</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Biopsies, excisions, cryotherapy, injections—all require detailed
                documentation
              </p>
              <p className="text-muted-foreground">
                • Body diagrams are clunky or non-existent
              </p>
              <p className="text-muted-foreground">
                • Pathology results require manual follow-up
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Teledermatology is Bolted On</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Store-and-forward (async) and live video are different workflows
              </p>
              <p className="text-muted-foreground">
                • Image quality is inconsistent
              </p>
              <p className="text-muted-foreground">
                • No integrated triage for urgent vs. routine cases
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* The Solution */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Purpose-Built for Dermatology Workflows
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Image className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>AI-Powered Clinical Imaging</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Smart Image Capture: Mobile app or in-office camera with automatic
                metadata
              </p>
              <p className="text-muted-foreground">
                • AI Analysis: Automated detection of melanoma risk, acne severity,
                psoriasis coverage
              </p>
              <p className="text-muted-foreground">
                • Side-by-Side Comparison: Baseline vs. follow-up with AI-highlighted
                changes
              </p>
              <p className="text-muted-foreground">
                • Integrated Body Diagrams: Click to document lesion location
              </p>
              <p className="text-muted-foreground">
                • Pathology Integration: Biopsy results flow directly to patient
                chart
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Intelligent Cosmetic/Medical Billing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Automatic Splitting: AI determines which procedures are medical vs.
                cosmetic
              </p>
              <p className="text-muted-foreground">
                • Dual Invoicing: Generate insurance claim AND self-pay invoice in
                one click
              </p>
              <p className="text-muted-foreground">
                • Cosmetic Package Tracking: Manage Botox/filler packages, track
                units used
              </p>
              <p className="text-muted-foreground">
                • Medical Necessity Documentation: AI suggests appropriate ICD-10
                codes
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Procedure Documentation Made Easy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Specialty Templates: Pre-built notes for biopsies, excisions,
                cryotherapy, laser, injections
              </p>
              <p className="text-muted-foreground">
                • Voice-to-Structured Data: "3mm punch biopsy, left cheek" →
                Auto-populates fields
              </p>
              <p className="text-muted-foreground">
                • Automated CPT Coding: AI suggests correct procedure codes
              </p>
              <p className="text-muted-foreground">
                • Supply Tracking: Auto-decrement Botox units, filler syringes from
                inventory
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Teledermatology-Native</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Store-and-Forward: Patients upload images via portal, derm reviews
                asynchronously
              </p>
              <p className="text-muted-foreground">
                • Live Video: HIPAA-compliant video visits with screen annotation
              </p>
              <p className="text-muted-foreground">
                • AI Triage: Prioritize urgent cases (suspected melanoma) vs. routine
              </p>
              <p className="text-muted-foreground">
                • Hybrid Scheduling: Seamlessly mix in-person, video, and async
                visits
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Dermatology-Specific Clinical Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Acne Severity Scoring: Automated IGA tracking
              </p>
              <p className="text-muted-foreground">
                • PASI Calculator: Psoriasis Area and Severity Index with visual body
                map
              </p>
              <p className="text-muted-foreground">
                • Skin Cancer Surveillance: Track high-risk patients, auto-schedule
                annual checks
              </p>
              <p className="text-muted-foreground">
                • Treatment Response Tracking: Visual timelines showing
                before/during/after images
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Workflows by Practice Type */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Workflows by Practice Type
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Medical Dermatology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Use Case: Skin Cancer Screening & Management</strong>
              </p>
              <p className="text-muted-foreground mb-4 text-sm">
                Patient checks in → AI flags overdue annual exam → Provider performs
                full-body exam → AI suggests biopsy → Results auto-alert provider →
                Treatment plan auto-generates
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Benefits:</p>
                <p className="text-muted-foreground text-sm">
                  • Zero missed follow-ups with automated tracking
                </p>
                <p className="text-muted-foreground text-sm">
                  • Faster diagnosis with AI-assisted triage
                </p>
                <p className="text-muted-foreground text-sm">
                  • Complete documentation for medical-legal protection
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cosmetic Dermatology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Use Case: Botox/Filler Treatment</strong>
              </p>
              <p className="text-muted-foreground mb-4 text-sm">
                Patient books cosmetic consult → Provider reviews treatment history
                and photos → Treatment plan: 40 units Botox → AI auto-generates
                invoice, processes payment → Inventory auto-decrements → Follow-up
                photos scheduled
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Benefits:</p>
                <p className="text-muted-foreground text-sm">
                  • Maximize cosmetic revenue with accurate tracking and billing
                </p>
                <p className="text-muted-foreground text-sm">
                  • Reduce product waste with inventory management
                </p>
                <p className="text-muted-foreground text-sm">
                  • Improve patient satisfaction with visual treatment tracking
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mohs Surgery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Use Case: Mohs Micrographic Surgery</strong>
              </p>
              <p className="text-muted-foreground mb-4 text-sm">
                Pre-op documentation with lesion photos → Stage-by-stage
                documentation → Integrated pathology review → Reconstruction
                documentation → Automated CPT coding for multiple stages
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Benefits:</p>
                <p className="text-muted-foreground text-sm">
                  • Accurate reimbursement for complex procedures
                </p>
                <p className="text-muted-foreground text-sm">
                  • Streamlined workflow during time-sensitive surgery
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pediatric Dermatology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Use Case: Eczema Management</strong>
              </p>
              <p className="text-muted-foreground mb-4 text-sm">
                Growth tracking integrated with skin condition severity → Parent
                portal for home treatment photos → Automated refill requests →
                Educational resources auto-sent
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Benefits:</p>
                <p className="text-muted-foreground text-sm">
                  • Better parent engagement with portal tools
                </p>
                <p className="text-muted-foreground text-sm">
                  • Improved adherence with automated reminders
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Transparent Pricing for Practices of All Sizes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Solo/Small Practice</CardTitle>
              <p className="text-muted-foreground mt-2">1-3 providers</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-3xl font-bold">$249</p>
              <p className="text-muted-foreground mb-4 text-sm">/provider/month</p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• EMR, AI imaging</li>
                <li>• Cosmetic billing</li>
                <li>• Teledermatology</li>
                <li>• Patient portal</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <CardTitle>Group Practice</CardTitle>
              <p className="text-muted-foreground mt-2">4-10 providers</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-3xl font-bold">$199</p>
              <p className="text-muted-foreground mb-4 text-sm">/provider/month</p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Everything in Solo</li>
                <li>• Inventory management</li>
                <li>• Advanced analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Large Practice/Multi-Location</CardTitle>
              <p className="text-muted-foreground mt-2">11+ providers</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-3xl font-bold">Custom</p>
              <p className="text-muted-foreground mb-4 text-sm">pricing</p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Everything in Group</li>
                <li>• API access</li>
                <li>• Custom integrations</li>
                <li>• White-label patient app</li>
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
                    vs. 6-8% industry standard
                  </p>
                </div>
                <p className="text-xl font-bold">4%</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="font-semibold">Advanced AI Imaging</p>
                  <p className="text-muted-foreground text-sm">
                    Melanoma detection, treatment response tracking
                  </p>
                </div>
                <p className="text-xl font-bold">$99/provider/month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="bg-primary/5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            See Dermatology Through a New Lens
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
            Join dermatologists who've eliminated image chaos, streamlined cosmetic
            billing, and reclaimed time for patient care.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton size="lg">Schedule Dermatology Demo</CtaButton>
            <CtaButton size="lg" variant="outline">
              Download: The Dermatologist's Guide to AI-Powered EMRs
            </CtaButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

