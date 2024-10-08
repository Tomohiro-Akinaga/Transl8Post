import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import Header from '@/components/organisms/Header'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Transl8Post',
  description: 'Blog Site',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='jp'>
      <UserProvider>
        <body className={notoSansJP.className}>
          <Header />
          {children}
        </body>
      </UserProvider>
    </html>
  )
}
