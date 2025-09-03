import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohan Lal - Full Stack Developer',
  description: 'Dynamic Full Stack Web Developer skilled in JavaScript, React, Node.js, and MongoDB. Portfolio showcasing scalable and responsive applications.',
  keywords: 'Full Stack Developer, JavaScript, React, Node.js, MongoDB, Web Developer, Portfolio',
  authors: [{ name: 'Mohan Lal' }],
  openGraph: {
    title: 'Mohan Lal - Full Stack Developer',
    description: 'Dynamic Full Stack Web Developer Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}