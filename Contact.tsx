'use client'

import { useState } from 'react'
import { submitContactForm } from '../actions/contact'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormStatus('submitting')

    const formData = new FormData(event.currentTarget)
    const result = await submitContactForm(formData)

    if (result.success) {
      setFormStatus('success')
    } else {
      setFormStatus('error')
    }
  }

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <p className="text-center mb-8">We would love to hear from you. Reach out to us for inquiries or to get started!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">Name:</label>
            <input type="text" id="name" name="name" required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email:</label>
            <input type="email" id="email" name="email" required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">Message:</label>
            <textarea id="message" name="message" required className="w-full p-2 border rounded h-32"></textarea>
          </div>
          <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition duration-300">
            {formStatus === 'submitting' ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {formStatus === 'success' && (
          <p className="mt-4 text-green-600 text-center">Thank you for your message. We'll get back to you soon!</p>
        )}
        {formStatus === 'error' && (
          <p className="mt-4 text-red-600 text-center">An error occurred. Please try again later.</p>
        )}
      </div>
    </section>
  )
}

