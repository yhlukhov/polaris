import { ClerkProvider as NextClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/ui/themes'

export function ClerkProvider({ children }: { children: React.ReactNode }) {
  return <NextClerkProvider appearance={{theme: dark}}>
    {children}
  </NextClerkProvider>
}
