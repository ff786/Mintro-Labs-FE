import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import logo from '../assets/Mintro Logo.jpg';
import { WhatsAppChatButton } from '@/components/WhatsAppChatButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mintrolabs.com'),
  title: 'Mintro Labs | Premium Digital Agency',
  description:
    'Mintro Labs crafts premium digital brands, websites, software, and AI experiences for modern businesses.',
  keywords: ['digital agency', 'branding', 'web development', 'software development', 'AI automation'],
  icons: {
    icon: logo.src,
    apple: logo.src,
  },
  openGraph: {
    title: 'Mintro Labs | Premium Digital Agency',
    description:
      'Mintro Labs crafts premium digital brands, websites, software, and AI experiences for modern businesses.',
    type: 'website',
    url: 'https://mintrolabs.com',
    images: [
      {
        url: logo.src,
        width: logo.width,
        height: logo.height,
        alt: 'Mintro Labs logo',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <WhatsAppChatButton />
      </body>
    </html>
  );
}
