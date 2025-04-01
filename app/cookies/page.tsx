import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cookie Policy</h1>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">Last updated: March 31, 2025</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">1. What Are Cookies</h2>
              <p className="text-gray-500 dark:text-gray-300">
                Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is
                stored in your web browser and allows the service or a third-party to recognize you and make your next
                visit easier and the service more useful to you.
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or
                mobile device when you go offline, while session cookies are deleted as soon as you close your web
                browser.
              </p>

              <h2 className="text-2xl font-bold">2. How Job4Students Uses Cookies</h2>
              <p className="text-gray-500 dark:text-gray-300">
                When you use and access our service, we may place a number of cookie files in your web browser. We use
                cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-500 dark:text-gray-300 space-y-1">
                <li>To enable certain functions of the service</li>
                <li>To provide analytics</li>
                <li>To store your preferences</li>
                <li>To enable advertisements delivery, including behavioral advertising</li>
              </ul>
              <p className="text-gray-500 dark:text-gray-300">
                We use both session and persistent cookies on the service and we use different types of cookies to run
                the service:
              </p>
              <ul className="list-disc pl-6 text-gray-500 dark:text-gray-300 space-y-1">
                <li>
                  <strong>Essential cookies.</strong> We may use essential cookies to authenticate users and prevent
                  fraudulent use of user accounts.
                </li>
                <li>
                  <strong>Preferences cookies.</strong> We may use preferences cookies to remember information that
                  changes the way the service behaves or looks, such as the "remember me" functionality or a user's
                  language preference.
                </li>
                <li>
                  <strong>Analytics cookies.</strong> We may use analytics cookies to track information about how the
                  service is used so that we can make improvements.
                </li>
                <li>
                  <strong>Advertising cookies.</strong> We may use advertising cookies to deliver advertisements that
                  may be relevant to you and your interests.
                </li>
              </ul>

              <h2 className="text-2xl font-bold">3. Third-Party Cookies</h2>
              <p className="text-gray-500 dark:text-gray-300">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics
                of the service, deliver advertisements on and through the service, and so on.
              </p>

              <h2 className="text-2xl font-bold">4. What Are Your Choices Regarding Cookies</h2>
              <p className="text-gray-500 dark:text-gray-300">
                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit
                the help pages of your web browser.
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use
                all of the features we offer, you may not be able to store your preferences, and some of our pages might
                not display properly.
              </p>
              <ul className="list-disc pl-6 text-gray-500 dark:text-gray-300 space-y-1">
                <li>
                  For the Chrome web browser, please visit this page from Google:{" "}
                  <a
                    href="https://support.google.com/accounts/answer/32050"
                    className="text-theme-purple dark:text-theme-teal hover:underline"
                  >
                    https://support.google.com/accounts/answer/32050
                  </a>
                </li>
                <li>
                  For the Internet Explorer web browser, please visit this page from Microsoft:{" "}
                  <a
                    href="http://support.microsoft.com/kb/278835"
                    className="text-theme-purple dark:text-theme-teal hover:underline"
                  >
                    http://support.microsoft.com/kb/278835
                  </a>
                </li>
                <li>
                  For the Firefox web browser, please visit this page from Mozilla:{" "}
                  <a
                    href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                    className="text-theme-purple dark:text-theme-teal hover:underline"
                  >
                    https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                  </a>
                </li>
                <li>
                  For the Safari web browser, please visit this page from Apple:{" "}
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                    className="text-theme-purple dark:text-theme-teal hover:underline"
                  >
                    https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                  </a>
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-300">
                For any other web browser, please visit your web browser's official web pages.
              </p>

              <h2 className="text-2xl font-bold">5. More Information About Cookies</h2>
              <p className="text-gray-500 dark:text-gray-300">
                You can learn more about cookies at the following third-party websites:
              </p>
              <ul className="list-disc pl-6 text-gray-500 dark:text-gray-300 space-y-1">
                <li>
                  Network Advertising Initiative:{" "}
                  <a
                    href="http://www.networkadvertising.org/"
                    className="text-theme-purple dark:text-theme-teal hover:underline"
                  >
                    http://www.networkadvertising.org/
                  </a>
                </li>
              </ul>

              <h2 className="text-2xl font-bold">6. Contact Us</h2>
              <p className="text-gray-500 dark:text-gray-300">
                If you have any questions about our Cookie Policy, please contact us at:
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                Email: cookies@job4students.ro
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

