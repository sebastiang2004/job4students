"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import {
  BookOpen,
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Code,
  Cog,
  Cpu,
  LineChart,
  Lightbulb,
  Palette,
  Sparkles,
  Users,
} from "lucide-react"

// Define quiz questions
const quizQuestions = [
  {
    id: 1,
    question: "What activities do you enjoy most?",
    options: [
      { id: "a", text: "Solving complex problems and puzzles", categories: ["tech", "data"] },
      { id: "b", text: "Creating visual designs and artwork", categories: ["design", "marketing"] },
      { id: "c", text: "Analyzing data and finding patterns", categories: ["data", "finance"] },
      { id: "d", text: "Communicating and working with people", categories: ["marketing", "hr"] },
    ],
  },
  {
    id: 2,
    question: "Which skills are you most confident in?",
    options: [
      { id: "a", text: "Technical and programming skills", categories: ["tech", "data"] },
      { id: "b", text: "Creative and artistic skills", categories: ["design", "marketing"] },
      { id: "c", text: "Analytical and mathematical skills", categories: ["data", "finance"] },
      { id: "d", text: "Communication and interpersonal skills", categories: ["marketing", "hr"] },
    ],
  },
  {
    id: 3,
    question: "What type of work environment do you prefer?",
    options: [
      { id: "a", text: "Fast-paced and innovative", categories: ["tech", "marketing"] },
      { id: "b", text: "Structured and organized", categories: ["finance", "hr"] },
      { id: "c", text: "Creative and flexible", categories: ["design", "marketing"] },
      { id: "d", text: "Collaborative and team-oriented", categories: ["hr", "marketing"] },
    ],
  },
  {
    id: 4,
    question: "What subjects do you enjoy studying the most?",
    options: [
      { id: "a", text: "Computer Science and Mathematics", categories: ["tech", "data"] },
      { id: "b", text: "Art, Design, and Communication", categories: ["design", "marketing"] },
      { id: "c", text: "Business, Economics, and Finance", categories: ["finance", "hr"] },
      { id: "d", text: "Psychology and Social Sciences", categories: ["hr", "marketing"] },
    ],
  },
  {
    id: 5,
    question: "What kind of projects excite you?",
    options: [
      { id: "a", text: "Building software or applications", categories: ["tech"] },
      { id: "b", text: "Creating visual content and designs", categories: ["design"] },
      { id: "c", text: "Analyzing trends and making predictions", categories: ["data", "finance"] },
      { id: "d", text: "Organizing events and managing people", categories: ["hr", "marketing"] },
    ],
  },
  {
    id: 6,
    question: "How do you approach problem-solving?",
    options: [
      { id: "a", text: "Logically and systematically", categories: ["tech", "data", "finance"] },
      { id: "b", text: "Creatively and intuitively", categories: ["design", "marketing"] },
      { id: "c", text: "Collaboratively with others", categories: ["hr", "marketing"] },
      { id: "d", text: "Analytically with research", categories: ["data", "finance"] },
    ],
  },
  {
    id: 7,
    question: "What's most important to you in a job?",
    options: [
      { id: "a", text: "Innovation and cutting-edge technology", categories: ["tech", "data"] },
      { id: "b", text: "Creative freedom and expression", categories: ["design", "marketing"] },
      { id: "c", text: "Stability and clear structure", categories: ["finance", "hr"] },
      { id: "d", text: "Making a positive impact on people", categories: ["hr", "marketing"] },
    ],
  },
]

// Define career categories with descriptions and icons
const careerCategories = {
  tech: {
    title: "Technology",
    description:
      "You're well-suited for roles in software development, web development, or IT support. Your logical thinking and problem-solving skills make you perfect for technical positions.",
    icon: <Code className="h-8 w-8 text-theme-purple" />,
    color: "bg-theme-purple/10 text-theme-purple",
    jobs: ["Software Developer", "Web Developer", "IT Support Specialist", "Mobile App Developer"],
  },
  data: {
    title: "Data Science",
    description:
      "Your analytical mindset and attention to detail make you ideal for roles in data analysis, machine learning, or business intelligence. You excel at finding patterns and insights in data.",
    icon: <BrainCircuit className="h-8 w-8 text-theme-blue" />,
    color: "bg-theme-blue/10 text-theme-blue",
    jobs: ["Data Analyst", "Machine Learning Engineer", "Business Intelligence Analyst", "Data Scientist"],
  },
  design: {
    title: "Design & Creative",
    description:
      "Your creative talents and visual thinking make you perfect for design roles. You have a good eye for aesthetics and enjoy creating engaging visual content.",
    icon: <Palette className="h-8 w-8 text-theme-rose" />,
    color: "bg-theme-rose/10 text-theme-rose",
    jobs: ["Graphic Designer", "UI/UX Designer", "Product Designer", "Visual Artist"],
  },
  marketing: {
    title: "Marketing & Communications",
    description:
      "Your communication skills and creative thinking make you well-suited for marketing roles. You understand how to connect with people and create compelling messages.",
    icon: <Lightbulb className="h-8 w-8 text-theme-amber" />,
    color: "bg-theme-amber/10 text-theme-amber",
    jobs: ["Marketing Assistant", "Social Media Coordinator", "Content Creator", "Communications Specialist"],
  },
  finance: {
    title: "Finance & Business",
    description:
      "Your analytical skills and attention to detail make you ideal for roles in finance and business. You excel at working with numbers and making strategic decisions.",
    icon: <LineChart className="h-8 w-8 text-theme-teal" />,
    color: "bg-theme-teal/10 text-theme-teal",
    jobs: ["Financial Analyst", "Accounting Assistant", "Business Analyst", "Finance Intern"],
  },
  hr: {
    title: "Human Resources & Management",
    description:
      "Your people skills and organizational abilities make you perfect for roles in HR and management. You enjoy working with others and helping teams succeed.",
    icon: <Users className="h-8 w-8 text-theme-blue" />,
    color: "bg-theme-blue/10 text-theme-blue",
    jobs: ["HR Assistant", "Recruitment Coordinator", "Office Manager", "Team Lead"],
  },
}

export default function CareerQuizPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [secondaryResult, setSecondaryResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showIntro, setShowIntro] = useState(true)

  // Calculate progress percentage
  const progress = (currentQuestion / quizQuestions.length) * 100

  // Handle option selection
  const handleOptionSelect = (categoryIds: string[]) => {
    const newAnswers = [...answers, ...categoryIds]
    setAnswers(newAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate results
      calculateResults(newAnswers)
    }
  }

  // Calculate quiz results
  const calculateResults = (allAnswers: string[]) => {
    setIsLoading(true)

    // Start progress animation
    let progressValue = 0
    const interval = setInterval(() => {
      progressValue += 2
      setLoadingProgress(progressValue)
      if (progressValue >= 100) {
        clearInterval(interval)

        // Count occurrences of each category
        const categoryCounts: Record<string, number> = {}
        allAnswers.forEach((category) => {
          categoryCounts[category] = (categoryCounts[category] || 0) + 1
        })

        // Find top two categories
        const sortedCategories = Object.entries(categoryCounts)
          .sort((a, b) => b[1] - a[1])
          .map((entry) => entry[0])

        setResult(sortedCategories[0])
        setSecondaryResult(sortedCategories[1])
        setShowResult(true)
        setIsLoading(false)
      }
    }, 30)
  }

  // Restart the quiz
  const restartQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setResult(null)
    setSecondaryResult(null)
    setLoadingProgress(0)
    setShowIntro(true)
  }

  // View matching jobs
  const viewMatchingJobs = () => {
    if (result) {
      // Redirect to jobs page with filter for the result category
      router.push(`/jobs?category=${result}`)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          {showIntro ? (
            <Card className="border-theme-purple/20">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl md:text-3xl lg:text-4xl flex items-center justify-center gap-2">
                  <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-theme-purple" />
                  Career Match Quiz
                </CardTitle>
                <CardDescription className="text-base md:text-lg">
                  Discover the perfect career path based on your skills and interests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <div className="bg-theme-purple/5 rounded-lg p-4 md:p-6">
                  <h3 className="font-medium text-lg md:text-xl mb-2 text-theme-purple">How it works</h3>
                  <p className="text-muted-foreground mb-4">
                    Answer a series of questions about your preferences, skills, and interests. Our AI-powered algorithm
                    will analyze your responses and suggest the best career paths for you.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="bg-theme-purple/10 p-3 rounded-full mb-2">
                        <BookOpen className="h-5 w-5 text-theme-purple" />
                      </div>
                      <h4 className="font-medium">7 Questions</h4>
                      <p className="text-sm text-muted-foreground">
                        Quick and insightful questions to understand your preferences
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="bg-theme-purple/10 p-3 rounded-full mb-2">
                        <Cpu className="h-5 w-5 text-theme-purple" />
                      </div>
                      <h4 className="font-medium">AI Analysis</h4>
                      <p className="text-sm text-muted-foreground">
                        Advanced algorithm to match your profile with ideal careers
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="bg-theme-purple/10 p-3 rounded-full mb-2">
                        <Briefcase className="h-5 w-5 text-theme-purple" />
                      </div>
                      <h4 className="font-medium">Job Matches</h4>
                      <p className="text-sm text-muted-foreground">
                        Get personalized job recommendations based on your results
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <p className="text-center text-muted-foreground">
                    Ready to discover your ideal career path? Take just 2 minutes to complete the quiz!
                  </p>
                  <Button
                    size="lg"
                    className="mt-4 px-8 bg-theme-purple hover:bg-theme-purple/90"
                    onClick={() => setShowIntro(false)}
                  >
                    Start Quiz
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : showResult ? (
            <Card className="border-theme-purple/20">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl md:text-3xl lg:text-4xl">Your Career Match Results</CardTitle>
                <CardDescription className="text-base md:text-lg">
                  Based on your responses, we've identified your ideal career path
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                {result && (
                  <div className="space-y-6">
                    <div className="flex flex-col items-center">
                      <div className={`p-4 rounded-full ${careerCategories[result].color} mb-4`}>
                        {careerCategories[result].icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{careerCategories[result].title}</h2>
                      <p className="text-center text-muted-foreground max-w-2xl">
                        {careerCategories[result].description}
                      </p>
                    </div>

                    <div className="bg-theme-purple/5 rounded-lg p-4 md:p-6">
                      <h3 className="font-medium text-lg mb-4">Recommended Jobs for You</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {careerCategories[result].jobs.map((job, index) => (
                          <div key={index} className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                            <CheckCircle2 className="h-5 w-5 text-theme-purple mr-2 flex-shrink-0" />
                            <span>{job}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {secondaryResult && (
                      <div className="border-t pt-6">
                        <h3 className="font-medium text-lg mb-2">You might also be interested in:</h3>
                        <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <div className="mr-4">{careerCategories[secondaryResult].icon}</div>
                          <div>
                            <h4 className="font-medium">{careerCategories[secondaryResult].title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {careerCategories[secondaryResult].jobs.slice(0, 2).join(", ")}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" onClick={restartQuiz}>
                  Retake Quiz
                </Button>
                <Button onClick={viewMatchingJobs} className="bg-theme-purple hover:bg-theme-purple/90">
                  View Matching Jobs
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ) : isLoading ? (
            <Card className="border-theme-purple/20">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl md:text-3xl">Analyzing Your Responses</CardTitle>
                <CardDescription>Our AI is finding the perfect career match for you...</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 py-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-6">
                    <div className="absolute inset-0 rounded-full border-4 border-theme-purple/20"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-theme-purple border-t-transparent animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Cog className="h-12 w-12 text-theme-purple animate-pulse" />
                    </div>
                  </div>
                  <Progress value={loadingProgress} className="w-full max-w-md h-2 mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {loadingProgress < 30 && "Analyzing your skills and preferences..."}
                    {loadingProgress >= 30 && loadingProgress < 60 && "Matching with potential career paths..."}
                    {loadingProgress >= 60 && loadingProgress < 90 && "Finding the best job opportunities..."}
                    {loadingProgress >= 90 && "Finalizing your personalized results..."}
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-theme-purple/20">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="text-theme-purple">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} className="h-2 mb-4" />
                <CardTitle className="text-xl md:text-2xl">{quizQuestions[currentQuestion].question}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid gap-3">
                  {quizQuestions[currentQuestion].options.map((option) => (
                    <Button
                      key={option.id}
                      variant="outline"
                      className="justify-start h-auto py-4 px-4 text-left hover:bg-theme-purple/5 hover:border-theme-purple/30"
                      onClick={() => handleOptionSelect(option.categories)}
                    >
                      <div className="flex items-start">
                        <div className="bg-theme-purple/10 text-theme-purple rounded-full p-2 mr-3 flex-shrink-0">
                          {option.id.toUpperCase()}
                        </div>
                        <span>{option.text}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="ghost"
                  onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
                  disabled={currentQuestion === 0}
                >
                  Back
                </Button>
                <Button variant="ghost" onClick={restartQuiz}>
                  Restart
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

