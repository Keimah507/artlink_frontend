import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Artlink',
  description: 'Artlink is a platform for artists to share their work and for art lovers to discover new art.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <NavBar />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
