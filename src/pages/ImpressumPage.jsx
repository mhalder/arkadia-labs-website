import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function ImpressumPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Impressum</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Company Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Company Information</h2>
            <div className="bg-card rounded-xl border border-border p-6 space-y-2">
              <p className="text-lg font-semibold text-foreground">Arkadia Labs GmbH</p>
              <p className="text-muted-foreground">Blegistrasse 11B</p>
              <p className="text-muted-foreground">6341 Baar</p>
              <p className="text-muted-foreground">Switzerland</p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact</h2>
            <div className="bg-card rounded-xl border border-border p-6 space-y-3">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Email:</span>{' '}
                <a href="mailto:halderm@arkadia-labs.io" className="text-primary hover:underline">
                  halderm@arkadia-labs.io
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Phone:</span>{' '}
                <a href="tel:+41417681161" className="text-primary hover:underline">
                  +41 41 768 11 61
                </a>
              </p>
            </div>
          </section>

          {/* Legal Form */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Legal Form</h2>
            <p className="text-muted-foreground leading-relaxed">
              Arkadia Labs GmbH is a limited liability company (Gesellschaft mit beschränkter Haftung)
              registered and incorporated under the laws of Switzerland.
            </p>
          </section>

          {/* Responsible for Content */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Responsible for Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              The content of this website is the responsibility of Arkadia Labs GmbH.
              For any inquiries regarding the content, please contact us using the information provided above.
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Disclaimer</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-medium">Liability for Content:</span>{' '}
                The content of our website has been compiled with meticulous care and to the best of our knowledge.
                However, we cannot assume any liability for the up-to-dateness, completeness, or accuracy of any of the pages.
              </p>
              <p>
                <span className="text-foreground font-medium">Liability for Links:</span>{' '}
                Our website contains links to external websites of third parties. As the content of these websites
                is not under our control, we cannot assume any liability for such external content. The respective
                provider or operator of the linked pages is always responsible for the content of those pages.
              </p>
            </div>
          </section>

          {/* Copyright */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Copyright</h2>
            <p className="text-muted-foreground leading-relaxed">
              The content and works published on this website are governed by Swiss copyright law.
              Any duplication, processing, distribution, or any form of commercialization of such material
              beyond the scope of the copyright law shall require the prior written consent of its respective
              author or creator.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Impressum and any disputes arising from the use of this website shall be governed by
              and construed in accordance with the laws of Switzerland. The place of jurisdiction is Baar,
              Canton of Zug, Switzerland.
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

export default ImpressumPage
