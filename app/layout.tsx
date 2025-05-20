import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BankerAI Dashboard',
  description: 'BankerAI Dashboard - An intelligent banking analytics platform',
  generator: 'Altuser',
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
