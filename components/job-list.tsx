import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function JobList() {
  const jobs = [
    {
      id: 1,
      title: "Marketing Intern",
      company: "TechCorp",
      location: "Remote",
      type: "Part-time",
      university: "Any",
      description: "Assist with social media campaigns and content creation.",
      postedDate: "2 days ago",
    },
    {
      id: 2,
      title: "Software Developer Assistant",
      company: "CodeWorks",
      location: "Bucharest",
      type: "Internship",
      university: "Technical University",
      description: "Help develop and test new software features.",
      postedDate: "1 week ago",
    },
    {
      id: 3,
      title: "Research Assistant",
      company: "BioLabs",
      location: "Cluj-Napoca",
      type: "Part-time",
      university: "Medical University",
      description: "Support ongoing research projects in the biology department.",
      postedDate: "3 days ago",
    },
    {
      id: 4,
      title: "Finance Intern",
      company: "Global Finance",
      location: "Timisoara",
      type: "Internship",
      university: "Economics University",
      description: "Learn about financial analysis and reporting.",
      postedDate: "5 days ago",
    },
    {
      id: 5,
      title: "Customer Support Representative",
      company: "ServiceNow",
      location: "Remote",
      type: "Part-time",
      university: "Any",
      description: "Provide excellent customer service via email and chat.",
      postedDate: "1 day ago",
    },
    {
      id: 6,
      title: "Graphic Design Intern",
      company: "Creative Studios",
      location: "Bucharest",
      type: "Internship",
      university: "Arts University",
      description: "Create visual concepts for marketing materials.",
      postedDate: "2 weeks ago",
    },
    {
      id: 7,
      title: "Data Analysis Assistant",
      company: "DataInsights",
      location: "Iasi",
      type: "Part-time",
      university: "Any",
      description: "Help analyze and interpret complex data sets.",
      postedDate: "4 days ago",
    },
    {
      id: 8,
      title: "HR Assistant",
      company: "PeopleFirst",
      location: "Bucharest",
      type: "Part-time",
      university: "Any",
      description: "Support the HR team with administrative tasks.",
      postedDate: "1 week ago",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">Showing {jobs.length} jobs</p>
        <Select defaultValue="newest">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest first</SelectItem>
            <SelectItem value="oldest">Oldest first</SelectItem>
            <SelectItem value="relevance">Relevance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="font-medium">{job.company}</span>
                    <span className="mx-2">•</span>
                    <span>{job.location}</span>
                    <span className="mx-2">•</span>
                    <span>{job.postedDate}</span>
                  </div>
                </div>
                <Badge variant="outline">{job.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{job.description}</p>
              {job.university !== "Any" && (
                <div className="mt-2">
                  <Badge variant="secondary" className="text-xs">
                    For {job.university} students
                  </Badge>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                Save
              </Button>
              <Button asChild size="sm">
                <Link href={`/jobs/${job.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" disabled>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            1
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            2
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            3
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

