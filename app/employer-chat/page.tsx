"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Search,
  Send,
  Paperclip,
  Image,
  Smile,
  MoreHorizontal,
  Phone,
  Video,
  Filter,
  Star,
  StarHalf,
  Calendar,
  FileText,
  User,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Users,
  ArrowLeft,
} from "lucide-react"

// Mock student data
const students = [
  {
    id: 1,
    name: "Alexandru Popescu",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    unread: 2,
    university: "University of Stefan cel Mare",
    major: "Computer Science",
    year: "Senior",
    rating: 4.8,
    applied: "Frontend Developer Intern",
    skills: ["React", "TypeScript", "UI/UX"],
  },
  {
    id: 2,
    name: "Maria Ionescu",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    unread: 0,
    university: "University of Stefan cel Mare",
    major: "Software Engineering",
    year: "Junior",
    rating: 4.5,
    applied: "Backend Developer",
    skills: ["Node.js", "Python", "Databases"],
  },
  {
    id: 3,
    name: "Andrei Vasilescu",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "away",
    unread: 0,
    university: "University of Stefan cel Mare",
    major: "Data Science",
    year: "Graduate",
    rating: 4.9,
    applied: "Data Analyst Intern",
    skills: ["Python", "R", "Machine Learning"],
  },
  {
    id: 4,
    name: "Elena Dumitrescu",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "offline",
    unread: 0,
    university: "University of Stefan cel Mare",
    major: "Business Informatics",
    year: "Senior",
    rating: 4.2,
    applied: "Product Management Intern",
    skills: ["Product Strategy", "UI/UX", "Agile"],
  },
  {
    id: 5,
    name: "Cristian Stanescu",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    unread: 3,
    university: "University of Stefan cel Mare",
    major: "Artificial Intelligence",
    year: "Graduate",
    rating: 4.7,
    applied: "ML Engineer",
    skills: ["TensorFlow", "PyTorch", "NLP"],
  },
  {
    id: 6,
    name: "Ioana Georgescu",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "offline",
    unread: 0,
    university: "University of Stefan cel Mare",
    major: "Computer Engineering",
    year: "Junior",
    rating: 4.4,
    applied: "Hardware Engineer Intern",
    skills: ["Embedded Systems", "C++", "IoT"],
  },
]

// Mock conversation data
const mockConversations = {
  1: [
    {
      id: 1,
      sender: "employer",
      text: "Hi Alex, thanks for applying to our Frontend Developer Intern position.",
      time: "10:30 AM",
      read: true,
    },
    {
      id: 2,
      sender: "student",
      text: "Thank you for considering my application! I'm very excited about the opportunity to work with your team.",
      time: "10:32 AM",
      read: true,
    },
    {
      id: 3,
      sender: "employer",
      text: "Your portfolio looks impressive. I particularly liked your React project with the custom hooks implementation.",
      time: "10:35 AM",
      read: true,
    },
    {
      id: 4,
      sender: "student",
      text: "Thank you! I spent a lot of time optimizing those hooks for reusability across the application.",
      time: "10:38 AM",
      read: true,
    },
    {
      id: 5,
      sender: "employer",
      text: "We'd like to schedule a technical interview with you. Are you available next Tuesday at 2 PM?",
      time: "10:40 AM",
      read: false,
    },
    {
      id: 6,
      sender: "employer",
      text: "Also, could you complete a small coding challenge before the interview? I can send the details if you're interested.",
      time: "10:41 AM",
      read: false,
    },
  ],
  5: [
    {
      id: 1,
      sender: "employer",
      text: "Hello Casey, we're impressed with your ML background and application for the ML Engineer position.",
      time: "Yesterday",
      read: true,
    },
    {
      id: 2,
      sender: "employer",
      text: "Your experience with NLP projects is exactly what we're looking for.",
      time: "Yesterday",
      read: true,
    },
    {
      id: 3,
      sender: "student",
      text: "Thank you for reaching out! I'm very interested in applying my NLP experience to real-world problems.",
      time: "Yesterday",
      read: true,
    },
    {
      id: 4,
      sender: "employer",
      text: "Great! We have a specific project involving sentiment analysis for customer feedback that we'd like to discuss.",
      time: "9:15 AM",
      read: false,
    },
    {
      id: 5,
      sender: "employer",
      text: "Would you be available for a video interview this week to discuss the role in more detail?",
      time: "9:16 AM",
      read: false,
    },
    {
      id: 6,
      sender: "employer",
      text: "We'd also like to introduce you to the team lead for our AI department during the call.",
      time: "9:17 AM",
      read: false,
    },
  ],
}

// Message templates
const messageTemplates = [
  "Thank you for your application to [Position]. We're currently reviewing your qualifications.",
  "We'd like to schedule an interview with you for the [Position] role. Are you available [Date/Time]?",
  "Could you please provide more information about your experience with [Skill]?",
  "We're pleased to inform you that you've been selected for the next round of interviews.",
  "Thank you for your interest, but we've decided to move forward with other candidates at this time.",
]

export default function EmployerChat() {
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null)
  const [conversations, setConversations] = useState<Record<number, any[]>>(mockConversations)
  const [message, setMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [filterUniversity, setFilterUniversity] = useState("")
  const [filterMajor, setFilterMajor] = useState("")
  const [filterYear, setFilterYear] = useState("")
  const [filterApplied, setFilterApplied] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedStudents, setSelectedStudents] = useState<number[]>([])
  const [bulkMessage, setBulkMessage] = useState("")

  // Filter students based on search term and filters
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesUniversity = !filterUniversity || filterUniversity === "all" || student.university === filterUniversity
    const matchesMajor = !filterMajor || filterMajor === "all" || student.major === filterMajor
    const matchesYear = !filterYear || filterYear === "all" || student.year === filterYear
    const matchesApplied = !filterApplied || filterApplied === "all" || student.applied === filterApplied

    return matchesSearch && matchesUniversity && matchesMajor && matchesYear && matchesApplied
  })

  // Handle student selection
  const selectStudent = (id: number) => {
    setSelectedStudent(id)

    // Mark messages as read when conversation is opened
    if (conversations[id]) {
      const updatedConversations = { ...conversations }
      updatedConversations[id] = updatedConversations[id].map((msg) => ({
        ...msg,
        read: true,
      }))
      setConversations(updatedConversations)
    } else {
      // Initialize empty conversation if none exists
      setConversations({
        ...conversations,
        [id]: [],
      })
    }
  }

  // Handle sending a message
  const sendMessage = () => {
    if (!message.trim() || selectedStudent === null) return

    const newMessage = {
      id: Date.now(),
      sender: "employer",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      read: false,
    }

    const currentConversation = conversations[selectedStudent] || []

    setConversations({
      ...conversations,
      [selectedStudent]: [...currentConversation, newMessage],
    })

    setMessage("")

    // Simulate student typing and response
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)

      const responses = [
        "Thank you for the information! I'll review it and get back to you.",
        "That sounds great! I'm available for an interview at the suggested time.",
        "I appreciate your feedback. Could you provide more details about the next steps?",
        "I have some experience with that technology. I'd be happy to discuss it further.",
        "Thank you for considering my application. I'm looking forward to the opportunity.",
      ]

      const responseMessage = {
        id: Date.now() + 1,
        sender: "student",
        text: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        read: true,
      }

      if (selectedStudent !== null) {
        const updatedConversation = conversations[selectedStudent] || []

        setConversations({
          ...conversations,
          [selectedStudent]: [...updatedConversation, responseMessage],
        })
      }
    }, 3000)
  }

  // Handle sending bulk message
  const sendBulkMessage = () => {
    if (!bulkMessage.trim() || selectedStudents.length === 0) return

    const updatedConversations = { ...conversations }

    selectedStudents.forEach((studentId) => {
      const newMessage = {
        id: Date.now() + studentId,
        sender: "employer",
        text: bulkMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        read: false,
      }

      if (updatedConversations[studentId]) {
        updatedConversations[studentId] = [...updatedConversations[studentId], newMessage]
      } else {
        updatedConversations[studentId] = [newMessage]
      }
    })

    setConversations(updatedConversations)
    setBulkMessage("")
    setSelectedStudents([])
  }

  // Handle template selection
  useEffect(() => {
    if (selectedTemplate) {
      setMessage(selectedTemplate)
      setSelectedTemplate("")
    }
  }, [selectedTemplate])

  // Get the selected student data
  const currentStudent = students.find((s) => s.id === selectedStudent)

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "away":
        return "bg-yellow-500"
      case "offline":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  // Toggle student selection for bulk messaging
  const toggleStudentSelection = (id: number) => {
    if (selectedStudents.includes(id)) {
      setSelectedStudents(selectedStudents.filter((studentId) => studentId !== id))
    } else {
      setSelectedStudents([...selectedStudents, id])
    }
  }

  // Get unique values for filters
  const universities = [...new Set(students.map((s) => s.university))]
  const majors = [...new Set(students.map((s) => s.major))]
  const years = [...new Set(students.map((s) => s.year))]
  const positions = [...new Set(students.map((s) => s.applied))]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Employer Chat Platform</h1>
          <p className="text-muted-foreground">
            Connect with potential candidates and manage your recruitment communications
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => (window.location.href = "/")}
          className="flex items-center gap-2 mt-4 md:mt-0"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Website
        </Button>
      </div>

      <Tabs defaultValue="individual" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="individual" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Individual Chat
          </TabsTrigger>
          <TabsTrigger value="bulk" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Bulk Messaging
          </TabsTrigger>
        </TabsList>

        <TabsContent value="individual" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Student List */}
            <div className="md:col-span-1">
              <div className="mb-4 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search students..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2"
                  >
                    <Filter className="h-4 w-4" />
                    {showFilters ? "Hide Filters" : "Show Filters"}
                  </Button>

                  {filterUniversity || filterMajor || filterYear || filterApplied ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setFilterUniversity("")
                        setFilterMajor("")
                        setFilterYear("")
                        setFilterApplied("")
                      }}
                    >
                      Clear Filters
                    </Button>
                  ) : null}
                </div>

                {showFilters && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border rounded-md bg-muted/30">
                    <div>
                      <label className="text-sm font-medium mb-1 block">University</label>
                      <Select value={filterUniversity} onValueChange={setFilterUniversity}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Universities" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Universities</SelectItem>
                          {universities.map((uni) => (
                            <SelectItem key={uni} value={uni}>
                              {uni}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Major</label>
                      <Select value={filterMajor} onValueChange={setFilterMajor}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Majors" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Majors</SelectItem>
                          {majors.map((major) => (
                            <SelectItem key={major} value={major}>
                              {major}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Year</label>
                      <Select value={filterYear} onValueChange={setFilterYear}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Years" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Years</SelectItem>
                          {years.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Applied For</label>
                      <Select value={filterApplied} onValueChange={setFilterApplied}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Positions" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Positions</SelectItem>
                          {positions.map((position) => (
                            <SelectItem key={position} value={position}>
                              {position}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>

              <Tabs defaultValue="all">
                <TabsList className="w-full mb-4">
                  <TabsTrigger value="all" className="flex-1">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="unread" className="flex-1">
                    Unread
                  </TabsTrigger>
                  <TabsTrigger value="online" className="flex-1">
                    Online
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="m-0">
                  <div className="space-y-2">
                    {filteredStudents.map((student) => (
                      <Card
                        key={student.id}
                        className={`cursor-pointer hover:bg-accent transition-colors ${selectedStudent === student.id ? "border-primary" : ""}`}
                        onClick={() => selectStudent(student.id)}
                      >
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <Avatar>
                                <AvatarImage src={student.avatar} alt={student.name} />
                                <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                              <span
                                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(student.status)}`}
                              ></span>
                            </div>
                            <div>
                              <h3 className="font-medium">{student.name}</h3>
                              <p className="text-sm text-muted-foreground capitalize">{student.status}</p>
                              <p className="text-xs text-muted-foreground">{student.applied}</p>
                            </div>
                          </div>
                          {student.unread > 0 && (
                            <Badge variant="destructive" className="rounded-full">
                              {student.unread}
                            </Badge>
                          )}
                        </CardContent>
                      </Card>
                    ))}

                    {filteredStudents.length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">
                        No students found matching your search criteria
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="unread" className="m-0">
                  <div className="space-y-2">
                    {filteredStudents
                      .filter((s) => s.unread > 0)
                      .map((student) => (
                        <Card
                          key={student.id}
                          className={`cursor-pointer hover:bg-accent transition-colors ${selectedStudent === student.id ? "border-primary" : ""}`}
                          onClick={() => selectStudent(student.id)}
                        >
                          <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <Avatar>
                                  <AvatarImage src={student.avatar} alt={student.name} />
                                  <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <span
                                  className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(student.status)}`}
                                ></span>
                              </div>
                              <div>
                                <h3 className="font-medium">{student.name}</h3>
                                <p className="text-sm text-muted-foreground capitalize">{student.status}</p>
                                <p className="text-xs text-muted-foreground">{student.applied}</p>
                              </div>
                            </div>
                            <Badge variant="destructive" className="rounded-full">
                              {student.unread}
                            </Badge>
                          </CardContent>
                        </Card>
                      ))}

                    {filteredStudents.filter((s) => s.unread > 0).length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">No unread messages</div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="online" className="m-0">
                  <div className="space-y-2">
                    {filteredStudents
                      .filter((s) => s.status === "online")
                      .map((student) => (
                        <Card
                          key={student.id}
                          className={`cursor-pointer hover:bg-accent transition-colors ${selectedStudent === student.id ? "border-primary" : ""}`}
                          onClick={() => selectStudent(student.id)}
                        >
                          <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <Avatar>
                                  <AvatarImage src={student.avatar} alt={student.name} />
                                  <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-green-500"></span>
                              </div>
                              <div>
                                <h3 className="font-medium">{student.name}</h3>
                                <p className="text-sm text-muted-foreground">Online</p>
                                <p className="text-xs text-muted-foreground">{student.applied}</p>
                              </div>
                            </div>
                            {student.unread > 0 && (
                              <Badge variant="destructive" className="rounded-full">
                                {student.unread}
                              </Badge>
                            )}
                          </CardContent>
                        </Card>
                      ))}

                    {filteredStudents.filter((s) => s.status === "online").length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">No students online</div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Chat Area */}
            <div className="md:col-span-2">
              {selectedStudent !== null ? (
                <Card className="h-[calc(100vh-12rem)] flex flex-col">
                  {/* Chat Header */}
                  <CardHeader className="py-4 px-6 flex flex-row items-center justify-between space-y-0 border-b">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={currentStudent?.avatar} alt={currentStudent?.name} />
                          <AvatarFallback>{currentStudent?.name?.substring(0, 2) || "ST"}</AvatarFallback>
                        </Avatar>
                        <span
                          className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(currentStudent?.status || "offline")}`}
                        ></span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{currentStudent?.name}</CardTitle>
                        <CardDescription>
                          {currentStudent?.university} • {currentStudent?.major}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Phone className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardHeader>

                  <div className="grid grid-cols-1 md:grid-cols-3 flex-1 overflow-hidden">
                    {/* Messages */}
                    <div className="md:col-span-2 overflow-y-auto p-6 space-y-4 border-r">
                      {selectedStudent !== null &&
                        conversations[selectedStudent] &&
                        conversations[selectedStudent].map((msg) => (
                          <div
                            key={msg.id}
                            className={`flex ${msg.sender === "employer" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[80%] px-4 py-2 rounded-lg ${
                                msg.sender === "employer" ? "bg-primary text-primary-foreground" : "bg-muted"
                              }`}
                            >
                              <p>{msg.text}</p>
                              <div className="flex items-center justify-end gap-1 mt-1">
                                <span className="text-xs opacity-70">{msg.time}</span>
                                {msg.sender === "employer" && (
                                  <span className="text-xs opacity-70">{msg.read ? "✓✓" : "✓"}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}

                      {isTyping && selectedStudent !== null && (
                        <div className="flex justify-start">
                          <div className="bg-muted px-4 py-2 rounded-lg">
                            <div className="flex space-x-1">
                              <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"></div>
                              <div
                                className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                              <div
                                className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"
                                style={{ animationDelay: "0.4s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {selectedStudent !== null &&
                        (!conversations[selectedStudent] || conversations[selectedStudent].length === 0) &&
                        !isTyping && (
                          <div className="h-full flex items-center justify-center">
                            <div className="text-center">
                              <h3 className="text-lg font-medium mb-2">Start a conversation</h3>
                              <p className="text-muted-foreground">
                                Send a message to {currentStudent?.name} to begin chatting
                              </p>
                            </div>
                          </div>
                        )}
                    </div>

                    {/* Student Profile */}
                    <div className="hidden md:block md:col-span-1 overflow-y-auto p-4 bg-muted/20">
                      {currentStudent && (
                        <>
                          <div className="text-center mb-4">
                            <Avatar className="h-20 w-20 mx-auto mb-2">
                              <AvatarImage src={currentStudent.avatar} alt={currentStudent.name} />
                              <AvatarFallback className="text-lg">{currentStudent.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <h3 className="font-bold text-lg">{currentStudent.name}</h3>
                            <div className="flex items-center justify-center gap-1 text-amber-500">
                              <Star className="h-4 w-4 fill-current" />
                              <Star className="h-4 w-4 fill-current" />
                              <Star className="h-4 w-4 fill-current" />
                              <Star className="h-4 w-4 fill-current" />
                              <StarHalf className="h-4 w-4 fill-current" />
                              <span className="ml-1 text-foreground">{currentStudent.rating}</span>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                                <GraduationCap className="h-4 w-4" /> Education
                              </h4>
                              <p className="text-sm">{currentStudent.university}</p>
                              <p className="text-sm">
                                {currentStudent.major}, {currentStudent.year}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                                <Briefcase className="h-4 w-4" /> Applied For
                              </h4>
                              <Badge variant="outline" className="font-normal">
                                {currentStudent.applied}
                              </Badge>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                                <User className="h-4 w-4" /> Skills
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {currentStudent.skills.map((skill) => (
                                  <Badge key={skill} variant="secondary" className="font-normal">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="pt-2">
                              <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
                                <FileText className="h-4 w-4" /> View Resume
                              </Button>
                            </div>

                            <div>
                              <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
                                <Calendar className="h-4 w-4" /> Schedule Interview
                              </Button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t">
                    <div className="mb-2">
                      <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a message template..." />
                        </SelectTrigger>
                        <SelectContent>
                          {messageTemplates.map((template, index) => (
                            <SelectItem key={index} value={template}>
                              {template}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Paperclip className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Image className="h-5 w-5" />
                      </Button>
                      <Input
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            sendMessage()
                          }
                        }}
                        className="flex-1"
                      />
                      <Button variant="ghost" size="icon">
                        <Smile className="h-5 w-5" />
                      </Button>
                      <Button onClick={sendMessage} disabled={!message.trim()}>
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="h-[calc(100vh-12rem)] flex items-center justify-center">
                  <div className="text-center p-6">
                    <h2 className="text-2xl font-bold mb-2">Welcome to the Employer Chat Platform</h2>
                    <p className="text-muted-foreground mb-6">
                      Connect with potential candidates and streamline your recruitment process
                    </p>
                    <div className="flex flex-col gap-4 items-center">
                      <p className="text-lg">Select a student from the list to start chatting</p>
                      <div className="flex gap-2 mt-2">
                        <span className="flex items-center gap-1">
                          <span className="h-3 w-3 rounded-full bg-green-500"></span> Online
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="h-3 w-3 rounded-full bg-yellow-500"></span> Away
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="h-3 w-3 rounded-full bg-gray-500"></span> Offline
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="bulk" className="m-0">
          <Card>
            <CardHeader>
              <CardTitle>Bulk Messaging</CardTitle>
              <CardDescription>Send the same message to multiple students at once</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Select Recipients</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {students.map((student) => (
                      <div key={student.id} className="flex items-start space-x-3">
                        <Checkbox
                          id={`student-${student.id}`}
                          checked={selectedStudents.includes(student.id)}
                          onCheckedChange={() => toggleStudentSelection(student.id)}
                        />
                        <div className="grid gap-1.5">
                          <label
                            htmlFor={`student-${student.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {student.name}
                          </label>
                          <p className="text-sm text-muted-foreground">
                            {student.university} • {student.applied}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Compose Message</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Message Template</label>
                      <Select onValueChange={(value) => setBulkMessage(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a message template..." />
                        </SelectTrigger>
                        <SelectContent>
                          {messageTemplates.map((template, index) => (
                            <SelectItem key={index} value={template}>
                              {template}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Message</label>
                      <Textarea
                        placeholder="Type your message here..."
                        className="min-h-[150px]"
                        value={bulkMessage}
                        onChange={(e) => setBulkMessage(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                {selectedStudents.length} recipient{selectedStudents.length !== 1 ? "s" : ""} selected
              </div>
              <Button onClick={sendBulkMessage} disabled={!bulkMessage.trim() || selectedStudents.length === 0}>
                Send to {selectedStudents.length} student{selectedStudents.length !== 1 ? "s" : ""}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

