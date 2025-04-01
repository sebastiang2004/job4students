"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function Hero() {
  const heroTextVariants = [
    "Connecting students with part-time jobs, internships, and freelance opportunities in Romania.",
    "Find your dream student job that fits perfectly with your academic schedule.",
    "Discover opportunities that help you gain experience while completing your studies.",
    "The easiest way for Romanian students to find meaningful employment opportunities.",
    "Building bridges between talented students and employers across Romania.",
    "Launch your career with student-friendly jobs that value your education.",
    "Balancing studies and work made simple with jobs tailored for students.",
    "Your gateway to professional growth while pursuing your academic goals.",
    "Connecting Romania's brightest students with companies that value fresh talent.",
    "Find flexible work opportunities designed specifically for student life.",
  ]

  // 10 heading variants
  const headingVariants = [
    "Find Your Perfect Student Job",
    "Discover Student Opportunities",
    "Launch Your Career Journey",
    "Student Jobs Made Simple",
    "Your Path to Professional Growth",
    "Connect with Top Employers",
    "Work While You Study",
    "Unlock Your Potential",
    "Jobs Tailored for Students",
    "Begin Your Professional Story",
  ]

  const [selectedText, setSelectedText] = useState(heroTextVariants[0])
  const [headingText, setHeadingText] = useState(headingVariants[0])
  const [isVisible, setIsVisible] = useState(false)
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    // Set initial visibility after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    // Randomly select text
    const randomIndex = Math.floor(Math.random() * heroTextVariants.length)
    setSelectedText(heroTextVariants[randomIndex])

    // Randomly select heading
    const randomHeadingIndex = Math.floor(Math.random() * headingVariants.length)
    setHeadingText(headingVariants[randomHeadingIndex])

    return () => clearTimeout(timer)
  }, [])

  // Function to change heading with animation
  const changeHeading = () => {
    setIsChanging(true)

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * headingVariants.length)
      setHeadingText(headingVariants[randomIndex])

      setTimeout(() => {
        setIsChanging(false)
      }, 100)
    }, 300)
  }

  // Set up interval to change heading
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        changeHeading()
      }, 4000)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-gradient-to-br from-theme-blue via-theme-purple to-theme-teal">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.3),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.3),transparent_70%)]"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
          <div className="space-y-4 w-full">
            <div className="relative h-[80px] sm:h-[80px] md:h-[100px] lg:h-[120px] overflow-hidden">
              <h1
                className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white 
        transform transition-all duration-700 ease-in-out absolute w-full whitespace-nowrap
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} 
        ${isChanging ? "translate-x-[-100%] opacity-0" : "translate-x-0 opacity-100"}
        hover:scale-105 hover:text-white/90 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]`}
              >
                {headingText}
              </h1>
            </div>
            <p
              className={`mx-auto max-w-[700px] text-white/90 md:text-xl font-medium
                transition-opacity duration-1000 ease-in-out delay-300
                ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              {selectedText}
            </p>
          </div>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center w-full
              transition-all duration-700 ease-in-out delay-500
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Button asChild size="lg" className="w-full sm:w-auto bg-white text-theme-purple hover:bg-white/90">
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white text-white bg-transparent hover:bg-white/10"
                >
                  Sign Up
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/register" className="cursor-pointer w-full">
                    Sign Up as Student
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/employer-register" className="cursor-pointer w-full">
                    Sign Up as Employer
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  )
}

