import {
  AlertCircleIcon,
  GlobeIcon,
  Loader2Icon,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { formatDistanceToNow } from 'date-fns'
import { Doc } from '@/convex/_generated/dataModel'

export const getProjectIcon = (project: Doc<'projects'>, size: number) => {
  switch (project.importStatus) {
    case 'completed':
      return <FaGithub className={`size-${size} text-muted-foreground`} />
    case 'failed':
      return <AlertCircleIcon className={`size-${size} text-muted-foreground`} />
    case 'importing':
      return (
        <Loader2Icon className={`size-${size} text-muted-foreground animate-spin`} />
      )
    default:
      return <GlobeIcon className={`size-${size} text-muted-foreground`} />
  }
}

export const formatTimestamp = (timestamp: number) => {
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true })
}