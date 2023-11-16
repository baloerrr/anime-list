import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BaloerAnimeList',
  description: 'Website anime adit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-color-secondary`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
