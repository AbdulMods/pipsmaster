'use client'

import { useState, useEffect } from 'react'
import { Users } from 'lucide-react'
import { motion } from 'framer-motion'

const TELEGRAM_CHANNEL_ID = 'YOUR_CHANNEL_ID'
const BOT_TOKEN = 'YOUR_BOT_TOKEN'
const CHANNEL_LINK = 'https://t.me/YourChannelLink'

export default function SubscriberCount() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    // Simulating API call
    const fetchSubscriberCount = () => {
      // Replace this with actual API call in production
      const simulatedCount = Math.floor(Math.random() * 10000) + 5000
      setCount(simulatedCount)
    }

    fetchSubscriberCount()
    const interval = setInterval(fetchSubscriberCount, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 p-6 rounded-lg shadow-lg text-center border-2 border-red-600 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black/50 z-0"></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-red-500">Mecha Traders</h2>
        <div className="flex items-center justify-center">
          <Users className="text-red-500 mr-2" size={24} />
          {count === null ? (
            <div className="animate-pulse bg-red-900/50 h-8 w-32 rounded"></div>
          ) : (
            <motion.p
              key={count}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="text-4xl font-bold text-red-500"
            >
              {count.toLocaleString()}
            </motion.p>
          )}
        </div>
        <p className="mt-2 text-gray-400">Join the elite squad</p>
      </div>
    </motion.div>
  )
}

