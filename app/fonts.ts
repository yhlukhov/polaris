import { Inter, IBM_Plex_Mono } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})