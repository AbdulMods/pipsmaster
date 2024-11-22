'use client'

import { motion } from 'framer-motion'
import { Percent, Shield, BarChart, Users } from 'lucide-react'

export default function AccountManagement() {
  return (
    <section className="my-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
        Professional Account Management
      </h2>
      <div className="bg-gray-800 p-8 rounded-lg border border-red-500">
        <p className="text-xl text-center mb-8 text-gray-300">
          Let our experts manage your trading account and maximize your profits
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Percent className="h-10 w-10 text-green-500" />
            <div>
              <h3 className="text-lg font-semibold text-white">50% Profit Share</h3>
              <p className="text-gray-400">We only earn when you profit</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            <Shield className="h-10 w-10 text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold text-white">Risk Management</h3>
              <p className="text-gray-400">Advanced strategies to protect your capital</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <BarChart className="h-10 w-10 text-yellow-500" />
            <div>
              <h3 className="text-lg font-semibold text-white">Performance Reports</h3>
              <p className="text-gray-400">Regular updates on your account's performance</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center space-x-4"
          >
            <Users className="h-10 w-10 text-purple-500" />
            <div>
              <h3 className="text-lg font-semibold text-white">Dedicated Support</h3>
              <p className="text-gray-400">Personal assistance from our expert team</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

