'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { WHATSAPP_NUMBER } from '@/data/contactInfo';

export function WhatsAppChatButton() {
  const normalizedPhone = WHATSAPP_NUMBER.replace(/\D/g, '');
  const message = encodeURIComponent('Hello Mintro Labs, I would like to chat with you.');
  const href = `https://wa.me/${normalizedPhone}?text=${message}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[80] inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(16,185,129,0.35)] transition hover:-translate-y-1 hover:bg-emerald-400"
    >
      <MessageCircle size={18} />
      <span>Chat with us</span>
    </Link>
  );
}

