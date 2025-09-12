  import './globals.css';
  import type { Metadata } from 'next';
  import { Inter } from 'next/font/google';
  import { ThemeProvider } from '@/components/ThemeProvider';

  const inter = Inter({ subsets: ['latin'] });

  export const metadata: Metadata = {
    metadataBase: new URL('https://codewithmohanlal.vercel.app/'),
    title: 'Mohan Lal - Full Stack Developer',
    description: 'Dynamic Full Stack Web Developer skilled in JavaScript, React, Node.js, and MongoDB. Portfolio showcasing scalable and responsive applications.',
    keywords: 'Mohanlal codewithmohanlal web developer, full stack developer, javascript, react, node.js, mongodb, portfolio, next.js, tailwind css',
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    authors: [{ name: 'Mohan Lal' }],
    openGraph: {
      title: 'Mohan Lal - Full Stack Developer',
      description: 'Dynamic Full Stack Web Developer Portfolio',
      type: 'website',
       url: 'https://codewithmohanlal.vercel.app/', 
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohan Lal Portfolio',
      },
    ],
    },
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" className="scroll-smooth">
        <body className={inter.className}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
    );
  }