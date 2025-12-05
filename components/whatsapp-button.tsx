"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function WhatsAppButton() {
    const phoneNumber = "5493874871320"
    const message = encodeURIComponent("Hola! Me interesa contactarte desde tu portafolio web.")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg transition-colors duration-300"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <MessageCircle className="w-7 h-7" />
        </motion.a>
    )
}
