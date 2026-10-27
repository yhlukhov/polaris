import { Doc } from '@/convex/_generated/dataModel'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { getProjectIcon, formatTimestamp } from '../utils'

interface Props {
  data: Doc<'projects'>
}

export function ProjectItem({ data }: Props) {
  return (
    <li>
      <Link
        href={`/projects/${data._id}`}
        className='text-sm text-foreground/60 font-medium hover:text-foreground py-1 flex items-center justify-between w-full group'
      >
        <div className='flex items-center gap-2'>
          {getProjectIcon(data, 3.5)}
          <span className='truncate'>{data.name}</span>
        </div>
        <span className='text-xs text-muted-foreground group-hover:text-foreground/60 transition-colors'>
          {formatTimestamp(data.updatedAt)}
        </span>
      </Link>
    </li>
  )
}

export function ContinueCard({ data }: Props) {
  const router = useRouter()
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-xs text-muted-foreground'>
        <Button
          variant={'outline'}
          className='h-auto items-center justify-start p-4 bg-background border rounded-none flex flex-col gap-2 group'
          onClick={() => router.push(`/projects/${data._id}`)}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              {getProjectIcon(data, 3.5)}
              <span className='font-medium truncate'>{data.name}</span>
            </div>
            <ArrowRightIcon className='size-4 text-muted-foreground ml-1 group-hover:translate-x-0.5 transition-transform' />
          </div>
          <span className='text-xs text-muted-foreground'>
            {formatTimestamp(data.updatedAt)}
          </span>
        </Button>
      </div>
    </div>
  )
}
