import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Building, MapPin, Users, ExternalLink } from "lucide-react"

export default function CompaniesPage() {
  // Sample company data
  const companies = [
    {
      id: 1,
      name: "TechCorp Romania",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Technology",
      location: "Suceava",
      size: "51-200 employees",
      description: "Leading software development company specializing in web and mobile applications.",
      openPositions: 4,
    },
    {
      id: 2,
      name: "Global Finance",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Finance",
      location: "Iasi",
      size: "201-500 employees",
      description: "International financial services company with a strong presence in Romania.",
      openPositions: 3,
    },
    {
      id: 3,
      name: "BioLabs",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Healthcare",
      location: "Suceava",
      size: "51-200 employees",
      description: "Research and development company focused on biotechnology and healthcare innovations.",
      openPositions: 2,
    },
    {
      id: 4,
      name: "Creative Studios",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Design",
      location: "Iasi",
      size: "11-50 employees",
      description: "Creative agency specializing in graphic design, branding, and digital marketing.",
      openPositions: 5,
    },
    {
      id: 5,
      name: "DataInsights",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Technology",
      location: "Botosani",
      size: "11-50 employees",
      description: "Data analytics company helping businesses make data-driven decisions.",
      openPositions: 3,
    },
    {
      id: 6,
      name: "EduTech Romania",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Education",
      location: "Suceava",
      size: "11-50 employees",
      description: "Educational technology company developing innovative learning solutions.",
      openPositions: 2,
    },
    {
      id: 7,
      name: "Tehno World",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Technology",
      location: "Suceava",
      size: "51-200 employees",
      description:
        "Leading technology retailer and IT services provider in Northern Romania, offering hardware, software, and technical support.",
      openPositions: 6,
    },
    {
      id: 8,
      name: "Assist Software",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Software Development",
      location: "Suceava",
      size: "201-500 employees",
      description:
        "Custom software development company specializing in web, mobile, and enterprise solutions with a strong focus on innovation.",
      openPositions: 8,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Companies</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover top employers offering student opportunities across Romania
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <Card key={company.id} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{company.name}</CardTitle>
                      <CardDescription>{company.industry}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500">{company.description}</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                        <span>{company.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="mr-2 h-4 w-4 text-gray-500" />
                        <span>{company.size}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Building className="mr-2 h-4 w-4 text-gray-500" />
                        <span>
                          <Badge variant="outline" className="ml-1">
                            {company.openPositions} open positions
                          </Badge>
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/companies/${company.id}`}>
                      <span className="flex items-center">
                        Company Profile
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </span>
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={`/jobs?company=${company.id}`}>View Jobs</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Are you an employer?</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 mb-8">
              Join Job4Students to connect with talented students and recent graduates. Post job opportunities and find
              the perfect candidates for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-theme-ocean hover:bg-theme-teal text-white">
                <Link href="/employer-register">Register as Employer</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

