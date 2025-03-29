import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StudentDashboard } from "@/components/student-dashboard"

export default function StudentDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="mb-8 text-3xl font-bold text-center">Student Dashboard</h1>
          <StudentDashboard />
        </div>
      </main>
      <Footer />
    </div>
  )
}

