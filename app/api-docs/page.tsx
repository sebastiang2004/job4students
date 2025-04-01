"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Copy, Play, Terminal, Check, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

export default function ApiDocsPage() {
  const [activeTab, setActiveTab] = useState("authentication")
  const [authToken, setAuthToken] = useState("")
  const [showResponse, setShowResponse] = useState<Record<string, boolean>>({})
  const [responseData, setResponseData] = useState<Record<string, any>>({})
  const [responseStatus, setResponseStatus] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState<Record<string, boolean>>({})
  const [copiedEndpoint, setCopiedEndpoint] = useState("")
  const [expandedParams, setExpandedParams] = useState<Record<string, boolean>>({})
  const [paramValues, setParamValues] = useState<Record<string, Record<string, string>>>({})

  // Mock API call function
  const mockApiCall = (endpoint: string, method: string, params: Record<string, string> = {}) => {
    const endpointKey = `${method}-${endpoint}`
    setLoading({ ...loading, [endpointKey]: true })
    setShowResponse({ ...showResponse, [endpointKey]: true })

    // Simulate API call delay
    setTimeout(() => {
      let response = {}
      let status = 200

      // Generate mock responses based on endpoint
      if (endpoint.includes("login")) {
        if (params.email && params.password) {
          response = {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            user: {
              id: "usr_123456",
              email: params.email,
              name: "John Doe",
              role: "student",
            },
          }
          setAuthToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
        } else {
          response = { error: "Invalid credentials" }
          status = 401
        }
      } else if (endpoint.includes("register")) {
        if (params.email && params.password && params.name) {
          response = {
            success: true,
            message: "User registered successfully",
            userId: "usr_" + Math.floor(Math.random() * 1000000),
          }
        } else {
          response = { error: "Missing required fields" }
          status = 400
        }
      } else if (endpoint.includes("jobs")) {
        if (method === "GET") {
          response = {
            jobs: [
              {
                id: "job_123",
                title: "Frontend Developer",
                company: "TechCorp",
                location: "Remote",
                salary: "$60,000 - $80,000",
                description: "Looking for a skilled frontend developer...",
                requirements: ["React", "TypeScript", "3+ years experience"],
              },
              {
                id: "job_124",
                title: "UX Designer",
                company: "DesignHub",
                location: "New York",
                salary: "$70,000 - $90,000",
                description: "Join our creative team as a UX designer...",
                requirements: ["Figma", "User Research", "2+ years experience"],
              },
            ],
            total: 2,
            page: 1,
            limit: 10,
          }
        } else if (method === "POST") {
          if (params.title && params.description) {
            response = {
              success: true,
              jobId: "job_" + Math.floor(Math.random() * 1000000),
              message: "Job posted successfully",
            }
          } else {
            response = { error: "Missing required fields" }
            status = 400
          }
        }
      } else if (endpoint.includes("applications")) {
        if (method === "GET") {
          response = {
            applications: [
              {
                id: "app_123",
                jobId: "job_123",
                userId: "usr_456",
                status: "pending",
                appliedAt: "2023-04-15T10:30:00Z",
              },
              {
                id: "app_124",
                jobId: "job_125",
                userId: "usr_456",
                status: "accepted",
                appliedAt: "2023-04-10T14:20:00Z",
              },
            ],
            total: 2,
          }
        } else if (method === "POST") {
          if (params.jobId) {
            response = {
              success: true,
              applicationId: "app_" + Math.floor(Math.random() * 1000000),
              message: "Application submitted successfully",
            }
          } else {
            response = { error: "Missing job ID" }
            status = 400
          }
        }
      } else {
        response = { message: "Endpoint called successfully" }
      }

      setResponseData({ ...responseData, [endpointKey]: response })
      setResponseStatus({ ...responseStatus, [endpointKey]: status })
      setLoading({ ...loading, [endpointKey]: false })
    }, 1000)
  }

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text)
    setCopiedEndpoint(endpoint)
    setTimeout(() => setCopiedEndpoint(""), 2000)
  }

  const toggleParams = (endpoint: string) => {
    setExpandedParams({
      ...expandedParams,
      [endpoint]: !expandedParams[endpoint],
    })
  }

  const updateParam = (endpoint: string, param: string, value: string) => {
    setParamValues({
      ...paramValues,
      [endpoint]: {
        ...(paramValues[endpoint] || {}),
        [param]: value,
      },
    })
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-blue-500"
      case "POST":
        return "bg-green-500"
      case "PUT":
        return "bg-amber-500"
      case "DELETE":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const renderEndpoint = (
    method: string,
    path: string,
    description: string,
    params: Array<{ name: string; type: string; required: boolean; description: string }>,
    responses: Array<{ status: number; description: string }>,
  ) => {
    const endpoint = `${path}`
    const endpointKey = `${method}-${endpoint}`

    return (
      <Card
        key={endpointKey}
        className="mb-6 border-l-4"
        style={{
          borderLeftColor:
            method === "GET" ? "#3b82f6" : method === "POST" ? "#22c55e" : method === "PUT" ? "#f59e0b" : "#ef4444",
        }}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge className={cn("text-white font-mono", getMethodColor(method))}>{method}</Badge>
              <CardTitle className="text-lg font-mono">{path}</CardTitle>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1"
              onClick={() => copyToClipboard(`${window.location.origin}/api${path}`, endpointKey)}
            >
              {copiedEndpoint === endpointKey ? <Check size={14} /> : <Copy size={14} />}
              {copiedEndpoint === endpointKey ? "Copied" : "Copy"}
            </Button>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="parameters">
              <AccordionTrigger className="text-sm font-medium">Parameters</AccordionTrigger>
              <AccordionContent>
                {params.length > 0 ? (
                  <div className="space-y-4">
                    {params.map((param) => (
                      <div key={param.name} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start mb-4">
                        <div>
                          <Label htmlFor={`${endpointKey}-${param.name}`} className="flex items-center gap-1">
                            {param.name}
                            {param.required && <span className="text-red-500">*</span>}
                          </Label>
                          <p className="text-xs text-muted-foreground">{param.type}</p>
                        </div>
                        <div className="md:col-span-2">
                          <Input
                            id={`${endpointKey}-${param.name}`}
                            placeholder={param.description}
                            onChange={(e) => updateParam(endpointKey, param.name, e.target.value)}
                            value={paramValues[endpointKey]?.[param.name] || ""}
                          />
                        </div>
                        <div className="text-xs text-muted-foreground">{param.description}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No parameters required</p>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="responses">
              <AccordionTrigger className="text-sm font-medium">Responses</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {responses.map((response) => (
                    <div key={response.status} className="flex items-center gap-2">
                      <Badge
                        className={cn(
                          "text-white",
                          response.status >= 200 && response.status < 300
                            ? "bg-green-500"
                            : response.status >= 400 && response.status < 500
                              ? "bg-amber-500"
                              : "bg-red-500",
                        )}
                      >
                        {response.status}
                      </Badge>
                      <span className="text-sm">{response.description}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch gap-4">
          <Button
            className="w-full gap-2"
            onClick={() => mockApiCall(endpoint, method, paramValues[endpointKey])}
            disabled={loading[endpointKey]}
          >
            {loading[endpointKey] ? (
              <>Loading...</>
            ) : (
              <>
                <Play size={16} />
                Try it out
              </>
            )}
          </Button>

          {showResponse[endpointKey] && (
            <div className="w-full">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  className={cn(
                    "text-white",
                    responseStatus[endpointKey] >= 200 && responseStatus[endpointKey] < 300
                      ? "bg-green-500"
                      : responseStatus[endpointKey] >= 400 && responseStatus[endpointKey] < 500
                        ? "bg-amber-500"
                        : "bg-red-500",
                  )}
                >
                  {responseStatus[endpointKey]}
                </Badge>
                <span className="text-sm font-medium">Response</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto h-7 gap-1"
                  onClick={() =>
                    copyToClipboard(JSON.stringify(responseData[endpointKey], null, 2), `response-${endpointKey}`)
                  }
                >
                  {copiedEndpoint === `response-${endpointKey}` ? <Check size={14} /> : <Copy size={14} />}
                </Button>
              </div>
              <div className="bg-muted p-4 rounded-md overflow-x-auto">
                <pre className="text-xs whitespace-pre-wrap break-words">
                  <code>{JSON.stringify(responseData[endpointKey], null, 2)}</code>
                </pre>
              </div>
            </div>
          )}
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="container py-8 max-w-6xl">
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">API Documentation</h1>
          <p className="text-muted-foreground">Explore and test the Job4Students API endpoints</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal size={20} />
              Authentication
            </CardTitle>
            <CardDescription>Manage your API authentication token</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-[1fr_auto] gap-2">
                <Input
                  value={authToken}
                  onChange={(e) => setAuthToken(e.target.value)}
                  placeholder="Your authentication token"
                  className="font-mono text-xs"
                />
                <Button variant="outline" onClick={() => setAuthToken("")} disabled={!authToken}>
                  Clear
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="use-token" />
                <Label htmlFor="use-token">Use token for all requests</Label>
              </div>

              {authToken && (
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Authentication active</AlertTitle>
                  <AlertDescription>Your requests will include the authentication token</AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="authentication" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex overflow-x-auto mb-6 w-full">
            <TabsTrigger value="authentication" className="flex-shrink-0">
              Auth
            </TabsTrigger>
            <TabsTrigger value="users" className="flex-shrink-0">
              Users
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex-shrink-0">
              Jobs
            </TabsTrigger>
            <TabsTrigger value="companies" className="flex-shrink-0">
              Companies
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex-shrink-0">
              Applications
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex-shrink-0">
              Admin
            </TabsTrigger>
          </TabsList>

          <TabsContent value="authentication" className="space-y-4">
            <div className="grid gap-6">
              {renderEndpoint(
                "POST",
                "/auth/login",
                "Authenticate a user and get a token",
                [
                  { name: "email", type: "string", required: true, description: "User email" },
                  { name: "password", type: "string", required: true, description: "User password" },
                ],
                [
                  { status: 200, description: "Login successful" },
                  { status: 401, description: "Invalid credentials" },
                ],
              )}

              {renderEndpoint(
                "POST",
                "/auth/register",
                "Register a new user account",
                [
                  { name: "name", type: "string", required: true, description: "User full name" },
                  { name: "email", type: "string", required: true, description: "User email" },
                  { name: "password", type: "string", required: true, description: "User password" },
                  { name: "role", type: "string", required: true, description: "User role (student/employer)" },
                ],
                [
                  { status: 201, description: "User created successfully" },
                  { status: 400, description: "Invalid input" },
                  { status: 409, description: "Email already exists" },
                ],
              )}

              {renderEndpoint(
                "POST",
                "/auth/refresh",
                "Refresh an expired token",
                [{ name: "refreshToken", type: "string", required: true, description: "Refresh token" }],
                [
                  { status: 200, description: "Token refreshed successfully" },
                  { status: 401, description: "Invalid refresh token" },
                ],
              )}

              {renderEndpoint(
                "POST",
                "/auth/logout",
                "Invalidate the current token",
                [],
                [
                  { status: 200, description: "Logged out successfully" },
                  { status: 401, description: "Unauthorized" },
                ],
              )}
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <div className="grid gap-6">
              {renderEndpoint(
                "GET",
                "/users/me",
                "Get the current user profile",
                [],
                [
                  { status: 200, description: "User profile retrieved" },
                  { status: 401, description: "Unauthorized" },
                ],
              )}

              {renderEndpoint(
                "PUT",
                "/users/me",
                "Update the current user profile",
                [
                  { name: "name", type: "string", required: false, description: "User full name" },
                  { name: "bio", type: "string", required: false, description: "User biography" },
                  { name: "skills", type: "array", required: false, description: "User skills (comma separated)" },
                ],
                [
                  { status: 200, description: "User updated successfully" },
                  { status: 400, description: "Invalid input" },
                  { status: 401, description: "Unauthorized" },
                ],
              )}

              {renderEndpoint(
                "GET",
                "/users/{id}",
                "Get a user profile by ID",
                [{ name: "id", type: "string", required: true, description: "User ID" }],
                [
                  { status: 200, description: "User profile retrieved" },
                  { status: 404, description: "User not found" },
                ],
              )}
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-4">
            <div className="grid gap-6">
              {renderEndpoint(
                "GET",
                "/jobs",
                "Get a list of available jobs",
                [
                  { name: "page", type: "number", required: false, description: "Page number" },
                  { name: "limit", type: "number", required: false, description: "Results per page" },
                  { name: "search", type: "string", required: false, description: "Search term" },
                  { name: "category", type: "string", required: false, description: "Job category" },
                  { name: "location", type: "string", required: false, description: "Job location" },
                ],
                [{ status: 200, description: "Jobs retrieved successfully" }],
              )}

              {renderEndpoint(
                "GET",
                "/jobs/{id}",
                "Get a job by ID",
                [{ name: "id", type: "string", required: true, description: "Job ID" }],
                [
                  { status: 200, description: "Job retrieved successfully" },
                  { status: 404, description: "Job not found" },
                ],
              )}

              {renderEndpoint(
                "POST",
                "/jobs",
                "Create a new job posting",
                [
                  { name: "title", type: "string", required: true, description: "Job title" },
                  { name: "description", type: "string", required: true, description: "Job description" },
                  {
                    name: "requirements",
                    type: "array",
                    required: true,
                    description: "Job requirements (comma separated)",
                  },
                  { name: "location", type: "string", required: true, description: "Job location" },
                  { name: "salary", type: "string", required: false, description: "Salary range" },
                  {
                    name: "type",
                    type: "string",
                    required: true,
                    description: "Job type (full-time, part-time, etc.)",
                  },
                ],
                [
                  { status: 201, description: "Job created successfully" },
                  { status: 400, description: "Invalid input" },
                  { status: 401, description: "Unauthorized" },
                ],
              )}

              {renderEndpoint(
                "PUT",
                "/jobs/{id}",
                "Update a job posting",
                [
                  { name: "id", type: "string", required: true, description: "Job ID" },
                  { name: "title", type: "string", required: false, description: "Job title" },
                  { name: "description", type: "string", required: false, description: "Job description" },
                  {
                    name: "requirements",
                    type: "array",
                    required: false,
                    description: "Job requirements (comma separated)",
                  },
                  { name: "location", type: "string", required: false, description: "Job location" },
                  { name: "salary", type: "string", required: false, description: "Salary range" },
                  {
                    name: "type",
                    type: "string",
                    required: false,
                    description: "Job type (full-time, part-time, etc.)",
                  },
                ],
                [
                  { status: 200, description: "Job updated successfully" },
                  { status: 400, description: "Invalid input" },
                  { status: 401, description: "Unauthorized" },
                  { status: 404, description: "Job not found" },
                ],
              )}

              {renderEndpoint(
                "DELETE",
                "/jobs/{id}",
                "Delete a job posting",
                [{ name: "id", type: "string", required: true, description: "Job ID" }],
                [
                  { status: 200, description: "Job deleted successfully" },
                  { status: 401, description: "Unauthorized" },
                  { status: 404, description: "Job not found" },
                ],
              )}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-4">
            <div className="grid gap-6">
              {renderEndpoint(
                "GET",
                "/applications",
                "Get a list of job applications",
                [
                  { name: "page", type: "number", required: false, description: "Page number" },
                  { name: "limit", type: "number", required: false, description: "Results per page" },
                  { name: "status", type: "string", required: false, description: "Application status" },
                ],
                [
                  { status: 200, description: "Applications retrieved successfully" },
                  { status: 401, description: "Unauthorized" },
                ],
              )}

              {renderEndpoint(
                "POST",
                "/applications",
                "Submit a job application",
                [
                  { name: "jobId", type: "string", required: true, description: "Job ID" },
                  { name: "coverLetter", type: "string", required: false, description: "Cover letter" },
                  { name: "resumeUrl", type: "string", required: false, description: "Resume URL" },
                ],
                [
                  { status: 201, description: "Application submitted successfully" },
                  { status: 400, description: "Invalid input" },
                  { status: 401, description: "Unauthorized" },
                  { status: 409, description: "Already applied to this job" },
                ],
              )}

              {renderEndpoint(
                "GET",
                "/applications/{id}",
                "Get an application by ID",
                [{ name: "id", type: "string", required: true, description: "Application ID" }],
                [
                  { status: 200, description: "Application retrieved successfully" },
                  { status: 401, description: "Unauthorized" },
                  { status: 404, description: "Application not found" },
                ],
              )}

              {renderEndpoint(
                "PUT",
                "/applications/{id}/status",
                "Update an application status",
                [
                  { name: "id", type: "string", required: true, description: "Application ID" },
                  {
                    name: "status",
                    type: "string",
                    required: true,
                    description: "New status (pending, reviewing, accepted, rejected)",
                  },
                  { name: "feedback", type: "string", required: false, description: "Feedback message" },
                ],
                [
                  { status: 200, description: "Status updated successfully" },
                  { status: 400, description: "Invalid input" },
                  { status: 401, description: "Unauthorized" },
                  { status: 404, description: "Application not found" },
                ],
              )}
            </div>
          </TabsContent>

          <TabsContent value="companies" className="space-y-4">
            <div className="grid gap-6">
              {renderEndpoint(
                "GET",
                "/companies",
                "Get a list of companies",
                [
                  { name: "page", type: "number", required: false, description: "Page number" },
                  { name: "limit", type: "number", required: false, description: "Results per page" },
                  { name: "search", type: "string", required: false, description: "Search term" },
                ],
                [{ status: 200, description: "Companies retrieved successfully" }],
              )}

              {renderEndpoint(
                "GET",
                "/companies/{id}",
                "Get a company by ID",
                [{ name: "id", type: "string", required: true, description: "Company ID" }],
                [
                  { status: 200, description: "Company retrieved successfully" },
                  { status: 404, description: "Company not found" },
                ],
              )}

              {renderEndpoint(
                "POST",
                "/companies",
                "Create a new company profile",
                [
                  { name: "name", type: "string", required: true, description: "Company name" },
                  { name: "description", type: "string", required: true, description: "Company description" },
                  { name: "website", type: "string", required: false, description: "Company website" },
                  { name: "logo", type: "string", required: false, description: "Company logo URL" },
                  { name: "location", type: "string", required: true, description: "Company location" },
                  { name: "industry", type: "string", required: true, description: "Company industry" },
                ],
                [
                  { status: 201, description: "Company created successfully" },
                  { status: 400, description: "Invalid input" },
                  { status: 401, description: "Unauthorized" },
                ],
              )}

              {renderEndpoint(
                "PUT",
                "/companies/{id}",
                "Update a company profile",
                [
                  { name: "id", type: "string", required: true, description: "Company ID" },
                  { name: "name", type: "string", required: false, description: "Company name" },
                  { name: "description", type: "string", required: false, description: "Company description" },
                  { name: "website", type: "string", required: false, description: "Company website" },
                  { name: "logo", type: "string", required: false, description: "Company logo URL" },
                  { name: "location", type: "string", required: false, description: "Company location" },
                  { name: "industry", type: "string", required: false, description: "Company industry" },
                ],
                [
                  { status: 200, description: "Company updated successfully" },
                  { status: 400, description: "Invalid input" },
                  { status: 401, description: "Unauthorized" },
                  { status: 404, description: "Company not found" },
                ],
              )}

              {renderEndpoint(
                "GET",
                "/companies/{id}/jobs",
                "Get jobs posted by a company",
                [
                  { name: "id", type: "string", required: true, description: "Company ID" },
                  { name: "page", type: "number", required: false, description: "Page number" },
                  { name: "limit", type: "number", required: false, description: "Results per page" },
                ],
                [
                  { status: 200, description: "Jobs retrieved successfully" },
                  { status: 404, description: "Company not found" },
                ],
              )}
            </div>
          </TabsContent>

          <TabsContent value="admin" className="space-y-4">
            <div className="grid gap-6">
              {renderEndpoint(
                "GET",
                "/admin/users",
                "Get all users (admin only)",
                [
                  { name: "page", type: "number", required: false, description: "Page number" },
                  { name: "limit", type: "number", required: false, description: "Results per page" },
                  { name: "role", type: "string", required: false, description: "Filter by role" },
                ],
                [
                  { status: 200, description: "Users retrieved successfully" },
                  { status: 401, description: "Unauthorized" },
                  { status: 403, description: "Forbidden - Admin access required" },
                ],
              )}

              {renderEndpoint(
                "PUT",
                "/admin/users/{id}",
                "Update a user (admin only)",
                [
                  { name: "id", type: "string", required: true, description: "User ID" },
                  { name: "role", type: "string", required: false, description: "User role" },
                  { name: "status", type: "string", required: false, description: "Account status" },
                ],
                [
                  { status: 200, description: "User updated successfully" },
                  { status: 400, description: "Invalid input" },
                  { status: 401, description: "Unauthorized" },
                  { status: 403, description: "Forbidden - Admin access required" },
                  { status: 404, description: "User not found" },
                ],
              )}

              {renderEndpoint(
                "GET",
                "/admin/stats",
                "Get platform statistics (admin only)",
                [],
                [
                  { status: 200, description: "Statistics retrieved successfully" },
                  { status: 401, description: "Unauthorized" },
                  { status: 403, description: "Forbidden - Admin access required" },
                ],
              )}

              {renderEndpoint(
                "POST",
                "/admin/jobs/verify/{id}",
                "Verify a job posting (admin only)",
                [
                  { name: "id", type: "string", required: true, description: "Job ID" },
                  {
                    name: "status",
                    type: "string",
                    required: true,
                    description: "Verification status (approved, rejected)",
                  },
                  { name: "feedback", type: "string", required: false, description: "Feedback message" },
                ],
                [
                  { status: 200, description: "Job verified successfully" },
                  { status: 400, description: "Invalid input" },
                  { status: 401, description: "Unauthorized" },
                  { status: 403, description: "Forbidden - Admin access required" },
                  { status: 404, description: "Job not found" },
                ],
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

