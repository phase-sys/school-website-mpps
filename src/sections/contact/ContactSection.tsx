'use client'

import { startTransition, useActionState, useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/scaffolding/SectionWrapper'
import { SectionHeader } from '@/components/section-header'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { submitContact, type ContactActionState } from '@/app/contact/actions'
import { toast } from 'sonner'

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
  const [state, formAction] = useActionState<ContactActionState, FormData>(
    submitContact,
    { status: 'idle', messages: [] }
  )

  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') {
      toast.success("Message sent successfully! We'll get back to you soon.")
      // Reset the form
      formRef.current?.reset()
    } else if (state.status === 'invalid_data') {
      toast.warning('Please check your inputs and try again.')
    } else if (state.status === 'failed') {
      toast.error('Something went wrong. Please try again later.')
    }
  }, [state.status, state.messages])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(() => {
      formAction(formData)
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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
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
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
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
                    className="mt-1"
                    rows={5}
                    placeholder="Please tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full cursor-pointer"
                  disabled={state.status === 'in_progress'}
                >
                  {state.status === 'in_progress'
                    ? 'Sending...'
                    : 'Send Message'}
                </Button>
              </form>
              {state.status === 'invalid_data' && state.messages && (
                <ul className="mt-2 text-destructive">
                  {state.messages.map((msg, i) => (
                    <li key={i}>• {msg}</li>
                  ))}
                </ul>
              )}
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
