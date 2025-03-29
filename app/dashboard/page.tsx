import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { UserProfile } from "@/components/user-profile"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container flex-1 py-6 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row">
          <DashboardSidebar className="md:w-64" />
          <main className="flex-1">
            <UserProfile />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

