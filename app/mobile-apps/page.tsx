import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  CheckCircle2,
  Smartphone,
  Bell,
  Search,
  Zap,
  Clock,
  MapPin,
  MessageSquare,
  Shield,
  Download,
} from "lucide-react"

export default function MobileAppsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-theme-purple via-theme-blue to-theme-teal py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/patterns/hero-pattern.svg')] opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 text-center md:text-left text-white">
                <Badge className="mb-4 bg-white/20 text-white border-white/20 backdrop-blur-sm">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Mobile Apps
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Job4Students in Your Pocket</h1>
                <p className="text-xl text-white/90 mb-8">
                  Download our mobile app and access job opportunities, apply to positions, and track your applications
                  on the go.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" className="bg-white text-theme-purple hover:bg-white/90">
                    <Link href="#download" className="flex items-center">
                      <Download className="mr-2 h-5 w-5" />
                      Download Now
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20">
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative w-64 h-[500px] md:w-72 md:h-[580px]">
                  <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-[40px] transform rotate-[-5deg]"></div>
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-theme-purple to-theme-blue rounded-[40px] transform rotate-[5deg]"></div>
                  <div className="relative w-full h-full bg-black rounded-[40px] border-[8px] border-black overflow-hidden shadow-xl">
                    <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-[32px] flex justify-center items-center">
                      <div className="w-20 h-4 bg-black rounded-b-xl"></div>
                    </div>
                    <div className="w-full h-full bg-white pt-6">
                      <img
                        src="/placeholder.svg?height=580&width=280"
                        alt="Job4Students Mobile App"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section id="features" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4 bg-theme-purple/10 text-theme-purple border-theme-purple/20">
                <Zap className="h-4 w-4 mr-2" />
                App Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need On The Go</h2>
              <p className="text-xl text-muted-foreground">
                Our mobile app brings all the powerful features of Job4Students to your smartphone, optimized for the
                mobile experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-theme-purple/5 to-theme-blue/5 border-theme-purple/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-theme-purple/10 flex items-center justify-center mb-6">
                    <Search className="h-6 w-6 text-theme-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Smart Job Search</h3>
                  <p className="text-muted-foreground">
                    Browse and filter job opportunities based on your preferences, skills, and location. Save your
                    favorite searches for quick access.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-theme-teal/5 to-theme-blue/5 border-theme-teal/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-theme-teal/10 flex items-center justify-center mb-6">
                    <Zap className="h-6 w-6 text-theme-teal" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">One-Tap Apply</h3>
                  <p className="text-muted-foreground">
                    Apply to jobs with a single tap using your pre-loaded profile and resume. Track your application
                    status in real-time.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-theme-amber/5 to-theme-purple/5 border-theme-amber/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-theme-amber/10 flex items-center justify-center mb-6">
                    <Bell className="h-6 w-6 text-theme-amber" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Instant Notifications</h3>
                  <p className="text-muted-foreground">
                    Receive real-time alerts for new job matches, application updates, and messages from employers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-theme-blue/5 to-theme-purple/5 border-theme-blue/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-theme-blue/10 flex items-center justify-center mb-6">
                    <MapPin className="h-6 w-6 text-theme-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Location-Based Jobs</h3>
                  <p className="text-muted-foreground">
                    Discover opportunities near your university or current location with our integrated map view.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-theme-purple/5 to-theme-teal/5 border-theme-purple/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-theme-purple/10 flex items-center justify-center mb-6">
                    <MessageSquare className="h-6 w-6 text-theme-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">In-App Messaging</h3>
                  <p className="text-muted-foreground">
                    Communicate directly with employers through our secure messaging system. Never miss an important
                    conversation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-theme-teal/5 to-theme-amber/5 border-theme-teal/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-theme-teal/10 flex items-center justify-center mb-6">
                    <Clock className="h-6 w-6 text-theme-teal" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Schedule Integration</h3>
                  <p className="text-muted-foreground">
                    Sync your class schedule to find jobs that perfectly fit around your academic commitments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* App Screenshots */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-theme-purple/5 via-theme-blue/5 to-theme-teal/5">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4 bg-theme-blue/10 text-theme-blue border-theme-blue/20">
                <Smartphone className="h-4 w-4 mr-2" />
                App Preview
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
              <p className="text-xl text-muted-foreground">
                Take a look at our intuitive and user-friendly mobile interface
              </p>
            </div>

            <Tabs defaultValue="ios" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="ios" className="text-lg py-3">
                  iOS App
                </TabsTrigger>
                <TabsTrigger value="android" className="text-lg py-3">
                  Android App
                </TabsTrigger>
              </TabsList>

              <TabsContent value="ios" className="flex justify-center">
                <div className="flex gap-4 overflow-x-auto pb-4 max-w-full">
                  {[1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-60 h-[500px] rounded-3xl overflow-hidden border-8 border-black relative shadow-xl"
                    >
                      <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-xl flex justify-center items-center">
                        <div className="w-20 h-4 bg-black rounded-b-xl"></div>
                      </div>
                      <img
                        src={`/placeholder.svg?height=500&width=240&text=iOS+Screen+${index}`}
                        alt={`iOS App Screenshot ${index}`}
                        className="w-full h-full object-cover pt-6"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="android" className="flex justify-center">
                <div className="flex gap-4 overflow-x-auto pb-4 max-w-full">
                  {[1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-60 h-[500px] rounded-3xl overflow-hidden border-8 border-black relative shadow-xl"
                    >
                      <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-xl flex justify-center items-center">
                        <div className="w-20 h-4 bg-black rounded-b-xl"></div>
                      </div>
                      <img
                        src={`/placeholder.svg?height=500&width=240&text=Android+Screen+${index}`}
                        alt={`Android App Screenshot ${index}`}
                        className="w-full h-full object-cover pt-6"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="bg-gradient-to-br from-theme-purple to-theme-blue rounded-3xl overflow-hidden">
              <div className="p-8 md:p-12 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="mb-4 bg-white/20 text-white border-white/20">
                      <Download className="h-4 w-4 mr-2" />
                      Download Now
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Job4Students on Your Device</h2>
                    <p className="text-xl text-white/90 mb-8">
                      Download our mobile app today and take your job search to the next level. Available for iOS and
                      Android devices.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-white mt-1" />
                        <p>Free to download and use</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-white mt-1" />
                        <p>Regular updates with new features</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-white mt-1" />
                        <p>Optimized for battery efficiency</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-white mt-1" />
                        <p>Secure and privacy-focused</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <Button size="lg" className="bg-black text-white hover:bg-black/80 h-16">
                        <div className="flex items-center">
                          <div className="mr-3 text-2xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-apple"
                            >
                              <path d="M12 20.94c1.5 0 2.75-.67 3.95-1.89 1.25-1.3 1.85-2.98 1.85-5.12 0-2.3-.7-4.03-2.15-5.2-1.2-1-2.6-1.5-4.17-1.5-1.8 0-3.22.7-4.27 2.1-1.13 1.5-1.67 3.3-1.67 5.4 0 1.5.42 2.98 1.25 4.42.83 1.46 1.9 2.2 3.21 2.2.8 0 1.5-.28 2.1-.85.57.6 1.35.9 2.32.9z" />
                              <path d="M10 2.5c.5 0 .94.15 1.3.45.36.3.6.65.74 1.05.13.4.2.75.2 1.05 0 .3-.08.65-.24 1.05-.16.4-.4.74-.74 1.05-.34.3-.76.45-1.26.45-.5 0-.94-.15-1.3-.45a2.02 2.02 0 0 1-.73-1.05c-.15-.4-.22-.75-.22-1.05 0-.3.08-.65.24-1.05.16-.4.4-.74.74-1.05.34-.3.76-.45 1.26-.45z" />
                            </svg>
                          </div>
                          <div className="text-left">
                            <div className="text-xs">Download on the</div>
                            <div className="text-xl font-semibold">App Store</div>
                          </div>
                        </div>
                      </Button>
                      <Button size="lg" className="bg-black text-white hover:bg-black/80 h-16">
                        <div className="flex items-center">
                          <div className="mr-3 text-2xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-play"
                            >
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                          </div>
                          <div className="text-left">
                            <div className="text-xs">GET IT ON</div>
                            <div className="text-xl font-semibold">Google Play</div>
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-64 h-64 bg-white/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                      <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-xl shadow-lg">
                            <div className="aspect-square relative">
                              <img
                                src="/placeholder.svg?height=150&width=150&text=QR+Code+iOS"
                                alt="iOS App QR Code"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-center text-sm font-medium text-gray-800 mt-2">Scan for iOS</p>
                          </div>
                          <div className="bg-white p-4 rounded-xl shadow-lg">
                            <div className="aspect-square relative">
                              <img
                                src="/placeholder.svg?height=150&width=150&text=QR+Code+Android"
                                alt="Android App QR Code"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-center text-sm font-medium text-gray-800 mt-2">Scan for Android</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

