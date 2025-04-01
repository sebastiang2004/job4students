import Link from "next/link"
import type { Metadata } from "next"
import { Briefcase, GraduationCap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Login Choice | Job4Students",
  description: "Choose how you want to login to Job4Students",
}

export default function LoginChoicePage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <div className="flex flex-col items-center space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Login to Job4Students</h1>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose how you want to login to our platform
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2 md:gap-8 max-w-3xl">
          <Card className="flex flex-col h-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Student</CardTitle>
              <CardDescription>Login as a student looking for jobs</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <GraduationCap className="h-24 w-24 text-primary" />
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" size="lg">
                <Link href="/login">Student Login</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Employer</CardTitle>
              <CardDescription>Login as an employer posting jobs</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <Briefcase className="h-24 w-24 text-primary" />
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" size="lg">
                <Link href="/employer-login">Employer Login</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground">Don&apos;t have an account yet?</p>
          <Button asChild variant="outline">
            <Link href="/register-choice">Create an Account</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

