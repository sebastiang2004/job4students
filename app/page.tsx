import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { JobListings } from "@/components/job-listings"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <JobListings />
      </main>
      <Footer />
    </div>
  )
}

