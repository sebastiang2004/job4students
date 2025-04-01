import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-12 w-64 mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Skeleton className="h-10 w-full mb-4" />
          <div className="space-y-3">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="border rounded-lg p-4">
            <Skeleton className="h-10 w-48 mb-4" />
            <div className="space-y-4 mb-6">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <Skeleton className={`h-24 ${i % 2 === 0 ? "w-3/4" : "w-2/3"} rounded-lg`} />
                  </div>
                ))}
            </div>
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

