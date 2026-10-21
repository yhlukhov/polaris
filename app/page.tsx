'use client'

import { useQuery } from 'convex/react'
import { ProjectsTable } from '@/components/projects-table'
import { Header } from '@/components/header'
import { api } from '@/convex/_generated/api'

export default function Home() {
  const projects = useQuery(api.projects.get)

  return (
    <main className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8'>
      <Header />
      <ProjectsTable projects={projects} />
    </main>
  )
}
