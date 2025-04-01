"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

export default function AboutTeamPage() {
  const statusOptions = [
    { label: "Online", color: "bg-green-500" },
    { label: "Busy", color: "bg-red-500" },
    { label: "Away", color: "bg-yellow-500" },
    { label: "Disturbed", color: "bg-purple-500" },
    { label: "Debugging", color: "bg-blue-500" },
    { label: "In a meeting", color: "bg-orange-500" },
    { label: "Caffeinating", color: "bg-amber-500" },
  ]

  const studentEngineeringJokes = [
    "Engineering students don't graduate, they just stop taking classes when they get a job offer.",
    "What's the difference between a university student and a pizza? A pizza can feed a family of four.",
    "Engineering student's diet: coffee, instant noodles, and pure anxiety.",
    "Sleep, social life, good grades. Engineering students can only pick two.",
    "University engineering students don't actually sleep, they just periodically check their eyelids for leaks.",
  ]

  // Cat meme images array
  const catMemes = [
    "/images/cat-meme-1.png",
    "/images/cat-meme-2.png",
    "/images/cat-meme-3.png",
    "/images/cat-meme-4.png",
    "/images/cat-meme-5.png",
    "/images/cat-meme-6.png",
    "/images/cat-meme-7.png",
    "/images/cat-meme-8.png",
    "/images/cat-meme-9.png",
    "/images/cat-meme-10.png",
    "/images/cat-meme-11.png",
    "/images/cat-meme-12.png",
    "/images/cat-meme-13.png",
    "/images/cat-meme-14.png",
    "/images/cat-meme-15.png",
  ]

  const [teamStatuses, setTeamStatuses] = useState([])
  const [selectedJoke, setSelectedJoke] = useState("")
  const [selectedCatMeme, setSelectedCatMeme] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    // Randomly select statuses for team members
    const statuses = Array(3)
      .fill(null)
      .map(() => {
        const randomIndex = Math.floor(Math.random() * statusOptions.length)
        return statusOptions[randomIndex]
      })
    setTeamStatuses(statuses)

    // Randomly select a student engineering joke
    const jokeIndex = Math.floor(Math.random() * studentEngineeringJokes.length)
    setSelectedJoke(studentEngineeringJokes[jokeIndex])
  }, [])

  // Function to select a random cat meme when the label is clicked
  const selectRandomCatMeme = () => {
    const randomIndex = Math.floor(Math.random() * catMemes.length)
    setSelectedCatMeme(catMemes[randomIndex])
    setIsDialogOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-3 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  JA Romania - About Team 4
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Meet the talented students behind Job4Students
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl space-y-16 py-8 text-center">
              {/* Team Introduction */}
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">Our Team</h2>
                <p className="text-gray-500 dark:text-gray-300 text-center mx-auto max-w-3xl">
                  We are a group of passionate students from the University of Stefan Cel Mare from Suceava, working
                  together to create an innovative platform that connects students with job opportunities across
                  Romania.
                </p>
              </div>

              {/* Team Members */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-auto max-w-4xl">
                {[
                  {
                    name: "Gabriel-Sebastian Gurzun",
                    role: "Team Leader & Developer",
                    description:
                      "Passionate about web development and entrepreneurship, Gabriel led the technical implementation of the platform.",
                    initials: "GG",
                    extraInfo: null,
                  },
                  {
                    name: "Alesia Sara Maftean",
                    role: "Marketing & Design",
                    description:
                      "With a creative eye for design and marketing strategy, Alesia helped shape the user experience and brand identity.",
                    initials: "AM",
                    extraInfo: [
                      { type: "cats", text: "Cat lover 🐱" },
                      { type: "hired", text: "She hired me for a pack of cigarettes" },
                    ],
                  },
                  {
                    name: "Emilia Sfințițchi",
                    role: "Research & Content",
                    description:
                      "Emilia conducted market research and developed content strategy to ensure the platform meets real student needs.",
                    initials: "ES",
                    extraInfo: null,
                  },
                ].map((member, index) => (
                  <Card key={member.name} className="overflow-hidden w-full">
                    <div className="p-6 text-center">
                      <div className="relative">
                        <Avatar className="h-24 w-24 mx-auto mb-4">
                          <AvatarImage src="/placeholder.svg?height=96&width=96" alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        {teamStatuses[index] && (
                          <div
                            className={`absolute bottom-3 right-1/3 w-4 h-4 rounded-full ${teamStatuses[index].color} border-2 border-white dark:border-gray-800`}
                          >
                            <span className="sr-only">{teamStatuses[index].label}</span>
                          </div>
                        )}
                      </div>
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      {teamStatuses[index] && (
                        <Badge variant="outline" className="mt-2">
                          {teamStatuses[index].label}
                        </Badge>
                      )}
                      <p className="mt-4 text-sm">{member.description}</p>

                      {Array.isArray(member.extraInfo) ? (
                        <div className="mt-3 flex flex-col gap-2">
                          {member.extraInfo.map((info, i) => (
                            <div key={i}>
                              {info.type === "cats" ? (
                                <div
                                  onClick={selectRandomCatMeme}
                                  className="text-xs inline-flex items-center gap-1 py-1 px-2 rounded text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                >
                                  <span>{info.text}</span>
                                </div>
                              ) : (
                                <div className="text-xs inline-flex items-center gap-1 py-1 px-2 rounded text-amber-700 dark:text-amber-100 bg-amber-100 dark:bg-amber-900/30">
                                  <span>{info.text}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        member.extraInfo?.type === "cats" && (
                          <div className="mt-3 text-xs inline-flex items-center gap-1 text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 py-1 px-2 rounded">
                            <span>{member.extraInfo.text}</span>
                          </div>
                        )
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Cat Meme Dialog */}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-md bg-transparent border-none shadow-none">
                  <div className="flex justify-center items-center">
                    {selectedCatMeme && (
                      <Image
                        src={selectedCatMeme || "/placeholder.svg"}
                        alt="Cat meme"
                        width={300}
                        height={300}
                        className="max-w-full h-auto"
                      />
                    )}
                  </div>
                </DialogContent>
              </Dialog>

              {/* Programmer Joke */}
              <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
                <p className="text-sm italic">"{selectedJoke}"</p>
                <p className="text-xs text-muted-foreground mt-1">- Tired Engineering Student Wisdom</p>
              </div>

              {/* Professor Coordinator */}
              <div className="text-center space-y-4 pt-8 flex flex-col items-center">
                <h2 className="text-2xl font-bold">Professor Coordinator</h2>
                <Card className="overflow-hidden w-full max-w-md">
                  <div className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Ovidiu GHIUTA" />
                      <AvatarFallback>OG</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold">Ovidiu GHIUTA</h3>
                    <p className="text-sm text-muted-foreground">Professor Coordinator</p>
                    <p className="mt-4 text-sm">
                      We would like to express our sincere gratitude to Professor Ovidiu GHIUTA for his guidance,
                      mentorship, and support throughout the development of this project. His expertise and
                      encouragement have been invaluable to our team's success.
                    </p>
                  </div>
                </Card>
              </div>

              {/* University */}
              <div className="text-center space-y-4 pt-8 flex flex-col items-center">
                <h2 className="text-2xl font-bold">Our University</h2>
                <p className="text-gray-500 dark:text-gray-300 text-center mx-auto max-w-3xl">
                  We are proud students of the University of Stefan Cel Mare from Suceava, where we've gained the
                  knowledge and skills that made this project possible.
                </p>
                <div className="flex justify-center mt-6">
                  <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 rounded-lg p-8 inline-block shadow-lg">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">University of Stefan Cel Mare</h3>
                    <div className="text-xl text-white/90 font-medium">Suceava, Romania</div>
                    <div className="mt-3 w-24 h-1 bg-white mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Message to JA Romania */}
              <div className="bg-primary/5 rounded-lg p-8 text-center space-y-4 mt-12 mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold">Our Gratitude to JA Romania</h2>
                <p className="text-gray-500 dark:text-gray-300 text-center mx-auto max-w-3xl">
                  We would like to express our sincere gratitude to JA Romania for creating this wonderful competition
                  that has allowed us to develop our entrepreneurial skills and bring our ideas to life. The guidance,
                  resources, and opportunities provided have been invaluable to our growth as young entrepreneurs.
                </p>
                <p className="text-gray-500 dark:text-gray-300 text-center mx-auto max-w-3xl">
                  This competition has not only challenged us to think creatively and work collaboratively but has also
                  given us a platform to make a real impact on the student community in Romania. We are honored to be
                  part of this initiative and committed to continuing our journey of innovation and social
                  entrepreneurship.
                </p>
                <p className="font-medium mt-4">
                  Thank you for believing in the potential of young entrepreneurs and for your dedication to fostering
                  the next generation of business leaders.
                </p>
              </div>

              {/* Project Description */}
              <div className="text-center space-y-4 pt-8">
                <h2 className="text-2xl font-bold">About Job4Students</h2>
                <p className="text-gray-500 dark:text-gray-300 text-center mx-auto max-w-3xl">
                  Job4Students is a specialized platform designed to connect Romanian students with part-time jobs,
                  internships, and entry-level positions that accommodate their academic schedules. Our mission is to
                  help students gain valuable work experience while studying and to provide employers with access to a
                  pool of talented, motivated young professionals.
                </p>
                <p className="text-gray-500 dark:text-gray-300 text-center mx-auto max-w-3xl">
                  The platform features tailored job listings, university partnerships, and tools that make the job
                  search and application process simple and efficient for students. For employers, we offer targeted
                  recruitment solutions to find the perfect candidates for their specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

