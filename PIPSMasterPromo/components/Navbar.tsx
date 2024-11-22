import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-500">PIPS MASTER</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-white hover:text-red-500">Home</Link></li>
          <li><Link href="/signals" className="text-white hover:text-red-500">Signals</Link></li>
          <li><Link href="/posts" className="text-white hover:text-red-500">Posts</Link></li>
          <li><Link href="/admin" className="text-white hover:text-red-500">Admin</Link></li>
        </ul>
      </div>
    </nav>
  )
}

