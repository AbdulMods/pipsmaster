import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/admin/signals" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Manage Signals</h3>
          <p className="text-gray-600">Add, edit, or delete trading signals</p>
        </Link>
        <Link href="/admin/posts" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Manage Posts</h3>
          <p className="text-gray-600">Create, edit, or delete blog posts</p>
        </Link>
      </div>
    </div>
  )
}

