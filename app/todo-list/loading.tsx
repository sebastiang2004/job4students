import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <Skeleton className="h-10 w-[300px] mx-auto" />
          <Skeleton className="h-4 w-[400px] mx-auto" />
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-4 w-40 mt-2" />
              </div>
              <Skeleton className="h-8 w-12" />
            </div>

            <Skeleton className="w-full h-2.5 mt-2" />
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-4 w-64 mt-2" />

                <div className="flex gap-2 mt-4">
                  <Skeleton className="h-9 w-24" />
                  <Skeleton className="h-9 w-32" />
                  <Skeleton className="h-9 w-32" />
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  <Skeleton className="h-10 w-full" />
                  <div className="space-y-3 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Skeleton key={i} className="h-20 w-full" />
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Skeleton className="h-4 w-32" />
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-48 mt-2" />
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>

                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>

                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </CardContent>

              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <Skeleton className="h-6 w-32" />
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-20 w-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

