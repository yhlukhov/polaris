'use client'

import 'allotment/dist/style.css'
import { Allotment } from 'allotment'
import { Navbar } from './navbar'
import { Id } from '@/convex/_generated/dataModel'

const MIN_SIDEBAR_W = 200
const MAX_SIDEBAR_W = 800
const DEFAULT_SIDEBAR_W = 400
const DEFAULT_MAIN_SIZE = 1000

interface Props {
  id: Id<'projects'>
  children: React.ReactNode
}

export function ProjectIdLayout({ id, children }: Props) {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar projectId={id} />
      <div className='flex-1 flex overflow-hidden'>
        <Allotment
          className='flex-1'
          defaultSizes={[DEFAULT_SIDEBAR_W, DEFAULT_MAIN_SIZE]}
        >
          <Allotment.Pane
            snap
            minSize={MIN_SIDEBAR_W}
            maxSize={MAX_SIDEBAR_W}
            preferredSize={DEFAULT_SIDEBAR_W}
          >
            <div>Conversation Sidebar</div>
          </Allotment.Pane>
          <Allotment.Pane>{children}</Allotment.Pane>
        </Allotment>
      </div>
    </div>
  )
}
