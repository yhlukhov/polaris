import { useMutation, useQuery } from 'convex/react'
import { Id, Doc } from '@/convex/_generated/dataModel'
import { api } from '@/convex/_generated/api'

export function useProjects() {
  return useQuery(api.projects.get)
}

export function useProjectsPartial(limit: number) {
  return useQuery(api.projects.getPartial, {limit})
}

export function useCreateProject() {
  return useMutation(api.projects.create).withOptimisticUpdate(
    (localStore, args) => {
      const existingProjects = localStore.getQuery(api.projects.get)
      if(existingProjects !== undefined) {
        const now = Date.now()
        const newProject:Doc<'projects'> = {
          _id: crypto.randomUUID() as Id<'projects'>,
          name: args.name,
          _creationTime: now,
          ownerId: 'anonymous',
          updatedAt: now
        }
        localStore.setQuery(api.projects.get, {}, [
          newProject,
          ...existingProjects
        ])
      }
    }
  )
}