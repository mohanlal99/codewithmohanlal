import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { HeartFilledIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
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
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl flex-grow">
              <Navbar />
              {children}
            </main>
            {/* Footer Section */}
            <footer className="flex flex-col items-center justify-center gap-4  p-10 dark:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
              <HeartFilledIcon />
              <p className="font-bold text-inherit">Mohanlal</p>
              <h2 className="text-3xl font-bold mb-4 text-default-400 ">
                Follow Me
              </h2>
              <div className="flex gap-4">
                <Link
                  className="text-blue-400"
                  href="https://www.linkedin.com/in/mohan-lal-4719a9315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </Link>
                <Link
                  className="text-gray-400"
                  href={siteConfig.links.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  className="text-red-400"
                  href="mailto:mohanlalv433@gmail.com"
                >
                  Email
                </Link>
                <Link className="text-green-400" href="tel:+918118862474">
                  Phone
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
