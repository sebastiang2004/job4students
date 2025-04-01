"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Send, Paperclip, Image, Smile, MoreHorizontal, Phone, Video, ArrowLeft } from "lucide-react"

// Mock company data
const companies = [
  { id: 1, name: "Assist Software", logo: "/placeholder.svg?height=40&width=40", status: "online", unread: 2 },
  { id: 2, name: "Centric IT", logo: "/placeholder.svg?height=40&width=40", status: "online", unread: 0 },
  { id: 3, name: "Atos Romania", logo: "/placeholder.svg?height=40&width=40", status: "away", unread: 0 },
  { id: 4, name: "Endava", logo: "/placeholder.svg?height=40&width=40", status: "offline", unread: 0 },
  { id: 5, name: "Fortech", logo: "/placeholder.svg?height=40&width=40", status: "online", unread: 3 },
  { id: 6, name: "Bitdefender", logo: "/placeholder.svg?height=40&width=40", status: "offline", unread: 0 },
]

// Mock conversation data
const mockConversations = {
  1: [
    {
      id: 1,
      sender: "company",
      text: "Hello! Thanks for your interest in our internship program at Assist Software.",
      time: "10:30 AM",
      read: true,
    },
    {
      id: 2,
      sender: "user",
      text: "Hi! I'm a student at University of Stefan cel Mare and I'm interested in the Frontend Developer position. Could you tell me more about the tech stack you use?",
      time: "10:32 AM",
      read: true,
    },
    {
      id: 3,
      sender: "company",
      text: "Of course! We primarily use React, TypeScript, and Next.js for our frontend development. Are you familiar with these technologies?",
      time: "10:35 AM",
      read: true,
    },
    {
      id: 4,
      sender: "user",
      text: "Yes, I've been working with React and TypeScript in my university projects at Stefan cel Mare. I'm also learning Next.js right now.",
      time: "10:38 AM",
      read: true,
    },
    {
      id: 5,
      sender: "company",
      text: "That's great to hear! We'd love to see some of your projects. Could you share your portfolio or GitHub?",
      time: "10:40 AM",
      read: false,
    },
    {
      id: 6,
      sender: "company",
      text: "Also, are you available for an initial interview next week?",
      time: "10:41 AM",
      read: false,
    },
  ],
  5: [
    {
      id: 1,
      sender: "company",
      text: "Hello! We noticed your profile from University of Stefan cel Mare and were impressed with your AI coursework.",
      time: "Yesterday",
      read: true,
    },
    {
      id: 2,
      sender: "company",
      text: "We have an opening for a Machine Learning intern at Fortech. Would you be interested?",
      time: "Yesterday",
      read: true,
    },
    {
      id: 3,
      sender: "user",
      text: "Hi! Yes, I would definitely be interested in learning more about the position. I'm currently studying at Stefan cel Mare University.",
      time: "Yesterday",
      read: true,
    },
    {
      id: 4,
      sender: "company",
      text: "Great! The position involves working with our data science team on developing predictive models for customer behavior.",
      time: "9:15 AM",
      read: false,
    },
    {
      id: 5,
      sender: "company",
      text: "Experience with Python, TensorFlow, or PyTorch would be beneficial. Do you have experience with any of these from your studies at Stefan cel Mare?",
      time: "9:16 AM",
      read: false,
    },
    {
      id: 6,
      sender: "company",
      text: "We also offer a competitive stipend and potential for full-time employment after graduation.",
      time: "9:17 AM",
      read: false,
    },
  ],
}

export default function ChatPlatform() {
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null)
  const [conversations, setConversations] = useState(mockConversations)
  const [message, setMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  // Filter companies based on search term
  const filteredCompanies = companies.filter((company) => company.name.toLowerCase().includes(searchTerm.toLowerCase()))

  // Handle company selection
  const selectCompany = (id: number) => {
    setSelectedCompany(id)

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
    if (!message.trim() || !selectedCompany) return

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      read: true,
    }

    setConversations({
      ...conversations,
      [selectedCompany]: [...(conversations[selectedCompany] || []), newMessage],
    })

    setMessage("")

    // Simulate company typing and response
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)

      const responses = [
        "Thanks for your message! I'll get back to you shortly.",
        "That's interesting! Can you tell me more?",
        "Great question! Let me check with the team and get back to you.",
        "We'd be happy to discuss this further in a call. Are you available tomorrow?",
        "Thanks for sharing. Your experience sounds relevant to what we're looking for.",
      ]

      const responseMessage = {
        id: Date.now() + 1,
        sender: "company",
        text: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        read: false,
      }

      setConversations({
        ...conversations,
        [selectedCompany]: [...(conversations[selectedCompany] || []), responseMessage],
      })
    }, 3000)
  }

  // Get the selected company data
  const currentCompany = companies.find((c) => c.id === selectedCompany)

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Chat Platform</h1>
        <Button variant="outline" onClick={() => (window.location.href = "/")} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Website
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Company List */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search companies..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
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
                {filteredCompanies.map((company) => (
                  <Card
                    key={company.id}
                    className={`cursor-pointer hover:bg-accent transition-colors ${selectedCompany === company.id ? "border-primary" : ""}`}
                    onClick={() => selectCompany(company.id)}
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={company.logo} alt={company.name} />
                            <AvatarFallback>{company.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <span
                            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(company.status)}`}
                          ></span>
                        </div>
                        <div>
                          <h3 className="font-medium">{company.name}</h3>
                          <p className="text-sm text-muted-foreground capitalize">{company.status}</p>
                        </div>
                      </div>
                      {company.unread > 0 && (
                        <Badge variant="destructive" className="rounded-full">
                          {company.unread}
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}

                {filteredCompanies.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    No companies found matching "{searchTerm}"
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="unread" className="m-0">
              <div className="space-y-2">
                {filteredCompanies
                  .filter((c) => c.unread > 0)
                  .map((company) => (
                    <Card
                      key={company.id}
                      className={`cursor-pointer hover:bg-accent transition-colors ${selectedCompany === company.id ? "border-primary" : ""}`}
                      onClick={() => selectCompany(company.id)}
                    >
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Avatar>
                              <AvatarImage src={company.logo} alt={company.name} />
                              <AvatarFallback>{company.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span
                              className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(company.status)}`}
                            ></span>
                          </div>
                          <div>
                            <h3 className="font-medium">{company.name}</h3>
                            <p className="text-sm text-muted-foreground capitalize">{company.status}</p>
                          </div>
                        </div>
                        <Badge variant="destructive" className="rounded-full">
                          {company.unread}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}

                {filteredCompanies.filter((c) => c.unread > 0).length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">No unread messages</div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="online" className="m-0">
              <div className="space-y-2">
                {filteredCompanies
                  .filter((c) => c.status === "online")
                  .map((company) => (
                    <Card
                      key={company.id}
                      className={`cursor-pointer hover:bg-accent transition-colors ${selectedCompany === company.id ? "border-primary" : ""}`}
                      onClick={() => selectCompany(company.id)}
                    >
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Avatar>
                              <AvatarImage src={company.logo} alt={company.name} />
                              <AvatarFallback>{company.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-green-500"></span>
                          </div>
                          <div>
                            <h3 className="font-medium">{company.name}</h3>
                            <p className="text-sm text-muted-foreground">Online</p>
                          </div>
                        </div>
                        {company.unread > 0 && (
                          <Badge variant="destructive" className="rounded-full">
                            {company.unread}
                          </Badge>
                        )}
                      </CardContent>
                    </Card>
                  ))}

                {filteredCompanies.filter((c) => c.status === "online").length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">No companies online</div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Chat Area */}
        <div className="md:col-span-2">
          {selectedCompany ? (
            <Card className="h-[calc(100vh-12rem)] flex flex-col">
              {/* Chat Header */}
              <CardHeader className="py-4 px-6 flex flex-row items-center justify-between space-y-0 border-b">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={currentCompany?.logo} alt={currentCompany?.name} />
                      <AvatarFallback>{currentCompany?.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span
                      className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(currentCompany?.status || "offline")}`}
                    ></span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{currentCompany?.name}</CardTitle>
                    <p className="text-sm text-muted-foreground capitalize">{currentCompany?.status}</p>
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

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {conversations[selectedCompany]?.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-xs opacity-70">{msg.time}</span>
                        {msg.sender === "user" && <span className="text-xs opacity-70">{msg.read ? "✓✓" : "✓"}</span>}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && selectedCompany && (
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

                {!conversations[selectedCompany]?.length && !isTyping && (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-lg font-medium mb-2">Start a conversation</h3>
                      <p className="text-muted-foreground">
                        Send a message to {currentCompany?.name} to begin chatting
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
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
                <h2 className="text-2xl font-bold mb-2">Welcome to the Chat Platform</h2>
                <p className="text-muted-foreground mb-6">
                  Connect with companies and discuss job opportunities in real-time
                </p>
                <div className="flex flex-col gap-4 items-center">
                  <p className="text-lg">Select a company from the list to start chatting</p>
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
    </div>
  )
}

