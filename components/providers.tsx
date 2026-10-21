'use client'

import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react'
import { ClerkProvider } from './clerk-provider'
import { ConvexClientProvider } from './convex-client-provider'
import { ThemeProvider } from './theme-provider'
import { UnauthenticatedView } from '@/features/auth/components/unauthorized-view'
import { AuthLoadingView } from '@/features/auth/components/auth-loading-view'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <ClerkProvider>
        <ConvexClientProvider>
          <Authenticated>{children}</Authenticated>
          <Unauthenticated>
            <UnauthenticatedView />
          </Unauthenticated>
          <AuthLoading>
            <AuthLoadingView />
          </AuthLoading>
        </ConvexClientProvider>
      </ClerkProvider>
    </ThemeProvider>
  )
}
