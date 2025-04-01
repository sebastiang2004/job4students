export default function Loading() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-32 w-32 animate-spin rounded-full border-b-4 border-primary"></div>
        <h3 className="text-xl font-medium">Loading financial data...</h3>
      </div>
    </div>
  )
}

