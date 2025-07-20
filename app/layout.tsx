import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recurring Date Picker',
  description: 'A Tailwind-powered recurring date picker',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
