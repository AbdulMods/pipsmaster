import type { NextApiRequest, NextApiResponse } from 'next'

let posts: any[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const postIndex = posts.findIndex(post => post.id === id)

  if (req.method === 'PUT') {
    if (postIndex > -1) {
      posts[postIndex] = { ...posts[postIndex], ...req.body, updatedAt: new Date().toISOString() }
      res.status(200).json(posts[postIndex])
    } else {
      res.status(404).json({ message: 'Post not found' })
    }
  } else if (req.method === 'DELETE') {
    if (postIndex > -1) {
      posts.splice(postIndex, 1)
      res.status(200).json({ message: 'Post deleted successfully' })
    } else {
      res.status(404).json({ message: 'Post not found' })
    }
  } else {
    res.setHeader('Allow', ['PUT', 'DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

