"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Facebook, Twitter } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16 flex items-center justify-center">
        <div className="container max-w-md flex justify-center px-4">
          <Card className="w-full">
            <CardHeader className="space-y-4 text-center py-8">
              <CardTitle className="text-3xl font-bold">Login</CardTitle>
              <CardDescription className="text-lg">Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 px-6">
              <div className="space-y-4">
                <Label htmlFor="email" className="text-base">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="john@example.com" required className="py-6 text-base" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-base">
                    Password
                  </Label>
                  <Link href="/forgot-password" className="text-sm text-primary underline-offset-4 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" required className="py-6 text-base" />
              </div>
              <Button className="w-full py-6 text-lg mt-6">Login</Button>
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
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-primary underline-offset-4 hover:underline">
                  Register
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

