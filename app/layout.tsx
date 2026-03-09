import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://jakehowden.com'),
  title: 'Jake Howden — Software Engineer',
  description: 'Building scalable systems and leading technical delivery.',
  openGraph: {
    title: 'Jake Howden — Software Engineer',
    description: 'Building scalable systems and leading technical delivery.',
    url: 'https://jakehowden.com',
    siteName: 'Jake Howden',
    images: [{ url: '/images/jake.jpg', width: 320, height: 320, alt: 'Jake Howden' }],
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
