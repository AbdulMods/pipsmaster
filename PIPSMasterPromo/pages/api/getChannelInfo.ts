import type { NextApiRequest, NextApiResponse } from 'next'

const TELEGRAM_CHANNEL_ID = '-1001100250703'
const BOT_TOKEN = '7996569703:AAHRcZDGOXY0IF_1hjelMeDYc6yizygVqF4'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const [countResponse, chatResponse] = await Promise.all([
      fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getChatMemberCount?chat_id=${TELEGRAM_CHANNEL_ID}`),
      fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getChat?chat_id=${TELEGRAM_CHANNEL_ID}`)
    ])

    const countData = await countResponse.json()
    const chatData = await chatResponse.json()

    if (!countData.ok || !chatData.ok) {
      throw new Error('Failed to fetch channel info')
    }

    let photoUrl = '/placeholder.svg?height=100&width=100'
    if (chatData.result.photo?.small_file_id) {
      const fileResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${chatData.result.photo.small_file_id}`)
      const fileData = await fileResponse.json()
      if (fileData.ok) {
        photoUrl = `https://api.telegram.org/file/bot${BOT_TOKEN}/${fileData.result.file_path}`
      }
    }

    res.status(200).json({
      count: countData.result,
      photo_url: photoUrl
    })
  } catch (error) {
    console.error('Error fetching channel info:', error)
    res.status(500).json({ error: 'Failed to fetch channel info' })
  }
}

