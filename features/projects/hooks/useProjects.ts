import { useMutation, useQuery } from 'convex/react'
import { Id, Doc } from '@/convex/_generated/dataModel'
import { api } from '@/convex/_generated/api'

export function useProject(id: Id<'projects'>) {
  return useQuery(api.projects.getById, { id })
}

export function useProjects() {
  return useQuery(api.projects.get)
}

export function useProjectsPartial(limit: number) {
  return useQuery(api.projects.getPartial, { limit })
}

export function useCreateProject() {
  return useMutation(api.projects.create).withOptimisticUpdate(
    (localStore, args) => {
      const existingProjects = localStore.getQuery(api.projects.get)
      if (existingProjects !== undefined) {
        const now = Date.now()
        const newProject: Doc<'projects'> = {
          _id: crypto.randomUUID() as Id<'projects'>,
          name: args.name,
          _creationTime: now,
          ownerId: 'anonymous',
          updatedAt: now,
        }
        localStore.setQuery(api.projects.get, {}, [
          newProject,
          ...existingProjects,
        ])
      }
    },
  )
}

export function useRenameProject() {
  return useMutation(api.projects.rename).withOptimisticUpdate(
    (localStore, args) => {
      const {id, name} = args
      const existingProject = localStore.getQuery(api.projects.getById, { id })
      if (existingProject !== undefined && existingProject !== null) {
        localStore.setQuery(
          api.projects.getById,
          { id },
          {
            ...existingProject,
            name,
            updatedAt: Date.now(),
          },
        )
      }
      const existingProjects = localStore.getQuery(api.projects.get)
      if (existingProjects !== undefined) {
        localStore.setQuery(api.projects.get, {}, [
          ...existingProjects.map((project) => project._id === id ? {
            ...project,
            name,
            updatedAt: Date.now(),
          } : project),
        ])
      }
    },
  )
}
