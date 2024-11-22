import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PM PIPS MASTER Admin',
  description: 'Admin panel for PM PIPS MASTER',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-red-600 text-white p-4">
            <h1 className="text-2xl font-bold">PM PIPS MASTER Admin</h1>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

