import { Layers, Database, Globe, Server, Shield, Smartphone, Cloud, Cpu, ArrowRight, ExternalLink } from "lucide-react"

export default function ArchitecturePage() {
  return (
    <div className="container py-8 px-4 max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Application Architecture</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          High-level architecture overview of the Job4Students platform, showing key components, services, and their
          interactions.
        </p>
      </div>

      {/* Architecture Overview */}
      <div className="mb-12 bg-card p-6 rounded-lg border shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="h-6 w-6 text-theme-purple" />
          <h2 className="text-2xl font-bold">Architecture Overview</h2>
        </div>
        <p className="mb-6">
          Job4Students is built as a modern web application using a layered architecture approach with Next.js as the
          primary framework. The architecture follows best practices for scalability, maintainability, and security.
        </p>

        {/* Architecture Diagram */}
        <div className="bg-background p-4 sm:p-6 rounded-lg border mb-8 overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Client Layer */}
            <div className="flex justify-center mb-8">
              <div className="flex gap-6">
                <div className="border rounded-md p-4 bg-blue-50 dark:bg-blue-950 shadow-sm w-48 text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <h3 className="font-bold">Web Client</h3>
                  <p className="text-xs mt-1">Browser-based UI</p>
                </div>
                <div className="border rounded-md p-4 bg-blue-50 dark:bg-blue-950 shadow-sm w-48 text-center">
                  <Smartphone className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <h3 className="font-bold">Mobile Client</h3>
                  <p className="text-xs mt-1">Progressive Web App</p>
                </div>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center mb-8">
              <ArrowRight className="h-8 w-8 rotate-90 text-gray-400" />
            </div>

            {/* Frontend Layer */}
            <div className="flex justify-center mb-8">
              <div className="border rounded-md p-4 bg-purple-50 dark:bg-purple-950 shadow-sm w-full max-w-3xl">
                <h3 className="font-bold text-center mb-4 text-theme-purple">Frontend Layer</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Next.js App Router</h4>
                    <p className="text-xs mt-1">Server & Client Components</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">React Components</h4>
                    <p className="text-xs mt-1">UI Building Blocks</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Tailwind CSS</h4>
                    <p className="text-xs mt-1">Styling Framework</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">ShadCN UI</h4>
                    <p className="text-xs mt-1">Component Library</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">State Management</h4>
                    <p className="text-xs mt-1">React Context & Hooks</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Form Handling</h4>
                    <p className="text-xs mt-1">React Hook Form</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center mb-8">
              <ArrowRight className="h-8 w-8 rotate-90 text-gray-400" />
            </div>

            {/* Backend Layer */}
            <div className="flex justify-center mb-8">
              <div className="border rounded-md p-4 bg-green-50 dark:bg-green-950 shadow-sm w-full max-w-3xl">
                <h3 className="font-bold text-center mb-4 text-green-700 dark:text-green-400">Backend Layer</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Next.js API Routes</h4>
                    <p className="text-xs mt-1">RESTful Endpoints</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Server Actions</h4>
                    <p className="text-xs mt-1">Form Submissions</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Authentication</h4>
                    <p className="text-xs mt-1">NextAuth.js</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Business Logic</h4>
                    <p className="text-xs mt-1">Service Layer</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Data Validation</h4>
                    <p className="text-xs mt-1">Zod Schema</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Error Handling</h4>
                    <p className="text-xs mt-1">Centralized System</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center mb-8">
              <ArrowRight className="h-8 w-8 rotate-90 text-gray-400" />
            </div>

            {/* Data Layer */}
            <div className="flex justify-center mb-8">
              <div className="border rounded-md p-4 bg-amber-50 dark:bg-amber-950 shadow-sm w-full max-w-3xl">
                <h3 className="font-bold text-center mb-4 text-amber-700 dark:text-amber-400">Data Layer</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Prisma ORM</h4>
                    <p className="text-xs mt-1">Database Access</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">PostgreSQL</h4>
                    <p className="text-xs mt-1">Primary Database</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Redis</h4>
                    <p className="text-xs mt-1">Caching & Sessions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* External Services */}
            <div className="flex justify-center">
              <div className="border rounded-md p-4 bg-indigo-50 dark:bg-indigo-950 shadow-sm w-full max-w-3xl">
                <h3 className="font-bold text-center mb-4 text-indigo-700 dark:text-indigo-400">External Services</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Email Service</h4>
                    <p className="text-xs mt-1">Notifications</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Storage Service</h4>
                    <p className="text-xs mt-1">File Uploads</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Analytics</h4>
                    <p className="text-xs mt-1">Usage Tracking</p>
                  </div>
                  <div className="border rounded-md p-3 bg-white dark:bg-gray-800 text-center">
                    <h4 className="font-semibold text-sm">Payment Gateway</h4>
                    <p className="text-xs mt-1">Subscription Handling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Component Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-bold">Frontend Architecture</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full"></div>
              <div>
                <span className="font-semibold">Next.js App Router:</span> Provides server-side rendering, static site
                generation, and client-side navigation.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full"></div>
              <div>
                <span className="font-semibold">React Server Components:</span> Reduce client-side JavaScript and
                improve performance.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full"></div>
              <div>
                <span className="font-semibold">Tailwind CSS:</span> Utility-first CSS framework for rapid UI
                development.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full"></div>
              <div>
                <span className="font-semibold">ShadCN UI:</span> Accessible and customizable component library.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full"></div>
              <div>
                <span className="font-semibold">Progressive Web App:</span> Offline capabilities and mobile-friendly
                experience.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Server className="h-5 w-5 text-green-600" />
            <h2 className="text-xl font-bold">Backend Architecture</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-green-600 rounded-full"></div>
              <div>
                <span className="font-semibold">API Routes:</span> Serverless functions for handling API requests.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-green-600 rounded-full"></div>
              <div>
                <span className="font-semibold">Server Actions:</span> Direct server-side mutations from client
                components.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-green-600 rounded-full"></div>
              <div>
                <span className="font-semibold">Service Layer:</span> Encapsulates business logic and data access.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-green-600 rounded-full"></div>
              <div>
                <span className="font-semibold">NextAuth.js:</span> Authentication system with multiple providers.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-green-600 rounded-full"></div>
              <div>
                <span className="font-semibold">Middleware:</span> Request processing for authentication, logging, and
                more.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Database className="h-5 w-5 text-amber-600" />
            <h2 className="text-xl font-bold">Data Architecture</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-amber-600 rounded-full"></div>
              <div>
                <span className="font-semibold">Prisma ORM:</span> Type-safe database client with migrations and schema
                management.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-amber-600 rounded-full"></div>
              <div>
                <span className="font-semibold">PostgreSQL:</span> Relational database for structured data storage.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-amber-600 rounded-full"></div>
              <div>
                <span className="font-semibold">Redis:</span> In-memory data store for caching and session management.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-amber-600 rounded-full"></div>
              <div>
                <span className="font-semibold">Data Models:</span> Structured according to domain-driven design
                principles.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-amber-600 rounded-full"></div>
              <div>
                <span className="font-semibold">Connection Pooling:</span> Efficient database connection management.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-red-600" />
            <h2 className="text-xl font-bold">Security Architecture</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-red-600 rounded-full"></div>
              <div>
                <span className="font-semibold">Authentication:</span> Secure user authentication with JWT tokens.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-red-600 rounded-full"></div>
              <div>
                <span className="font-semibold">Authorization:</span> Role-based access control for different user
                types.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-red-600 rounded-full"></div>
              <div>
                <span className="font-semibold">Data Validation:</span> Input validation using Zod schema.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-red-600 rounded-full"></div>
              <div>
                <span className="font-semibold">HTTPS:</span> Secure communication with TLS encryption.
              </div>
            </li>
            <li className="flex gap-2">
              <div className="flex-shrink-0 w-1 bg-red-600 rounded-full"></div>
              <div>
                <span className="font-semibold">CSRF Protection:</span> Cross-Site Request Forgery prevention.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Deployment Architecture */}
      <div className="mb-12 bg-card p-4 sm:p-6 rounded-lg border shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Cloud className="h-6 w-6 text-theme-purple" />
          <h2 className="text-2xl font-bold">Deployment Architecture</h2>
        </div>
        <p className="mb-6">
          Job4Students is deployed using a modern cloud-native approach, leveraging serverless technologies for
          scalability and cost-efficiency.
        </p>

        <div className="bg-background p-4 sm:p-6 rounded-lg border mb-6">
          <h3 className="text-lg font-semibold mb-4">Deployment Infrastructure</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-md p-4 bg-white dark:bg-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="h-5 w-5 text-theme-purple" />
                <h4 className="font-semibold">Application Hosting</h4>
              </div>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-1">
                  <ArrowRight className="h-3 w-3 flex-shrink-0" />
                  <span>Vercel Platform</span>
                </li>
                <li className="flex items-center gap-1">
                  <ArrowRight className="h-3 w-3 flex-shrink-0" />
                  <span>Edge Functions</span>
                </li>
                <li className="flex items-center gap-1">
                  <ArrowRight className="h-3 w-3 flex-shrink-0" />
                  <span>Global CDN</span>
                </li>
                <li className="flex items-center gap-1">
                  <ArrowRight className="h-3 w-3 flex-shrink-0" />
                  <span>Automatic Scaling</span>
                </li>
              </ul>
            </div>

            <div className="border rounded-md p-4 bg-white dark:bg-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Database className="h-5 w-5 text-theme-purple" />
                <h4 className="font-semibold">Database Hosting</h4>
              </div>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-1">
                  <ArrowRight className="h-3 w-3 flex-shrink-0" />
                  <span>Supabase PostgreSQL</span>
                </li>
                <li className="flex items-center gap-1">
                  <ArrowRight className="h-3 w-3 flex-shrink-0" />
                  <span>Managed Service</span>
                </li>
                <li className="flex items-center gap-1">
                  <ArrowRight className="h-3 w-3 flex-shrink-0" />
                  <span>Automated Backups</span>
                </li>
                <li className="flex items-center gap-1">
                  <ArrowRight className="h-3 w-3 flex-shrink-0" />
                  <span>Connection Pooling</span>
                </li>
              </ul>
            </div>

            <div className="border rounded-md p-4 bg-white dark:bg-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Cloud className="h-5 w-5 text-theme-purple" />
                <h4 className="font-semibold">Supporting Services</h4>
              </div>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-1">
                  <ArrowRight className="h-3 w-3 flex-shrink-0" />
                  <span>Upstash Redis</span>
                </li>
                <li className="flex items-center gap-1">
                  <ArrowRight className="h-3 w-3 flex-shrink-0" />
                  <span>Vercel Blob Storage</span>
                </li>
                <li className="flex items-center gap-1">
                  <ArrowRight className="h-3 w-3 flex-shrink-0" />
                  <span>Resend Email Service</span>
                </li>
                <li className="flex items-center gap-1">
                  <ArrowRight className="h-3 w-3 flex-shrink-0" />
                  <span>Vercel Analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-background p-4 sm:p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">CI/CD Pipeline</h3>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center overflow-x-auto pb-2">
            <div className="border rounded-md p-3 bg-white dark:bg-gray-800 shadow-sm text-center w-48">
              <h4 className="font-semibold text-sm">GitHub Repository</h4>
              <p className="text-xs mt-1">Source Code</p>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />
            <div className="border rounded-md p-3 bg-white dark:bg-gray-800 shadow-sm text-center w-48">
              <h4 className="font-semibold text-sm">GitHub Actions</h4>
              <p className="text-xs mt-1">Tests & Linting</p>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />
            <div className="border rounded-md p-3 bg-white dark:bg-gray-800 shadow-sm text-center w-48">
              <h4 className="font-semibold text-sm">Vercel Build</h4>
              <p className="text-xs mt-1">Build & Preview</p>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />
            <div className="border rounded-md p-3 bg-white dark:bg-gray-800 shadow-sm text-center w-48">
              <h4 className="font-semibold text-sm">Vercel Deploy</h4>
              <p className="text-xs mt-1">Production Deployment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Decisions */}
      <div className="bg-card p-4 sm:p-6 rounded-lg border shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Architecture Decisions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-theme-purple">Why Next.js?</h3>
            <p className="mb-2">Next.js was chosen as the primary framework for several reasons:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Server-side rendering improves SEO and initial page load performance</li>
              <li>App Router provides a modern, file-based routing system</li>
              <li>Server Components reduce client-side JavaScript bundle size</li>
              <li>Built-in API routes simplify backend development</li>
              <li>Server Actions enable direct server mutations from client components</li>
              <li>Excellent TypeScript support for type safety</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-theme-blue">Why PostgreSQL?</h3>
            <p className="mb-2">PostgreSQL was selected as the primary database for these reasons:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Robust support for complex queries and relationships</li>
              <li>Strong data integrity with constraints and transactions</li>
              <li>JSON support for flexible data structures</li>
              <li>Excellent performance for both read and write operations</li>
              <li>Wide ecosystem support with ORMs like Prisma</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-500">Why Serverless?</h3>
            <p className="mb-2">A serverless architecture was chosen for deployment for these benefits:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Automatic scaling based on demand</li>
              <li>Cost efficiency - only pay for what you use</li>
              <li>Reduced operational overhead</li>
              <li>Global edge network for improved performance</li>
              <li>Built-in high availability and fault tolerance</li>
            </ul>
          </div>

          <div className="flex items-center gap-2 mt-8 text-muted-foreground">
            <ExternalLink className="h-4 w-4" />
            <p className="text-sm">
              For more detailed architecture documentation, refer to the project's technical documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

