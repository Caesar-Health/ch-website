import { LegalPageLayout } from './legal-page-layout'

export function TermsOfService() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="October 24, 2025">
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <p className="lead text-lg">
            Welcome to Caesar Health, Inc. These Terms of Service ("Terms") govern your access to and use of our healthcare platform, including our website, applications, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
          </p>
          <p className="mt-4">
            <strong>PLEASE READ THESE TERMS CAREFULLY BEFORE USING OUR SERVICES.</strong> If you do not agree to these Terms, you may not access or use our Services.
          </p>
        </section>

        {/* Table of Contents */}
        <section className="bg-muted rounded-lg p-6">
          <h2 className="mb-4 text-xl font-semibold">Table of Contents</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#company-info" className="text-primary hover:underline">1. Company Information</a></li>
            <li><a href="#acceptance" className="text-primary hover:underline">2. Acceptance of Terms</a></li>
            <li><a href="#services" className="text-primary hover:underline">3. Description of Services</a></li>
            <li><a href="#eligibility" className="text-primary hover:underline">4. Eligibility and Account Registration</a></li>
            <li><a href="#hipaa" className="text-primary hover:underline">5. HIPAA Compliance and Healthcare Terms</a></li>
            <li><a href="#payment" className="text-primary hover:underline">6. Payment Terms and Fees</a></li>
            <li><a href="#user-obligations" className="text-primary hover:underline">7. User Obligations and Prohibited Conduct</a></li>
            <li><a href="#ip" className="text-primary hover:underline">8. Intellectual Property Rights</a></li>
            <li><a href="#data-security" className="text-primary hover:underline">9. Data Security and Privacy</a></li>
            <li><a href="#disclaimer" className="text-primary hover:underline">10. Disclaimers and Warranties</a></li>
            <li><a href="#limitation" className="text-primary hover:underline">11. Limitation of Liability</a></li>
            <li><a href="#indemnification" className="text-primary hover:underline">12. Indemnification</a></li>
            <li><a href="#termination" className="text-primary hover:underline">13. Termination</a></li>
            <li><a href="#dispute" className="text-primary hover:underline">14. Dispute Resolution and Arbitration</a></li>
            <li><a href="#governing-law" className="text-primary hover:underline">15. Governing Law</a></li>
            <li><a href="#changes" className="text-primary hover:underline">16. Changes to Terms</a></li>
            <li><a href="#miscellaneous" className="text-primary hover:underline">17. Miscellaneous</a></li>
            <li><a href="#contact" className="text-primary hover:underline">18. Contact Information</a></li>
          </ol>
        </section>

        {/* 1. Company Information */}
        <section id="company-info">
          <h2 className="mb-4 text-2xl font-semibold">1. Company Information</h2>
          <p>
            Caesar Health, Inc. is a Delaware corporation with its principal place of business in the United States. We provide an AI-native healthcare platform designed for value-based care, care coordination, and healthcare practice management.
          </p>
        </section>

        {/* 2. Acceptance of Terms */}
        <section id="acceptance">
          <h2 className="mb-4 text-2xl font-semibold">2. Acceptance of Terms</h2>
          <p>
            By creating an account, accessing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
          </p>
        </section>

        {/* 3. Description of Services */}
        <section id="services">
          <h2 className="mb-4 text-2xl font-semibold">3. Description of Services</h2>
          <p className="mb-4">
            Caesar Health provides a comprehensive healthcare platform that includes, but is not limited to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Electronic Medical Records (EMR) integration and management</li>
            <li>AI-powered clinical documentation and medical scribing</li>
            <li>Care coordination and patient management tools</li>
            <li>Communication tools (secure messaging, fax, email)</li>
            <li>Appointment scheduling and management</li>
            <li>Task and workflow automation</li>
            <li>Analytics and reporting capabilities</li>
            <li>Value-based care optimization tools</li>
          </ul>
          <p className="mt-4">
            <strong>Medical Disclaimer:</strong> Our Services are designed to support healthcare providers in delivering care but do not constitute medical advice, diagnosis, or treatment. Healthcare professionals using our platform remain solely responsible for all clinical decisions and patient care.
          </p>
        </section>

        {/* 4. Eligibility and Account Registration */}
        <section id="eligibility">
          <h2 className="mb-4 text-2xl font-semibold">4. Eligibility and Account Registration</h2>
          <h3 className="mb-2 text-lg font-semibold">4.1 Eligibility</h3>
          <p className="mb-4">
            You must be at least 18 years old and have the legal capacity to enter into binding contracts to use our Services. Our Services are intended for healthcare providers, healthcare organizations, and their authorized personnel.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">4.2 Account Registration</h3>
          <p className="mb-4">
            To access certain features, you must register for an account. You agree to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and promptly update your account information</li>
            <li>Maintain the security and confidentiality of your login credentials</li>
            <li>Notify us immediately of any unauthorized access or security breach</li>
            <li>Accept responsibility for all activities under your account</li>
          </ul>
        </section>

        {/* 5. HIPAA Compliance and Healthcare Terms */}
        <section id="hipaa">
          <h2 className="mb-4 text-2xl font-semibold">5. HIPAA Compliance and Healthcare Terms</h2>
          
          <h3 className="mb-2 text-lg font-semibold">5.1 Business Associate Relationship</h3>
          <p className="mb-4">
            When you use our Services to process Protected Health Information ("PHI") as defined under the Health Insurance Portability and Accountability Act ("HIPAA"), Caesar Health acts as your Business Associate. A separate Business Associate Agreement ("BAA") will be executed between Caesar Health and your organization, which will govern our handling of PHI.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">5.2 HIPAA Compliance</h3>
          <p className="mb-4">
            Caesar Health implements administrative, physical, and technical safeguards to protect PHI in accordance with HIPAA and the Health Information Technology for Economic and Clinical Health Act ("HITECH Act"). However, you remain the Covered Entity responsible for:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Obtaining appropriate patient authorizations and consents</li>
            <li>Ensuring lawful disclosure of PHI</li>
            <li>Training your workforce on HIPAA compliance</li>
            <li>Implementing your own security policies and procedures</li>
            <li>Conducting required risk assessments</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">5.3 Breach Notification</h3>
          <p>
            In the event of a breach of unsecured PHI, Caesar Health will notify you without unreasonable delay and no later than 60 days from discovery of the breach, as required by HIPAA. You acknowledge that you are responsible for determining whether the incident constitutes a breach requiring patient notification and for making all required notifications to patients and governmental authorities.
          </p>
        </section>

        {/* 6. Payment Terms and Fees */}
        <section id="payment">
          <h2 className="mb-4 text-2xl font-semibold">6. Payment Terms and Fees</h2>
          
          <h3 className="mb-2 text-lg font-semibold">6.1 Subscription Fees</h3>
          <p className="mb-4">
            Access to our Services requires payment of subscription fees based on your selected plan. All fees are in U.S. Dollars and are exclusive of applicable taxes unless otherwise stated.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">6.2 Payment Processing</h3>
          <p className="mb-4">
            Payments are processed through our third-party payment processor, Stripe, Inc. By providing payment information, you authorize us to charge your designated payment method for all fees. You represent and warrant that:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>You have the legal right to use the payment method provided</li>
            <li>The payment information you provide is accurate and complete</li>
            <li>You will promptly update any changes to payment information</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">6.3 Billing and Renewal</h3>
          <p className="mb-4">
            Subscription fees are billed in advance on a recurring basis (monthly or annually, as selected). Your subscription will automatically renew unless you cancel before the renewal date. You are responsible for all charges incurred under your account.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">6.4 Refunds</h3>
          <p className="mb-4">
            Fees are non-refundable except as required by law or as expressly stated in your subscription agreement. We reserve the right to modify our fees with 30 days' prior written notice.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">6.5 Taxes</h3>
          <p>
            You are responsible for all applicable federal, state, and local sales, use, value-added, and other taxes, duties, or assessments (excluding taxes on our net income), and you will indemnify us against any such taxes or duties.
          </p>
        </section>

        {/* 7. User Obligations and Prohibited Conduct */}
        <section id="user-obligations">
          <h2 className="mb-4 text-2xl font-semibold">7. User Obligations and Prohibited Conduct</h2>
          
          <h3 className="mb-2 text-lg font-semibold">7.1 Acceptable Use</h3>
          <p className="mb-4">You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Violate any applicable federal, state, or local laws or regulations</li>
            <li>Infringe upon the rights of others, including intellectual property rights</li>
            <li>Upload or transmit viruses, malware, or other malicious code</li>
            <li>Attempt to gain unauthorized access to our Services or systems</li>
            <li>Interfere with or disrupt the integrity or performance of our Services</li>
            <li>Reverse engineer, decompile, or disassemble our Services</li>
            <li>Use our Services for any fraudulent or illegal purpose</li>
            <li>Engage in any activity that violates HIPAA or other healthcare regulations</li>
            <li>Share your account credentials with unauthorized persons</li>
            <li>Use automated systems to access our Services without authorization</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">7.2 Compliance with Healthcare Laws</h3>
          <p>
            You agree to comply with all applicable healthcare laws and regulations, including but not limited to HIPAA, HITECH, the False Claims Act, Anti-Kickback Statute, Stark Law, and state medical practice acts. You are solely responsible for ensuring that your use of our Services complies with all applicable laws.
          </p>
        </section>

        {/* 8. Intellectual Property Rights */}
        <section id="ip">
          <h2 className="mb-4 text-2xl font-semibold">8. Intellectual Property Rights</h2>
          
          <h3 className="mb-2 text-lg font-semibold">8.1 Our Rights</h3>
          <p className="mb-4">
            The Services, including all content, features, functionality, software, and technology, are owned by Caesar Health, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">8.2 Limited License</h3>
          <p className="mb-4">
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use our Services for your internal business purposes.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">8.3 Your Content</h3>
          <p className="mb-4">
            You retain all rights to the data, content, and information you submit to our Services ("Your Content"). By submitting Your Content, you grant us a limited license to use, store, process, and transmit Your Content solely to provide and improve our Services. We will not use PHI for any purpose other than providing Services to you or as required by law.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">8.4 Feedback</h3>
          <p>
            If you provide feedback, suggestions, or ideas about our Services, you grant us an unrestricted, perpetual, irrevocable, royalty-free license to use, modify, and incorporate such feedback without compensation or attribution to you.
          </p>
        </section>

        {/* 9. Data Security and Privacy */}
        <section id="data-security">
          <h2 className="mb-4 text-2xl font-semibold">9. Data Security and Privacy</h2>
          <p className="mb-4">
            We implement industry-standard security measures to protect your data, including PHI. Our security practices include:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and audits</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Employee training on data security and HIPAA compliance</li>
            <li>Incident response and breach notification procedures</li>
            <li>Regular backups and disaster recovery planning</li>
          </ul>
          <p className="mt-4">
            For detailed information about our data practices, please review our Privacy Policy.
          </p>
        </section>

        {/* 10. Disclaimers and Warranties */}
        <section id="disclaimer">
          <h2 className="mb-4 text-2xl font-semibold">10. Disclaimers and Warranties</h2>
          <div className="bg-muted rounded border-l-4 border-yellow-500 p-4">
            <p className="font-semibold uppercase">IMPORTANT - PLEASE READ CAREFULLY</p>
          </div>
          <p className="mt-4 mb-4">
            OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, CAESAR HEALTH DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT</li>
            <li>WARRANTIES REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF CONTENT</li>
            <li>WARRANTIES THAT OUR SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE</li>
            <li>WARRANTIES THAT DEFECTS WILL BE CORRECTED</li>
          </ul>
          <p className="mt-4">
            WE DO NOT WARRANT THAT OUR SERVICES WILL MEET YOUR REQUIREMENTS OR THAT ANY DATA STORED WILL BE ACCURATE OR RELIABLE. YOU ASSUME ALL RISK FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA RESULTING FROM USE OF OUR SERVICES.
          </p>
          <p className="mt-4">
            <strong>MEDICAL DISCLAIMER:</strong> OUR SERVICES DO NOT PROVIDE MEDICAL ADVICE. ALL CLINICAL DECISIONS REMAIN THE SOLE RESPONSIBILITY OF LICENSED HEALTHCARE PROVIDERS. WE ARE NOT LIABLE FOR ANY MEDICAL DECISIONS MADE BASED ON INFORMATION FROM OUR SERVICES.
          </p>
        </section>

        {/* 11. Limitation of Liability */}
        <section id="limitation">
          <h2 className="mb-4 text-2xl font-semibold">11. Limitation of Liability</h2>
          <div className="bg-muted rounded border-l-4 border-red-500 p-4">
            <p className="font-semibold uppercase">LIMITATION OF LIABILITY</p>
          </div>
          <p className="mt-4 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL CAESAR HEALTH, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
            <li>LOSS OF PROFITS, REVENUE, DATA, OR USE</li>
            <li>BUSINESS INTERRUPTION OR LOSS OF BUSINESS OPPORTUNITIES</li>
            <li>COST OF SUBSTITUTE GOODS OR SERVICES</li>
            <li>DAMAGES ARISING FROM MEDICAL DECISIONS OR PATIENT CARE</li>
          </ul>
          <p className="mt-4">
            WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p className="mt-4">
            OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO CAESAR HEALTH IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR $1,000, WHICHEVER IS GREATER.
          </p>
          <p className="mt-4">
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN WARRANTIES OR DAMAGES. IN SUCH JURISDICTIONS, OUR LIABILITY WILL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.
          </p>
        </section>

        {/* 12. Indemnification */}
        <section id="indemnification">
          <h2 className="mb-4 text-2xl font-semibold">12. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify, defend, and hold harmless Caesar Health, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Your use or misuse of our Services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any law, regulation, or third-party rights</li>
            <li>Your Content or any content submitted through your account</li>
            <li>Medical decisions or patient care provided by you or your organization</li>
            <li>Any breach of HIPAA or other healthcare regulations by you</li>
            <li>Negligence or willful misconduct by you or your employees</li>
          </ul>
          <p className="mt-4">
            This indemnification obligation will survive termination of these Terms and your use of our Services.
          </p>
        </section>

        {/* 13. Termination */}
        <section id="termination">
          <h2 className="mb-4 text-2xl font-semibold">13. Termination</h2>
          
          <h3 className="mb-2 text-lg font-semibold">13.1 Termination by You</h3>
          <p className="mb-4">
            You may terminate your account at any time by contacting our support team. Upon termination, your right to access and use our Services will immediately cease.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">13.2 Termination by Us</h3>
          <p className="mb-4">
            We may suspend or terminate your access to our Services immediately, without prior notice or liability, for any reason, including:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Violation of these Terms</li>
            <li>Non-payment of fees</li>
            <li>Fraudulent or illegal activity</li>
            <li>Risk to the security or integrity of our Services</li>
            <li>Request by law enforcement or government agencies</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">13.3 Effect of Termination</h3>
          <p className="mb-4">
            Upon termination:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>All licenses granted to you will immediately terminate</li>
            <li>You must cease all use of our Services</li>
            <li>We may delete your account and data in accordance with our data retention policies and applicable law</li>
            <li>You will provide us with instructions for return or destruction of PHI as required by our BAA</li>
            <li>Sections of these Terms that by their nature should survive will remain in effect</li>
          </ul>
        </section>

        {/* 14. Dispute Resolution and Arbitration */}
        <section id="dispute">
          <h2 className="mb-4 text-2xl font-semibold">14. Dispute Resolution and Arbitration</h2>
          
          <h3 className="mb-2 text-lg font-semibold">14.1 Informal Resolution</h3>
          <p className="mb-4">
            Before filing a claim, you agree to contact us at legal@caesarhealth.com to attempt to resolve the dispute informally. We will attempt to resolve disputes in good faith for at least 30 days.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">14.2 Binding Arbitration</h3>
          <p className="mb-4">
            If we cannot resolve a dispute informally, any dispute, claim, or controversy arising out of or relating to these Terms or our Services will be resolved by binding arbitration administered by the American Arbitration Association ("AAA") in accordance with its Commercial Arbitration Rules. The arbitration will be conducted in Delaware or another mutually agreed location.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">14.3 Class Action Waiver</h3>
          <p className="mb-4">
            YOU AND CAESAR HEALTH AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">14.4 Exceptions</h3>
          <p>
            Either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent actual or threatened infringement or misappropriation of intellectual property rights.
          </p>
        </section>

        {/* 15. Governing Law */}
        <section id="governing-law">
          <h2 className="mb-4 text-2xl font-semibold">15. Governing Law</h2>
          <p>
            These Terms and any disputes arising from or relating to these Terms or our Services shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. You consent to the exclusive jurisdiction of the federal and state courts located in Delaware for any legal proceedings not subject to arbitration.
          </p>
        </section>

        {/* 16. Changes to Terms */}
        <section id="changes">
          <h2 className="mb-4 text-2xl font-semibold">16. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. We will provide notice of material changes by:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Posting the updated Terms on our website</li>
            <li>Updating the "Last Updated" date</li>
            <li>Sending email notification to your registered email address</li>
            <li>Providing in-app notification</li>
          </ul>
          <p className="mt-4">
            Your continued use of our Services after any changes constitutes acceptance of the modified Terms. If you do not agree to the modified Terms, you must stop using our Services and terminate your account.
          </p>
        </section>

        {/* 17. Miscellaneous */}
        <section id="miscellaneous">
          <h2 className="mb-4 text-2xl font-semibold">17. Miscellaneous</h2>
          
          <h3 className="mb-2 text-lg font-semibold">17.1 Entire Agreement</h3>
          <p className="mb-4">
            These Terms, together with our Privacy Policy and any executed BAA, constitute the entire agreement between you and Caesar Health regarding our Services and supersede all prior agreements and understandings.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">17.2 Severability</h3>
          <p className="mb-4">
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">17.3 Waiver</h3>
          <p className="mb-4">
            No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">17.4 Assignment</h3>
          <p className="mb-4">
            You may not assign or transfer these Terms or your rights and obligations without our prior written consent. We may assign these Terms without restriction.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">17.5 Force Majeure</h3>
          <p className="mb-4">
            Neither party will be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including acts of God, natural disasters, war, terrorism, pandemics, labor disputes, or government actions.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">17.6 Export Compliance</h3>
          <p className="mb-4">
            You agree to comply with all applicable export and import control laws and regulations in your use of our Services.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">17.7 U.S. Government Users</h3>
          <p>
            Our Services constitute "commercial computer software" and "commercial computer software documentation" as such terms are used in 48 C.F.R. §12.212. U.S. Government users acquire our Services with only those rights set forth in these Terms.
          </p>
        </section>

        {/* 18. Contact Information */}
        <section id="contact">
          <h2 className="mb-4 text-2xl font-semibold">18. Contact Information</h2>
          <p className="mb-4">
            If you have questions about these Terms, please contact us:
          </p>
          <div className="bg-muted rounded-lg p-4">
            <p className="mb-2"><strong>Caesar Health, Inc.</strong></p>
            <p className="mb-1">Legal Department</p>
            <p className="mb-1">Email: legal@caesarhealth.com</p>
            <p className="mb-1">Privacy Officer: privacy@caesarhealth.com</p>
            <p className="mb-1">Support: support@caesarhealth.com</p>
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="border-t pt-6">
          <p className="text-muted-foreground text-sm italic">
            By using Caesar Health's Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These Terms were last updated on October 24, 2025.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  )
}

