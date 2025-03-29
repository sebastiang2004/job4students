Job4Students is a job listing platform designed to connect students with part-time jobs, internships, and freelance opportunities. Employers and universities can post job openings, manage applications, and interact with potential candidates.

Features
User Authentication – Secure login & sign-up for students and employers.
Job Listings – Display job opportunities from Romania and its counties on the landing page.
Student Profiles – Students can create and manage their professional profiles.
Employer Dashboard – Employers can post jobs, review applications, and manage job listings.
CV Uploads – Students can upload CVs when applying for jobs.
Language Selection – Supports multiple languages, including Romanian.
Universities & Employers Section – Dedicated space for universities and recruiters.
Responsive UI – Ensures a seamless experience across devices.
Footer Message – Displays: “This website was made by Vercel v0 for the JA Romania Team4 competition.”

Technologies Used
	•	Frontend: Next.js
	•	Backend: Node.js 
	•	Database: SupaBase
	•	Authentication: NextAuth
	•	Hosting: Vercel

Setup Instructions

1. Clone the Repository

git clone https://github.com/sebastiang2004/job4students.git
cd job4students

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a .env.local file and add the necessary variables (example for Next.js):

NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=your_database_connection_string
NEXTAUTH_SECRET=your_secret

4. Run the Development Server

npm run dev

Then open http://localhost:3000 in your browser.

Deployment

To deploy the project on Vercel, run:

vercel

Or push to GitHub, and Vercel will automatically deploy it.

Contributing
	1.	Fork the repository.
	2.	Create a new branch:

git checkout -b feature-new


	3.	Commit your changes and push them.
	4.	Open a Pull Request.

License

This project is licensed under the MIT License.