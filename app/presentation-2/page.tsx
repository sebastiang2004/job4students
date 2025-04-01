import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle, HelpCircle, LightbulbIcon, Target, TrendingUp, Users } from "lucide-react"

export default function Presentation2Page() {
  return (
    <div className="container max-w-5xl py-10 space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Job4Students Business Presentation</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A specialized job platform connecting university students with relevant employment opportunities
        </p>
      </div>

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LightbulbIcon className="h-6 w-6 text-theme-purple" />
            Business Concept
          </CardTitle>
          <CardDescription>What is Job4Students and why does it exist?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            <strong>Job4Students</strong> is a specialized job platform designed specifically for university students
            seeking employment opportunities that align with their academic schedules, skills, and career aspirations.
          </p>
          <p>
            Our platform bridges the gap between students looking for relevant work experience and employers seeking
            young, educated talent for part-time, internship, or entry-level positions.
          </p>
        </CardContent>
      </Card>

      {/* Problem & Solution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-theme-purple" />
            Problem & Solution
          </CardTitle>
          <CardDescription>The challenges we address and how we solve them</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Problems in Current Job Market</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>General job platforms are not tailored to student needs and schedules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Students struggle to find jobs that accommodate their class schedules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Employers have difficulty targeting and recruiting student talent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Limited opportunities for students to gain relevant work experience</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our Solution</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Student-focused platform with schedule-compatible job listings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>AI-powered job matching based on skills, field of study, and availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Direct connection between universities, students, and local employers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Career development resources tailored to student needs</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Competitive Advantages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-theme-purple" />
            Competitive Advantages
          </CardTitle>
          <CardDescription>How we stand out from general job websites</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-muted/30">
              <h3 className="font-semibold mb-2">General Job Websites (eJobs, LinkedIn)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>Broad focus on all job seekers and industries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>Limited filtering for student-specific needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>No academic schedule integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>Overwhelming number of irrelevant listings</span>
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 bg-primary/5">
              <h3 className="font-semibold mb-2 text-theme-purple">Job4Students Advantages</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-theme-purple mt-1">•</span>
                  <span>Exclusively focused on student employment needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-purple mt-1">•</span>
                  <span>Schedule matching with academic calendars</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-purple mt-1">•</span>
                  <span>Direct university partnerships and verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-purple mt-1">•</span>
                  <span>Career development resources for students</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-purple mt-1">•</span>
                  <span>AI-powered matching based on field of study</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Target Audience */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-theme-purple" />
            Target Audience
          </CardTitle>
          <CardDescription>Who our platform serves</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Students</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-theme-blue mt-1">•</span>
                  <span>University students seeking part-time employment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-blue mt-1">•</span>
                  <span>Students looking for internships in their field</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-blue mt-1">•</span>
                  <span>Recent graduates seeking entry-level positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-blue mt-1">•</span>
                  <span>Students with limited work experience</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Employers</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-theme-teal mt-1">•</span>
                  <span>Companies seeking young, educated talent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-teal mt-1">•</span>
                  <span>Businesses offering flexible, part-time positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-teal mt-1">•</span>
                  <span>Organizations with internship programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-teal mt-1">•</span>
                  <span>Local businesses near university campuses</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Model */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-theme-purple" />
            Business Model
          </CardTitle>
          <CardDescription>How Job4Students generates revenue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Revenue Streams</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-theme-purple mt-1">•</span>
                  <span>
                    <strong>Employer Subscriptions:</strong> Monthly plans for posting jobs and accessing student
                    profiles
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-purple mt-1">•</span>
                  <span>
                    <strong>Featured Listings:</strong> Premium placement for job postings
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-purple mt-1">•</span>
                  <span>
                    <strong>University Partnerships:</strong> Collaboration with educational institutions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-purple mt-1">•</span>
                  <span>
                    <strong>Recruitment Services:</strong> Enhanced matching and candidate screening
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Value Proposition</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-theme-purple mt-1">•</span>
                  <span>
                    <strong>For Students:</strong> Free access to student-focused job opportunities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-purple mt-1">•</span>
                  <span>
                    <strong>For Employers:</strong> Direct access to qualified student talent pool
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-theme-purple mt-1">•</span>
                  <span>
                    <strong>For Universities:</strong> Improved employment outcomes for students
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-theme-purple" />
            Frequently Asked Questions
          </CardTitle>
          <CardDescription>Common questions about Job4Students</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h3 className="font-semibold mb-2">How is Job4Students different from general job websites?</h3>
              <p className="text-muted-foreground">
                Job4Students is exclusively focused on student employment needs, offering schedule matching with
                academic calendars, direct university partnerships, and AI-powered job matching based on field of study
                and skills.
              </p>
            </div>

            <div className="border-b pb-3">
              <h3 className="font-semibold mb-2">What types of jobs are available on the platform?</h3>
              <p className="text-muted-foreground">
                The platform features part-time positions, internships, project-based work, and entry-level jobs that
                are compatible with student schedules and relevant to various fields of study.
              </p>
            </div>

            <div className="border-b pb-3">
              <h3 className="font-semibold mb-2">How does Job4Students verify students and employers?</h3>
              <p className="text-muted-foreground">
                Students are verified through university email addresses and academic records. Employers undergo a
                verification process to ensure legitimacy and safety for student job seekers.
              </p>
            </div>

            <div className="border-b pb-3">
              <h3 className="font-semibold mb-2">What is the cost for students to use the platform?</h3>
              <p className="text-muted-foreground">
                Job4Students is completely free for students. Our revenue comes from employer subscriptions, featured
                listings, and university partnerships.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">How does the AI job matching work?</h3>
              <p className="text-muted-foreground">
                Our AI algorithm matches students with jobs based on their field of study, skills, experience level,
                availability, and career interests, providing more relevant opportunities than general job platforms.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center space-y-4 py-6">
        <h2 className="text-2xl font-bold">Ready to transform student employment?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Job4Students creates a win-win situation for students seeking relevant work experience and employers looking
          for qualified young talent.
        </p>
        <Button asChild size="lg" className="mt-4 bg-theme-purple hover:bg-theme-blue">
          <Link href="/register-choice">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

