import { LegalPageLayout } from './legal-page-layout'

export function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="October 24, 2025">
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <p className="lead text-lg">
            Caesar Health, Inc. ("Caesar Health," "we," "us," or "our") is committed to protecting the privacy and security of your information. This Privacy Policy describes how we collect, use, disclose, and safeguard information when you use our healthcare platform and services (the "Services").
          </p>
          <p className="mt-4">
            <strong>IMPORTANT:</strong> This Privacy Policy applies to both Protected Health Information ("PHI") as defined under the Health Insurance Portability and Accountability Act ("HIPAA") and non-PHI data. As a Business Associate under HIPAA, we maintain strict compliance with all applicable healthcare privacy laws.
          </p>
        </section>

        {/* Table of Contents */}
        <section className="bg-muted rounded-lg p-6">
          <h2 className="mb-4 text-xl font-semibold">Table of Contents</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#hipaa-notice" className="text-primary hover:underline">1. HIPAA Notice and Business Associate Relationship</a></li>
            <li><a href="#information-collected" className="text-primary hover:underline">2. Information We Collect</a></li>
            <li><a href="#how-we-use" className="text-primary hover:underline">3. How We Use Your Information</a></li>
            <li><a href="#disclosure" className="text-primary hover:underline">4. How We Disclose Your Information</a></li>
            <li><a href="#data-security" className="text-primary hover:underline">5. Data Security Measures</a></li>
            <li><a href="#your-rights" className="text-primary hover:underline">6. Your Rights and Choices</a></li>
            <li><a href="#hipaa-rights" className="text-primary hover:underline">7. HIPAA Privacy Rights</a></li>
            <li><a href="#cookies" className="text-primary hover:underline">8. Cookies and Tracking Technologies</a></li>
            <li><a href="#third-party" className="text-primary hover:underline">9. Third-Party Services and Business Associates</a></li>
            <li><a href="#data-retention" className="text-primary hover:underline">10. Data Retention and Deletion</a></li>
            <li><a href="#california" className="text-primary hover:underline">11. California Privacy Rights (CCPA/CPRA)</a></li>
            <li><a href="#children" className="text-primary hover:underline">12. Children's Privacy</a></li>
            <li><a href="#international" className="text-primary hover:underline">13. International Data Transfers</a></li>
            <li><a href="#changes" className="text-primary hover:underline">14. Changes to This Privacy Policy</a></li>
            <li><a href="#contact" className="text-primary hover:underline">15. Contact Information</a></li>
          </ol>
        </section>

        {/* 1. HIPAA Notice */}
        <section id="hipaa-notice">
          <h2 className="mb-4 text-2xl font-semibold">1. HIPAA Notice and Business Associate Relationship</h2>
          
          <h3 className="mb-2 text-lg font-semibold">1.1 Business Associate Status</h3>
          <p className="mb-4">
            When healthcare providers and covered entities use our Services to create, receive, maintain, or transmit Protected Health Information (PHI), Caesar Health acts as a Business Associate under HIPAA. We enter into a Business Associate Agreement (BAA) with covered entities that governs our use and disclosure of PHI.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">1.2 HIPAA Compliance Commitment</h3>
          <p className="mb-4">
            We comply with the HIPAA Privacy Rule (45 CFR Part 160 and Part 164, Subparts A and E) and the HIPAA Security Rule (45 CFR Part 160 and Part 164, Subparts A and C), as well as the Health Information Technology for Economic and Clinical Health (HITECH) Act.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">1.3 Uses and Disclosures of PHI</h3>
          <p className="mb-4">
            We will only use and disclose PHI as permitted by our BAA with you, which includes:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>To provide Services to you as the Covered Entity</li>
            <li>For our proper management and administration</li>
            <li>To carry out our legal responsibilities</li>
            <li>As required by law</li>
            <li>As authorized by you or the patient</li>
          </ul>
          <p className="mt-4">
            <strong>We will NOT use or disclose PHI for marketing purposes or sell PHI without your authorization, except as permitted by HIPAA.</strong>
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section id="information-collected">
          <h2 className="mb-4 text-2xl font-semibold">2. Information We Collect</h2>
          
          <h3 className="mb-2 text-lg font-semibold">2.1 Protected Health Information (PHI)</h3>
          <p className="mb-4">
            When you use our Services, we may collect and process PHI on your behalf, including:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Patient names, addresses, and contact information</li>
            <li>Medical record numbers and health plan beneficiary numbers</li>
            <li>Social Security numbers (when necessary for billing or identification)</li>
            <li>Medical history, diagnoses, and treatment information</li>
            <li>Laboratory and test results</li>
            <li>Prescription and medication information</li>
            <li>Clinical notes and documentation</li>
            <li>Insurance and billing information</li>
            <li>Any other individually identifiable health information</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">2.2 Account and Business Information</h3>
          <p className="mb-4">
            We collect information about healthcare providers and organizations using our platform:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Name, email address, phone number</li>
            <li>Professional credentials and license numbers</li>
            <li>Organization name and NPI (National Provider Identifier)</li>
            <li>Billing and payment information</li>
            <li>Job title and role within your organization</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">2.3 Technical and Usage Information</h3>
          <p className="mb-4">
            We automatically collect certain technical information when you use our Services:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>IP addresses and device identifiers</li>
            <li>Browser type and version</li>
            <li>Operating system and device information</li>
            <li>Log data (access times, pages viewed, features used)</li>
            <li>Performance and diagnostic data</li>
            <li>Location data (general geographic location based on IP address)</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">2.4 Communications</h3>
          <p>
            We collect information from your communications with us, including support requests, feedback, and correspondence.
          </p>
        </section>

        {/* 3. How We Use Your Information */}
        <section id="how-we-use">
          <h2 className="mb-4 text-2xl font-semibold">3. How We Use Your Information</h2>
          
          <h3 className="mb-2 text-lg font-semibold">3.1 Use of PHI</h3>
          <p className="mb-4">
            We use PHI solely to provide Services to you as authorized by our BAA:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Processing and storing medical records and clinical documentation</li>
            <li>Facilitating care coordination and communication</li>
            <li>Enabling AI-powered features like clinical documentation assistance</li>
            <li>Generating analytics and reports as requested by you</li>
            <li>Ensuring data integrity and security</li>
            <li>Complying with legal and regulatory requirements</li>
          </ul>
          <p className="mt-4">
            <strong>Important:</strong> We use de-identified data (data stripped of all identifiers) to improve our Services, develop new features, and conduct research. De-identified data cannot reasonably be used to identify individuals and is not subject to HIPAA restrictions.
          </p>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">3.2 Use of Non-PHI Information</h3>
          <p className="mb-4">
            We use non-PHI information for:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Providing, maintaining, and improving our Services</li>
            <li>Processing payments and managing subscriptions</li>
            <li>Communicating with you about your account and our Services</li>
            <li>Providing customer support</li>
            <li>Detecting, preventing, and addressing security issues and fraud</li>
            <li>Conducting analytics to understand how our Services are used</li>
            <li>Complying with legal obligations</li>
            <li>Marketing our Services (with your consent where required)</li>
          </ul>
        </section>

        {/* 4. How We Disclose Your Information */}
        <section id="disclosure">
          <h2 className="mb-4 text-2xl font-semibold">4. How We Disclose Your Information</h2>
          
          <h3 className="mb-2 text-lg font-semibold">4.1 Disclosure of PHI</h3>
          <p className="mb-4">
            We will only disclose PHI as permitted or required by our BAA, HIPAA, and applicable law:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>To You:</strong> The Covered Entity that is our client</li>
            <li><strong>To Business Associates:</strong> Third-party service providers who assist in providing our Services (e.g., cloud hosting, data backup) under written BAAs</li>
            <li><strong>As Required by Law:</strong> When required by federal, state, or local law</li>
            <li><strong>For Public Health Activities:</strong> When required to report diseases or vital events</li>
            <li><strong>To Prevent Serious Harm:</strong> When necessary to prevent or lessen a serious and imminent threat</li>
            <li><strong>For Law Enforcement:</strong> In response to valid legal process (court orders, warrants, subpoenas)</li>
          </ul>
          <p className="mt-4">
            We will notify you of any requests for PHI disclosure unless prohibited by law or unless the request includes a qualified protective order.
          </p>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">4.2 Disclosure of Non-PHI Information</h3>
          <p className="mb-4">
            We may disclose non-PHI information:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Service Providers:</strong> Third parties that provide services on our behalf (payment processing, analytics, customer support)</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>Legal Compliance:</strong> To comply with laws, regulations, or legal processes</li>
            <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property</li>
            <li><strong>With Consent:</strong> With your consent or at your direction</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">4.3 No Sale of Personal Information</h3>
          <p>
            We do not sell your personal information or PHI to third parties. We do not share personal information with third parties for their direct marketing purposes.
          </p>
        </section>

        {/* 5. Data Security Measures */}
        <section id="data-security">
          <h2 className="mb-4 text-2xl font-semibold">5. Data Security Measures</h2>
          <p className="mb-4">
            We implement comprehensive administrative, physical, and technical safeguards to protect PHI and personal information as required by HIPAA and industry best practices:
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">5.1 Technical Safeguards</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Encryption:</strong> Data encrypted in transit (TLS 1.2+) and at rest (AES-256)</li>
            <li><strong>Access Controls:</strong> Role-based access controls and multi-factor authentication</li>
            <li><strong>Audit Controls:</strong> Logging and monitoring of system access and activities</li>
            <li><strong>Automatic Logoff:</strong> Session timeouts for inactive users</li>
            <li><strong>Integrity Controls:</strong> Mechanisms to ensure data is not improperly altered or destroyed</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">5.2 Physical Safeguards</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Secure data centers with restricted access</li>
            <li>Environmental controls and disaster recovery measures</li>
            <li>Secure disposal of physical media containing PHI</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">5.3 Administrative Safeguards</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Security risk assessments and management</li>
            <li>Workforce training on HIPAA and data security</li>
            <li>Incident response and breach notification procedures</li>
            <li>Business Associate Agreements with all vendors handling PHI</li>
            <li>Regular security audits and penetration testing</li>
            <li>Contingency planning and disaster recovery</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">5.4 Breach Notification</h3>
          <p>
            In the event of a breach of unsecured PHI, we will notify affected covered entities without unreasonable delay and no later than 60 days from discovery of the breach, in accordance with 45 CFR §164.410.
          </p>
        </section>

        {/* 6. Your Rights and Choices */}
        <section id="your-rights">
          <h2 className="mb-4 text-2xl font-semibold">6. Your Rights and Choices</h2>
          
          <h3 className="mb-2 text-lg font-semibold">6.1 Account Information</h3>
          <p className="mb-4">
            You may access, update, or correct your account information at any time through your account settings or by contacting us.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">6.2 Marketing Communications</h3>
          <p className="mb-4">
            You may opt out of receiving promotional emails by following the unsubscribe instructions in those emails. You cannot opt out of service-related communications (e.g., account verification, technical notices).
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">6.3 Cookies and Tracking</h3>
          <p className="mb-4">
            You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our Services.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">6.4 Do Not Track</h3>
          <p>
            Our Services do not respond to Do Not Track (DNT) signals. We adhere to the standards described in this Privacy Policy.
          </p>
        </section>

        {/* 7. HIPAA Privacy Rights */}
        <section id="hipaa-rights">
          <h2 className="mb-4 text-2xl font-semibold">7. HIPAA Privacy Rights</h2>
          <p className="mb-4">
            As a Business Associate, we support your ability to fulfill patients' HIPAA privacy rights:
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">7.1 Right of Access</h3>
          <p className="mb-4">
            We will provide you (the Covered Entity) with access to PHI to enable you to fulfill patients' requests for access to their health information within HIPAA's required timeframes.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">7.2 Right to Amend</h3>
          <p className="mb-4">
            We will make amendments to PHI as directed by you to enable you to fulfill patients' rights to request amendments to their health information.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">7.3 Right to an Accounting of Disclosures</h3>
          <p className="mb-4">
            We will provide you with information about disclosures of PHI to enable you to fulfill patients' requests for an accounting of disclosures.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">7.4 Right to Request Restrictions</h3>
          <p className="mb-4">
            We will comply with your instructions regarding restrictions on uses and disclosures of PHI as agreed in our BAA.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">7.5 Right to Confidential Communications</h3>
          <p>
            We will assist you in accommodating reasonable requests for confidential communications of PHI.
          </p>
        </section>

        {/* 8. Cookies and Tracking Technologies */}
        <section id="cookies">
          <h2 className="mb-4 text-2xl font-semibold">8. Cookies and Tracking Technologies</h2>
          
          <h3 className="mb-2 text-lg font-semibold">8.1 Types of Cookies We Use</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Essential Cookies:</strong> Necessary for the Services to function (authentication, security)</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our Services</li>
            <li><strong>Performance Cookies:</strong> Measure and improve the performance of our Services</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">8.2 Third-Party Analytics</h3>
          <p className="mb-4">
            We may use third-party analytics services (e.g., Google Analytics) to analyze usage patterns. These services use cookies and similar technologies. We configure these services to respect HIPAA requirements and do not allow them to process PHI.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">8.3 Managing Cookies</h3>
          <p>
            You can manage cookie preferences through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent.
          </p>
        </section>

        {/* 9. Third-Party Services */}
        <section id="third-party">
          <h2 className="mb-4 text-2xl font-semibold">9. Third-Party Services and Business Associates</h2>
          <p className="mb-4">
            We use carefully vetted third-party service providers to help us provide our Services. All third parties that may access PHI are required to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Execute a Business Associate Agreement with us</li>
            <li>Implement appropriate safeguards to protect PHI</li>
            <li>Use PHI only as permitted by the BAA</li>
            <li>Report any security incidents or breaches</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">9.1 Key Service Providers</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Cloud Hosting:</strong> Secure cloud infrastructure for data storage and processing</li>
            <li><strong>Payment Processing:</strong> Stripe, Inc. for payment processing (does not handle PHI)</li>
            <li><strong>Communication Services:</strong> Email and messaging service providers</li>
            <li><strong>Data Backup:</strong> Encrypted backup and disaster recovery services</li>
            <li><strong>Analytics:</strong> De-identified analytics services (no PHI processed)</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">9.2 Integration Partners</h3>
          <p>
            Our Services may integrate with third-party EMR systems and healthcare applications. Data shared with these systems is controlled by you and subject to the privacy policies of those third parties.
          </p>
        </section>

        {/* 10. Data Retention and Deletion */}
        <section id="data-retention">
          <h2 className="mb-4 text-2xl font-semibold">10. Data Retention and Deletion</h2>
          
          <h3 className="mb-2 text-lg font-semibold">10.1 Retention Periods</h3>
          <p className="mb-4">
            We retain PHI and personal information for as long as necessary to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Provide Services to you</li>
            <li>Comply with legal and regulatory requirements (typically 6-7 years for healthcare records)</li>
            <li>Resolve disputes and enforce our agreements</li>
            <li>Meet audit and compliance requirements</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">10.2 Data Deletion</h3>
          <p className="mb-4">
            Upon termination of our BAA or your account:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>We will return or destroy PHI as directed by you and as specified in our BAA</li>
            <li>We use secure deletion methods that make data unrecoverable</li>
            <li>We retain certain information as required by law or for legitimate business purposes</li>
            <li>De-identified data may be retained indefinitely for research and improvement purposes</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">10.3 Backups</h3>
          <p>
            PHI in backup systems will be deleted in accordance with our backup retention schedule, typically within 90 days of the deletion request.
          </p>
        </section>

        {/* 11. California Privacy Rights */}
        <section id="california">
          <h2 className="mb-4 text-2xl font-semibold">11. California Privacy Rights (CCPA/CPRA)</h2>
          <p className="mb-4">
            If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">11.1 Your California Privacy Rights</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Right to Know:</strong> Request information about the personal information we collect, use, and disclose</li>
            <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
            <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
            <li><strong>Right to Opt-Out:</strong> Opt-out of the sale or sharing of personal information (we do not sell personal information)</li>
            <li><strong>Right to Limit:</strong> Limit the use of sensitive personal information</li>
            <li><strong>Right to Non-Discrimination:</strong> Not receive discriminatory treatment for exercising your rights</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">11.2 Categories of Information</h3>
          <p className="mb-4">
            In the past 12 months, we have collected the following categories of personal information:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Identifiers (name, email, IP address)</li>
            <li>Professional information (credentials, NPI)</li>
            <li>Commercial information (payment records, subscription details)</li>
            <li>Internet activity (usage data, log files)</li>
            <li>Health information (PHI, governed by HIPAA)</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-semibold">11.3 Exercising Your Rights</h3>
          <p className="mb-4">
            To exercise your California privacy rights, contact us at privacy@caesarhealth.com. We will verify your identity before processing your request and respond within 45 days.
          </p>
          
          <h3 className="mb-2 text-lg font-semibold">11.4 Authorized Agents</h3>
          <p>
            You may designate an authorized agent to make requests on your behalf. We will require written authorization from you and verification of the agent's identity.
          </p>
        </section>

        {/* 12. Children's Privacy */}
        <section id="children">
          <h2 className="mb-4 text-2xl font-semibold">12. Children's Privacy</h2>
          <p className="mb-4">
            Our Services are not directed to children under 18, and we do not knowingly collect personal information from children for marketing purposes. However, our Services may be used by healthcare providers to manage health information for pediatric patients as part of treatment, payment, and healthcare operations.
          </p>
          <p className="mb-4">
            When PHI of minors is processed through our Services:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>It is handled in accordance with HIPAA requirements</li>
            <li>Parental consent is the responsibility of the Covered Entity</li>
            <li>We implement the same security safeguards for all PHI regardless of patient age</li>
          </ul>
          <p className="mt-4">
            If you believe we have inadvertently collected personal information from a child for non-healthcare purposes, please contact us immediately at privacy@caesarhealth.com.
          </p>
        </section>

        {/* 13. International Data Transfers */}
        <section id="international">
          <h2 className="mb-4 text-2xl font-semibold">13. International Data Transfers</h2>
          <p className="mb-4">
            Our Services are provided from the United States. If you access our Services from outside the United States, your information will be transferred to, stored, and processed in the United States.
          </p>
          <p className="mb-4">
            By using our Services, you consent to the transfer of your information to the United States and other countries where we or our service providers operate. These countries may have data protection laws that differ from those in your country of residence.
          </p>
          <p className="mb-4">
            For PHI, we ensure that:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>All data transfers comply with HIPAA requirements</li>
            <li>Appropriate safeguards are in place to protect PHI during international transfers</li>
            <li>Business Associate Agreements cover all entities that may access PHI</li>
          </ul>
        </section>

        {/* 14. Changes to This Privacy Policy */}
        <section id="changes">
          <h2 className="mb-4 text-2xl font-semibold">14. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Posting the updated Privacy Policy on our website</li>
            <li>Updating the "Last Updated" date at the top of this policy</li>
            <li>Sending email notification to your registered email address</li>
            <li>Providing prominent notice through our Services</li>
          </ul>
          <p className="mt-4">
            For material changes affecting PHI, we will provide at least 30 days' notice before the changes take effect. Your continued use of our Services after the effective date constitutes acceptance of the updated Privacy Policy.
          </p>
        </section>

        {/* 15. Contact Information */}
        <section id="contact">
          <h2 className="mb-4 text-2xl font-semibold">15. Contact Information</h2>
          <p className="mb-4">
            If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="bg-muted rounded-lg p-4">
            <p className="mb-2"><strong>Caesar Health, Inc.</strong></p>
            <p className="mb-1"><strong>Privacy Officer</strong></p>
            <p className="mb-1">Email: privacy@caesarhealth.com</p>
            <p className="mb-1">Support: support@caesarhealth.com</p>
            <p className="mb-3">Legal: legal@caesarhealth.com</p>
            
            <p className="mb-2 mt-4"><strong>For HIPAA-Related Requests:</strong></p>
            <p className="mb-1">Email: hipaa@caesarhealth.com</p>
            
            <p className="mb-2 mt-4"><strong>For California Privacy Rights Requests:</strong></p>
            <p className="mb-1">Email: privacy@caesarhealth.com</p>
            <p>Subject Line: "California Privacy Rights Request"</p>
          </div>
          
          <div className="bg-muted mt-6 rounded-lg border-l-4 border-blue-500 p-4">
            <p className="mb-2 font-semibold">Complaints</p>
            <p className="text-sm">
              If you believe your privacy rights have been violated, you have the right to file a complaint with:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li><strong>Caesar Health:</strong> privacy@caesarhealth.com</li>
              <li><strong>U.S. Department of Health and Human Services:</strong> www.hhs.gov/hipaa/filing-a-complaint</li>
            </ul>
            <p className="mt-2 text-sm">
              You will not be retaliated against for filing a complaint.
            </p>
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="border-t pt-6">
          <p className="text-muted-foreground text-sm italic">
            This Privacy Policy was last updated on October 24, 2025. By using Caesar Health's Services, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  )
}

