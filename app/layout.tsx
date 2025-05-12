import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Icelan travel blog',
  description: ' A travel blog about Iceland',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
