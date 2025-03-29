import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-br from-theme-ocean/5 to-theme-mint/5 py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-medium theme-gradient-text">Job4Students</h3>
            <p className="text-sm text-theme-charcoal">Connecting students with their dream jobs.</p>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-medium text-theme-ocean">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-theme-charcoal hover:text-theme-teal">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-theme-charcoal hover:text-theme-teal">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-theme-charcoal hover:text-theme-teal">
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-theme-charcoal hover:text-theme-teal">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-medium text-theme-ocean">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-theme-charcoal hover:text-theme-teal">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-theme-charcoal hover:text-theme-teal">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-theme-charcoal hover:text-theme-teal">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-medium text-theme-ocean">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-theme-charcoal hover:text-theme-teal">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-theme-charcoal hover:text-theme-teal">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-theme-charcoal hover:text-theme-teal">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-theme-charcoal hover:text-theme-teal">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-theme-charcoal/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-theme-charcoal">
              &copy; {new Date().getFullYear()} Job4Students. All rights reserved.
            </p>
            <p className="text-center text-sm text-theme-charcoal">Created for the JA Romania Competition - Team 4</p>
            <p className="text-center text-sm text-theme-charcoal flex items-center gap-2">
              Developed by Gurzun Sebastian
              <Link
                href="https://github.com/sebastiang2004/job4students"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-ocean hover:text-theme-teal transition-colors"
              >
                <Github size={18} />
                <span className="sr-only">GitHub Repository</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

