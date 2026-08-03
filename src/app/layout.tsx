import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { BackToTopButton } from '@/components/BackToTopButton';
import { WhatsAppChatButton } from '@/components/WhatsAppChatButton';

const inter = Inter({ subsets: ['latin'] });
const logoUrl = '/mintrolabs-logo.svg';

export const metadata: Metadata = {
  metadataBase: new URL('https://mintrolabs.com'),
  title: 'Mintro Labs | Premium Digital Agency',
  description:
      'Mintro Labs crafts premium digital brands, websites, software, and AI experiences for modern businesses.',
  keywords: ['digital agency', 'branding', 'web development', 'software development', 'AI automation'],
  icons: {
    icon: logoUrl,
    apple: logoUrl,
  },
  openGraph: {
    title: 'Mintro Labs | Premium Digital Agency',
    description:
        'Mintro Labs crafts premium digital brands, websites, software, and AI experiences for modern businesses.',
    type: 'website',
    url: 'https://mintrolabs.com',
    images: [
      {
        url: logoUrl,
        width: 1500,
        height: 1500,
        alt: 'Mintro Labs logo',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
      {children}
      <BackToTopButton />
      <WhatsAppChatButton />
      </body>
      </html>
  );
}
