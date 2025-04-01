import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">Last updated: March 31, 2025</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
              <p className="text-gray-500 dark:text-gray-300">
                By accessing or using Job4Students, you agree to be bound by these Terms of Service and all applicable
                laws and regulations. If you do not agree with any of these terms, you are prohibited from using or
                accessing this site.
              </p>

              <h2 className="text-2xl font-bold">2. Use License</h2>
              <p className="text-gray-500 dark:text-gray-300">
                Permission is granted to temporarily download one copy of the materials on Job4Students for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-500 dark:text-gray-300 space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on Job4Students</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-gray-500 dark:text-gray-300">
                This license shall automatically terminate if you violate any of these restrictions and may be
                terminated by Job4Students at any time.
              </p>

              <h2 className="text-2xl font-bold">3. User Accounts</h2>
              <p className="text-gray-500 dark:text-gray-300">
                When you create an account with us, you guarantee that the information you provide is accurate,
                complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the
                immediate termination of your account on the service.
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                You are responsible for maintaining the confidentiality of your account and password, including but not
                limited to the restriction of access to your computer and/or account. You agree to accept responsibility
                for any and all activities or actions that occur under your account and/or password.
              </p>

              <h2 className="text-2xl font-bold">4. Job Listings and Applications</h2>
              <p className="text-gray-500 dark:text-gray-300">
                Job4Students acts as a platform connecting students with employers. We do not guarantee employment or
                the accuracy of job listings. We are not responsible for the actions of employers or applicants.
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                Employers are solely responsible for their postings, candidate selection, and employment decisions.
                Students are solely responsible for the content of their applications, interviews, and any resulting
                employment relationships.
              </p>

              <h2 className="text-2xl font-bold">5. Limitation of Liability</h2>
              <p className="text-gray-500 dark:text-gray-300">
                In no event shall Job4Students or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on Job4Students, even if Job4Students or a Job4Students authorized
                representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-bold">6. Governing Law</h2>
              <p className="text-gray-500 dark:text-gray-300">
                These Terms shall be governed and construed in accordance with the laws of Romania, without regard to
                its conflict of law provisions.
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect.
              </p>

              <h2 className="text-2xl font-bold">7. Changes to Terms</h2>
              <p className="text-gray-500 dark:text-gray-300">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By
                continuing to access or use our Service after any revisions become effective, you agree to be bound by
                the revised terms.
              </p>

              <h2 className="text-2xl font-bold">8. Contact Us</h2>
              <p className="text-gray-500 dark:text-gray-300">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                Email: terms@job4students.ro
                <br />
                Address: Suceava, Romania
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

