'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Shield, Zap, BarChart2 } from 'lucide-react'

const features = [
  {
    icon: <TrendingUp className="h-8 w-8 text-red-500" />,
    title: "Mecha Precision Signals",
    description: "AI-powered XAUUSD trading signals with unmatched accuracy."
  },
  {
    icon: <Shield className="h-8 w-8 text-red-500" />,
    title: "Armor-Plated Risk Management",
    description: "Fortified stop-loss and take-profit levels to shield your investments."
  },
  {
    icon: <Zap className="h-8 w-8 text-red-500" />,
    title: "Lightning-Fast Updates",
    description: "Receive instant battle alerts for market opportunities."
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-red-500" />,
    title: "Mecha Market Analysis",
    description: "Access AI-driven gold market analysis to dominate your trades."
  }
]

export default function Features() {
  return (
    <section id="features" className="my-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-red-600">Mecha Trading Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 p-6 rounded-lg flex flex-col items-center text-center border-2 border-red-600 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black/50 z-0"></div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="mb-4 relative z-10"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-red-500 relative z-10">{feature.title}</h3>
            <p className="text-gray-400 relative z-10">{feature.description}</p>
            <motion.div
              className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              initial={false}
              animate={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

