"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "Companies", href: "/companies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
  ]

  // Add the full navigation list including dashboards
  const allPages = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "Student Dashboard", href: "/student-dashboard" },
    { name: "Employer Dashboard", href: "/employer-dashboard" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
    { name: "Login", href: "/login" },
    { name: "Student Register", href: "/register" },
    { name: "Employer Register", href: "/employer-register" },
    { name: "About Team 4", href: "/about-team" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 flex-col md:flex-row items-center justify-between">
        <div className="flex w-full md:w-auto justify-between md:justify-center items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold theme-gradient-text">Job4Students</span>
          </Link>
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 justify-center flex-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-theme-teal ${
                pathname === item.href ? "text-theme-ocean" : "text-foreground/60"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-theme-teal text-theme-teal hover:bg-theme-teal/10"
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild size="sm" className="bg-theme-ocean hover:bg-theme-teal text-white">
            <Link href="/register">Register</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-3 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium text-center transition-colors hover:text-theme-teal ${
                  pathname === item.href ? "text-theme-ocean" : "text-foreground/60"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-theme-teal text-theme-teal hover:bg-theme-teal/10"
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild size="sm" className="bg-theme-ocean hover:bg-theme-teal text-white">
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Add the bottom navigation with buttons for all pages */}
      <div className="border-t border-border">
        <div className="container py-2 overflow-x-auto">
          <div className="flex items-center justify-center gap-2 flex-nowrap min-w-max mx-auto">
            {allPages.map((page) => (
              <Button
                key={page.name}
                variant={pathname === page.href ? "default" : "outline"}
                size="sm"
                asChild
                className={`whitespace-nowrap ${
                  pathname === page.href
                    ? "bg-theme-ocean hover:bg-theme-teal text-white"
                    : "border-theme-teal/30 text-theme-teal hover:bg-theme-teal/10"
                }`}
              >
                <Link href={page.href}>{page.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

