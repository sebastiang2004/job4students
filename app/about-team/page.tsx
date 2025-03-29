import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

export default function AboutTeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
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
                <p className="text-gray-500 dark:text-gray-400 text-center mx-auto max-w-3xl">
                  We are a group of passionate students from the University of Stefan Cel Mare from Suceava, working
                  together to create an innovative platform that connects students with job opportunities across
                  Romania.
                </p>
              </div>

              {/* Team Members */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
                <Card className="overflow-hidden w-full">
                  <div className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Gabriel-Sebastian Gurzun" />
                      <AvatarFallback>GG</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold">Gabriel-Sebastian Gurzun</h3>
                    <p className="text-sm text-muted-foreground">Team Leader & Developer</p>
                    <p className="mt-4 text-sm">
                      Passionate about web development and entrepreneurship, Gabriel led the technical implementation of
                      the platform.
                    </p>
                  </div>
                </Card>

                <Card className="overflow-hidden w-full">
                  <div className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Alesia Sara Maftean" />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold">Alesia Sara Maftean</h3>
                    <p className="text-sm text-muted-foreground">Marketing & Design</p>
                    <p className="mt-4 text-sm">
                      With a creative eye for design and marketing strategy, Alesia helped shape the user experience and
                      brand identity.
                    </p>
                  </div>
                </Card>

                <Card className="overflow-hidden w-full">
                  <div className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Emilia Sfintichi" />
                      <AvatarFallback>ES</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold">Emilia Sfintichi</h3>
                    <p className="text-sm text-muted-foreground">Research & Content</p>
                    <p className="mt-4 text-sm">
                      Emilia conducted market research and developed content strategy to ensure the platform meets real
                      student needs.
                    </p>
                  </div>
                </Card>

                <Card className="overflow-hidden w-full">
                  <div className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Andi-Andrei Ciubotariu" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold">Andi-Andrei Ciubotariu</h3>
                    <p className="text-sm text-muted-foreground">Business Strategy</p>
                    <p className="mt-4 text-sm">
                      Andi developed the business model and financial strategy, ensuring the platform's sustainability
                      and growth potential.
                    </p>
                  </div>
                </Card>
              </div>

              {/* University */}
              <div className="text-center space-y-4 pt-8 flex flex-col items-center">
                <h2 className="text-2xl font-bold">Our University</h2>
                <p className="text-gray-500 dark:text-gray-400 text-center mx-auto max-w-3xl">
                  We are proud students of the University of Stefan Cel Mare from Suceava, where we've gained the
                  knowledge and skills that made this project possible.
                </p>
                <div className="flex justify-center mt-6">
                  <div className="bg-muted rounded-lg p-8 inline-block">
                    <div className="text-4xl font-bold">USV</div>
                    <div className="text-sm text-muted-foreground mt-2">University of Stefan Cel Mare</div>
                    <div className="text-sm text-muted-foreground">Suceava, Romania</div>
                  </div>
                </div>
              </div>

              {/* Message to JA Romania */}
              <div className="bg-primary/5 rounded-lg p-8 text-center space-y-4 mt-12 mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold">Our Gratitude to JA Romania</h2>
                <p className="text-gray-500 dark:text-gray-400 text-center mx-auto max-w-3xl">
                  We would like to express our sincere gratitude to JA Romania for creating this wonderful competition
                  that has allowed us to develop our entrepreneurial skills and bring our ideas to life. The guidance,
                  resources, and opportunities provided have been invaluable to our growth as young entrepreneurs.
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-center mx-auto max-w-3xl">
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
                <p className="text-gray-500 dark:text-gray-400 text-center mx-auto max-w-3xl">
                  Job4Students is a specialized platform designed to connect Romanian students with part-time jobs,
                  internships, and entry-level positions that accommodate their academic schedules. Our mission is to
                  help students gain valuable work experience while studying and to provide employers with access to a
                  pool of talented, motivated young professionals.
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-center mx-auto max-w-3xl">
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

