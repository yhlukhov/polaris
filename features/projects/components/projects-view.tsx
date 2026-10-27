'use client'

import { useEffect, useState } from 'react'
import { SparkleIcon } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import {
  uniqueNamesGenerator,
  animals,
  adjectives,
  colors,
} from 'unique-names-generator'
import { cn } from '@/lib/utils'
import { poppings } from '@/app/fonts'
import { Button } from '@/components/ui/button'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { ProjectsList } from './projects-list'
import { useCreateProject } from '../hooks/useProjects'
import { ProjectsCommandDialog } from './projects-command-dialog'

export function ProjectsView() {
  const createProject = useCreateProject()
  const [commandDialogOpen, setCommandDialogOpen] = useState(false)

  useEffect(function openCommandDialogWithKeyboard () {
    const handleKeyDown = (e: KeyboardEvent) => {
      if(e.metaKey || e.ctrlKey) {
        if (e.key === 'k') {
          e.preventDefault()
          setCommandDialogOpen(true)
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <ProjectsCommandDialog open={commandDialogOpen} onOpenChange={setCommandDialogOpen} />
      <div className='min-h-screen bg-sidebar flex flex-col items-center justify-center p-6 md:p-16'>
        <div className='w-full max-w-sm mx-auto flex flex-col gap-4 items-center'>
          <div className='flex justify-between gap-4 w-full items-center'>
            <div className='flex items-center gap-2 w-full group/logo'>
              <img
                src='/logo.svg'
                alt='Solaris'
                className='size-8 md:size-11'
              />
              <h1
                className={cn(
                  'text-4xl md:text-5xl font-semibold',
                  poppings.className,
                )}
              >
                Solaris
              </h1>
            </div>
          </div>

          <div className='flex flex-col gap-4 w-full'>
            <div className='grid grid-cols-2 gap-2'>
              <Button
                variant={'outline'}
                onClick={() => {
                  const name = uniqueNamesGenerator({
                    dictionaries: [adjectives, animals, colors],
                    separator: '-',
                  })
                  createProject({ name })
                }}
                className='h-full items-start justify-start p-4 bg-background border flex flex-col gap-6 rounded-none'
              >
                <div className='flex items-center justify-between w-full'>
                  <SparkleIcon className='size-4' />
                  <KbdGroup>
                    <Kbd className='bg-accent border'>Ctrl</Kbd>
                    <span>+</span>
                    <Kbd className='bg-accent border'>B</Kbd>
                  </KbdGroup>
                </div>
                <div>
                  <span className='text-sm'>New</span>
                </div>
              </Button>
              <Button
                variant={'outline'}
                onClick={() => {}}
                className='h-full items-start justify-start p-4 bg-background border flex flex-col gap-6 rounded-none'
              >
                <div className='flex items-center justify-between w-full'>
                  <FaGithub className='size-4' />
                  <KbdGroup>
                    <Kbd className='bg-accent border'>Ctrl</Kbd>
                    <span>+</span>
                    <Kbd className='bg-accent border'>I</Kbd>
                  </KbdGroup>
                </div>
                <div>
                  <span className='text-sm'>Import</span>
                </div>
              </Button>
            </div>
            <ProjectsList
              onViewAll={() => {
                setCommandDialogOpen(true)
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
