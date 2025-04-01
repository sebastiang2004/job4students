"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import Link from "next/link"
import {
  Bot,
  Briefcase,
  Building,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  Crown,
  GraduationCap,
  LineChart,
  MapPin,
  Rocket,
  Search,
  Shield,
  Sparkles,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react"

// Custom countdown timer component
const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm text-white text-2xl md:text-4xl font-bold rounded-lg w-14 md:w-20 h-14 md:h-20 flex items-center justify-center">
          {timeLeft.days}
        </div>
        <span className="text-xs md:text-sm text-white/80 mt-1">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm text-white text-2xl md:text-4xl font-bold rounded-lg w-14 md:w-20 h-14 md:h-20 flex items-center justify-center">
          {timeLeft.hours}
        </div>
        <span className="text-xs md:text-sm text-white/80 mt-1">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm text-white text-2xl md:text-4xl font-bold rounded-lg w-14 md:w-20 h-14 md:h-20 flex items-center justify-center">
          {timeLeft.minutes}
        </div>
        <span className="text-xs md:text-sm text-white/80 mt-1">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm text-white text-2xl md:text-4xl font-bold rounded-lg w-14 md:w-20 h-14 md:h-20 flex items-center justify-center">
          {timeLeft.seconds}
        </div>
        <span className="text-xs md:text-sm text-white/80 mt-1">Seconds</span>
      </div>
    </div>
  )
}

export default function PresentationPage() {
  const [activeTab, setActiveTab] = useState("students")
  const [animatedCount, setAnimatedCount] = useState({ students: 0, employers: 0, jobs: 0, universities: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)

  // Popup states
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)
  const [showFloatingPromo, setShowFloatingPromo] = useState(false)
  const [hasClosedPromo, setHasClosedPromo] = useState(false)

  // Set target date for countdown (7 days from now)
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 7)

  // Stats to animate
  const finalStats = {
    students: 15000,
    employers: 500,
    jobs: 2500,
    universities: 25,
  }

  // Animate stats when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  // Animate the counting
  useEffect(() => {
    if (isVisible) {
      const duration = 2000 // ms
      const interval = 20 // ms
      const steps = duration / interval

      const timers = Object.keys(finalStats).map((key) => {
        const increment = finalStats[key] / steps
        let count = 0

        return setInterval(() => {
          count += increment
          if (count >= finalStats[key]) {
            count = finalStats[key]
            clearInterval(timers[key])
          }

          setAnimatedCount((prev) => ({
            ...prev,
            [key]: Math.floor(count),
          }))
        }, interval)
      })

      return () => {
        timers.forEach((timer) => clearInterval(timer))
      }
    }
  }, [isVisible])

  // Show welcome popup after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePopup(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Show floating promo after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !hasClosedPromo) {
        setShowFloatingPromo(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasClosedPromo])

  // Testimonials
  const testimonials = [
    {
      name: "Maria Popescu",
      role: "Computer Science Student",
      university: "University of Stefan cel Mare",
      quote:
        "Job4Students transformed my job search. The AI matching found me an internship that aligned perfectly with my studies and career goals. I got hired within a week!",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Alexandru Ionescu",
      role: "Marketing Manager",
      company: "TechCorp Romania",
      quote:
        "As an employer, the quality of candidates we get through Job4Students is exceptional. The university partnerships give us access to top talent, and the AI matching saves us hours in the hiring process.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Elena Dumitrescu",
      role: "Economics Student",
      university: "Alexandru Ioan Cuza University",
      quote:
        "The personalized job alerts notify me instantly when relevant opportunities appear. I've secured two part-time positions through Job4Students that perfectly fit my schedule.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-theme-purple via-theme-blue to-theme-teal py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/patterns/hero-pattern.svg')] opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
              <Badge className="px-4 py-2 text-base bg-white/20 text-white border-white/20 backdrop-blur-sm">
                <Crown className="h-4 w-4 mr-2 text-amber-300" />
                Romania's Leading Student Employment Platform
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
                Jobs that work <span className="text-amber-300">for students</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                Find flexible work that fits your schedule. Connect with employers who value your education.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-white text-theme-purple hover:bg-white/90">
                  <Link href="/login-choice">Get Started</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white bg-white/10 hover:bg-white/20"
                >
                  <Link href="#features">See How It Works</Link>
                </Button>
              </div>

              <div className="flex items-center gap-2 text-white/80 pt-4">
                <CheckCircle2 className="h-5 w-5 text-amber-300" />
                <span>Free for students</span>
                <span className="mx-2">•</span>
                <CheckCircle2 className="h-5 w-5 text-amber-300" />
                <span>No commitments</span>
                <span className="mx-2">•</span>
                <CheckCircle2 className="h-5 w-5 text-amber-300" />
                <span>Instant access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-16 bg-gradient-to-b from-theme-purple/5 to-transparent">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-5xl font-bold text-theme-purple mb-2">
                  {animatedCount.students.toLocaleString()}+
                </div>
                <p className="text-muted-foreground">Active Students</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-5xl font-bold text-theme-purple mb-2">
                  {animatedCount.employers.toLocaleString()}+
                </div>
                <p className="text-muted-foreground">Partner Employers</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-5xl font-bold text-theme-purple mb-2">
                  {animatedCount.jobs.toLocaleString()}+
                </div>
                <p className="text-muted-foreground">Job Opportunities</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-5xl font-bold text-theme-purple mb-2">
                  {animatedCount.universities.toLocaleString()}+
                </div>
                <p className="text-muted-foreground">University Partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Features Section */}
        <section id="features" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-theme-purple/10 text-theme-purple border-theme-purple/20 hover:bg-theme-purple/20">
                <Sparkles className="h-4 w-4 mr-2 text-theme-purple" />
                Platform Features
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">How Job4Students Works</h2>
              <p className="text-xl text-muted-foreground">
                Simple tools that connect students with employers. No complexity, just results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-theme-purple/5 to-theme-blue/5 border-theme-purple/20 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-theme-purple/10 flex items-center justify-center mb-6 group-hover:bg-theme-purple/20 transition-colors">
                    <Bot className="h-6 w-6 text-theme-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-theme-purple transition-colors">
                    Smart Matching
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our algorithm connects you with jobs that match your skills and schedule. No more endless scrolling.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-theme-purple mr-2 flex-shrink-0" />
                      <span>95% match accuracy</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-theme-purple mr-2 flex-shrink-0" />
                      <span>Personalized recommendations</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-theme-purple mr-2 flex-shrink-0" />
                      <span>Learns from your preferences</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <Link href="/ai-jobs" className="flex items-center text-theme-purple font-medium hover:underline">
                      See Matching in Action <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-theme-teal/5 to-theme-blue/5 border-theme-teal/20 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-theme-teal/10 flex items-center justify-center mb-6 group-hover:bg-theme-teal/20 transition-colors">
                    <GraduationCap className="h-6 w-6 text-theme-teal" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-theme-teal transition-colors">
                    University Partnerships
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Access job opportunities exclusively available to students from our partner universities before
                    they're publicly listed.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-theme-teal mr-2 flex-shrink-0" />
                      <span>25+ university partnerships across Romania</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-theme-teal mr-2 flex-shrink-0" />
                      <span>Verified student status</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-theme-teal mr-2 flex-shrink-0" />
                      <span>University-endorsed opportunities</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <Link href="/companies" className="flex items-center text-theme-teal font-medium hover:underline">
                      View Partner Companies <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-theme-amber/5 to-theme-purple/5 border-theme-amber/20 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-theme-amber/10 flex items-center justify-center mb-6 group-hover:bg-theme-amber/20 transition-colors">
                    <Zap className="h-6 w-6 text-theme-amber" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-theme-amber transition-colors">
                    Instant Application System
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Apply to multiple jobs with a single click using your pre-loaded profile and CV, saving hours of
                    repetitive form-filling.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-theme-amber mr-2 flex-shrink-0" />
                      <span>One-click application process</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-theme-amber mr-2 flex-shrink-0" />
                      <span>Smart CV management</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-theme-amber mr-2 flex-shrink-0" />
                      <span>Real-time application tracking</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <Link href="/jobs" className="flex items-center text-theme-amber font-medium hover:underline">
                      Browse Job Listings <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* For Students & Employers Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-theme-purple/5 via-theme-blue/5 to-theme-teal/5">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Tailored Solutions for Everyone</h2>
              <p className="text-xl text-muted-foreground">
                Whether you're a student looking for opportunities or an employer seeking talent, we've got you covered.
              </p>
            </div>

            <Tabs
              defaultValue="students"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full max-w-4xl mx-auto"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="students" className="text-lg py-3">
                  For Students
                </TabsTrigger>
                <TabsTrigger value="employers" className="text-lg py-3">
                  For Employers
                </TabsTrigger>
              </TabsList>

              <TabsContent value="students" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold">Supercharge Your Career Journey</h3>
                    <p className="text-lg text-muted-foreground">
                      Job4Students gives you the competitive edge in today's job market with tools designed specifically
                      for student success.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-theme-purple/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <Search className="h-5 w-5 text-theme-purple" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium">Smart Job Discovery</h4>
                          <p className="text-muted-foreground">
                            Find opportunities that perfectly match your skills, interests, and schedule.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-theme-purple/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <Clock className="h-5 w-5 text-theme-purple" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium">Flexible Opportunities</h4>
                          <p className="text-muted-foreground">
                            Part-time, internship, and remote positions that work around your class schedule.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-theme-purple/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <Sparkles className="h-5 w-5 text-theme-purple" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium">Career Development</h4>
                          <p className="text-muted-foreground">
                            Build your professional profile and gain valuable experience while studying.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button size="lg" className="mt-4">
                      <Link href="/register">Create Student Account</Link>
                    </Button>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-border">
                    <div className="p-1 bg-gradient-to-r from-theme-purple via-theme-blue to-theme-teal"></div>
                    <div className="p-6 space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <Badge className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                            New Match
                          </Badge>
                          <h4 className="text-xl font-bold mt-2">Web Developer Intern</h4>
                          <p className="text-muted-foreground">TechCorp Romania</p>
                        </div>
                        <Badge variant="outline" className="text-theme-purple border-theme-purple">
                          94% Match
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Suceava, Romania</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Part-time</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>For USV Students</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <h5 className="font-medium mb-2">Skills Match</h5>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>React.js</span>
                            <span className="font-medium">98%</span>
                          </div>
                          <Progress value={98} className="h-2" />

                          <div className="flex items-center justify-between text-sm">
                            <span>Next.js</span>
                            <span className="font-medium">95%</span>
                          </div>
                          <Progress value={95} className="h-2" />

                          <div className="flex items-center justify-between text-sm">
                            <span>Tailwind CSS</span>
                            <span className="font-medium">90%</span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button variant="outline">Save</Button>
                        <Button>Apply Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="employers" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold">Transform Your Recruitment Strategy</h3>
                    <p className="text-lg text-muted-foreground">
                      Access Romania's largest pool of qualified student talent and revolutionize your hiring process.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-theme-teal/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <Users className="h-5 w-5 text-theme-teal" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium">Targeted Talent Acquisition</h4>
                          <p className="text-muted-foreground">
                            Reach students from specific universities, fields of study, or with particular skills.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-theme-teal/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <Cpu className="h-5 w-5 text-theme-teal" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium">AI-Powered Candidate Matching</h4>
                          <p className="text-muted-foreground">
                            Our algorithm identifies the most suitable candidates for your positions.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-theme-teal/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <LineChart className="h-5 w-5 text-theme-teal" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium">Recruitment Analytics</h4>
                          <p className="text-muted-foreground">
                            Gain insights into your job postings' performance and optimize your strategy.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button size="lg" className="mt-4">
                      <Link href="/employer-register">Create Employer Account</Link>
                    </Button>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-border">
                    <div className="p-1 bg-gradient-to-r from-theme-teal via-theme-blue to-theme-purple"></div>
                    <div className="p-6 space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-bold">Employer Dashboard</h4>
                          <p className="text-muted-foreground">Manage all your recruitment in one place</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
                          Pro Plan
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-lg border border-border p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-medium">Active Job Postings</h5>
                            <Badge variant="outline">3 Active</Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Frontend Developer Intern</span>
                              <span className="text-muted-foreground">12 applicants</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Marketing Assistant</span>
                              <span className="text-muted-foreground">8 applicants</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Data Analyst</span>
                              <span className="text-muted-foreground">5 applicants</span>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-border p-4">
                          <h5 className="font-medium mb-2">Candidate Matching</h5>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <span className="text-sm font-medium">Maria Popescu</span>
                                  <Badge variant="outline" className="text-theme-teal border-theme-teal">
                                    96% Match
                                  </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">Computer Science, USV</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <span className="text-sm font-medium">Alexandru Popa</span>
                                  <Badge variant="outline" className="text-theme-teal border-theme-teal">
                                    92% Match
                                  </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">Computer Science, UAIC</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button variant="outline">View Dashboard</Button>
                        <Button>Post New Job</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-theme-amber/10 text-theme-amber border-theme-amber/20 hover:bg-theme-amber/20">
                <Star className="h-4 w-4 mr-2 text-theme-amber" />
                Success Stories
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Hear From Our Community</h2>
              <p className="text-xl text-muted-foreground">
                Thousands of students and employers have transformed their futures with Job4Students.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.university || testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* University Partners Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-theme-purple/5 via-theme-blue/5 to-theme-teal/5">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-theme-blue/10 text-theme-blue border-theme-blue/20 hover:bg-theme-blue/20">
                <Building className="h-4 w-4 mr-2 text-theme-blue" />
                Partner Network
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our University Partners</h2>
              <p className="text-xl text-muted-foreground">
                We collaborate with Romania's top universities to bring exclusive opportunities to students.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-24 bg-white dark:bg-gray-800 rounded-lg border border-border p-4"
                >
                  <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-theme-purple to-theme-blue relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/hero-pattern.svg')] opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Ready to find your next opportunity?
              </h2>
              <p className="text-xl text-white/90">
                Join thousands of students who've found jobs that work with their studies, not against them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-white text-theme-purple hover:bg-white/90">
                  <Link href="/register">Sign Up as Student</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white bg-white/10 hover:bg-white/20"
                >
                  <Link href="/employer-register">Sign Up as Employer</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/80 pt-4">
                <Shield className="h-5 w-5 text-white" />
                <span>Secure</span>
                <span className="mx-2">•</span>
                <Rocket className="h-5 w-5 text-white" />
                <span>Fast</span>
                <span className="mx-2">•</span>
                <CheckCircle2 className="h-5 w-5 text-white" />
                <span>Free</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Welcome Popup */}
      <Dialog open={showWelcomePopup} onOpenChange={setShowWelcomePopup}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <Crown className="h-5 w-5 text-amber-500" />
              Welcome to Job4Students
            </DialogTitle>
            <DialogDescription>Find your next job in minutes, not days.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <p>Exclusive student opportunities</p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <p>Smart job matching</p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <p>Apply with one click</p>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <DialogClose asChild>
              <Button variant="outline" className="sm:w-auto w-full">
                Not Now
              </Button>
            </DialogClose>
            <Button className="sm:w-auto w-full" asChild>
              <Link href="/login-choice">Get Started</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Floating Promotion */}
      {showFloatingPromo && (
        <div className="fixed bottom-4 right-4 z-50 max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-border overflow-hidden">
          <div className="p-1 bg-gradient-to-r from-theme-purple via-theme-blue to-theme-teal"></div>
          <div className="p-4 pr-10">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={() => {
                setShowFloatingPromo(false)
                setHasClosedPromo(true)
              }}
            >
              <X className="h-4 w-4" />
            </button>
            <h4 className="font-bold text-sm flex items-center gap-1">
              <Sparkles className="h-4 w-4 text-theme-purple" />
              New Opportunity
            </h4>
            <p className="text-sm mt-1">New internship positions just posted! Be among the first to apply.</p>
            <Button size="sm" className="w-full mt-2" asChild>
              <Link href="/jobs">View Jobs</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

