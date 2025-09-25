import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="MPPS Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
              <span className="font-bold text-xl text-foreground">
                Mother Perpetua Parochial School Inc.
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Nurturing young minds and building tomorrow&apos;s leaders through
              excellence in education, character development, and community
              engagement.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Brgy. Lual Pob. Mauban, Quezon 4330</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(042) 731 948-2</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>motherperpetua_mauban@yahoo.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Faculty & Staff
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/history"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Full-width Google Map */}
        <div className="mt-8 w-full h-36 md:h-48 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902.8011027135041!2d121.73046123236418!3d14.19077657247068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339800a5c6925043%3A0xcbaa6aa0c77118cd!2sMother%20Perpetua%20Parochial%20School!5e1!3m2!1sen!2sph!4v1758732396437!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-4 pt-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Mother Perpetua Parochial School Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
