import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-theme-purple" />
        <h3 className="text-xl font-medium">Loading Database Model...</h3>
        <p className="text-muted-foreground">Please wait while we fetch the database schema</p>
      </div>
    </div>
  )
}

