"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Building, Briefcase, Users, Settings, BarChart, FileText } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function EmployerDashboardNew() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("company")

  // Handle tab changes for tabs that don't exist yet
  const handleTabChange = useCallback((tab) => {
    // For tabs that exist in the TabsList
    if (["company", "jobs", "applicants", "documents", "subscription"].includes(tab)) {
      setActiveTab(tab)
    } else {
      // For tabs that don't have corresponding content yet
      alert(`The ${tab} section is coming soon!`)
    }
  }, [])

  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Manufacturing",
    "Retail",
    "Marketing",
    "Consulting",
  ]

  const companySize = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees",
  ]

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center max-w-6xl mx-auto">
      {/* Sidebar */}
      <div className="md:w-64 space-y-4 flex flex-col items-center">
        <Card className="w-full">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Company" />
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
            <h3 className="font-medium text-lg">TechCorp Solutions</h3>
            <p className="text-sm text-muted-foreground">Software Development</p>
            <Badge className="mt-2">Employer</Badge>
          </CardContent>
        </Card>

        <div className="space-y-2 w-full">
          <Button
            variant={activeTab === "company" ? "secondary" : "ghost"}
            className="w-full justify-center"
            size="sm"
            onClick={() => setActiveTab("company")}
          >
            <Building className="mr-2 h-4 w-4" />
            Company Profile
          </Button>
          <Button
            variant={activeTab === "jobs" ? "secondary" : "ghost"}
            className="w-full justify-center"
            size="sm"
            onClick={() => setActiveTab("jobs")}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            Job Postings
          </Button>
          <Button
            variant={activeTab === "applicants" ? "secondary" : "ghost"}
            className="w-full justify-center"
            size="sm"
            onClick={() => setActiveTab("applicants")}
          >
            <Users className="mr-2 h-4 w-4" />
            Applicants
          </Button>
          <Button
            variant={activeTab === "analytics" ? "secondary" : "ghost"}
            className="w-full justify-center"
            size="sm"
            onClick={() => handleTabChange("analytics")}
          >
            <BarChart className="mr-2 h-4 w-4" />
            Analytics
          </Button>
          <Button
            variant={activeTab === "settings" ? "secondary" : "ghost"}
            className="w-full justify-center"
            size="sm"
            onClick={() => handleTabChange("settings")}
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button
            variant={activeTab === "documents" ? "secondary" : "ghost"}
            className="w-full justify-center"
            size="sm"
            onClick={() => setActiveTab("documents")}
          >
            <FileText className="mr-2 h-4 w-4" />
            Documents
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="applicants">Applicants</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
          </TabsList>

          <TabsContent value="company" className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Company Information</CardTitle>
                  <CardDescription>Manage your company details</CardDescription>
                </div>
                <Button variant={isEditing ? "default" : "outline"} onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      defaultValue="TechCorp Solutions"
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="hr@techcorp.com"
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      defaultValue="+40 21 123 4567"
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      defaultValue="https://techcorp.example.com"
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    {isEditing ? (
                      <Select defaultValue="Technology">
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input id="industry" defaultValue="Technology" readOnly className="bg-muted" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">Company Size</Label>
                    {isEditing ? (
                      <Select defaultValue="51-200 employees">
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          {companySize.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input id="size" defaultValue="51-200 employees" readOnly className="bg-muted" />
                    )}
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      defaultValue="Calea Victoriei 12, Bucharest, Romania"
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="description">Company Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your company"
                      defaultValue="TechCorp Solutions is a leading software development company specializing in web and mobile applications. We work with the latest technologies to deliver innovative solutions for businesses of all sizes."
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                      rows={4}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Active Job Postings</CardTitle>
                    <CardDescription>Manage your current job listings</CardDescription>
                  </div>
                  <Button>Post New Job</Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Senior Frontend Developer</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge>Full-time</Badge>
                        <span className="text-sm text-muted-foreground">Bucharest</span>
                        <span className="text-sm text-muted-foreground">Posted 5 days ago</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Applications: 12</span>
                      <span>Views: 245</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Junior Backend Developer</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge>Full-time</Badge>
                        <span className="text-sm text-muted-foreground">Bucharest</span>
                        <span className="text-sm text-muted-foreground">Posted 2 weeks ago</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Applications: 8</span>
                      <span>Views: 189</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">UX/UI Design Intern</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge>Internship</Badge>
                        <span className="text-sm text-muted-foreground">Remote</span>
                        <span className="text-sm text-muted-foreground">Posted 3 days ago</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Applications: 5</span>
                      <span>Views: 120</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applicants" className="mt-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Recent Applicants</CardTitle>
                <CardDescription>Review and manage job applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>MP</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Maria Popescu</h4>
                        <p className="text-sm text-muted-foreground">
                          Applied for Senior Frontend Developer • 2 days ago
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View CV
                      </Button>
                      <Select defaultValue="pending">
                        <SelectTrigger className="w-[130px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="reviewed">Reviewed</SelectItem>
                          <SelectItem value="interview">Interview</SelectItem>
                          <SelectItem value="accepted">Accepted</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>AP</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Alexandru Popa</h4>
                        <p className="text-sm text-muted-foreground">
                          Applied for Junior Backend Developer • 5 days ago
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View CV
                      </Button>
                      <Select defaultValue="interview">
                        <SelectTrigger className="w-[130px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="reviewed">Reviewed</SelectItem>
                          <SelectItem value="interview">Interview</SelectItem>
                          <SelectItem value="accepted">Accepted</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>ID</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Ioana Dumitrescu</h4>
                        <p className="text-sm text-muted-foreground">Applied for UX/UI Design Intern • 1 day ago</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View CV
                      </Button>
                      <Select defaultValue="pending">
                        <SelectTrigger className="w-[130px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="reviewed">Reviewed</SelectItem>
                          <SelectItem value="interview">Interview</SelectItem>
                          <SelectItem value="accepted">Accepted</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" className="w-1/2">
                  View All Applicants
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Company Documents</CardTitle>
                <CardDescription>Upload and manage company documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-6 flex flex-col items-center justify-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Upload Document</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supported formats: PDF, DOCX, DOC, JPG, PNG (Max size: 10MB)
                  </p>
                  <Button>Upload Document</Button>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-center mb-4">Company Documents</h3>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Company_Profile_2023.pdf</h4>
                          <p className="text-xs text-muted-foreground">Uploaded on Nov 10, 2023 • 2.5 MB</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Job_Description_Template.docx</h4>
                          <p className="text-xs text-muted-foreground">Uploaded on Oct 15, 2023 • 0.8 MB</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Company_Logo_High_Res.png</h4>
                          <p className="text-xs text-muted-foreground">Uploaded on Sep 5, 2023 • 3.2 MB</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscription" className="mt-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Subscription Plan</CardTitle>
                <CardDescription>Manage your subscription and billing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-lg">Business Plan</h3>
                      <p className="text-sm text-muted-foreground">Active until: December 31, 2023</p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Monthly fee:</span>
                      <span className="font-medium">€99.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Job postings:</span>
                      <span className="font-medium">10 / month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Featured jobs:</span>
                      <span className="font-medium">3 / month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CV database access:</span>
                      <span className="font-medium">Unlimited</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-center">Payment Method</h3>
                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-muted rounded-md p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-credit-card"
                          >
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <line x1="2" x2="22" y1="10" y2="10" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Change
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-center">Billing History</h3>
                  <div className="rounded-lg border overflow-hidden">
                    <table className="min-w-full divide-y divide-border">
                      <thead className="bg-muted/50">
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider"
                          >
                            Amount
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider"
                          >
                            Invoice
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-card divide-y divide-border">
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-center">Nov 1, 2023</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-center">€99.00</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Paid
                            </Badge>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                            <Button variant="ghost" size="sm">
                              Download
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-center">Oct 1, 2023</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-center">€99.00</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Paid
                            </Badge>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                            <Button variant="ghost" size="sm">
                              Download
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-center">Sep 1, 2023</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-center">€99.00</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Paid
                            </Badge>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                            <Button variant="ghost" size="sm">
                              Download
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Button variant="outline" className="w-1/3">
                  Cancel Subscription
                </Button>
                <Button className="w-1/3">Upgrade Plan</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

