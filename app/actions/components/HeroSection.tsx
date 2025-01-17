import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Your One-Stop Solution for Academic and Professional Services</h2>
        <p className="text-xl mb-8">We provide expert services to meet all your needs.</p>
        <Link href="#services" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
          Explore Services
        </Link>
      </div>
    </section>
  )
}

