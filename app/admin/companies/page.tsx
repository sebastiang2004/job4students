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

export default function AdminCompaniesPage() {
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
            <Button variant="ghost" className="justify-start bg-muted" asChild>
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
            <h1 className="text-3xl font-bold">Companies Management</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Company
            </Button>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Total Companies</CardTitle>
                  <CardDescription>All registered employers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">87</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Active Companies</CardTitle>
                  <CardDescription>Companies with active jobs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">72</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>New This Month</CardTitle>
                  <CardDescription>Recently joined companies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Companies Database</CardTitle>
                    <CardDescription>Manage all registered companies in the system</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Search companies..." className="w-64" />
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
                        <DropdownMenuCheckboxItem checked>Active companies</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Inactive companies</DropdownMenuCheckboxItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Industries</DropdownMenuLabel>
                        <DropdownMenuCheckboxItem checked>Technology</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem checked>Design</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem checked>Marketing</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem checked>Finance</DropdownMenuCheckboxItem>
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
                          Name
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead>Industry</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Jobs</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "CMP001",
                        name: "Tech Solutions Inc.",
                        industry: "Technology",
                        location: "New York, USA",
                        status: "Active",
                        jobs: 12,
                        joined: "2023-01-15",
                      },
                      {
                        id: "CMP002",
                        name: "Creative Agency",
                        industry: "Design",
                        location: "San Francisco, USA",
                        status: "Active",
                        jobs: 5,
                        joined: "2023-02-20",
                      },
                      {
                        id: "CMP003",
                        name: "Data Insights Co.",
                        industry: "Data Analytics",
                        location: "London, UK",
                        status: "Active",
                        jobs: 8,
                        joined: "2023-03-10",
                      },
                      {
                        id: "CMP004",
                        name: "Global Marketing",
                        industry: "Marketing",
                        location: "Toronto, Canada",
                        status: "Inactive",
                        jobs: 0,
                        joined: "2023-01-05",
                      },
                      {
                        id: "CMP005",
                        name: "Innovative Solutions",
                        industry: "Technology",
                        location: "Berlin, Germany",
                        status: "Active",
                        jobs: 7,
                        joined: "2023-04-18",
                      },
                      {
                        id: "CMP006",
                        name: "Finance Experts",
                        industry: "Finance",
                        location: "Singapore",
                        status: "Active",
                        jobs: 4,
                        joined: "2023-05-22",
                      },
                      {
                        id: "CMP007",
                        name: "Healthcare Innovations",
                        industry: "Healthcare",
                        location: "Boston, USA",
                        status: "Active",
                        jobs: 6,
                        joined: "2023-06-14",
                      },
                    ].map((company) => (
                      <TableRow key={company.id}>
                        <TableCell className="font-medium">{company.id}</TableCell>
                        <TableCell>{company.name}</TableCell>
                        <TableCell>{company.industry}</TableCell>
                        <TableCell>{company.location}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              company.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                          >
                            {company.status}
                          </span>
                        </TableCell>
                        <TableCell>{company.jobs}</TableCell>
                        <TableCell>{company.joined}</TableCell>
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
                              <DropdownMenuItem>Edit company</DropdownMenuItem>
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>View jobs</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Delete company</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Showing 7 of 87 companies</p>
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
                  <CardTitle>Industry Distribution</CardTitle>
                  <CardDescription>Breakdown of companies by industry</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Technology</div>
                        <div className="text-sm text-muted-foreground">35%</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "35%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Marketing</div>
                        <div className="text-sm text-muted-foreground">20%</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Finance</div>
                        <div className="text-sm text-muted-foreground">15%</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Healthcare</div>
                        <div className="text-sm text-muted-foreground">12%</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "12%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Other</div>
                        <div className="text-sm text-muted-foreground">18%</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "18%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Company Activity</CardTitle>
                  <CardDescription>Recent company-related activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        action: "New company registered",
                        details: "Healthcare Innovations joined the platform",
                        time: "2 days ago",
                      },
                      {
                        action: "Company profile updated",
                        details: "Tech Solutions Inc. updated their profile",
                        time: "3 days ago",
                      },
                      {
                        action: "New jobs posted",
                        details: "Creative Agency posted 2 new job listings",
                        time: "5 days ago",
                      },
                      {
                        action: "Subscription upgraded",
                        details: "Data Insights Co. upgraded to Premium plan",
                        time: "1 week ago",
                      },
                      {
                        action: "Company status changed",
                        details: "Global Marketing marked as inactive",
                        time: "2 weeks ago",
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

