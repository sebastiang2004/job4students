"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  // Array of jokes for the Basic plan
  const basicPlanJokes = [
    "Less than a pizza! Hire talent for the price of a lunch 🍕",
    "So cheap, even your coffee budget is jealous! ☕",
    "Costs less than your monthly streaming subscriptions 🎬",
    "Find talent for less than a movie ticket! 🎟️",
    "Your daily coffee costs more than this plan ☕",
    "Cheaper than a textbook, but way more useful! 📚",
    "The only business expense cheaper than office pens 🖊️",
    "Recruit students for the price of a sandwich 🥪",
    "So affordable, your accountant will think it's a typo 🧮",
    "Find your next star employee for pocket change 💰",
  ]

  // State to store the selected joke
  const [selectedJoke, setSelectedJoke] = useState("")

  // Select a random joke when the component mounts
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * basicPlanJokes.length)
    setSelectedJoke(basicPlanJokes[randomIndex])
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pricing Plans for Employers
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the perfect plan for your recruitment needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Basic Plan */}
              <Card className="flex flex-col">
                <CardHeader className="flex-1">
                  <div className="text-center text-sm font-medium text-amber-500 mb-2">MOST AFFORDABLE</div>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For small businesses and startups</CardDescription>
                  <div className="mt-4 flex items-baseline text-center justify-center">
                    <span className="text-4xl font-bold">€9.99</span>
                    <span className="ml-1 text-gray-500">/month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 italic min-h-[2.5rem]">{selectedJoke}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>5 job postings per month</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>Basic candidate filtering</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>30-day job listing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="flex flex-col border-primary">
                <CardHeader className="flex-1">
                  <div className="text-center text-sm font-medium text-primary mb-2">MOST POPULAR</div>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For medium-sized businesses</CardDescription>
                  <div className="mt-4 flex items-baseline text-center justify-center">
                    <span className="text-4xl font-bold">€14.99</span>
                    <span className="ml-1 text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>15 job postings per month</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>Advanced candidate filtering</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>60-day job listing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>Priority email support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>Featured job listings</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="flex flex-col md:col-span-2 lg:col-span-1">
                <CardHeader className="flex-1">
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations and universities</CardDescription>
                  <div className="mt-4 flex items-baseline text-center justify-center">
                    <span className="text-4xl font-bold">€19.99</span>
                    <span className="ml-1 text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>Unlimited job postings</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>Premium candidate filtering</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>90-day job listing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>Featured job listings</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>Custom branding</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Additional information */}
            <div className="mx-auto max-w-3xl text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
              <p className="text-gray-500 mb-6">
                We offer tailored solutions for universities and large organizations with specific recruitment needs.
                Contact our sales team to discuss how we can help you find the perfect candidates.
              </p>
              <Button variant="outline" asChild className="px-8">
                <Link href="/contact">Contact Sales Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

