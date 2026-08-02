'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '@/data/contactInfo';

export function WhatsAppChatButton() {
    const normalizedPhone = WHATSAPP_NUMBER.replace(/\D/g, '');
    const message = encodeURIComponent(
        'Hello Mintro Labs, I would like to chat with you.'
    );

    return (
        <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{
                y: [80, -10, 0, 0],
                opacity: 1,
                scale: [1, 1.08, 1],
            }}
            transition={{
                duration: 0.8,
                ease: 'easeOut',
            }}
        >
            <motion.div
                animate={{
                    y: [0, -6, 0],
                }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 8,
                    ease: 'easeInOut',
                }}
            >
                <Link
                    href={`https://wa.me/${normalizedPhone}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                    className="
            fixed
            bottom-6
            right-6
            z-[90]
            flex
            items-center
            gap-2
            rounded-full
            bg-[#25D366]
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-[#20c55a]
            active:scale-95
          "
                >
                    <FaWhatsapp className="text-[20px]" />
                    <span>Chat with us</span>
                </Link>
            </motion.div>
        </motion.div>
    );
}