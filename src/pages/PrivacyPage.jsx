import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          This privacy policy explains how Arkadia Labs GmbH collects, uses, and protects your personal data
          in accordance with the Swiss Federal Act on Data Protection (FADP).
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Controller */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Data Controller</h2>
            <div className="bg-card rounded-xl border border-border p-6 space-y-2">
              <p className="text-lg font-semibold text-foreground">Arkadia Labs GmbH</p>
              <p className="text-muted-foreground">Blegistrasse 11B</p>
              <p className="text-muted-foreground">6341 Baar, Switzerland</p>
              <p className="text-muted-foreground mt-3">
                <span className="text-foreground font-medium">Email:</span>{' '}
                <a href="mailto:halderm@arkadia-labs.io" className="text-primary hover:underline">
                  halderm@arkadia-labs.io
                </a>
              </p>
            </div>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Data We Collect</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-medium">Contact Information:</span>{' '}
                When you contact us via email or phone, we collect the information you provide,
                including your name, email address, phone number, and the content of your message.
              </p>
              <p>
                <span className="text-foreground font-medium">Website Usage:</span>{' '}
                Our website does not collect or store any technical data about your visits. We do not
                use server-side logging or analytics. Your theme preference is stored locally in your
                browser and is never transmitted to us.
              </p>
            </div>
          </section>

          {/* Purpose of Processing */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Purpose of Data Processing</h2>
            <p className="text-muted-foreground mb-4">We process your personal data for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To provide our cloud consulting and DevOps services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Legal Basis</h2>
            <p className="text-muted-foreground leading-relaxed">
              We process your personal data based on the following legal grounds under the Swiss FADP:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>Your consent (where applicable)</li>
              <li>Performance of a contract or pre-contractual measures</li>
              <li>Compliance with legal obligations</li>
              <li>Our legitimate interests, provided these are not overridden by your interests</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal data to third parties. We may share your data with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>Service providers who assist us in operating our website (e.g., hosting providers)</li>
              <li>Professional advisors (lawyers, accountants) when necessary</li>
              <li>Authorities when required by law</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Any third parties we work with are contractually obligated to protect your data and
              process it only according to our instructions.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal data only for as long as necessary to fulfill the purposes
              for which it was collected, or as required by law. Contact inquiries are typically
              retained for the duration of our business relationship plus any legally required
              retention periods.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Under the Swiss Federal Act on Data Protection (FADP), you have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="text-foreground font-medium">Right of Access:</span> You can request information about what personal data we hold about you</li>
              <li><span className="text-foreground font-medium">Right to Rectification:</span> You can request correction of inaccurate data</li>
              <li><span className="text-foreground font-medium">Right to Deletion:</span> You can request deletion of your data under certain circumstances</li>
              <li><span className="text-foreground font-medium">Right to Data Portability:</span> You can request your data in a structured, machine-readable format</li>
              <li><span className="text-foreground font-medium">Right to Object:</span> You can object to processing based on legitimate interests</li>
              <li><span className="text-foreground font-medium">Right to Withdraw Consent:</span> Where processing is based on consent, you can withdraw it at any time</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:halderm@arkadia-labs.io" className="text-primary hover:underline">
                halderm@arkadia-labs.io
              </a>.
            </p>
          </section>

          {/* Cookies & Local Storage */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Cookies & Local Storage</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website does not use cookies. We use browser local storage solely to remember your
              theme preference (dark/light mode). Local storage data remains on your device and is
              never transmitted to our servers.
            </p>
            <p className="text-muted-foreground mt-4">
              We do not use analytics, advertising, or any third-party tracking technologies.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal
              data against unauthorized access, alteration, disclosure, or destruction. Our website
              uses HTTPS encryption to secure data transmission.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website is hosted on servers that may be located outside of Switzerland. When we
              transfer data internationally, we ensure appropriate safeguards are in place to protect
              your data in accordance with Swiss data protection law.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted on this
              page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Contact & Complaints</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-card rounded-xl border border-border p-6 mt-4 space-y-2">
              <p className="text-foreground font-semibold">Arkadia Labs GmbH</p>
              <p className="text-muted-foreground">
                Email:{' '}
                <a href="mailto:halderm@arkadia-labs.io" className="text-primary hover:underline">
                  halderm@arkadia-labs.io
                </a>
              </p>
            </div>
            <p className="text-muted-foreground mt-4">
              You also have the right to lodge a complaint with the Swiss Federal Data Protection
              and Information Commissioner (FDPIC) if you believe your data protection rights have been violated.
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <p className="mt-12 text-sm text-muted-foreground">
          Last updated: January 2026
        </p>
      </div>
    </div>
  )
}

export default PrivacyPage
