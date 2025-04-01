"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Filter, ChevronLeft, ChevronRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSearchParams } from "next/navigation"

export function JobList() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const jobs = [
    {
      id: 1,
      title: "Marketing Intern",
      company: "TechCorp",
      location: "Suceava",
      type: "Part-time",
      university: "USV",
      description: "Assist with social media campaigns and content creation.",
      postedDate: "2 days ago",
      industry: "tech",
      category: "marketing",
    },
    {
      id: 2,
      title: "Software Developer Assistant",
      company: "CodeWorks",
      location: "Iasi",
      type: "Internship",
      university: "UAIC",
      description: "Help develop and test new software features.",
      postedDate: "1 week ago",
      industry: "tech",
      category: "tech",
    },
    {
      id: 3,
      title: "Research Assistant",
      company: "BioLabs",
      location: "Suceava",
      type: "Part-time",
      university: "USV",
      description: "Support ongoing research projects in the biology department.",
      postedDate: "3 days ago",
      industry: "healthcare",
      category: "data",
    },
    {
      id: 4,
      title: "Finance Intern",
      company: "Global Finance",
      location: "Botosani",
      type: "Internship",
      university: "Any",
      description: "Learn about financial analysis and reporting.",
      postedDate: "5 days ago",
      industry: "finance",
      category: "finance",
    },
    {
      id: 5,
      title: "Customer Support Representative",
      company: "ServiceNow",
      location: "Iasi",
      type: "Part-time",
      university: "Any",
      description: "Provide excellent customer service via email and chat.",
      postedDate: "1 day ago",
      industry: "tech",
      category: "hr",
    },
    {
      id: 6,
      title: "Graphic Design Intern",
      company: "Creative Studios",
      location: "Suceava",
      type: "Internship",
      university: "USV",
      description: "Create visual concepts for marketing materials.",
      postedDate: "2 weeks ago",
      industry: "tech",
      category: "design",
    },
    {
      id: 7,
      title: "Data Analysis Assistant",
      company: "DataInsights",
      location: "Iasi",
      type: "Part-time",
      university: "UAIC",
      description: "Help analyze and interpret complex data sets.",
      postedDate: "4 days ago",
      industry: "tech",
      category: "data",
    },
    {
      id: 8,
      title: "HR Assistant",
      company: "PeopleFirst",
      location: "Botosani",
      type: "Part-time",
      university: "Any",
      description: "Support the HR team with administrative tasks.",
      postedDate: "1 week ago",
      industry: "finance",
      category: "hr",
    },
    {
      id: 9,
      title: "Content Writer",
      company: "MediaHub",
      location: "Suceava",
      type: "Part-time",
      university: "USV",
      description: "Create engaging content for blogs, social media, and websites.",
      postedDate: "3 days ago",
      industry: "tech",
      category: "marketing",
    },
    {
      id: 10,
      title: "Junior Accountant",
      company: "Financial Solutions",
      location: "Iasi",
      type: "Part-time",
      university: "UAIC",
      description: "Assist with bookkeeping and financial reporting tasks.",
      postedDate: "6 days ago",
      industry: "finance",
      category: "finance",
    },
    {
      id: 11,
      title: "IT Support Assistant",
      company: "TechHelp",
      location: "Botosani",
      type: "Internship",
      university: "Any",
      description: "Provide technical support to staff and troubleshoot computer issues.",
      postedDate: "1 week ago",
      industry: "tech",
      category: "tech",
    },
    {
      id: 12,
      title: "Social Media Intern",
      company: "DigitalMarketing",
      location: "Suceava",
      type: "Internship",
      university: "USV",
      description: "Manage social media accounts and create engaging content.",
      postedDate: "2 days ago",
      industry: "tech",
      category: "marketing",
    },
    {
      id: 13,
      title: "Research Intern",
      company: "ScienceLab",
      location: "Iasi",
      type: "Internship",
      university: "UAIC",
      description: "Assist with scientific research projects and data collection.",
      postedDate: "5 days ago",
      industry: "healthcare",
      category: "data",
    },
    {
      id: 14,
      title: "Administrative Assistant",
      company: "CityOffice",
      location: "Botosani",
      type: "Part-time",
      university: "Any",
      description: "Provide administrative support to office staff.",
      postedDate: "1 week ago",
      industry: "finance",
      category: "hr",
    },
    {
      id: 15,
      title: "Junior Web Developer",
      company: "WebSolutions",
      location: "Suceava",
      type: "Part-time",
      university: "USV",
      description: "Develop and maintain websites using modern web technologies.",
      postedDate: "3 days ago",
      industry: "tech",
      category: "tech",
    },
    {
      id: 16,
      title: "Marketing Assistant",
      company: "BrandBoost",
      location: "Iasi",
      type: "Internship",
      university: "UAIC",
      description: "Support marketing campaigns and analyze market trends.",
      postedDate: "4 days ago",
      industry: "tech",
      category: "marketing",
    },
  ]

  const [selectedJob, setSelectedJob] = useState(null)
  const [showFilters, setShowFilters] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedJobTypes, setSelectedJobTypes] = useState({
    "part-time": false,
    "full-time": false,
    internship: false,
    remote: false,
  })
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedUniversity, setSelectedUniversity] = useState("")
  const [selectedIndustries, setSelectedIndustries] = useState({
    tech: false,
    finance: false,
    healthcare: false,
    education: false,
  })
  const [selectedCategories, setSelectedCategories] = useState({
    tech: categoryParam === "tech" || false,
    data: categoryParam === "data" || false,
    design: categoryParam === "design" || false,
    marketing: categoryParam === "marketing" || false,
    finance: categoryParam === "finance" || false,
    hr: categoryParam === "hr" || false,
  })
  const [sortBy, setSortBy] = useState("newest")
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 5

  // Apply category filter from URL on initial load
  useEffect(() => {
    if (categoryParam) {
      setShowFilters(true)
    }
  }, [categoryParam])

  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter((job) => {
    // Search term filter
    if (
      searchTerm &&
      !job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !job.company.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !job.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    // Job type filter
    const activeJobTypes = Object.entries(selectedJobTypes)
      .filter(([_, isSelected]) => isSelected)
      .map(([type]) => type)

    if (activeJobTypes.length > 0) {
      // Special handling for "remote" which could be a type or a location
      if (activeJobTypes.includes("remote") && job.location === "Remote") {
        // Pass this filter if the job is remote (either by type or location)
      } else if (!activeJobTypes.includes(job.type.toLowerCase())) {
        return false
      }
    }

    // Location filter
    if (selectedLocation && selectedLocation !== "any" && job.location !== selectedLocation) {
      return false
    }

    // University filter
    if (selectedUniversity && selectedUniversity !== "any") {
      if (job.university === "Any") {
        // Jobs for any university are always shown
        return true
      }
      if (job.university !== selectedUniversity) {
        return false
      }
    }

    // Industry filter
    const activeIndustries = Object.entries(selectedIndustries)
      .filter(([_, isSelected]) => isSelected)
      .map(([industry]) => industry)

    if (activeIndustries.length > 0 && job.industry && !activeIndustries.includes(job.industry.toLowerCase())) {
      return false
    }

    // Category filter (from career quiz)
    const activeCategories = Object.entries(selectedCategories)
      .filter(([_, isSelected]) => isSelected)
      .map(([category]) => category)

    if (activeCategories.length > 0 && job.category && !activeCategories.includes(job.category.toLowerCase())) {
      return false
    }

    return true
  })

  // Sort filtered jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === "newest") {
      // Convert posted date strings to comparable values (simple approach)
      const getDateValue = (dateStr) => {
        if (dateStr.includes("day")) return Number.parseInt(dateStr.split(" ")[0]) || 1
        if (dateStr.includes("week")) return Number.parseInt(dateStr.split(" ")[0]) * 7 || 7
        if (dateStr.includes("month")) return Number.parseInt(dateStr.split(" ")[0]) * 30 || 30
        return 0
      }
      return getDateValue(a.postedDate) - getDateValue(b.postedDate)
    } else if (sortBy === "oldest") {
      const getDateValue = (dateStr) => {
        if (dateStr.includes("day")) return Number.parseInt(dateStr.split(" ")[0]) || 1
        if (dateStr.includes("week")) return Number.parseInt(dateStr.split(" ")[0]) * 7 || 7
        if (dateStr.includes("month")) return Number.parseInt(dateStr.split(" ")[0]) * 30 || 30
        return 0
      }
      return getDateValue(b.postedDate) - getDateValue(a.postedDate)
    }
    // For relevance, we could implement more complex logic
    return 0
  })

  // Get current jobs for pagination
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob)
  const totalPages = Math.ceil(sortedJobs.length / jobsPerPage)

  // Function to reset all filters
  const resetFilters = () => {
    setSearchTerm("")
    setSelectedJobTypes({
      "part-time": false,
      "full-time": false,
      internship: false,
      remote: false,
    })
    setSelectedLocation("")
    setSelectedUniversity("")
    setSelectedIndustries({
      tech: false,
      finance: false,
      healthcare: false,
      education: false,
    })
    setSelectedCategories({
      tech: false,
      data: false,
      design: false,
      marketing: false,
      finance: false,
      hr: false,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">Showing {sortedJobs.length} jobs</p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-1"
          >
            <Filter className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
          <Select value={sortBy} onValueChange={setSortBy}>
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
      </div>

      {showFilters && (
        <Card className="mb-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                Reset All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Search */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Search</h3>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Job Type */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Job Type</h3>
                <div className="space-y-1">
                  {Object.entries(selectedJobTypes).map(([type, isSelected]) => (
                    <div key={type} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`job-type-${type}`}
                        checked={isSelected}
                        onChange={() =>
                          setSelectedJobTypes((prev) => ({
                            ...prev,
                            [type]: !prev[type],
                          }))
                        }
                        className="rounded border-gray-300"
                      />
                      <label htmlFor={`job-type-${type}`} className="text-sm capitalize">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Location</h3>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="any">Any location</option>
                  <option value="Suceava">Suceava</option>
                  <option value="Iasi">Iasi</option>
                  <option value="Botosani">Botosani</option>
                </select>
              </div>

              {/* University */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium">University/School</h3>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={selectedUniversity}
                  onChange={(e) => setSelectedUniversity(e.target.value)}
                >
                  <option value="any">Any</option>
                  <option value="USV">University of Stefan cel Mare</option>
                  <option value="UAIC">Alexandru Ioan Cuza University</option>
                </select>
              </div>

              {/* Career Categories */}
              <div className="space-y-2 md:col-span-2 lg:col-span-4">
                <h3 className="text-sm font-medium">Career Categories</h3>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(selectedCategories).map(([category, isSelected]) => (
                    <div key={category} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`category-${category}`}
                        checked={isSelected}
                        onChange={() =>
                          setSelectedCategories((prev) => ({
                            ...prev,
                            [category]: !prev[category],
                          }))
                        }
                        className="rounded border-gray-300"
                      />
                      <label htmlFor={`category-${category}`} className="text-sm capitalize">
                        {category === "hr"
                          ? "HR & Management"
                          : category === "tech"
                            ? "Technology"
                            : category === "data"
                              ? "Data Science"
                              : category === "design"
                                ? "Design"
                                : category === "marketing"
                                  ? "Marketing"
                                  : category === "finance"
                                    ? "Finance"
                                    : category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry */}
              <div className="space-y-2 md:col-span-2 lg:col-span-4">
                <h3 className="text-sm font-medium">Industry</h3>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(selectedIndustries).map(([industry, isSelected]) => (
                    <div key={industry} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`industry-${industry}`}
                        checked={isSelected}
                        onChange={() =>
                          setSelectedIndustries((prev) => ({
                            ...prev,
                            [industry]: !prev[industry],
                          }))
                        }
                        className="rounded border-gray-300"
                      />
                      <label htmlFor={`industry-${industry}`} className="text-sm capitalize">
                        {industry}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {currentJobs.length > 0 ? (
          currentJobs.map((job) => (
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
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.university !== "Any" && (
                    <Badge variant="secondary" className="text-xs">
                      For {job.university} students
                    </Badge>
                  )}
                  {job.category && (
                    <Badge variant="outline" className="text-xs">
                      {job.category === "hr"
                        ? "HR & Management"
                        : job.category === "tech"
                          ? "Technology"
                          : job.category === "data"
                            ? "Data Science"
                            : job.category === "design"
                              ? "Design"
                              : job.category === "marketing"
                                ? "Marketing"
                                : job.category === "finance"
                                  ? "Finance"
                                  : job.category}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Save
                </Button>
                <Button size="sm" onClick={() => setSelectedJob(job)}>
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No jobs match your filters.</p>
            <Button variant="link" onClick={resetFilters} className="mt-2">
              Reset filters
            </Button>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            // Show pages around current page
            let pageNum = i + 1

            // If we have more than 5 pages and we're not at the beginning
            if (totalPages > 5 && currentPage > 3) {
              pageNum = currentPage - 3 + i

              // Don't go beyond total pages
              if (pageNum > totalPages) {
                pageNum = totalPages - (4 - i)
              }
            }

            // Don't show page numbers beyond total pages
            if (pageNum <= totalPages) {
              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "ghost"}
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </Button>
              )
            }
            return null
          })}

          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
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
              <div className="flex flex-wrap gap-2">
                {selectedJob.university !== "Any" && (
                  <div>
                    <h4 className="text-sm font-medium mb-1">Target Students</h4>
                    <Badge variant="secondary" className="text-xs">
                      For {selectedJob.university} students
                    </Badge>
                  </div>
                )}
                {selectedJob.category && (
                  <div>
                    <h4 className="text-sm font-medium mb-1">Category</h4>
                    <Badge variant="outline" className="text-xs">
                      {selectedJob.category === "hr"
                        ? "HR & Management"
                        : selectedJob.category === "tech"
                          ? "Technology"
                          : selectedJob.category === "data"
                            ? "Data Science"
                            : selectedJob.category === "design"
                              ? "Design"
                              : selectedJob.category === "marketing"
                                ? "Marketing"
                                : selectedJob.category === "finance"
                                  ? "Finance"
                                  : selectedJob.category}
                    </Badge>
                  </div>
                )}
              </div>
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
    </div>
  )
}

