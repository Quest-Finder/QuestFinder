import './globals.css'

import { Metadata } from 'next'

import { ThemeToggle } from '@/components/theme-toggle'
import { Toaster } from '@/components/ui/toast'
import { inter, raleway } from '@/lib/fonts'
import texts from '@/locales/pt-BR.json'

import { Providers } from './providers'

const APP_TEXTS = texts.AppLayout

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_TEXTS.meta.title}`,
    default: APP_TEXTS.meta.title,
  },
  description: APP_TEXTS.meta.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='pt-BR'
      suppressHydrationWarning
      className={`${raleway.variable} ${inter.variable} antialiased`}
    >
      <body>
        <Providers>
          {children}
          <div className='fixed bottom-2 left-2 z-50'>
            <ThemeToggle />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
