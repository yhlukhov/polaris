import { useRouter } from 'next/navigation'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { useProjects } from '../hooks/useProjects'
import { getProjectIcon } from '../utils'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectsCommandDialog({ open, onOpenChange }: Props) {
  const router = useRouter()
  const projects = useProjects()

  const handleSelect = (projectId: string) => {
    router.push(`/projects/${projectId}`)
    onOpenChange(false)
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title='Search Projects'
      description='Search and navigate to your projects'
    >
      <Command>
        <CommandInput placeholder='Search projects...' />
        <CommandList>
          <CommandEmpty>No projects found</CommandEmpty>
          <CommandGroup heading='Projects'>
            {projects?.map((project) => (
              <CommandItem
                key={project._id}
                value={`${project.name}-${project._id}`}
                onSelect={() => handleSelect(project._id)}
              >
                {getProjectIcon(project, 4)}
                <span>{project.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
