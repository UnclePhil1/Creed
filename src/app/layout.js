import './globals.css'
import { Inter } from 'next/font/google'
import logo from './logo.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Creed',
  description: 'Number one NFT platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
