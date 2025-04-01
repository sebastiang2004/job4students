import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobList } from "@/components/job-list"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Suspense } from "react"

export default function JobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h1 className="text-3xl font-bold">Browse Jobs</h1>
            <Button asChild className="flex items-center gap-2 bg-theme-purple hover:bg-theme-purple/90">
              <Link href="/career-quiz">
                <Sparkles className="h-4 w-4" />
                Take Career Quiz
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <Suspense fallback={<div>Loading jobs...</div>}>
              <JobList />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

