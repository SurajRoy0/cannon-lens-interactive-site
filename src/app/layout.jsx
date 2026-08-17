// app/layout.jsx
import './globals.css'
import Cursor from '@/components/cursor'
import { Unbounded, Inter, IBM_Plex_Mono } from 'next/font/google'

const display = Unbounded({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' })
const body = Inter({ subsets: ['latin'], variable: '--font-body' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        {/* <Cursor /> */}
        {children}
      </body>
    </html>
  )
}