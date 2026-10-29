'use client'

import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react'
import { AuthLoadingView } from '@/features/auth/components/auth-loading-view'
import { UnauthenticatedView } from '@/features/auth/components/unauthorized-view'
import { ConvexClientProvider } from './convex-client-provider'
import { TooltipProvider } from './ui/tooltip'
import { ClerkProvider } from './clerk-provider'
import { ThemeProvider } from './theme-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
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
      </TooltipProvider>
    </ThemeProvider>
  )
}
