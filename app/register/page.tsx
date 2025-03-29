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

export default function RegisterPage() {
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

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16 flex items-center justify-center">
        <div className="container max-w-md flex justify-center px-4">
          <Card className="w-full">
            <CardHeader className="space-y-4 text-center py-8">
              <CardTitle className="text-3xl font-bold">Create an account</CardTitle>
              <CardDescription className="text-lg">Enter your information to create your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 px-6">
              <div className="space-y-4">
                <Label htmlFor="name" className="text-base">
                  Full Name
                </Label>
                <Input id="name" placeholder="John Doe" required className="py-6 text-base" />
              </div>
              <div className="space-y-4">
                <Label htmlFor="email" className="text-base">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="john@example.com" required className="py-6 text-base" />
              </div>
              <div className="space-y-4">
                <Label htmlFor="password" className="text-base">
                  Password
                </Label>
                <Input id="password" type="password" required className="py-6 text-base" />
              </div>
              <div className="space-y-4">
                <Label htmlFor="country" className="text-base">
                  Country
                </Label>
                <Select defaultValue="Romania">
                  <SelectTrigger className="py-6 text-base">
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
              <div className="space-y-4">
                <Label htmlFor="phone" className="text-base">
                  Phone Number
                </Label>
                <div className="flex">
                  <Select value={countryCode} onValueChange={setCountryCode}>
                    <SelectTrigger className="w-[110px] flex-shrink-0 py-6 text-base">
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
                  <Input id="phone" className="flex-1 ml-2 py-6 text-base" placeholder="712 345 678" />
                </div>
              </div>
              <div className="space-y-4">
                <Label htmlFor="university" className="text-base">
                  University/School
                </Label>
                <Input id="university" placeholder="University of Bucharest" className="py-6 text-base" />
              </div>
              <div className="space-y-1 pt-4">
                <Button className="w-full py-6 text-lg">Create Account</Button>
              </div>
              <div className="relative py-4">
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
            <CardFooter className="flex flex-wrap items-center justify-center gap-2 py-8">
              <div className="text-base text-muted-foreground text-center">
                Already have an account?{" "}
                <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                  Login
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

