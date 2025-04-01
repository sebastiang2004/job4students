import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">Last updated: March 31, 2025</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p className="text-gray-500 dark:text-gray-300">
                Job4Students ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website and
                use our services.
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will
                alert you about any changes by updating the "Last updated" date of this Privacy Policy. You are
                encouraged to periodically review this Privacy Policy to stay informed of updates.
              </p>

              <h2 className="text-2xl font-bold">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold">Personal Data</h3>
              <p className="text-gray-500 dark:text-gray-300">
                When you register for an account, we may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-500 dark:text-gray-300 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Educational information</li>
                <li>Employment history</li>
                <li>Profile picture</li>
              </ul>

              <h3 className="text-xl font-semibold">Usage Data</h3>
              <p className="text-gray-500 dark:text-gray-300">
                We may also collect information on how the website is accessed and used. This usage data may include
                information such as your computer's Internet Protocol address (IP address), browser type, browser
                version, the pages of our website that you visit, the time and date of your visit, the time spent on
                those pages, unique device identifiers, and other diagnostic data.
              </p>

              <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
              <p className="text-gray-500 dark:text-gray-300">
                We may use the information we collect about you for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 text-gray-500 dark:text-gray-300 space-y-1">
                <li>Create and manage your account</li>
                <li>Connect you with potential employers or job opportunities</li>
                <li>Provide and maintain our services</li>
                <li>Notify you about changes to our services</li>
                <li>Provide customer support</li>
                <li>Gather analysis or valuable information so that we can improve our services</li>
                <li>Monitor the usage of our services</li>
                <li>Detect, prevent and address technical issues</li>
              </ul>

              <h2 className="text-2xl font-bold">4. Disclosure of Your Information</h2>
              <p className="text-gray-500 dark:text-gray-300">
                We may share your information with third parties in certain situations, including:
              </p>
              <ul className="list-disc pl-6 text-gray-500 dark:text-gray-300 space-y-1">
                <li>With employers when you apply for jobs</li>
                <li>With service providers who perform services for us</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights and property</li>
                <li>With your consent or at your direction</li>
              </ul>

              <h2 className="text-2xl font-bold">5. Security of Your Information</h2>
              <p className="text-gray-500 dark:text-gray-300">
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the personal information you provide to us,
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2 className="text-2xl font-bold">6. Contact Us</h2>
              <p className="text-gray-500 dark:text-gray-300">
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                Email: privacy@job4students.ro
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

