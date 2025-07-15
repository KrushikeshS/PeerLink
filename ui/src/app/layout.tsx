import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AnywhereDoor',
  description: 'Securely share files peer-to-peer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* OR use emoji favicon inline: */}
        {
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚪</text></svg>"
        />
        }

        {/* Google tag (gtag.js) - START */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2G9517KHJ6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2G9517KHJ6');
            `,
          }}
        />
        {/* Google tag (gtag.js) - END */}

      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}

