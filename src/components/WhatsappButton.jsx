"use client"

import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

const PHONE_NUMBER = "919004100213" // +91 9004100213
const DEFAULT_MESSAGE = "Hi! I'm interested in your services."

const WhatsappButton = () => {
  const handleClick = () => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`
    window.open(url, "_blank")
  }

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center"
    >
      {/* pulse ring to draw attention */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <FaWhatsapp className="relative text-white" size={30} />
    </motion.button>
  )
}

export default WhatsappButton