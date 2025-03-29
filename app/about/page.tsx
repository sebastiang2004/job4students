import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Job4Students</h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Connecting students with their dream jobs in Romania
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Job4Students was created to bridge the gap between talented students and employers in Romania. We
                  believe that every student deserves the opportunity to gain valuable work experience while studying.
                </p>
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We envision a future where every student in Romania can easily find part-time jobs, internships, and
                  entry-level positions that align with their career goals and academic schedules.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Team</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our team consists of passionate individuals who understand the challenges students face when entering
                  the job market. We're committed to creating a platform that makes this process easier.
                </p>
                <h2 className="text-2xl font-bold">Our Values</h2>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-2">
                  <li>Accessibility - Making job opportunities accessible to all students</li>
                  <li>Quality - Ensuring high-quality job listings from reputable employers</li>
                  <li>Support - Providing resources and support for students throughout their job search</li>
                  <li>Innovation - Continuously improving our platform to better serve students and employers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

