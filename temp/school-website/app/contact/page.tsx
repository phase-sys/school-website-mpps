"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Contact Us</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            We're here to answer your questions and help you learn more about Excellence Academy
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="e.g., Admissions Inquiry, Campus Visit, General Question"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1"
                        rows={5}
                        placeholder="Please tell us how we can help you..."
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Campus</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Address</h3>
                        <p className="text-muted-foreground">
                          123 Education Drive
                          <br />
                          Learning City, LC 12345
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Phone Numbers</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Main Office: (555) 123-4567</p>
                          <p>Admissions: (555) 123-4568</p>
                          <p>Athletics: (555) 123-4569</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Email Addresses</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>General: info@excellenceacademy.edu</p>
                          <p>Admissions: admissions@excellenceacademy.edu</p>
                          <p>Support: support@excellenceacademy.edu</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Monday - Friday: 7:30 AM - 4:00 PM</p>
                          <p>Saturday: 9:00 AM - 12:00 PM (by appointment)</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Department Contacts</h2>
            <p className="text-lg text-muted-foreground">
              Connect directly with specific departments for specialized assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-3">Admissions Office</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Director:</strong> Ms. Jennifer Adams
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> (555) 123-4568
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> admissions@excellenceacademy.edu
                  </p>
                  <p className="text-muted-foreground text-xs mt-3">
                    Application questions, campus tours, enrollment information
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-3">Academic Affairs</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Director:</strong> Michael Thompson
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> (555) 123-4570
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> academics@excellenceacademy.edu
                  </p>
                  <p className="text-muted-foreground text-xs mt-3">
                    Curriculum questions, academic support, course planning
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-3">Student Affairs</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Director:</strong> Lisa Martinez
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> (555) 123-4571
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> studentaffairs@excellenceacademy.edu
                  </p>
                  <p className="text-muted-foreground text-xs mt-3">
                    Counseling services, college planning, student support
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-3">Athletics Department</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Director:</strong> Coach Mark Wilson
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> (555) 123-4569
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> athletics@excellenceacademy.edu
                  </p>
                  <p className="text-muted-foreground text-xs mt-3">
                    Sports programs, team tryouts, athletic schedules
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-3">Business Office</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Manager:</strong> Ms. Patricia Lee
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> (555) 123-4572
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> business@excellenceacademy.edu
                  </p>
                  <p className="text-muted-foreground text-xs mt-3">
                    Tuition payments, financial aid, billing questions
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-foreground mb-3">Technology Support</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Manager:</strong> Mr. Alex Chen
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> (555) 123-4573
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> tech@excellenceacademy.edu
                  </p>
                  <p className="text-muted-foreground text-xs mt-3">IT support, device issues, online platform help</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule a Visit */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule a Campus Visit</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience Excellence Academy firsthand with a personalized campus tour
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="text-lg px-8">
              <a href="tel:+15551234568">Call to Schedule</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <a href="mailto:admissions@excellenceacademy.edu">Email Admissions</a>
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">Tours available Monday-Friday at 9:00 AM, 11:00 AM, and 2:00 PM</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
