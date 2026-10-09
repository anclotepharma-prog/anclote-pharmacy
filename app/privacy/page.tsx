import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="page-heading">Privacy Policy</h1>
          <p className="page-intro">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="card mb-8">
              <h2 className="compact-title">Introduction</h2>
              <p className="body-copy">
                Anclote Pharmacy (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and handling your 
                personal information with care. This Privacy Policy explains how we collect, use, and safeguard your 
                information when you visit our website or use our services.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">HIPAA Compliance</h2>
              <p className="body-copy mb-4">
                As a healthcare provider, we comply with the Health Insurance Portability and Accountability Act (HIPAA) 
                and maintain strict standards for protecting your protected health information (PHI).
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>We only use and disclose your health information as permitted by law</li>
                <li>We maintain physical, electronic, and procedural safeguards</li>
                <li>You have the right to request a copy of our Notice of Privacy Practices</li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">Information We Collect</h2>
              <p className="body-copy mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Personal identification information (name, address, phone number, email)</li>
                <li>Health information and prescription history</li>
                <li>Insurance information</li>
                <li>Website usage data and analytics</li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">How We Use Your Information</h2>
              <p className="body-copy mb-4">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Process and fill your prescriptions</li>
                <li>Communicate with you about your medications and health</li>
                <li>Process insurance claims and billing</li>
                <li>Improve our services and website</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">Information Security</h2>
              <p className="body-copy">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">Your Rights</h2>
              <p className="body-copy mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Access your personal and health information</li>
                <li>Request corrections to your information</li>
                <li>Request restrictions on certain uses and disclosures</li>
                <li>Receive confidential communications</li>
                <li>File a complaint if you believe your privacy rights have been violated</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="compact-title">Contact Us</h2>
              <p className="body-copy mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="body-copy">
                <p><strong>Anclote Pharmacy</strong></p>
                <p>1933 N Pinellas Ave</p>
                <p>Tarpon Springs, FL 34689</p>
                <p>Phone: (727) 944-5800</p>
                <p>Email: info@anclotepharma.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

