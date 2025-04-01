import { CheckCircle2 } from "lucide-react"

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-theme-teal/10 to-theme-purple/10 dark:from-theme-teal/5 dark:to-theme-purple/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-theme-mint/20 px-3 py-1 text-sm text-theme-ocean dark:bg-theme-mint/10 dark:text-theme-teal">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight theme-gradient-text">
              Why Choose Job4Students?
            </h2>
            <p className="mx-auto max-w-[700px] text-theme-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white/90">
              We make it easy for students to find jobs and for employers to find talented students.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-theme-amber/20 dark:bg-theme-amber/30">
              <CheckCircle2 className="h-8 w-8 text-theme-amber" />
            </div>
            <h3 className="text-xl font-bold text-theme-purple dark:text-theme-teal">Student-Focused</h3>
            <p className="text-theme-dark/80 dark:text-white/80">
              Jobs tailored for students with flexible hours and relevant experience.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-theme-teal/20 dark:bg-theme-teal/30">
              <CheckCircle2 className="h-8 w-8 text-theme-teal" />
            </div>
            <h3 className="text-xl font-bold text-theme-purple dark:text-theme-teal">University Partnerships</h3>
            <p className="text-theme-dark/80 dark:text-white/80">
              Exclusive opportunities from partner universities across Romania.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center md:col-span-2 lg:col-span-1">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-theme-blue/20 dark:bg-theme-blue/30">
              <CheckCircle2 className="h-8 w-8 text-theme-blue" />
            </div>
            <h3 className="text-xl font-bold text-theme-purple dark:text-theme-teal">Easy Application</h3>
            <p className="text-theme-dark/80 dark:text-white/80">
              Simple application process with CV upload and tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

