import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmployerDashboard } from "@/components/employer-dashboard"

export default function EmployerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="mb-8 text-3xl font-bold">Employer Dashboard</h1>
          <EmployerDashboard />
        </div>
      </main>
      <Footer />
    </div>
  )
}

