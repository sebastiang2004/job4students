import { TableProperties, Database, ArrowRight } from "lucide-react"

export default function DatabaseModelPage() {
  return (
    <div className="container py-8 px-4 max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Database Model</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Comprehensive database schema for the Job4Students application, showing all tables, relationships, and key
          fields.
        </p>
      </div>

      {/* Database Overview */}
      <div className="mb-12 bg-card p-6 rounded-lg border shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Database className="h-6 w-6 text-theme-purple" />
          <h2 className="text-2xl font-bold">Database Overview</h2>
        </div>
        <p className="mb-4">The Job4Students platform uses a relational database with the following key entities:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-background p-4 rounded-md border">
            <h3 className="font-semibold text-theme-purple mb-2">User Management</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Users (base table)</li>
              <li>Students (extends Users)</li>
              <li>Employers (extends Users)</li>
              <li>Admins (extends Users)</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-md border">
            <h3 className="font-semibold text-theme-blue mb-2">Job Management</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Jobs</li>
              <li>JobCategories</li>
              <li>JobSkills</li>
              <li>JobApplications</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-md border">
            <h3 className="font-semibold text-theme-teal mb-2">Company Management</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Companies</li>
              <li>CompanyProfiles</li>
              <li>Industries</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-md border">
            <h3 className="font-semibold text-amber-600 mb-2">Profile Management</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>StudentProfiles</li>
              <li>Skills</li>
              <li>Education</li>
              <li>Experience</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-md border">
            <h3 className="font-semibold text-rose-600 mb-2">Communication</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Messages</li>
              <li>Notifications</li>
              <li>ContactRequests</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-md border">
            <h3 className="font-semibold text-indigo-600 mb-2">Analytics & Misc</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Analytics</li>
              <li>Feedback</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Database Schema Diagram */}
      <div className="mb-12 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <TableProperties className="h-6 w-6 text-theme-purple" />
          Database Schema Diagram
        </h2>
        <div className="bg-muted/30 p-4 rounded-lg border mb-4 text-sm text-muted-foreground">
          <p>The diagram below shows the relationships between the main tables in the database.</p>
          <p>Legend: PK = Primary Key, FK = Foreign Key, 1:N = One-to-Many, M:N = Many-to-Many</p>
        </div>
        <div className="overflow-x-auto pb-4">
          <div className="border rounded-lg p-6 bg-card min-w-[800px] relative">
            {/* This would be a diagram in a real implementation */}
            <div className="grid grid-cols-3 gap-8">
              {/* Users Section */}
              <div className="space-y-6">
                <div className="border rounded-md p-4 bg-background shadow-sm">
                  <h3 className="font-bold text-theme-purple border-b pb-2 mb-2">Users</h3>
                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">id</span>{" "}
                      <span className="text-xs text-theme-purple">PK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">email</span>{" "}
                      <span className="text-xs">UNIQUE</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">password_hash</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">user_type</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">created_at</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">updated_at</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4 bg-background shadow-sm">
                  <h3 className="font-bold text-theme-purple border-b pb-2 mb-2">Students</h3>
                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">id</span>{" "}
                      <span className="text-xs text-theme-purple">PK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">user_id</span>{" "}
                      <span className="text-xs text-theme-blue">FK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">first_name</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">last_name</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">university</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">graduation_year</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4 bg-background shadow-sm">
                  <h3 className="font-bold text-theme-purple border-b pb-2 mb-2">Employers</h3>
                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">id</span>{" "}
                      <span className="text-xs text-theme-purple">PK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">user_id</span>{" "}
                      <span className="text-xs text-theme-blue">FK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">company_id</span>{" "}
                      <span className="text-xs text-theme-blue">FK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">position</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">department</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Jobs Section */}
              <div className="space-y-6">
                <div className="border rounded-md p-4 bg-background shadow-sm">
                  <h3 className="font-bold text-theme-blue border-b pb-2 mb-2">Jobs</h3>
                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">id</span>{" "}
                      <span className="text-xs text-theme-purple">PK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">employer_id</span>{" "}
                      <span className="text-xs text-theme-blue">FK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">company_id</span>{" "}
                      <span className="text-xs text-theme-blue">FK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">title</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">description</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">location</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">job_type</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">salary_range</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">is_active</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">created_at</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">deadline</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4 bg-background shadow-sm">
                  <h3 className="font-bold text-theme-blue border-b pb-2 mb-2">JobApplications</h3>
                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">id</span>{" "}
                      <span className="text-xs text-theme-purple">PK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">job_id</span>{" "}
                      <span className="text-xs text-theme-blue">FK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">student_id</span>{" "}
                      <span className="text-xs text-theme-blue">FK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">status</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">cover_letter</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">resume_url</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">applied_at</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">updated_at</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4 bg-background shadow-sm">
                  <h3 className="font-bold text-theme-blue border-b pb-2 mb-2">JobSkills</h3>
                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">job_id</span>{" "}
                      <span className="text-xs text-theme-blue">FK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">skill_id</span>{" "}
                      <span className="text-xs text-theme-blue">FK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">importance</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">M:N relationship table</p>
                </div>
              </div>

              {/* Companies Section */}
              <div className="space-y-6">
                <div className="border rounded-md p-4 bg-background shadow-sm">
                  <h3 className="font-bold text-theme-teal border-b pb-2 mb-2">Companies</h3>
                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">id</span>{" "}
                      <span className="text-xs text-theme-purple">PK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">name</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">logo_url</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">website</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">industry_id</span>{" "}
                      <span className="text-xs text-theme-blue">FK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">size</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">founded_year</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">created_at</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4 bg-background shadow-sm">
                  <h3 className="font-bold text-theme-teal border-b pb-2 mb-2">CompanyProfiles</h3>
                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">company_id</span>{" "}
                      <span className="text-xs text-theme-blue">FK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">description</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">mission</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">values</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">culture</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">benefits</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4 bg-background shadow-sm">
                  <h3 className="font-bold text-amber-600 border-b pb-2 mb-2">Skills</h3>
                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">id</span>{" "}
                      <span className="text-xs text-theme-purple">PK</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">name</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">category</span>
                    </li>
                    <li>
                      <span className="font-mono bg-muted px-1 rounded">description</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Relationship Arrows */}
              <div className="absolute top-1/2 left-[32%] transform -translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-theme-blue" />
              </div>
              <div className="absolute top-1/2 left-[65%] transform -translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-theme-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Details */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold mb-6">Table Details</h2>

        {/* Users Table */}
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <h3 className="text-xl font-bold text-theme-purple mb-4">Users Table</h3>
          <p className="mb-4">The central table for user authentication and basic user information.</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border px-4 py-2 text-left">Column</th>
                  <th className="border px-4 py-2 text-left">Type</th>
                  <th className="border px-4 py-2 text-left">Constraints</th>
                  <th className="border px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-mono">id</td>
                  <td className="border px-4 py-2">UUID</td>
                  <td className="border px-4 py-2">PRIMARY KEY</td>
                  <td className="border px-4 py-2">Unique identifier for the user</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">email</td>
                  <td className="border px-4 py-2">VARCHAR(255)</td>
                  <td className="border px-4 py-2">UNIQUE, NOT NULL</td>
                  <td className="border px-4 py-2">User's email address, used for login</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">password_hash</td>
                  <td className="border px-4 py-2">VARCHAR(255)</td>
                  <td className="border px-4 py-2">NOT NULL</td>
                  <td className="border px-4 py-2">Hashed password for authentication</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">user_type</td>
                  <td className="border px-4 py-2">ENUM</td>
                  <td className="border px-4 py-2">NOT NULL</td>
                  <td className="border px-4 py-2">Type of user: 'student', 'employer', 'admin'</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">created_at</td>
                  <td className="border px-4 py-2">TIMESTAMP</td>
                  <td className="border px-4 py-2">NOT NULL, DEFAULT NOW()</td>
                  <td className="border px-4 py-2">When the user account was created</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">updated_at</td>
                  <td className="border px-4 py-2">TIMESTAMP</td>
                  <td className="border px-4 py-2">NOT NULL, DEFAULT NOW()</td>
                  <td className="border px-4 py-2">When the user account was last updated</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              <strong>Indexes:</strong> email (for fast login lookups)
            </p>
            <p>
              <strong>Relationships:</strong> One-to-one with Students, Employers, or Admins tables based on user_type
            </p>
          </div>
        </div>

        {/* Jobs Table */}
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <h3 className="text-xl font-bold text-theme-blue mb-4">Jobs Table</h3>
          <p className="mb-4">Stores all job listings posted by employers.</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border px-4 py-2 text-left">Column</th>
                  <th className="border px-4 py-2 text-left">Type</th>
                  <th className="border px-4 py-2 text-left">Constraints</th>
                  <th className="border px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-mono">id</td>
                  <td className="border px-4 py-2">UUID</td>
                  <td className="border px-4 py-2">PRIMARY KEY</td>
                  <td className="border px-4 py-2">Unique identifier for the job</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">employer_id</td>
                  <td className="border px-4 py-2">UUID</td>
                  <td className="border px-4 py-2">FOREIGN KEY, NOT NULL</td>
                  <td className="border px-4 py-2">Reference to the employer who posted the job</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">company_id</td>
                  <td className="border px-4 py-2">UUID</td>
                  <td className="border px-4 py-2">FOREIGN KEY, NOT NULL</td>
                  <td className="border px-4 py-2">Reference to the company offering the job</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">title</td>
                  <td className="border px-4 py-2">VARCHAR(255)</td>
                  <td className="border px-4 py-2">NOT NULL</td>
                  <td className="border px-4 py-2">Job title</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">description</td>
                  <td className="border px-4 py-2">TEXT</td>
                  <td className="border px-4 py-2">NOT NULL</td>
                  <td className="border px-4 py-2">Detailed job description</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">location</td>
                  <td className="border px-4 py-2">VARCHAR(255)</td>
                  <td className="border px-4 py-2">NOT NULL</td>
                  <td className="border px-4 py-2">Job location (city, remote, etc.)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">job_type</td>
                  <td className="border px-4 py-2">ENUM</td>
                  <td className="border px-4 py-2">NOT NULL</td>
                  <td className="border px-4 py-2">Type: 'full-time', 'part-time', 'internship', etc.</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">salary_range</td>
                  <td className="border px-4 py-2">VARCHAR(100)</td>
                  <td className="border px-4 py-2">NULL</td>
                  <td className="border px-4 py-2">Optional salary range information</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">is_active</td>
                  <td className="border px-4 py-2">BOOLEAN</td>
                  <td className="border px-4 py-2">NOT NULL, DEFAULT TRUE</td>
                  <td className="border px-4 py-2">Whether the job listing is active</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">created_at</td>
                  <td className="border px-4 py-2">TIMESTAMP</td>
                  <td className="border px-4 py-2">NOT NULL, DEFAULT NOW()</td>
                  <td className="border px-4 py-2">When the job was posted</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-mono">deadline</td>
                  <td className="border px-4 py-2">TIMESTAMP</td>
                  <td className="border px-4 py-2">NULL</td>
                  <td className="border px-4 py-2">Application deadline</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              <strong>Indexes:</strong> company_id, employer_id, created_at (for sorting by newest)
            </p>
            <p>
              <strong>Relationships:</strong> Many-to-one with Employers and Companies, one-to-many with JobApplications
            </p>
          </div>
        </div>
      </div>

      {/* Implementation Notes */}
      <div className="mt-12 bg-card p-4 sm:p-6 rounded-lg border shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Implementation Notes</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Database Technology</h3>
            <p>
              PostgreSQL is recommended for this application due to its robust support for complex queries,
              transactions, and JSON data types.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Security Considerations</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>All passwords must be hashed using bcrypt or Argon2</li>
              <li>Implement row-level security for multi-tenant data</li>
              <li>Use prepared statements for all database queries to prevent SQL injection</li>
              <li>Implement proper access control checks in application code</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Performance Optimization</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Create indexes on frequently queried columns</li>
              <li>Implement caching for frequently accessed data</li>
              <li>Use connection pooling for database connections</li>
              <li>Consider implementing read replicas for scaling read operations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Data Migration Strategy</h3>
            <p>
              Use a migration tool like Prisma Migrate or Sequelize to manage database schema changes and versioning.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

