import { motion } from 'framer-motion'

const CHANNEL_LINK = 'https://t.me/YourChannelLink'

export default function CTAButton() {
  return (
    <div className="my-12 flex justify-center">
      <motion.a
        href={CHANNEL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 relative overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Join PIPS MASTER Mecha Squad</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-800"
          initial={false}
          animate={{ x: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </motion.a>
    </div>
  )
}

