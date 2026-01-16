import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://codewithmohanlal.vercel.app/'),
  title: 'Mohan Lal | Creative Full Stack Developer',
  description: 'Crafting digital experiences with JavaScript, React, Node.js, and MongoDB. Building scalable, beautiful web applications.',
  keywords: 'Mohanlal, full stack developer, web developer, react, node.js, portfolio, next.js',
  authors: [{ name: 'Mohan Lal' }],
  openGraph: {
    title: 'Mohan Lal | Creative Full Stack Developer',
    description: 'Crafting digital experiences with modern web technologies',
    type: 'website',
    url: 'https://codewithmohanlal.vercel.app/',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mohan Lal Portfolio' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}