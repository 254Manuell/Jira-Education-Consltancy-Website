import Link from 'next/link'

export default function ScheduleCall() {
  return (
    <section className="py-20 bg-blue-500 text-white" id="schedule-call">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Schedule a Call</h2>
        <p className="text-xl mb-8">We'd love to discuss how we can help you. Get in touch with us on Facebook:</p>
        <Link href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
          Contact Us on Facebook
        </Link>
      </div>
    </section>
  )
}

