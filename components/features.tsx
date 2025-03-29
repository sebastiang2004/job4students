import { CheckCircle2 } from "lucide-react"

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-theme-mint/10 to-theme-ocean/10 dark:from-theme-mint/5 dark:to-theme-ocean/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-theme-mint/20 px-3 py-1 text-sm text-theme-ocean dark:bg-theme-mint/10">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight theme-gradient-text">
              Why Choose Job4Students?
            </h2>
            <p className="mx-auto max-w-[700px] text-theme-charcoal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-theme-mint/90">
              We make it easy for students to find jobs and for employers to find talented students.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-theme-mint/20">
              <CheckCircle2 className="h-8 w-8 text-theme-mint" />
            </div>
            <h3 className="text-xl font-bold text-theme-ocean">Student-Focused</h3>
            <p className="text-theme-charcoal/80 dark:text-theme-mint/80">
              Jobs tailored for students with flexible hours and relevant experience.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-theme-teal/20">
              <CheckCircle2 className="h-8 w-8 text-theme-teal" />
            </div>
            <h3 className="text-xl font-bold text-theme-ocean">University Partnerships</h3>
            <p className="text-theme-charcoal/80 dark:text-theme-mint/80">
              Exclusive opportunities from partner universities across Romania.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-theme-ocean/20">
              <CheckCircle2 className="h-8 w-8 text-theme-ocean" />
            </div>
            <h3 className="text-xl font-bold text-theme-ocean">Easy Application</h3>
            <p className="text-theme-charcoal/80 dark:text-theme-mint/80">
              Simple application process with CV upload and tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

