import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="page-heading">Terms of Service</h1>
          <p className="page-intro">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <h2 className="compact-title">Acceptance of Terms</h2>
              <p className="body-copy">
                By accessing and using the Anclote Pharmacy website and services, you accept and agree to be bound 
                by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">Use of Services</h2>
              <p className="body-copy mb-4">Our pharmacy services are subject to the following conditions:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>You must provide accurate and complete information</li>
                <li>Prescriptions must be valid and from licensed healthcare providers</li>
                <li>You are responsible for providing accurate insurance information</li>
                <li>Services are provided in accordance with Florida pharmacy laws and regulations</li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">Website Use</h2>
              <p className="body-copy mb-4">When using our website, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Not misuse or interfere with the website</li>
                <li>Not attempt to gain unauthorized access to any portion of the website</li>
                <li>Not use the website for any illegal or unauthorized purpose</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">Prescription Information</h2>
              <p className="body-copy">
                Online prescription refill requests are processed during business hours. We reserve the right to 
                contact your healthcare provider to verify prescription information. Not all prescriptions can be 
                filled online, and certain medications may require additional verification.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">Intellectual Property</h2>
              <p className="body-copy">
                All content on this website, including text, graphics, logos, and images, is the property of 
                Anclote Pharmacy and is protected by copyright and trademark laws.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">Limitation of Liability</h2>
              <p className="body-copy">
                Anclote Pharmacy strives to provide accurate information, but we make no warranties about the 
                completeness, reliability, or accuracy of website content. We are not liable for any damages 
                arising from your use of our website or services.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">Changes to Terms</h2>
              <p className="body-copy">
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting to the website. Your continued use of our services constitutes acceptance of the 
                modified terms.
              </p>
            </div>

            <div className="card">
              <h2 className="compact-title">Contact Information</h2>
              <p className="body-copy mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="body-copy">
                <p><strong>Anclote Pharmacy</strong></p>
                <p>1933 N Pinellas Ave</p>
                <p>Tarpon Springs, FL 34689</p>
                <p>Phone: (727) 944-5800</p>
                <p>Email: anclotepharma@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

