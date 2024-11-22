import type { NextApiRequest, NextApiResponse } from 'next'

let posts: any[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const post = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString()
    }
    posts.push(post)
    res.status(201).json(post)
  } else if (req.method === 'GET') {
    res.status(200).json(posts)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

