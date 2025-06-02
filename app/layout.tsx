import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import Footer from "./_components/footer";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { ScrollProvider } from "@/components/RefContext";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Full Stack Developer",
    "Mohan Lal",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio by Mohanlal",
    "CodeWithMohanlal",
    "Mohanlal Developer",
    "Mohanlal JavaScript Expert",
    "Dynamic News Website by Mohanlal",
    "Top Global News by CodeWithMohanlal",
    "Web Development by Mohanlal",
    "Hygraph CMS Developer Mohanlal",
    "Learn Coding with Mohanlal",
    "Coding Seekho with CodeWithMohanlal",
    "Custom Web Applications by Mohanlal",
    "Modern Frontend Developer Mohanlal",
    "Backend API Developer Mohanlal",
    "Responsive Web Design by CodeWithMohanlal",
    "Advanced Next.js Applications by Mohanlal",
  ],
  authors: [{ name: "Mohan Lal", url: "https://github.com/mohanlal99" }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://codewithmohanlal.vercel.app/",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.png"],
    creator: "@mohanlal99",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yourwebsite.com",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen bg-light-background dark:bg-dark-background font-sans antialiased",
          fontSans.variable
        )}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl flex-grow bg-light-background dark:bg-dark-background">
              <ScrollProvider>
                <Navbar />
                <div className="md:mx-20 xl:mx-28">{children}</div>
              </ScrollProvider>
              <Footer />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
