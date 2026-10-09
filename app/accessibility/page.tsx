import Link from 'next/link'
import { CheckCircle, Mail, Phone } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/accessibility',
  },
}

export default function AccessibilityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="page-heading">Accessibility Statement</h1>
          <p className="page-intro">Our commitment to digital accessibility</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <h2 className="compact-title">Our Commitment</h2>
              <p className="body-copy mb-4">
                Anclote Pharmacy is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant 
                accessibility standards.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">Conformance Status</h2>
              <p className="body-copy mb-4">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. 
                These guidelines help make web content more accessible to people with disabilities.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">Accessibility Features</h2>
              <p className="body-copy mb-4">Our website includes the following accessibility features:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Semantic HTML structure for screen reader compatibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Keyboard navigation support throughout the site</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Clear and consistent navigation structure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Sufficient color contrast for readability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Descriptive link text and button labels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Responsive design for various screen sizes and devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Form labels and instructions clearly associated with inputs</span>
                </li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">Physical Accessibility</h2>
              <p className="body-copy mb-4">Our physical pharmacy location is accessible to all:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Wheelchair accessible entrance and parking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Wide aisles for easy navigation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Accessible restroom facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Staff available to assist customers</span>
                </li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="compact-title">Assistive Services</h2>
              <p className="body-copy mb-4">We offer the following assistive services:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Large print prescription labels available upon request</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Verbal prescription counseling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Delivery services for those unable to visit in person</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="body-copy">Multi-dose packaging to simplify medication management</span>
                </li>
              </ul>
            </div>

            <div className="card mb-8 tint-panel">
              <h2 className="compact-title">Feedback and Contact</h2>
              <p className="body-copy mb-6">
                We welcome your feedback on the accessibility of our website and services. If you encounter 
                any accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-950">Phone</p>
                    <a href="tel:(727) 944-5800" className="text-primary-600 hover:text-primary-700">
                      (727) 944-5800
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-950">Email</p>
                    <a href="mailto:info@anclotepharma.com" className="text-primary-600 hover:text-primary-700">
                      info@anclotepharma.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary inline-block">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="card">
              <h2 className="compact-title">Ongoing Improvements</h2>
              <p className="body-copy">
                We are continuously working to improve the accessibility of our website and services. 
                We regularly review our accessibility practices and update our website to enhance the 
                experience for all users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

