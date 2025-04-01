import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpDown,
  ChevronDown,
  Database,
  Filter,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Settings,
  Users,
} from "lucide-react"

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Database management interface for administrators",
}

export default function AdminDashboardPage() {
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
                <Users className="mr-2 h-4 w-4" />
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
            <h1 className="text-3xl font-bold">Database Management</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Record
            </Button>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Total Users</CardTitle>
                  <CardDescription>All registered users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1,248</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Active Jobs</CardTitle>
                  <CardDescription>Currently open positions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">342</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Companies</CardTitle>
                  <CardDescription>Registered employers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">87</div>
                  <p className="text-xs text-muted-foreground">+3% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="users">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="users">Users</TabsTrigger>
                  <TabsTrigger value="jobs">Jobs</TabsTrigger>
                  <TabsTrigger value="companies">Companies</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Input placeholder="Search..." className="w-64" />
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
                      <DropdownMenuCheckboxItem checked>Active accounts</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Inactive accounts</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Students</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Employers</DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <TabsContent value="users" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Users Management</CardTitle>
                    <CardDescription>View and manage all registered users in the system.</CardDescription>
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
                          <TableHead>Email</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            id: "USR001",
                            name: "John Doe",
                            email: "john.doe@example.com",
                            type: "Student",
                            status: "Active",
                            joined: "2023-05-12",
                          },
                          {
                            id: "USR002",
                            name: "Jane Smith",
                            email: "jane.smith@example.com",
                            type: "Student",
                            status: "Active",
                            joined: "2023-06-23",
                          },
                          {
                            id: "USR003",
                            name: "Robert Johnson",
                            email: "robert@company.com",
                            type: "Employer",
                            status: "Active",
                            joined: "2023-04-10",
                          },
                          {
                            id: "USR004",
                            name: "Emily Davis",
                            email: "emily@example.com",
                            type: "Student",
                            status: "Inactive",
                            joined: "2023-07-05",
                          },
                          {
                            id: "USR005",
                            name: "Michael Brown",
                            email: "michael@techinc.com",
                            type: "Employer",
                            status: "Active",
                            joined: "2023-03-18",
                          },
                        ].map((user) => (
                          <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.type}</TableCell>
                            <TableCell>
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                }`}
                              >
                                {user.status}
                              </span>
                            </TableCell>
                            <TableCell>{user.joined}</TableCell>
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
                                  <DropdownMenuItem>Edit user</DropdownMenuItem>
                                  <DropdownMenuItem>View details</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Delete user</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Showing 5 of 1,248 users</p>
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
              </TabsContent>

              <TabsContent value="jobs" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Jobs Management</CardTitle>
                    <CardDescription>View and manage all job listings in the system.</CardDescription>
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
                          <TableHead>Status</TableHead>
                          <TableHead>Posted</TableHead>
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
                            status: "Active",
                            posted: "2023-07-15",
                          },
                          {
                            id: "JOB002",
                            title: "UX Designer",
                            company: "Creative Agency",
                            category: "Design",
                            status: "Active",
                            posted: "2023-07-10",
                          },
                          {
                            id: "JOB003",
                            title: "Data Analyst",
                            company: "Data Insights Co.",
                            category: "Data Science",
                            status: "Active",
                            posted: "2023-07-05",
                          },
                          {
                            id: "JOB004",
                            title: "Marketing Specialist",
                            company: "Global Marketing",
                            category: "Marketing",
                            status: "Closed",
                            posted: "2023-06-20",
                          },
                          {
                            id: "JOB005",
                            title: "Project Manager",
                            company: "Tech Solutions Inc.",
                            category: "Management",
                            status: "Active",
                            posted: "2023-07-12",
                          },
                        ].map((job) => (
                          <TableRow key={job.id}>
                            <TableCell className="font-medium">{job.id}</TableCell>
                            <TableCell>{job.title}</TableCell>
                            <TableCell>{job.company}</TableCell>
                            <TableCell>{job.category}</TableCell>
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
                    <p className="text-sm text-muted-foreground">Showing 5 of 342 jobs</p>
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
              </TabsContent>

              <TabsContent value="companies" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Companies Management</CardTitle>
                    <CardDescription>View and manage all registered companies in the system.</CardDescription>
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
                          },
                          {
                            id: "CMP002",
                            name: "Creative Agency",
                            industry: "Design",
                            location: "San Francisco, USA",
                            status: "Active",
                            jobs: 5,
                          },
                          {
                            id: "CMP003",
                            name: "Data Insights Co.",
                            industry: "Data Analytics",
                            location: "London, UK",
                            status: "Active",
                            jobs: 8,
                          },
                          {
                            id: "CMP004",
                            name: "Global Marketing",
                            industry: "Marketing",
                            location: "Toronto, Canada",
                            status: "Inactive",
                            jobs: 0,
                          },
                          {
                            id: "CMP005",
                            name: "Innovative Solutions",
                            industry: "Technology",
                            location: "Berlin, Germany",
                            status: "Active",
                            jobs: 7,
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
                                  company.status === "Active"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {company.status}
                              </span>
                            </TableCell>
                            <TableCell>{company.jobs}</TableCell>
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
                    <p className="text-sm text-muted-foreground">Showing 5 of 87 companies</p>
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
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

