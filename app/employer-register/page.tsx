"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Facebook, Twitter } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

export default function EmployerRegisterPage() {
  const [countryCode, setCountryCode] = useState("+40")

  const countryCodes = [
    { code: "+40", country: "Romania" },
    { code: "+1", country: "United States" },
    { code: "+44", country: "United Kingdom" },
    { code: "+33", country: "France" },
    { code: "+49", country: "Germany" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+36", country: "Hungary" },
    { code: "+43", country: "Austria" },
    { code: "+32", country: "Belgium" },
  ]

  const countries = [
    "Romania",
    "United States",
    "United Kingdom",
    "France",
    "Germany",
    "Italy",
    "Spain",
    "Hungary",
    "Austria",
    "Belgium",
  ]

  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Manufacturing",
    "Retail",
    "Marketing",
    "Consulting",
    "Hospitality",
    "Construction",
  ]

  const companySize = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 flex items-center justify-center">
        <div className="container max-w-2xl flex justify-center px-4">
          <Card className="w-full">
            <CardHeader className="space-y-4 text-center py-8">
              <CardTitle className="text-3xl font-bold">Create an Employer Account</CardTitle>
              <CardDescription className="text-lg">
                Register your company to post jobs and find talented students
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 px-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-center">Company Information</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" placeholder="TechCorp Solutions" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website (optional)</Label>
                    <Input id="website" placeholder="https://example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        {companySize.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="companyDescription">Company Description</Label>
                    <Textarea
                      id="companyDescription"
                      placeholder="Tell us about your company, culture, and what you do"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-center">Contact Information</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Person Name</Label>
                    <Input id="contactName" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input id="jobTitle" placeholder="HR Manager" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="hr@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex">
                      <Select value={countryCode} onValueChange={setCountryCode}>
                        <SelectTrigger className="w-[110px] flex-shrink-0">
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              {country.code} ({country.country})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input id="phone" className="flex-1 ml-2" placeholder="712 345 678" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-center">Address</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="Romania">
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Bucharest" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="123 Main Street" required />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-center">Account Information</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" required />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2 pt-4">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm font-normal">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary underline-offset-4 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button className="w-full py-6 text-lg">Create Employer Account</Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-4 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Button variant="outline" className="flex items-center justify-center gap-2 py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-google"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="flex items-center justify-center gap-2 py-5">
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Button>
                <Button variant="outline" className="flex items-center justify-center gap-2 py-5">
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center gap-4 py-8">
              <div className="text-sm text-muted-foreground text-center">
                Already have an account?{" "}
                <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                  Login
                </Link>
              </div>
              <div className="text-sm text-muted-foreground text-center">
                Looking for a job?{" "}
                <Link href="/register" className="text-primary underline-offset-4 hover:underline">
                  Register as a Student
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

