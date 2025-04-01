"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, MapPin, Clock, Search, Bot, Sparkles, RefreshCw, Filter } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function AIJobsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const [fetchedJobs, setFetchedJobs] = useState([])
  const [showExplanation, setShowExplanation] = useState(true)

  // Sample university partners
  const universityPartners = [
    { name: "University of Stefan cel Mare", location: "Suceava", jobs: 12 },
    { name: "Alexandru Ioan Cuza University", location: "Iasi", jobs: 8 },
    { name: "Technical University", location: "Iasi", jobs: 5 },
    { name: "Vasile Alecsandri University", location: "Bacau", jobs: 3 },
  ]

  // Sample jobs that will be "fetched" by the AI
  const allJobs = [
    {
      id: 1,
      title: "Machine Learning Research Assistant",
      company: "TechInnovate",
      location: "Suceava",
      type: "Part-time",
      university: "University of Stefan cel Mare",
      description:
        "Assist in developing and testing machine learning models for natural language processing applications.",
      postedDate: "Just now",
      category: "tech",
      isNew: true,
      matchScore: 95,
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "DataCorp",
      location: "Iasi",
      type: "Internship",
      university: "Alexandru Ioan Cuza University",
      description: "Work on real-world data analysis projects using Python, R, and SQL.",
      postedDate: "2 hours ago",
      category: "tech",
      isNew: true,
      matchScore: 88,
    },
    {
      id: 3,
      title: "Web Development Assistant",
      company: "WebSolutions",
      location: "Suceava",
      type: "Part-time",
      university: "University of Stefan cel Mare",
      description: "Help develop and maintain websites using React, Next.js, and Node.js.",
      postedDate: "5 hours ago",
      category: "tech",
      isNew: true,
      matchScore: 92,
    },
    {
      id: 4,
      title: "Marketing Research Intern",
      company: "BrandBoost",
      location: "Iasi",
      type: "Internship",
      university: "Alexandru Ioan Cuza University",
      description: "Conduct market research and assist in developing marketing strategies.",
      postedDate: "1 day ago",
      category: "marketing",
      isNew: false,
      matchScore: 78,
    },
    {
      id: 5,
      title: "Finance Assistant",
      company: "FinTech Solutions",
      location: "Suceava",
      type: "Part-time",
      university: "University of Stefan cel Mare",
      description: "Assist with financial analysis, reporting, and budgeting.",
      postedDate: "2 days ago",
      category: "finance",
      isNew: false,
      matchScore: 85,
    },
    {
      id: 6,
      title: "Graphic Design Intern",
      company: "CreativeWorks",
      location: "Botosani",
      type: "Internship",
      university: "Any",
      description: "Create visual concepts for marketing materials and social media.",
      postedDate: "3 days ago",
      category: "design",
      isNew: false,
      matchScore: 80,
    },
    {
      id: 7,
      title: "Research Assistant - Biology",
      company: "BioLabs",
      location: "Iasi",
      type: "Part-time",
      university: "Alexandru Ioan Cuza University",
      description: "Support ongoing research projects in the biology department.",
      postedDate: "Just now",
      category: "science",
      isNew: true,
      matchScore: 90,
    },
    {
      id: 8,
      title: "Software Engineering Intern",
      company: "CodeCraft",
      location: "Suceava",
      type: "Internship",
      university: "University of Stefan cel Mare",
      description: "Develop and test software applications using Java and Spring Boot.",
      postedDate: "1 hour ago",
      category: "tech",
      isNew: true,
      matchScore: 94,
    },
  ]

  // Simulate AI fetching jobs
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsLoading(false)
            return 100
          }
          return prev + 5
        })
      }, 150)

      return () => clearInterval(interval)
    }
  }, [isLoading])

  // Set fetched jobs after loading
  useEffect(() => {
    if (!isLoading) {
      // Simulate AI fetching jobs with a slight delay
      setTimeout(() => {
        setFetchedJobs(allJobs)
      }, 500)
    }
  }, [isLoading])

  // Filter jobs based on search term and active filter
  const filteredJobs = fetchedJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      activeFilter === "all" || job.category === activeFilter || (activeFilter === "new" && job.isNew)

    return matchesSearch && matchesFilter
  })

  // Function to refresh jobs
  const refreshJobs = () => {
    setIsLoading(true)
    setProgress(0)
    setFetchedJobs([])
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center justify-center gap-2">
                <Bot className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter">AI Job Matching</h1>
                <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <p className="text-sm md:text-xl/relaxed text-gray-500 dark:text-gray-400">
                Our AI automatically fetches and matches the latest job opportunities from companies partnered with your
                university.
              </p>
            </div>
          </div>

          {showExplanation && (
            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardHeader className="pb-2 md:pb-4">
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Bot className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  How Our AI Job Matching Works
                </CardTitle>
                <CardDescription className="text-xs md:text-sm">
                  Powered by advanced machine learning algorithms to find the perfect opportunities for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center text-center space-y-2 p-3 md:p-4 rounded-lg bg-background/80">
                    <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                      <Building className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-sm md:text-base">University Partnerships</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      We connect directly with university partner companies to access exclusive opportunities before
                      they're publicly listed.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2 p-3 md:p-4 rounded-lg bg-background/80">
                    <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                      <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-sm md:text-base">Smart Matching</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Our AI analyzes your profile, skills, and preferences to find jobs that match your unique
                      qualifications and career goals.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2 p-3 md:p-4 rounded-lg bg-background/80">
                    <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                      <RefreshCw className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-sm md:text-base">Real-Time Updates</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      The system continuously scans for new opportunities and notifies you when relevant positions
                      become available.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="ghost" size="sm" onClick={() => setShowExplanation(false)}>
                  Hide Explanation
                </Button>
              </CardFooter>
            </Card>
          )}

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              {isLoading ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Bot className="h-4 w-4 md:h-5 md:w-5 text-primary animate-pulse" />
                      AI is fetching jobs for you
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                      Scanning university partner networks for the latest opportunities...
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Progress value={progress} className="h-2" />
                    <div className="grid grid-cols-3 gap-2 md:gap-4 text-center text-xs md:text-sm">
                      <div>
                        <p className="font-medium">Scanning Partners</p>
                        <p className="text-muted-foreground">
                          {Math.min(universityPartners.length, Math.ceil(progress / 25))} of {universityPartners.length}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Jobs Found</p>
                        <p className="text-muted-foreground">{Math.ceil((allJobs.length * progress) / 100)}</p>
                      </div>
                      <div>
                        <p className="font-medium">Profile Match</p>
                        <p className="text-muted-foreground">Analyzing...</p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-4">
                      {Array(3)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className="rounded-lg border p-3 md:p-4 animate-pulse">
                            <div className="h-4 md:h-5 w-2/3 bg-muted rounded mb-2"></div>
                            <div className="h-3 md:h-4 w-1/3 bg-muted rounded mb-3 md:mb-4"></div>
                            <div className="h-3 md:h-4 w-full bg-muted rounded"></div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search jobs..."
                          className="pl-8 w-full md:w-[250px]"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <Button variant="outline" size="icon" onClick={refreshJobs} title="Refresh jobs">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                      <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <Tabs defaultValue="all" value={activeFilter} onValueChange={setActiveFilter} className="w-full">
                        <TabsList className="h-8">
                          <TabsTrigger value="all" className="text-xs md:text-sm px-2 md:px-3">
                            All
                          </TabsTrigger>
                          <TabsTrigger value="new" className="text-xs md:text-sm px-2 md:px-3">
                            New
                          </TabsTrigger>
                          <TabsTrigger value="tech" className="text-xs md:text-sm px-2 md:px-3">
                            Tech
                          </TabsTrigger>
                          <TabsTrigger value="finance" className="text-xs md:text-sm px-2 md:px-3">
                            Finance
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {filteredJobs.length > 0 ? (
                      filteredJobs.map((job) => (
                        <Card key={job.id} className={job.isNew ? "border-primary/30" : ""}>
                          <CardHeader className="pb-2">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                              <div>
                                <CardTitle className="text-base md:text-xl flex flex-wrap items-center gap-2">
                                  {job.title}
                                  {job.isNew && (
                                    <Badge className="ml-0 md:ml-2 bg-primary text-primary-foreground">New</Badge>
                                  )}
                                </CardTitle>
                                <div className="flex flex-wrap items-center text-xs md:text-sm text-muted-foreground">
                                  <span className="font-medium">{job.company}</span>
                                  <span className="mx-2">•</span>
                                  <span>{job.location}</span>
                                  <span className="mx-2">•</span>
                                  <span>{job.postedDate}</span>
                                </div>
                              </div>
                              <Badge variant="outline" className="self-start text-xs">
                                {job.type}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-xs md:text-sm">{job.description}</p>
                            <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  For {job.university} students
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs md:text-sm font-medium">AI Match Score:</span>
                                <Badge
                                  variant="outline"
                                  className={`text-xs
            ${
              job.matchScore >= 90
                ? "bg-green-50 text-green-700 border-green-200"
                : job.matchScore >= 80
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : "bg-amber-50 text-amber-700 border-amber-200"
            }
          `}
                                >
                                  {job.matchScore}%
                                </Badge>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button variant="outline" size="sm" className="text-xs md:text-sm">
                              Save
                            </Button>
                            <Button size="sm" asChild className="text-xs md:text-sm">
                              <Link href={`/jobs/${job.id}`}>Apply Now</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">No jobs match your search criteria.</p>
                        <Button
                          variant="link"
                          onClick={() => {
                            setSearchTerm("")
                            setActiveFilter("all")
                          }}
                        >
                          Clear filters
                        </Button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">University Partners</CardTitle>
                  <CardDescription className="text-xs md:text-sm">
                    Companies with exclusive opportunities for students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {universityPartners.map((partner) => (
                      <div key={partner.name} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm md:text-base">{partner.name}</p>
                          <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-3 w-3" />
                            <span>{partner.location}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {partner.jobs} jobs
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-xs md:text-sm">
                    View All Partners
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Job Alerts</CardTitle>
                  <CardDescription>Get notified when new opportunities match your profile</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Web Development</p>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>Last checked: 5 minutes ago</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Data Science</p>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>Last checked: 10 minutes ago</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Marketing</p>
                      <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                        Paused
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>Last checked: 2 days ago</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Manage Alerts</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Match Settings</CardTitle>
                  <CardDescription>Customize how the AI finds jobs for you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Skills Priority</p>
                      <Badge variant="outline">High</Badge>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Location Preference</p>
                      <Badge variant="outline">Medium</Badge>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Job Type Priority</p>
                      <Badge variant="outline">Medium</Badge>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Adjust Settings
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

