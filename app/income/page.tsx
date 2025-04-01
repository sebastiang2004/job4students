"use client"

import { useState, useEffect } from "react"
import {
  DollarSign,
  Users,
  Building,
  Award,
  BarChart,
  PieChart,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Target,
  CreditCard,
  Gift,
  Globe,
  Database,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"

// Mock data for revenue streams
const revenueStreams = [
  {
    id: 1,
    name: "Employer Subscriptions",
    percentage: 35,
    description: "Monthly and annual subscription fees from employers for premium access to the platform.",
    icon: Building,
    color: "from-blue-500 to-cyan-400",
    examples: [
      {
        tier: "Basic",
        price: "Free",
        features: ["3 job postings/month", "Basic candidate search", "Standard support"],
      },
      {
        tier: "Pro",
        price: "$49/month",
        features: ["15 job postings/month", "Advanced candidate search", "Priority support"],
      },
      {
        tier: "Enterprise",
        price: "$149/month",
        features: ["Unlimited job postings", "AI matching", "Dedicated account manager"],
      },
    ],
  },
  {
    id: 2,
    name: "Job Posting Fees",
    percentage: 25,
    description: "One-time fees for employers to post job listings on the platform beyond subscription limits.",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
    examples: [
      {
        tier: "Standard Listing",
        price: "$9.99",
        features: ["30-day visibility", "Basic formatting", "Standard search ranking"],
      },
      {
        tier: "Featured Listing",
        price: "$24.99",
        features: ["30-day visibility", "Enhanced formatting", "Higher search ranking"],
      },
      {
        tier: "Premium Listing",
        price: "$39.99",
        features: ["60-day visibility", "Rich media support", "Top search ranking"],
      },
    ],
  },
  {
    id: 3,
    name: "Student Premium Services",
    percentage: 15,
    description: "Premium features and services offered to students for career advancement.",
    icon: Users,
    color: "from-amber-500 to-orange-500",
    examples: [
      {
        tier: "Basic",
        price: "Free",
        features: ["Profile creation", "Job applications", "Basic resources"],
      },
      {
        tier: "Premium",
        price: "$4.99/month",
        features: ["Early access to jobs", "Application tracking", "Resume templates"],
      },
      {
        tier: "Career Boost",
        price: "$9.99/month",
        features: ["1:1 coaching session", "AI resume review", "Priority applications"],
      },
    ],
  },
  {
    id: 4,
    name: "University Partnerships",
    percentage: 10,
    description: "Revenue from partnerships with universities for student placement services.",
    icon: Award,
    color: "from-emerald-500 to-teal-500",
    examples: [
      {
        tier: "Basic Partnership",
        price: "Free",
        features: ["Co-branded portal", "Basic analytics", "Campus events"],
      },
      {
        tier: "Advanced Partnership",
        price: "$1,200/year",
        features: ["Dedicated account manager", "Monthly reports", "On-campus office hours"],
      },
      {
        tier: "Premium Partnership",
        price: "$3,600/year",
        features: ["Custom integration", "Real-time analytics", "Exclusive events"],
      },
    ],
  },
  {
    id: 5,
    name: "Advertising",
    percentage: 8,
    description: "Revenue from targeted advertisements displayed on the platform.",
    icon: Target,
    color: "from-red-500 to-rose-500",
    examples: [
      {
        tier: "Banner Ads",
        price: "$49/week",
        features: ["Homepage placement", "~5,000 impressions", "Basic targeting"],
      },
      {
        tier: "Newsletter Sponsorship",
        price: "$99/issue",
        features: ["Featured placement", "~10,000 recipients", "Demographic targeting"],
      },
      {
        tier: "Sponsored Content",
        price: "$199",
        features: ["Featured article", "Social promotion", "Detailed analytics"],
      },
    ],
  },
  {
    id: 6,
    name: "Data & Analytics",
    percentage: 5,
    description: "Selling anonymized market insights and industry reports to businesses.",
    icon: Database,
    color: "from-indigo-500 to-violet-500",
    examples: [
      {
        tier: "Market Trends Report",
        price: "$99",
        features: ["Quarterly insights", "Industry benchmarks", "PDF format"],
      },
      {
        tier: "Talent Pool Analysis",
        price: "$199",
        features: ["Skill distribution", "Geographical insights", "Interactive dashboard"],
      },
      {
        tier: "Custom Research",
        price: "$499+",
        features: ["Tailored analysis", "Raw data access", "Presentation-ready"],
      },
    ],
  },
  {
    id: 7,
    name: "Event Sponsorships",
    percentage: 2,
    description: "Revenue from career fairs, workshops, and networking events.",
    icon: Globe,
    color: "from-sky-500 to-blue-500",
    examples: [
      {
        tier: "Virtual Career Fair",
        price: "$299",
        features: ["Branded booth", "Live chat", "Attendee data"],
      },
      {
        tier: "Workshop Sponsorship",
        price: "$149",
        features: ["45-minute session", "Lead generation", "Recording rights"],
      },
      {
        tier: "Networking Event",
        price: "$399",
        features: ["Speaking opportunity", "Premium placement", "VIP access"],
      },
    ],
  },
]

// Financial projections data
const financialProjections = [
  { year: 2024, revenue: 80000, expenses: 95000, profit: -15000 },
  { year: 2025, revenue: 250000, expenses: 220000, profit: 30000 },
  { year: 2026, revenue: 580000, expenses: 420000, profit: 160000 },
  { year: 2027, revenue: 1200000, expenses: 850000, profit: 350000 },
  { year: 2028, revenue: 2200000, expenses: 1500000, profit: 700000 },
]

// Animated counter component
const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = Number.parseInt(value)

    // Ensure we have a valid number to count to
    if (isNaN(end) || end <= 0) {
      setCount(0)
      return
    }

    // Calculate increment time based on duration and value
    const incrementTime = duration / (end > 100 ? 100 : end)
    const step = end > 100 ? Math.floor(end / 100) : 1

    const timer = setInterval(() => {
      start += step
      setCount(start)
      if (start >= end) {
        clearInterval(timer)
        setCount(end) // Ensure we end at the exact value
      }
    }, incrementTime)

    return () => {
      clearInterval(timer)
    }
  }, [value, duration])

  return <span>{count.toLocaleString()}</span>
}

// Revenue calculator component
const RevenueCalculator = () => {
  const [employers, setEmployers] = useState(100)
  const [jobPostings, setJobPostings] = useState(300)
  const [premiumStudents, setPremiumStudents] = useState(500)
  const [partnerships, setPartnerships] = useState(5)

  const calculateRevenue = () => {
    // Assuming 60% free, 30% Pro, 10% Enterprise for employers
    const employerRevenue = employers * 0.3 * 49 * 12 + employers * 0.1 * 149 * 12

    // Assuming 70% standard, 20% featured, 10% premium for additional job postings
    const jobPostingRevenue = jobPostings * 0.7 * 9.99 + jobPostings * 0.2 * 24.99 + jobPostings * 0.1 * 39.99

    // Assuming 80% free, 15% Premium, 5% Career Boost for students
    const studentRevenue = premiumStudents * 0.15 * 4.99 * 12 + premiumStudents * 0.05 * 9.99 * 12

    // Assuming 60% free, 30% Advanced, 10% Premium for partnerships
    const partnershipRevenue = partnerships * 0.3 * 1200 + partnerships * 0.1 * 3600

    return employerRevenue + jobPostingRevenue + studentRevenue + partnershipRevenue
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Revenue Calculator
        </CardTitle>
        <CardDescription>Adjust the sliders to see potential revenue based on different metrics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Employer Accounts</label>
            <span className="text-sm font-bold">{employers}</span>
          </div>
          <Slider
            value={[employers]}
            min={0}
            max={1000}
            step={10}
            onValueChange={(value) => setEmployers(value[0])}
            className="py-2"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Additional Job Postings</label>
            <span className="text-sm font-bold">{jobPostings}</span>
          </div>
          <Slider
            value={[jobPostings]}
            min={0}
            max={2000}
            step={50}
            onValueChange={(value) => setJobPostings(value[0])}
            className="py-2"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Student Accounts</label>
            <span className="text-sm font-bold">{premiumStudents}</span>
          </div>
          <Slider
            value={[premiumStudents]}
            min={0}
            max={5000}
            step={100}
            onValueChange={(value) => setPremiumStudents(value[0])}
            className="py-2"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium">University Partnerships</label>
            <span className="text-sm font-bold">{partnerships}</span>
          </div>
          <Slider
            value={[partnerships]}
            min={0}
            max={50}
            step={1}
            onValueChange={(value) => setPartnerships(value[0])}
            className="py-2"
          />
        </div>

        <div className="mt-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
          <div className="text-sm font-medium">Estimated Annual Revenue</div>
          <div className="text-3xl font-bold">${calculateRevenue().toLocaleString()}</div>
        </div>
      </CardContent>
    </Card>
  )
}

// Revenue stream card component
const RevenueStreamCard = ({ stream, expanded, toggleExpand }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardHeader className={`bg-gradient-to-r ${stream.color} text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <stream.icon className="h-6 w-6" />
              <CardTitle>{stream.name}</CardTitle>
            </div>
            <div className="text-2xl font-bold">{stream.percentage}%</div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-muted-foreground">{stream.description}</p>

          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span>Revenue Share</span>
              <span>{stream.percentage}%</span>
            </div>
            <Progress value={stream.percentage} className="mt-2 h-2" />
          </div>

          <Button variant="ghost" className="mt-4 w-full justify-between" onClick={() => toggleExpand(stream.id)}>
            {expanded ? "Hide Details" : "Show Details"}
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>

          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-4"
            >
              <h4 className="font-semibold">Pricing Examples</h4>
              <div className="space-y-3">
                {stream.examples.map((example, index) => (
                  <div key={index} className="rounded-md border p-3">
                    <div className="flex justify-between">
                      <span className="font-medium">{example.tier}</span>
                      <span className="font-bold text-primary">{example.price}</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {example.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Zap className="h-3 w-3 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Main Income Page component
export default function IncomePage() {
  const [expandedStream, setExpandedStream] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timer)
  }, [])

  const toggleExpand = (id) => {
    setExpandedStream(expandedStream === id ? null : id)
  }

  const totalRevenue = financialProjections.reduce((sum, year) => sum + year.revenue, 0)

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Revenue Model
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          How Job4Students generates sustainable income to provide value for students and employers
        </p>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <PieChart className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="streams" className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Revenue Streams
          </TabsTrigger>
          <TabsTrigger value="projections" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Projections
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5" />
                    Revenue Distribution
                  </CardTitle>
                  <CardDescription>Breakdown of income sources for Job4Students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {revenueStreams.map((stream) => (
                      <div key={stream.id} className="flex items-center gap-4">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${stream.color} text-white`}
                        >
                          <stream.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">{stream.name}</span>
                            <span className="font-bold">{stream.percentage}%</span>
                          </div>
                          <Progress value={stream.percentage} className="mt-1 h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <RevenueCalculator />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 grid gap-6 md:grid-cols-3"
          >
            <Card>
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <CardTitle className="text-center">5-Year Revenue</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">${(totalRevenue / 1000000).toFixed(1)}M</div>
                  <p className="text-sm text-muted-foreground">Projected total</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                <CardTitle className="text-center">Break-Even</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">22</div>
                  <p className="text-sm text-muted-foreground">Months</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                <CardTitle className="text-center">Profit Margin</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">28%</div>
                  <p className="text-sm text-muted-foreground">Average</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="streams" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {revenueStreams.map((stream, index) => (
              <RevenueStreamCard
                key={stream.id}
                stream={stream}
                expanded={expandedStream === stream.id}
                toggleExpand={toggleExpand}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projections" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Financial Projections (2024-2028)
              </CardTitle>
              <CardDescription>Projected revenue, expenses, and profit over the next 5 years</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Year</th>
                      <th className="py-3 text-right font-medium">Revenue</th>
                      <th className="py-3 text-right font-medium">Expenses</th>
                      <th className="py-3 text-right font-medium">Profit</th>
                      <th className="py-3 text-right font-medium">Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialProjections.map((year, index) => (
                      <motion.tr
                        key={year.year}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border-b"
                      >
                        <td className="py-3 font-medium">{year.year}</td>
                        <td className="py-3 text-right">${(year.revenue / 1000).toFixed(0)}K</td>
                        <td className="py-3 text-right">${(year.expenses / 1000).toFixed(0)}K</td>
                        <td
                          className={`py-3 text-right font-medium ${year.profit < 0 ? "text-red-600" : "text-green-600"}`}
                        >
                          ${(year.profit / 1000).toFixed(0)}K
                        </td>
                        <td className="py-3 text-right">
                          {year.profit < 0 ? "-" : Math.round((year.profit / year.revenue) * 100) + "%"}
                          <div className="mt-1 h-1.5 w-full rounded-full bg-gray-100">
                            <div
                              className={`h-1.5 rounded-full bg-gradient-to-r ${year.profit < 0 ? "from-red-500 to-rose-600" : "from-green-500 to-emerald-600"}`}
                              style={{ width: `${year.profit < 0 ? 0 : (year.profit / year.revenue) * 100}%` }}
                            ></div>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-3 text-white">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">CAGR</div>
                        <div className="text-2xl font-bold">94%</div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Compound Annual Growth Rate over 5 years</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 text-white">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">User Base</div>
                        <div className="text-2xl font-bold">250K+</div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Projected active users by 2028</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 p-3 text-white">
                        <Gift className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Valuation</div>
                        <div className="text-2xl font-bold">$8.5M</div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Estimated valuation by 2028</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold">Competitive Advantage</h2>
        <p className="mb-4 text-muted-foreground">
          Our pricing strategy is designed to be competitive in the job platform market while offering superior value
          for students and employers:
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <CardTitle className="text-center">Freemium Model</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Unlike competitors who charge for basic services, we offer free tiers for students, employers, and
                universities to build our ecosystem. Premium features are affordably priced to encourage upgrades.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
              <CardTitle className="text-center">Student Focus</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                While LinkedIn charges $29.99-$59.99/month for premium and Indeed charges $100-$250 per job posting, our
                student-focused platform offers more relevant services at a fraction of the cost.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
              <CardTitle className="text-center">University Integration</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Our unique university partnerships create a closed ecosystem that competitors like Handshake
                ($8,500/year for schools) can't match at our price point, driving value for all stakeholders.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

