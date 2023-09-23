import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from '@/theme/ThemeRegistry'
import { ReduxProvider } from './redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Task 2',
  description: 'Cypress task_2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body suppressHydrationWarning={true} className={inter.className}>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </body>
      </ThemeRegistry>
    </html>
  )
}
