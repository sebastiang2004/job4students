"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Bell, Settings, User, FileText, BookmarkIcon } from "lucide-react"

export function StudentDashboard() {
  const [isEditing, setIsEditing] = useState(false)

  const universities = [
    "University of Bucharest",
    "Academy of Economic Studies",
    "Politehnica University",
    "University of Medicine",
    "Babeș-Bolyai University",
    "West University of Timișoara",
  ]

  const studyFields = [
    "Computer Science",
    "Business Administration",
    "Engineering",
    "Medicine",
    "Law",
    "Economics",
    "Psychology",
    "Arts",
  ]

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center max-w-6xl mx-auto">
      {/* Sidebar */}
      <div className="md:w-64 space-y-4 flex flex-col items-center">
        <Card className="w-full">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Student" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <h3 className="font-medium text-lg">Maria Popescu</h3>
            <p className="text-sm text-muted-foreground">Computer Science Student</p>
            <Badge className="mt-2">Student</Badge>
          </CardContent>
        </Card>

        <div className="space-y-2 w-full">
          <Button variant="secondary" className="w-full justify-center" size="sm">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button variant="ghost" className="w-full justify-center" size="sm">
            <Briefcase className="mr-2 h-4 w-4" />
            Applications
          </Button>
          <Button variant="ghost" className="w-full justify-center" size="sm">
            <BookmarkIcon className="mr-2 h-4 w-4" />
            Saved Jobs
          </Button>
          <Button variant="ghost" className="w-full justify-center" size="sm">
            <FileText className="mr-2 h-4 w-4" />
            CV Manager
          </Button>
          <Button variant="ghost" className="w-full justify-center" size="sm">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button variant="ghost" className="w-full justify-center" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="cv">CV Manager</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Manage your personal details</CardDescription>
                </div>
                <Button variant={isEditing ? "default" : "outline"} onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      defaultValue="Maria Popescu"
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="maria.popescu@gmail.com"
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      defaultValue="+40 712 345 678"
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      defaultValue="Bucharest, Romania"
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">University</Label>
                    {isEditing ? (
                      <Select defaultValue="University of Bucharest">
                        <SelectTrigger>
                          <SelectValue placeholder="Select university" />
                        </SelectTrigger>
                        <SelectContent>
                          {universities.map((university) => (
                            <SelectItem key={university} value={university}>
                              {university}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input id="university" defaultValue="University of Bucharest" readOnly className="bg-muted" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studyField">Field of Study</Label>
                    {isEditing ? (
                      <Select defaultValue="Computer Science">
                        <SelectTrigger>
                          <SelectValue placeholder="Select field of study" />
                        </SelectTrigger>
                        <SelectContent>
                          {studyFields.map((field) => (
                            <SelectItem key={field} value={field}>
                              {field}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input id="studyField" defaultValue="Computer Science" readOnly className="bg-muted" />
                    )}
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself"
                      defaultValue="Computer Science student passionate about web development and AI. Looking for part-time opportunities to gain practical experience while completing my studies."
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                      rows={4}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="mt-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Education</CardTitle>
                <CardDescription>Your academic background</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="font-medium text-center">University of Bucharest</div>
                  <div className="text-sm text-muted-foreground text-center">Bachelor of Computer Science</div>
                  <div className="text-sm text-muted-foreground text-center">2021 - Present</div>
                  <div className="mt-2 text-sm text-center">GPA: 9.5/10</div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="font-medium text-center">National College "Mihai Viteazul"</div>
                  <div className="text-sm text-muted-foreground text-center">Mathematics and Computer Science</div>
                  <div className="text-sm text-muted-foreground text-center">2017 - 2021</div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" className="w-1/2">
                  Add Education
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="mt-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Experience</CardTitle>
                <CardDescription>Your work experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="font-medium text-center">Web Developer Intern</div>
                  <div className="text-sm text-muted-foreground text-center">TechCorp</div>
                  <div className="text-sm text-muted-foreground text-center">June 2022 - August 2022</div>
                  <div className="mt-2 text-sm text-center">
                    Worked on front-end development using React and Next.js. Assisted in building responsive UI
                    components and implementing API integrations.
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="font-medium text-center">Student Volunteer</div>
                  <div className="text-sm text-muted-foreground text-center">University IT Department</div>
                  <div className="text-sm text-muted-foreground text-center">October 2021 - May 2022</div>
                  <div className="mt-2 text-sm text-center">
                    Provided technical support to students and faculty. Assisted in maintaining computer labs and
                    troubleshooting hardware/software issues.
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" className="w-1/2">
                  Add Experience
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="mt-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Skills</CardTitle>
                <CardDescription>Your technical and soft skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="font-medium mb-4">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">HTML/CSS</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">SQL</Badge>
                      <Badge variant="secondary">Git</Badge>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium mb-4">Languages</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">Romanian (Native)</Badge>
                      <Badge variant="secondary">English (Fluent)</Badge>
                      <Badge variant="secondary">French (Intermediate)</Badge>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium mb-4">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">Communication</Badge>
                      <Badge variant="secondary">Teamwork</Badge>
                      <Badge variant="secondary">Problem Solving</Badge>
                      <Badge variant="secondary">Time Management</Badge>
                      <Badge variant="secondary">Adaptability</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" className="w-1/2">
                  Add Skills
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="cv" className="mt-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>CV Manager</CardTitle>
                <CardDescription>Upload and manage your CV documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-6 flex flex-col items-center justify-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Upload your CV</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supported formats: PDF, DOCX, DOC (Max size: 5MB)
                  </p>
                  <Button>Upload CV</Button>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-center mb-4">Your CVs</h3>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Maria_Popescu_CV.pdf</h4>
                          <p className="text-xs text-muted-foreground">Uploaded on Nov 15, 2023 • 1.2 MB</p>
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
                          <h4 className="font-medium">Maria_Popescu_CV_Tech.pdf</h4>
                          <p className="text-xs text-muted-foreground">Uploaded on Oct 5, 2023 • 0.9 MB</p>
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
        </Tabs>
      </div>
    </div>
  )
}

