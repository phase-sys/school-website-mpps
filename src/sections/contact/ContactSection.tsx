'use client'

import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

const contactItems = [
  {
    icon: MapPin,
    title: 'Address',
    content: (
      <>
        Brgy. Lual Pob.
        <br />
        Mauban, Quezon
        <br />
        4330
      </>
    ),
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    content: (
      <>
        <p>Main Office: (042) 731 948-2</p>
        <p>Admissions: (042) 731 948-2</p>
      </>
    ),
  },
  {
    icon: Mail,
    title: 'Email Addresses',
    content: (
      <>
        <p>General: motherperpetua_mauban@yahoo.com</p>
        <p>Admissions: motherperpetua_mauban@yahoo.com</p>
        <p>Support: motherperpetua_mauban@yahoo.com</p>
      </>
    ),
  },
  {
    icon: Clock,
    title: 'Office Hours',
    content: (
      <>
        <p>Monday - Friday: 7:30 AM - 4:00 PM</p>
        <p>Saturday: 9:00 AM - 12:00 PM (by appointment)</p>
        <p>Sunday: Closed</p>
      </>
    ),
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <SectionWrapper width="7xl" bg="background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <SectionHeader
            title="Get in Touch"
            subtitle="We’re here to answer your questions and provide support"
          />

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

                <Button type="submit" className="w-full cursor-pointer">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div>
          <SectionHeader
            title="Visit Our Campus"
            subtitle="Reach us through any of the following ways"
          />

          <div className="space-y-6">
            {contactItems.map(({ icon: Icon, title, content }) => (
              <Card key={title}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {title}
                      </h3>
                      <div className="space-y-1 text-muted-foreground">
                        {content}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
