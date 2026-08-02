import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WhatsAppChatButton } from '@/components/WhatsAppChatButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mintrolabs.com'),
  title: 'Mintro Labs | Premium Digital Agency',
  description:
    'Mintro Labs crafts premium digital brands, websites, software, and AI experiences for modern businesses.',
  keywords: ['digital agency', 'branding', 'web development', 'software development', 'AI automation'],
  openGraph: {
    title: 'Mintro Labs | Premium Digital Agency',
    description:
      'Mintro Labs crafts premium digital brands, websites, software, and AI experiences for modern businesses.',
    type: 'website',
    url: 'https://mintrolabs.com',
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
