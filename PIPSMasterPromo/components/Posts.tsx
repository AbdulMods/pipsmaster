'use client'

import { useState, useEffect } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts')
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    }
    fetchPosts()
  }, [])

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-red-500">Latest Posts</h2>
      <div className="space-y-6">
        {posts.map((post: any, index: number) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg border border-red-500">
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-300">{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

