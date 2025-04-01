"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Bot,
  LogIn,
  UserPlus,
  Database,
  Smartphone,
  CheckSquare,
  TableProperties,
  Layers,
  CreditCard,
  Code,
  DollarSign,
  MessageSquare,
  MessageCircle,
  BadgeIcon as IdCard,
} from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { CookieConsent } from "@/components/cookie-consent"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDebugBar, setShowDebugBar] = useState(false)
  const [cookiePopupOpen, setCookiePopupOpen] = useState(false)

  // Main navigation array
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "AI Jobs", href: "/ai-jobs" },
    { name: "Career Quiz", href: "/career-quiz" },
    { name: "Companies", href: "/companies" },
    { name: "About", href: "/about" },
    { name: "Presentation", href: "/presentation" },
    { name: "Mobile Apps", href: "/mobile-apps" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
  ]

  // Update allPages array to include the student verification page
  const allPages = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "AI Jobs", href: "/ai-jobs" },
    { name: "Career Quiz", href: "/career-quiz" },
    { name: "Companies", href: "/companies" },
    { name: "Chat Platform", href: "/chat-platform" },
    { name: "Employer Chat", href: "/employer-chat" },
    { name: "Student Dashboard", href: "/student-dashboard" },
    { name: "Employer Dashboard", href: "/employer-dashboard" },
    { name: "About", href: "/about" },
    { name: "Presentation", href: "/presentation" },
    { name: "Presentation 2", href: "/presentation-2" },
    { name: "Mobile Apps", href: "/mobile-apps" },
    { name: "Todo List", href: "/todo-list" },
    { name: "Database Model", href: "/database-model" },
    { name: "Architecture", href: "/architecture" },
    { name: "Payment Gateway", href: "/payment-gateway" },
    { name: "API Docs", href: "/api-docs" },
    { name: "Income", href: "/income" },
    { name: "Student Verification", href: "/student-verification" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
    { name: "Login", href: "/login" },
    { name: "Student Register", href: "/register" },
    { name: "Employer Register", href: "/employer-register" },
    { name: "About Team 4", href: "/about-team" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Admin Dashboard", href: "/admin-login" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold theme-gradient-text">Job4Students</span>
          </Link>
          <LanguageSwitcher />
        </div>

        <nav className="hidden md:flex gap-5 justify-center flex-1 mx-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-theme-teal flex items-center gap-1 ${
                pathname === item.href ? "text-theme-purple" : "text-foreground/60"
              }`}
            >
              {item.name === "AI Jobs" && <Bot className="h-3 w-3" />}
              {item.name === "Admin" && <Database className="h-3 w-3" />}
              {item.name === "Mobile Apps" && <Smartphone className="h-3 w-3" />}
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-theme-purple text-theme-purple hover:bg-theme-purple/10 px-4"
          >
            <Link href="/login-choice">Login</Link>
          </Button>
          <Button asChild size="sm" className="bg-theme-purple hover:bg-theme-blue text-white px-4">
            <Link href="/register-choice">Register</Link>
          </Button>
          <ModeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container px-4 md:hidden">
          <nav className="flex flex-col space-y-3 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium py-2 text-center transition-colors hover:text-theme-teal flex items-center justify-center gap-1 ${
                  pathname === item.href ? "text-theme-purple" : "text-foreground/60"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name === "AI Jobs" && <Bot className="h-3 w-3" />}
                {item.name === "Admin" && <Database className="h-3 w-3" />}
                {item.name === "Mobile Apps" && <Smartphone className="h-3 w-3" />}
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="ghost" className="w-full justify-start" size="sm">
                <Link href="/login-choice">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
              <Button asChild className="w-full justify-start" size="sm">
                <Link href="/register-choice">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Register
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Debug bar toggle button */}
      <div className="border-t border-border">
        <div className="container py-1 flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowDebugBar(!showDebugBar)}
            className="text-xs text-muted-foreground flex items-center gap-1"
          >
            {showDebugBar ? (
              <>
                Hide Presentation Navigation <ChevronUp className="h-3 w-3" />
              </>
            ) : (
              <>
                Show Presentation Navigation <ChevronDown className="h-3 w-3" />
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Debug/Presentation navigation bar */}
      {showDebugBar && (
        <div className="border-t border-border bg-muted/30">
          <div className="container py-2 overflow-x-auto">
            <div className="text-center text-xs text-muted-foreground mb-2">
              <span className="bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 rounded text-yellow-800 dark:text-yellow-200">
                For presentation purposes only
              </span>
              <span className="ml-2">Quick access to all pages in the application</span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-nowrap min-w-max mx-auto">
              {allPages.map((page) => (
                <Button
                  key={page.name}
                  variant={pathname === page.href ? "default" : "outline"}
                  size="sm"
                  asChild
                  className={`whitespace-nowrap ${
                    pathname === page.href
                      ? "bg-theme-purple hover:bg-theme-blue text-white"
                      : "border-theme-purple/30 text-theme-purple hover:bg-theme-purple/10"
                  }`}
                >
                  <Link href={page.href}>
                    {page.name === "Database Model" && <TableProperties className="mr-1 h-3 w-3" />}
                    {page.name === "Architecture" && <Layers className="mr-1 h-3 w-3" />}
                    {page.name === "Payment Gateway" && <CreditCard className="mr-1 h-3 w-3" />}
                    {page.name === "API Docs" && <Code className="mr-1 h-3 w-3" />}
                    {page.name === "Income" && <DollarSign className="mr-1 h-3 w-3" />}
                    {page.name === "Todo List" && <CheckSquare className="mr-1 h-3 w-3" />}
                    {page.name === "Chat Platform" && <MessageSquare className="mr-1 h-3 w-3" />}
                    {page.name === "Employer Chat" && <MessageCircle className="mr-1 h-3 w-3" />}
                    {page.name === "Student Verification" && <IdCard className="mr-1 h-3 w-3" />}
                    {page.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Cookie Consent Component */}
      <CookieConsent open={cookiePopupOpen} onOpenChange={setCookiePopupOpen} />
    </header>
  )
}

