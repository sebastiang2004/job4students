"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle, Clock, Upload, AlertCircle, Shield, FileCheck, School } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function StudentVerification() {
  const [verificationStatus, setVerificationStatus] = useState<"pending" | "verified" | "rejected" | "not_submitted">(
    "not_submitted",
  )
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0])
    }
  }

  const simulateUpload = () => {
    setIsSubmitting(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsSubmitting(false)
          setVerificationStatus("pending")
          return 100
        }
        return prev + 5
      })
    }, 100)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (uploadedFile) {
      simulateUpload()
    }
  }

  const getStatusBadge = () => {
    switch (verificationStatus) {
      case "verified":
        return (
          <div className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
            <CheckCircle className="h-4 w-4" />
            <span>Verified</span>
          </div>
        )
      case "pending":
        return (
          <div className="flex items-center gap-2 text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full">
            <Clock className="h-4 w-4" />
            <span>Pending Review</span>
          </div>
        )
      case "rejected":
        return (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">
            <AlertCircle className="h-4 w-4" />
            <span>Verification Failed</span>
          </div>
        )
      default:
        return (
          <div className="flex items-center gap-2 text-gray-600 bg-gray-50 dark:bg-gray-800/50 px-3 py-1 rounded-full">
            <Shield className="h-4 w-4" />
            <span>Not Submitted</span>
          </div>
        )
    }
  }

  return (
    <div className="container max-w-5xl py-10 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student ID Verification</h1>
          <p className="text-muted-foreground mt-1">Verify your student status with your university ID</p>
        </div>
        <Button variant="outline" asChild className="flex items-center gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Website
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-theme-purple" />
                ID Verification
              </CardTitle>
              <CardDescription>
                Upload your student ID to verify your student status and unlock student benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="university">University</Label>
                    <Select defaultValue="usv">
                      <SelectTrigger>
                        <SelectValue placeholder="Select your university" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usv">Stefan cel Mare University of Suceava</SelectItem>
                        <SelectItem value="uaic">Alexandru Ioan Cuza University</SelectItem>
                        <SelectItem value="utcn">Technical University of Cluj-Napoca</SelectItem>
                        <SelectItem value="unibuc">University of Bucharest</SelectItem>
                        <SelectItem value="ubb">Babeș-Bolyai University</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student-id">Student ID Number</Label>
                    <Input id="student-id" placeholder="Enter your student ID number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="faculty">Faculty</Label>
                    <Select defaultValue="csm">
                      <SelectTrigger>
                        <SelectValue placeholder="Select your faculty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csm">Faculty of Computer Science and Engineering</SelectItem>
                        <SelectItem value="feaa">Faculty of Economics and Public Administration</SelectItem>
                        <SelectItem value="fefs">Faculty of Physical Education and Sports</SelectItem>
                        <SelectItem value="flsc">Faculty of Letters and Communication Sciences</SelectItem>
                        <SelectItem value="fssp">Faculty of History and Geography</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="id-upload">Upload Student ID</Label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
                      {uploadedFile ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2 text-theme-purple">
                            <FileCheck className="h-6 w-6" />
                            <span className="font-medium">{uploadedFile.name}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                          <Button type="button" variant="outline" size="sm" onClick={() => setUploadedFile(null)}>
                            Change File
                          </Button>
                        </div>
                      ) : (
                        <>
                          <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm font-medium mb-1">Drag and drop your ID scan or photo</p>
                          <p className="text-xs text-muted-foreground mb-3">
                            Supported formats: JPG, PNG, PDF (Max 5MB)
                          </p>
                          <Button type="button" variant="outline" size="sm" asChild>
                            <label htmlFor="id-upload" className="cursor-pointer">
                              Browse Files
                              <input
                                id="id-upload"
                                type="file"
                                className="hidden"
                                accept=".jpg,.jpeg,.png,.pdf"
                                onChange={handleFileChange}
                              />
                            </label>
                          </Button>
                        </>
                      )}
                    </div>
                  </div>

                  {isSubmitting && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Uploading...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="h-2" />
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <Button
                    type="submit"
                    className="w-full bg-theme-purple hover:bg-theme-blue"
                    disabled={!uploadedFile || isSubmitting}
                  >
                    Submit for Verification
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-theme-purple" />
                Verification Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-center">
                  {verificationStatus === "verified" ? (
                    <div className="rounded-full bg-green-50 dark:bg-green-900/20 p-4">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                  ) : verificationStatus === "pending" ? (
                    <div className="rounded-full bg-yellow-50 dark:bg-yellow-900/20 p-4">
                      <Clock className="h-12 w-12 text-yellow-600" />
                    </div>
                  ) : verificationStatus === "rejected" ? (
                    <div className="rounded-full bg-red-50 dark:bg-red-900/20 p-4">
                      <AlertCircle className="h-12 w-12 text-red-600" />
                    </div>
                  ) : (
                    <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-4">
                      <Shield className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <h3 className="font-medium text-lg mb-1">
                    {verificationStatus === "verified"
                      ? "Verification Complete"
                      : verificationStatus === "pending"
                        ? "Verification in Progress"
                        : verificationStatus === "rejected"
                          ? "Verification Failed"
                          : "Not Verified"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {verificationStatus === "verified"
                      ? "Your student status has been verified. You now have access to all student benefits."
                      : verificationStatus === "pending"
                        ? "We're reviewing your submission. This usually takes 1-2 business days."
                        : verificationStatus === "rejected"
                          ? "We couldn't verify your student status. Please check the information and try again."
                          : "Please submit your student ID to verify your student status."}
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Status</span>
                    {getStatusBadge()}
                  </div>

                  {verificationStatus !== "not_submitted" && (
                    <>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Submitted</span>
                        <span className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</span>
                      </div>

                      {verificationStatus === "verified" && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Valid Until</span>
                          <span className="text-sm text-muted-foreground">
                            {new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button variant="outline" className="w-full mb-2" disabled={verificationStatus !== "verified"}>
                Download Verification Certificate
              </Button>
              <Button
                variant="ghost"
                className="w-full text-muted-foreground"
                disabled={verificationStatus !== "rejected"}
              >
                Contact Support
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <School className="h-5 w-5 text-theme-purple" />
                University Verification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-theme-purple/10 rounded-full p-2">
                    <School className="h-5 w-5 text-theme-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium">Stefan cel Mare University</h4>
                    <p className="text-xs text-muted-foreground">Official Partner</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  We work directly with Stefan cel Mare University to verify student status. Your information is
                  securely processed.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Students from Stefan cel Mare University receive priority verification and additional benefits.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Verification FAQ</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why verify your student ID?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Verifying your student status unlocks exclusive benefits including student discounts, priority access to
                student-only job opportunities, and higher visibility to employers looking specifically for students
                from your university.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How does verification work?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our team reviews your submitted ID and cross-references it with university records. For Stefan cel Mare
                University students, we have direct API access to verify your enrollment status automatically in most
                cases.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is my information secure?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, all submitted documents are encrypted and stored securely. We only use your information to verify
                your student status and never share it with third parties without your explicit consent.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How long is verification valid?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Student verification is valid for one academic year. You'll need to renew your verification at the
                beginning of each academic year to maintain your verified student status and benefits.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

