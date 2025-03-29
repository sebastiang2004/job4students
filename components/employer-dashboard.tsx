"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function EmployerDashboard() {
  return (
    <Tabs defaultValue="post" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="post">Post a Job</TabsTrigger>
        <TabsTrigger value="manage">Manage Jobs</TabsTrigger>
        <TabsTrigger value="applications">Applications</TabsTrigger>
      </TabsList>
      <TabsContent value="post" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Post a New Job</CardTitle>
            <CardDescription>Create a new job listing for students</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" placeholder="e.g. Marketing Intern" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Your company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bucharest">Bucharest</SelectItem>
                    <SelectItem value="cluj">Cluj-Napoca</SelectItem>
                    <SelectItem value="timisoara">Timisoara</SelectItem>
                    <SelectItem value="iasi">Iasi</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobType">Job Type</Label>
                <Select>
                  <SelectTrigger id="jobType">
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea id="description" placeholder="Describe the job responsibilities and requirements" rows={6} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Target Audience</Label>
                <div className="rounded-lg border p-4 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="targetSpecific" />
                    <Label htmlFor="targetSpecific" className="font-normal">
                      Target specific universities/schools
                    </Label>
                  </div>
                  <div className="space-y-2 pl-6">
                    <Label htmlFor="universities">Select Universities</Label>
                    <Select>
                      <SelectTrigger id="universities">
                        <SelectValue placeholder="Select universities" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bucharest">University of Bucharest</SelectItem>
                        <SelectItem value="ase">Academy of Economic Studies</SelectItem>
                        <SelectItem value="politehnica">Politehnica University</SelectItem>
                        <SelectItem value="medicine">University of Medicine</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Your job will only be visible to students from the selected universities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">Post Job</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="manage" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Manage Your Jobs</CardTitle>
            <CardDescription>View and edit your active job listings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Marketing Intern</h3>
                    <p className="text-sm text-muted-foreground">Posted 2 days ago • 12 applications</p>
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
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Software Developer Assistant</h3>
                    <p className="text-sm text-muted-foreground">Posted 1 week ago • 8 applications</p>
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
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="applications" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Job Applications</CardTitle>
            <CardDescription>Review applications from students</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">John Doe</h3>
                    <p className="text-sm text-muted-foreground">Applied for Marketing Intern • 2 days ago</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View CV
                    </Button>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Jane Smith</h3>
                    <p className="text-sm text-muted-foreground">
                      Applied for Software Developer Assistant • 5 days ago
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View CV
                    </Button>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

