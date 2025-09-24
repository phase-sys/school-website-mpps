import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">EA</span>
              </div>
              <span className="font-bold text-xl text-foreground">Excellence Academy</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Nurturing young minds and building tomorrow's leaders through excellence in education, character
              development, and community engagement.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Education Drive, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@excellenceacademy.edu</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-muted-foreground hover:text-primary transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-muted-foreground hover:text-primary transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-muted-foreground hover:text-primary transition-colors">
                  Faculty
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calendar" className="text-muted-foreground hover:text-primary transition-colors">
                  School Calendar
                </Link>
              </li>
              <li>
                <Link href="/portal" className="text-muted-foreground hover:text-primary transition-colors">
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-muted-foreground hover:text-primary transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 Excellence Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
