import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobFilters } from "@/components/job-filters"
import { JobList } from "@/components/job-list"

export default function JobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="mb-8 text-3xl font-bold">Browse Jobs</h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr]">
            <JobFilters />
            <JobList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

