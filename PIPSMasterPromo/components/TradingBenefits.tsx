'use client'

import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Clock, Brain } from 'lucide-react'

const benefits = [
  {
    icon: <DollarSign className="h-8 w-8 text-green-500" />,
    title: "Increased Profitability",
    description: "Our AI-powered signals have helped traders achieve up to 30% monthly returns on their investments."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
    title: "Consistent Performance",
    description: "Experience steady growth with our proven strategies, designed for long-term success in the gold market."
  },
  {
    icon: <Clock className="h-8 w-8 text-yellow-500" />,
    title: "Time-Efficient Trading",
    description: "Save hours of analysis with our instant, ready-to-execute trading signals and market insights."
  },
  {
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    title: "Continuous Learning",
    description: "Improve your trading skills with our educational resources and AI-driven market analysis."
  }
]

export default function TradingBenefits() {
  return (
    <section className="my-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
        Why Trade with PIPS MASTER?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg flex items-start space-x-4 border border-red-500"
          >
            <div className="flex-shrink-0">{benefit.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

