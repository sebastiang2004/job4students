import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-gradient-to-br from-theme-mint via-theme-teal to-theme-ocean">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(157,224,173,0.3),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(84,121,128,0.3),transparent_70%)]"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
          <div className="space-y-4 w-full">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Find Your Perfect Student Job
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl font-medium">
              Connecting students with part-time jobs, internships, and freelance opportunities in Romania.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button asChild size="lg" className="bg-white text-theme-ocean hover:bg-white/90">
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-black bg-white hover:bg-white/90 hover:text-theme-ocean"
            >
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

