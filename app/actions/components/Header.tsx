import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Professional Services</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#services" className="hover:text-gray-300">Services</Link></li>
            <li><Link href="#schedule-call" className="hover:text-gray-300">Schedule a Call</Link></li>
            <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

