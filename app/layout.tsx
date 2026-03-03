import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '../app/providers'

export const metadata: Metadata = {
  title: 'Brenda QC | Front-End Developer',
  description: 'Full Stack Developer specialized in Front-End. 6+ years of experience creating web solutions with React, Node.js and TypeScript.',
  keywords: 'Front-End Developer, Full Stack, React, Node.js, TypeScript, Web Development, Mexico',
  authors: [{ name: 'Brenda Quiroz Catalán' }],
  openGraph: {
    title: 'Brenda Quiroz Catalán | Front-End Developer',
    description: 'Full Stack Developer specialized in Front-End',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
