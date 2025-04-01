import Link from "next/link"
import { ArrowUpDown, ChevronDown, Database, Filter, MoreHorizontal, RefreshCw, Settings } from "lucide-react"

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

export default function AdminApplicationsPage() {
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
            <Button variant="ghost" className="justify-start" asChild>
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
            <Button variant="ghost" className="justify-start bg-muted" asChild>
              <Link href="/admin/applications">
                <Database className="mr-2 h-4 w-4" />
                Applications
              </Link>
            </Button>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Applications Management</h1>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Total Applications</CardTitle>
                  <CardDescription>All job applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1,248</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Pending Review</CardTitle>
                  <CardDescription>Awaiting employer review</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">342</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Shortlisted</CardTitle>
                  <CardDescription>Selected for interview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">187</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Rejected</CardTitle>
                  <CardDescription>Not selected applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">719</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Applications Database</CardTitle>
                    <CardDescription>Manage all job applications in the system</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Search applications..." className="w-64" />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Filter className="mr-2 h-4 w-4" />
                          Filter
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem checked>Pending Review</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem checked>Shortlisted</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Rejected</DropdownMenuCheckboxItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Date Range</DropdownMenuLabel>
                        <DropdownMenuCheckboxItem checked>Last 7 days</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Last 30 days</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Last 90 days</DropdownMenuCheckboxItem>
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
                          Applicant
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead>Job Position</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Applied Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "APP001",
                        applicant: "John Doe",
                        position: "Frontend Developer",
                        company: "Tech Solutions Inc.",
                        status: "Pending Review",
                        date: "2023-07-15",
                      },
                      {
                        id: "APP002",
                        applicant: "Jane Smith",
                        position: "UX Designer",
                        company: "Creative Agency",
                        status: "Shortlisted",
                        date: "2023-07-12",
                      },
                      {
                        id: "APP003",
                        applicant: "Robert Johnson",
                        position: "Data Analyst",
                        company: "Data Insights Co.",
                        status: "Rejected",
                        date: "2023-07-10",
                      },
                      {
                        id: "APP004",
                        applicant: "Emily Davis",
                        position: "Marketing Specialist",
                        company: "Global Marketing",
                        status: "Pending Review",
                        date: "2023-07-08",
                      },
                      {
                        id: "APP005",
                        applicant: "Michael Brown",
                        position: "Project Manager",
                        company: "Tech Solutions Inc.",
                        status: "Shortlisted",
                        date: "2023-07-05",
                      },
                      {
                        id: "APP006",
                        applicant: "Sarah Wilson",
                        position: "Frontend Developer",
                        company: "Tech Solutions Inc.",
                        status: "Rejected",
                        date: "2023-07-03",
                      },
                      {
                        id: "APP007",
                        applicant: "David Miller",
                        position: "Backend Developer",
                        company: "Innovative Solutions",
                        status: "Pending Review",
                        date: "2023-07-01",
                      },
                      {
                        id: "APP008",
                        applicant: "Jennifer Taylor",
                        position: "Content Writer",
                        company: "Media Group",
                        status: "Shortlisted",
                        date: "2023-06-28",
                      },
                    ].map((application) => (
                      <TableRow key={application.id}>
                        <TableCell className="font-medium">{application.id}</TableCell>
                        <TableCell>{application.applicant}</TableCell>
                        <TableCell>{application.position}</TableCell>
                        <TableCell>{application.company}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              application.status === "Pending Review"
                                ? "bg-yellow-100 text-yellow-800"
                                : application.status === "Shortlisted"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {application.status}
                          </span>
                        </TableCell>
                        <TableCell>{application.date}</TableCell>
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
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>View resume</DropdownMenuItem>
                              <DropdownMenuItem>Change status</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Delete application</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Showing 8 of 1,248 applications</p>
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
                  <CardTitle>Application Status Distribution</CardTitle>
                  <CardDescription>Breakdown of applications by status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Pending Review</div>
                        <div className="text-sm text-muted-foreground">27%</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-yellow-500" style={{ width: "27%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Shortlisted</div>
                        <div className="text-sm text-muted-foreground">15%</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-green-500" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Rejected</div>
                        <div className="text-sm text-muted-foreground">58%</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-red-500" style={{ width: "58%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Application Activity</CardTitle>
                  <CardDescription>Latest application-related activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        action: "New application submitted",
                        details: "John Doe applied for Frontend Developer",
                        time: "2 hours ago",
                      },
                      {
                        action: "Application status changed",
                        details: "Jane Smith was shortlisted for UX Designer",
                        time: "5 hours ago",
                      },
                      {
                        action: "Application rejected",
                        details: "Robert Johnson was rejected for Data Analyst",
                        time: "1 day ago",
                      },
                      {
                        action: "Resume downloaded",
                        details: "Emily Davis's resume was downloaded by employer",
                        time: "2 days ago",
                      },
                      {
                        action: "Interview scheduled",
                        details: "Michael Brown's interview scheduled for next week",
                        time: "3 days ago",
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

