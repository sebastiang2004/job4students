import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-8 max-w-6xl">
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <Skeleton className="h-10 w-[250px]" />
          <Skeleton className="h-4 w-[350px]" />
        </div>

        <Skeleton className="h-[200px] w-full rounded-lg" />

        <div className="flex gap-2">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-10 flex-1 rounded-md" />
            ))}
        </div>

        <div className="space-y-6">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-[300px] w-full rounded-lg" />
            ))}
        </div>
      </div>
    </div>
  )
}

