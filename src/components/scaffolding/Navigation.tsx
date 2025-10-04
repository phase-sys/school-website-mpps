'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 lg:h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 lg:space-x-4">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="MPPS Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className="font-black text-md lg:text-lg text-foreground leading-none">
                Mother Perpetua <br />
                Parochial School Inc.
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-10 text-lg">
              {/* About dropdown */}
              <div className="relative group">
                <button
                  className={clsx(
                    'hover:text-primary transition-colors flex items-center space-x-1 group',
                    ['/about', '/history', '/faculty'].includes(pathname)
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground'
                  )}
                >
                  <span>About</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="w-48 bg-background border border-border rounded-md shadow-lg">
                    <div className="py-1">
                      <Link
                        href="/about"
                        className={clsx(
                          'block px-4 py-2 text-sm hover:text-primary hover:bg-muted transition-colors',
                          pathname === '/about'
                            ? 'text-primary font-semibold'
                            : 'text-muted-foreground'
                        )}
                      >
                        About Us
                      </Link>
                      <Link
                        href="/history"
                        className={clsx(
                          'block px-4 py-2 text-sm hover:text-primary hover:bg-muted transition-colors',
                          pathname === '/history'
                            ? 'text-primary font-semibold'
                            : 'text-muted-foreground'
                        )}
                      >
                        History
                      </Link>
                      <Link
                        href="/faculty"
                        className={clsx(
                          'block px-4 py-2 text-sm hover:text-primary hover:bg-muted transition-colors',
                          pathname === '/faculty'
                            ? 'text-primary font-semibold'
                            : 'text-muted-foreground'
                        )}
                      >
                        Faculty & Staff
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/academics"
                className={clsx(
                  'hover:text-primary transition-colors',
                  pathname === '/academics'
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
                )}
              >
                Academics
              </Link>
              <Link
                href="/admissions"
                className={clsx(
                  'hover:text-primary transition-colors',
                  pathname === '/admissions'
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
                )}
              >
                Admissions
              </Link>
              <Link
                href="/contact"
                className={clsx(
                  'hover:text-primary transition-colors',
                  pathname === '/contact'
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
                )}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <div className="space-y-1">
                <div
                  className={clsx(
                    'block px-3 py-2 text transition-colors',
                    ['/about', '/history', '/faculty'].includes(pathname)
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground'
                  )}
                >
                  About
                </div>
                <Link
                  href="/about"
                  className={clsx(
                    'block px-6 py-2 text-sm hover:text-primary transition-colors',
                    pathname === '/about'
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground'
                  )}
                >
                  About Us
                </Link>
                <Link
                  href="/history"
                  className={clsx(
                    'block px-6 py-2 text-sm hover:text-primary transition-colors',
                    pathname === '/history'
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground'
                  )}
                >
                  History
                </Link>
                <Link
                  href="/faculty"
                  className={clsx(
                    'block px-6 py-2 text-sm hover:text-primary transition-colors',
                    pathname === '/faculty'
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground'
                  )}
                >
                  Faculty & Staff
                </Link>
              </div>

              <Link
                href="/academics"
                className={clsx(
                  'block px-3 py-2 hover:text-primary transition-colors',
                  pathname === '/academics'
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
                )}
              >
                Academics
              </Link>
              <Link
                href="/admissions"
                className={clsx(
                  'block px-3 py-2 hover:text-primary transition-colors',
                  pathname === '/admissions'
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
                )}
              >
                Admissions
              </Link>
              <Link
                href="/contact"
                className={clsx(
                  'block px-3 py-2 hover:text-primary transition-colors',
                  pathname === '/contact'
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
                )}
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
