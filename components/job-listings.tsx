"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Briefcase, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export function JobListings() {
  // Sample job listings
  const jobs = [
    {
      id: 1,
      title: "Marketing Intern",
      company: "TechCorp Romania",
      location: "Suceava",
      type: "Part-time",
      posted: "2 days ago",
      description: "Looking for a marketing intern to help with social media campaigns and content creation.",
      postedDate: "2 days ago",
      university: "USV",
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Digital Solutions",
      location: "Iasi",
      type: "Freelance",
      posted: "1 week ago",
      description: "Frontend developer needed for a 3-month project working with React and Next.js.",
      postedDate: "1 week ago",
      university: "UAIC",
    },
    {
      id: 3,
      title: "Customer Support",
      company: "ServiceNow",
      location: "Botosani",
      type: "Part-time",
      posted: "3 days ago",
      description: "Customer support role with flexible hours, perfect for students.",
      postedDate: "3 days ago",
      university: "Any",
    },
  ]

  const [selectedJob, setSelectedJob] = useState(null)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Latest Job Opportunities</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the newest job listings for students across Romania.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.company}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Briefcase className="h-4 w-4 text-gray-500" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>Posted {job.posted}</span>
                  </div>
                  <p className="text-sm text-gray-500">{job.description}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => setSelectedJob(job)}>
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link href="/jobs">View All Jobs</Link>
          </Button>
        </div>
      </div>
      {selectedJob && (
        <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-xl">{selectedJob.title}</DialogTitle>
              <DialogDescription className="flex items-center text-sm">
                <span className="font-medium">{selectedJob.company}</span>
                <span className="mx-2">•</span>
                <span>{selectedJob.location}</span>
                <span className="mx-2">•</span>
                <span>{selectedJob.postedDate}</span>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Job Type</h4>
                <Badge variant="outline">{selectedJob.type}</Badge>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Description</h4>
                <p className="text-sm">{selectedJob.description}</p>
              </div>
              {selectedJob.university !== "Any" && (
                <div>
                  <h4 className="text-sm font-medium mb-1">Target Students</h4>
                  <Badge variant="secondary" className="text-xs">
                    For {selectedJob.university} students
                  </Badge>
                </div>
              )}
            </div>
            <DialogFooter className="flex gap-2 mt-4">
              <Button variant="outline" onClick={() => setSelectedJob(null)}>
                Close
              </Button>
              <Button asChild>
                <Link href={`/jobs/${selectedJob.id}`}>Apply Now</Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

