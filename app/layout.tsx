import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import type { Viewport } from 'next'
import ThemeRegistry from './theme-registry';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A.Loucks Portfolio',
  description: 'Portfolio for professional work and projects [Next App]',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeRegistry options={{ key: 'joy' }}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeRegistry>
  )
}
