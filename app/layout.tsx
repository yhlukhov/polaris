import type { Metadata } from 'next'
import { dark } from '@clerk/ui/themes'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Solaris',
  description: 'Coding environment',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(
        'h-full',
        'antialiased',
        'font-sans',
        inter.variable,
        plexMono.variable,
      )}
    >
      <body className='min-h-full flex flex-col'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider appearance={{ theme: dark }}>
            <header className='flex justify-end items-center p-4 gap-4 h-16'>
              <Show when='signed-out'>
                <SignInButton />
                <SignUpButton>
                  <button className='bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer'>
                    Sign Up
                  </button>
                </SignUpButton>
              </Show>
              <Show when='signed-in'>
                <UserButton />
              </Show>
            </header>
            {children}
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
