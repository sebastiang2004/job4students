
**Job4Students** is a job listing platform designed to connect students with part-time jobs, internships, and freelance opportunities. Employers and universities can post job openings, manage applications, and interact with potential candidates.  

## **Features**  

- ✅ **User Authentication** – Secure **login & sign-up** with **NextAuth.js** and **Supabase**.  
- ✅ **Job Listings** – Display job opportunities from **Romania** and its **counties** on the landing page.  
- ✅ **Student Profiles** – Students can create and manage their professional profiles.  
- ✅ **Employer Dashboard** – Employers can post jobs, review applications, and manage job listings.  
- ✅ **CV Uploads** – Students can upload CVs when applying for jobs.  
- ✅ **Language Selection** – Supports multiple languages, including **Romanian**.  
- ✅ **Universities & Employers Section** – Dedicated space for universities and recruiters.  
- ✅ **Responsive UI** – Ensures a seamless experience across devices. 

## **Technologies Used**  

- **Frontend:** [Next.js](https://nextjs.org/)  
- **Backend & Database:** [Supabase](https://supabase.com/)  
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)  
- **Hosting:** [Vercel](https://vercel.com/)  

## **Setup Instructions**  

### **1. Clone the Repository**  
```bash
git clone https://github.com/sebastiang2004/job4students.git
cd job4students
###
2. Install Dependencies

npm install
###
3. Configure Environment Variables

Create a .env.local file in the root directory and add the necessary variables:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GITHUB_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_client_secret
###
4. Run the Development Server

npm run dev

Then open http://localhost:3000 in your browser.
###
**Deployment**

To deploy the project on Vercel, run:

vercel

Or push to GitHub, and Vercel will automatically deploy it.
###
Contributing
	1.	Fork the repository.
	2.	Create a new branch:

git checkout -b feature-new


	3.	Commit your changes and push them.
	4.	Open a request.
	###