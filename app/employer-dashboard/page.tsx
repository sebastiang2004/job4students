import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmployerDashboardNew } from "@/components/employer-dashboard-new"

export default function EmployerDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="mb-8 text-3xl font-bold text-center">Employer Dashboard</h1>
          <EmployerDashboardNew />
        </div>
      </main>
      <Footer />
    </div>
  )
}

