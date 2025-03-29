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

export function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)

  const countries = [
    "Romania",
    "United States",
    "United Kingdom",
    "France",
    "Germany",
    "Italy",
    "Spain",
    "Hungary",
    "Austria",
    "Belgium",
  ]

  return (
    <Tabs defaultValue="personal" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="personal">Personal Info</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
      </TabsList>
      <TabsContent value="personal" className="mt-6">
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
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button variant="outline" size="sm">
                  Change Photo
                </Button>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  defaultValue="John Doe"
                  readOnly={!isEditing}
                  className={!isEditing ? "bg-muted" : ""}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john@example.com"
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
                <Label htmlFor="country">Country</Label>
                {isEditing ? (
                  <Select defaultValue="Romania">
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input id="country" defaultValue="Romania" readOnly className="bg-muted" />
                )}
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself"
                  defaultValue="Computer Science student passionate about web development and AI."
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
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription>Your academic background</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="font-medium">University of Bucharest</div>
              <div className="text-sm text-muted-foreground">Computer Science</div>
              <div className="text-sm text-muted-foreground">2020 - Present</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="font-medium">National College "Mihai Viteazul"</div>
              <div className="text-sm text-muted-foreground">Mathematics and Computer Science</div>
              <div className="text-sm text-muted-foreground">2016 - 2020</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Add Education
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="experience" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <CardDescription>Your work experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="font-medium">Web Developer Intern</div>
              <div className="text-sm text-muted-foreground">TechCorp</div>
              <div className="text-sm text-muted-foreground">June 2022 - August 2022</div>
              <div className="mt-2 text-sm">Worked on front-end development using React and Next.js.</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Add Experience
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

