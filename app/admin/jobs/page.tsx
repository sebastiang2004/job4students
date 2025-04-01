import Link from "next/link"
import { ArrowUpDown, ChevronDown, Database, Filter, MoreHorizontal, Plus, RefreshCw, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminJobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link href="/admin" className="flex items-center gap-2 font-semibold">
          <Database className="h-5 w-5" />
          <span>Admin Dashboard</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/">Back to Site</Link>
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
      </header>
      <div className="grid flex-1 grid-cols-[240px_1fr]">
        <aside className="border-r bg-muted/40">
          <nav className="flex flex-col gap-2 p-4">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Database Entities</h2>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/admin">
                <Database className="mr-2 h-4 w-4" />
                Users
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start bg-muted" asChild>
              <Link href="/admin/jobs">
                <Database className="mr-2 h-4 w-4" />
                Jobs
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/admin/companies">
                <Database className="mr-2 h-4 w-4" />
                Companies
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/admin/applications">
                <Database className="mr-2 h-4 w-4" />
                Applications
              </Link>
            </Button>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Jobs Management</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Job
            </Button>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Total Jobs</CardTitle>
                  <CardDescription>All job listings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">342</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Active Jobs</CardTitle>
                  <CardDescription>Currently open positions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">287</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Closed Jobs</CardTitle>
                  <CardDescription>Filled or expired positions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">55</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Applications</CardTitle>
                  <CardDescription>Total job applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1,248</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Jobs Database</CardTitle>
                    <CardDescription>Manage all job listings in the system</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Search jobs..." className="w-64" />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Filter className="mr-2 h-4 w-4" />
                          Filter
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem checked>Active jobs</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Closed jobs</DropdownMenuCheckboxItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Categories</DropdownMenuLabel>
                        <DropdownMenuCheckboxItem checked>Development</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem checked>Design</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem checked>Marketing</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem checked>Management</DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>
                        <div className="flex items-center">
                          Title
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Posted</TableHead>
                      <TableHead>Applications</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "JOB001",
                        title: "Frontend Developer",
                        company: "Tech Solutions Inc.",
                        category: "Development",
                        location: "New York, USA",
                        status: "Active",
                        posted: "2023-07-15",
                        applications: 24,
                      },
                      {
                        id: "JOB002",
                        title: "UX Designer",
                        company: "Creative Agency",
                        category: "Design",
                        location: "San Francisco, USA",
                        status: "Active",
                        posted: "2023-07-10",
                        applications: 18,
                      },
                      {
                        id: "JOB003",
                        title: "Data Analyst",
                        company: "Data Insights Co.",
                        category: "Data Science",
                        location: "London, UK",
                        status: "Active",
                        posted: "2023-07-05",
                        applications: 15,
                      },
                      {
                        id: "JOB004",
                        title: "Marketing Specialist",
                        company: "Global Marketing",
                        category: "Marketing",
                        location: "Toronto, Canada",
                        status: "Closed",
                        posted: "2023-06-20",
                        applications: 32,
                      },
                      {
                        id: "JOB005",
                        title: "Project Manager",
                        company: "Tech Solutions Inc.",
                        category: "Management",
                        location: "Berlin, Germany",
                        status: "Active",
                        posted: "2023-07-12",
                        applications: 7,
                      },
                      {
                        id: "JOB006",
                        title: "Backend Developer",
                        company: "Innovative Solutions",
                        category: "Development",
                        location: "Amsterdam, Netherlands",
                        status: "Active",
                        posted: "2023-07-08",
                        applications: 19,
                      },
                      {
                        id: "JOB007",
                        title: "Content Writer",
                        company: "Media Group",
                        category: "Content",
                        location: "Remote",
                        status: "Active",
                        posted: "2023-07-14",
                        applications: 28,
                      },
                      {
                        id: "JOB008",
                        title: "HR Manager",
                        company: "Global Enterprises",
                        category: "Human Resources",
                        location: "Singapore",
                        status: "Active",
                        posted: "2023-07-01",
                        applications: 12,
                      },
                    ].map((job) => (
                      <TableRow key={job.id}>
                        <TableCell className="font-medium">{job.id}</TableCell>
                        <TableCell>{job.title}</TableCell>
                        <TableCell>{job.company}</TableCell>
                        <TableCell>{job.category}</TableCell>
                        <TableCell>{job.location}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              job.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {job.status}
                          </span>
                        </TableCell>
                        <TableCell>{job.posted}</TableCell>
                        <TableCell>{job.applications}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit job</DropdownMenuItem>
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>View applications</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Delete job</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Showing 8 of 342 jobs</p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Job Categories Distribution</CardTitle>
                  <CardDescription>Breakdown of jobs by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Development</div>
                        <div className="text-sm text-muted-foreground">42%</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "42%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Design</div>
                        <div className="text-sm text-muted-foreground">28%</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "28%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Marketing</div>
                        <div className="text-sm text-muted-foreground">15%</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Management</div>
                        <div className="text-sm text-muted-foreground">10%</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Other</div>
                        <div className="text-sm text-muted-foreground">5%</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "5%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest job-related activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        action: "New job posted",
                        details: "Frontend Developer at Tech Solutions Inc.",
                        time: "2 hours ago",
                      },
                      {
                        action: "Job updated",
                        details: "Salary increased for UX Designer position",
                        time: "5 hours ago",
                      },
                      {
                        action: "Job closed",
                        details: "Marketing Specialist position filled",
                        time: "1 day ago",
                      },
                      {
                        action: "New applications",
                        details: "12 new applications received today",
                        time: "1 day ago",
                      },
                      {
                        action: "Job featured",
                        details: "Data Analyst position marked as featured",
                        time: "2 days ago",
                      },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Database className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.details}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

