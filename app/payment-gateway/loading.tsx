import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="h-16 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-8 w-64 hidden md:block" />
          <Skeleton className="h-8 w-32" />
        </div>
      </div>
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-theme-purple via-theme-blue to-theme-teal">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <Skeleton className="h-8 w-40 bg-white/20" />
              <Skeleton className="h-12 w-full max-w-xl bg-white/20" />
              <Skeleton className="h-8 w-full max-w-lg bg-white/20" />
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-10 w-full max-w-md" />
                <Skeleton className="h-24 w-full" />
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start">
                      <Skeleton className="h-10 w-10 rounded-full mr-4" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-6 w-40" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Skeleton className="h-96 w-full rounded-xl" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

