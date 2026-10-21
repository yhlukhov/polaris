import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import type { Doc } from '@/convex/_generated/dataModel'
import { Button } from '@/components/ui/button'
import { Header } from './header'

type Project = Doc<'projects'>

type ProjectsTableProps = {
  projects: Project[] | undefined
}

const statusStyles: Record<string, string> = {
  importing: 'bg-sky-400/10 text-sky-300 ring-sky-400/20',
  completed: 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/20',
  failed: 'bg-rose-400/10 text-rose-300 ring-rose-400/20',
  pending: 'bg-amber-400/10 text-amber-300 ring-amber-400/20',
}

export function ProjectsTable({ projects }: ProjectsTableProps) {
  const [name, setName] = useState('')
  const createProject = useMutation(api.projects.create)
  const isLoading = projects === undefined

  return (
    <div>
      <div className='flex justify-end mb-3'>
        <input
          type='text'
          className='border rounded-lg mr-2 pl-2'
          placeholder='New project name'
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant={'outline'} onClick={() => createProject({ name })}>
          Add project
        </Button>
      </div>

      <section className='overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-2xl shadow-black/20 ring-1 ring-white/5'>
        <div className='flex flex-col gap-4 border-b border-white/10 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-violet-300'>
              Workspace
            </p>
            <h1 className='mt-2 text-2xl font-semibold tracking-tight text-white'>
              Projects
            </h1>
            <p className='mt-1 text-sm text-slate-400'>
              Track imports and project ownership in one place.
            </p>
          </div>
          <div className='inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3.5 py-2 text-sm text-slate-300'>
            <span
              className='size-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.7)]'
              aria-hidden='true'
            />
            {isLoading
              ? 'Loading projects'
              : `${projects.length} ${projects.length === 1 ? 'project' : 'projects'}`}
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full min-w-160 border-collapse text-left'>
            <thead>
              <tr className='bg-white/2.5 text-xs font-medium uppercase tracking-wider text-slate-400'>
                <th scope='col' className='px-7 py-4'>
                  Project
                </th>
                <th scope='col' className='px-7 py-4'>
                  Import status
                </th>
                <th scope='col' className='px-7 py-4'>
                  Owner ID
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-white/[0.07]'>
              {isLoading ? (
                Array.from({ length: 3 }, (_, index) => (
                  <tr key={index} aria-hidden='true'>
                    <td className='px-7 py-5'>
                      <div className='h-4 w-40 animate-pulse rounded bg-white/10' />
                    </td>
                    <td className='px-7 py-5'>
                      <div className='h-6 w-24 animate-pulse rounded-full bg-white/10' />
                    </td>
                    <td className='px-7 py-5'>
                      <div className='h-4 w-32 animate-pulse rounded bg-white/10' />
                    </td>
                  </tr>
                ))
              ) : projects.length === 0 ? (
                <tr>
                  <td colSpan={3} className='px-6 py-16 text-center'>
                    <p className='text-sm font-medium text-slate-200'>
                      No projects yet
                    </p>
                    <p className='mt-1 text-sm text-slate-500'>
                      Projects will appear here when they are added to this
                      workspace.
                    </p>
                  </td>
                </tr>
              ) : (
                projects.map(({ _id, importStatus, name, ownerId }) => {
                  const status = importStatus ?? 'pending'

                  return (
                    <tr
                      key={_id}
                      className='group transition-colors hover:bg-white/[0.035]'
                    >
                      <td className='px-7 py-5'>
                        <span className='font-medium text-slate-100 transition-colors group-hover:text-white'>
                          {name}
                        </span>
                      </td>
                      <td className='px-7 py-5'>
                        <span
                          className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium capitalize ring-1 ring-inset ${statusStyles[status] ?? statusStyles.pending}`}
                        >
                          <span
                            className='size-1.5 rounded-full bg-current'
                            aria-hidden='true'
                          />
                          {status}
                        </span>
                      </td>
                      <td className='px-7 py-5'>
                        <span
                          title={ownerId}
                          className='block max-w-64 truncate font-mono text-xs text-slate-400'
                        >
                          {ownerId}
                        </span>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>

        <div className='flex items-center justify-between border-t border-white/10 bg-white/1.5 px-5 py-3.5 text-xs text-slate-500 sm:px-7'>
          <span>Project directory</span>
          <span>Updates automatically</span>
        </div>
      </section>
    </div>
  )
}

export function ProjectsTableUnauthorized() {
  return (
    <div>
      <Header />
      <section className='overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-2xl shadow-black/20 ring-1 ring-white/5'>
        <div className='flex flex-col gap-4 px-5 py-8 sm:px-7'>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-violet-300'>
            Access required
          </p>
          <h1 className='text-2xl font-semibold tracking-tight text-white'>
            Sign in to manage your projects
          </h1>
          <p className='max-w-xl text-sm text-slate-400'>
            Use your Clerk account to view project status, create workspaces,
            and keep imports synced through Convex.
          </p>
        </div>
      </section>
    </div>
  )
}
