"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">EA</span>
              </div>
              <span className="font-bold text-xl text-foreground">Excellence Academy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>

              <div className="relative group">
                <button className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1 group">
                  <span>About</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="w-48 bg-background border border-border rounded-md shadow-lg">
                    <div className="py-1">
                      <Link
                        href="/about"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                      >
                        About Us
                      </Link>
                      <Link
                        href="/history"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                      >
                        History
                      </Link>
                      <Link
                        href="/faculty"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                      >
                        Faculty & Staff
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/academics" className="text-muted-foreground hover:text-primary transition-colors">
                Academics
              </Link>
              <Link href="/admissions" className="text-muted-foreground hover:text-primary transition-colors">
                Admissions
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Home
              </Link>

              <div className="space-y-1">
                <div className="px-3 py-2 text-muted-foreground font-medium text-sm">About</div>
                <Link
                  href="/about"
                  className="block px-6 py-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
                <Link
                  href="/history"
                  className="block px-6 py-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  History
                </Link>
                <Link
                  href="/faculty"
                  className="block px-6 py-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Faculty & Staff
                </Link>
              </div>

              <Link
                href="/academics"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Academics
              </Link>
              <Link
                href="/admissions"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Admissions
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
