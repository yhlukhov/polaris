'use client'

import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useAuth,
} from '@clerk/nextjs'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'

export function Header() {
  const { isLoaded, isSignedIn } = useAuth()
  const projects = useQuery(api.projects.get)

  return (
    <header className='mb-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-2xl shadow-black/20 ring-1 ring-white/5'>
      <div className='flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7'>
        <div className='flex items-center gap-3'>
          <div className='flex size-10 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-sm font-semibold text-violet-200'>
            S
          </div>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-violet-300'>
              Solaris
            </p>
            <h2 className='mt-1 text-lg font-medium text-white'>
              Workspace access
            </h2>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          {!isLoaded ? (
            <span className='text-sm text-slate-400'>Loading...</span>
          ) : isSignedIn ? (
            <>
              <div className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-2.5 py-1.5 text-slate-200'>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: 'h-8 w-8',
                      userButtonTrigger: 'rounded-full',
                    },
                  }}
                />
                <span className='text-sm font-medium text-slate-200'>
                  Profile
                </span>
              </div>

              <SignOutButton signOutOptions={{ redirectUrl: '/' }}>
                <Button
                  variant='outline'
                  className='rounded-full border-white/10 bg-white/3 text-slate-200 hover:bg-white/8'
                >
                  Sign out
                </Button>
              </SignOutButton>
            </>
          ) : (
            <>
              <SignInButton mode='modal'>
                <Button
                  variant='outline'
                  className='rounded-full border-white/10 bg-white/3 text-slate-200 hover:bg-white/8'
                >
                  Sign in
                </Button>
              </SignInButton>

              <SignUpButton mode='modal'>
                <Button className='rounded-full bg-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.45)] hover:bg-violet-400'>
                  Sign up
                </Button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>

      <div className='flex items-center justify-between gap-4 px-5 py-3 text-xs text-slate-400 sm:px-7'>
        <span>{isLoaded ? 'Clerk identity ready' : 'Loading identity...'}</span>
        <span>
          {projects
            ? `${projects.length} ${projects.length === 1 ? 'project' : 'projects'} synced via Convex`
            : 'Syncing project data...'}
        </span>
      </div>
    </header>
  )
}
