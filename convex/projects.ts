import { v } from 'convex/values'
import { query, mutation } from './_generated/server'
import { verifyAuth } from './auth'

// Get all owner's projects
export const get = query({
  args: {},
  handler: async (ctx) => {
    const identity = await verifyAuth(ctx)
    return await ctx.db
      .query('projects')
      .withIndex('by_owner', (q) => q.eq('ownerId', identity.subject))
      .order('desc')
      .collect()
  },
})

// Get owner's projects with limit
export const getPartial = query({
  args: {
    limit: v.number()
  },
  handler: async (ctx, {limit}) => {
    const identity = await verifyAuth(ctx)
    return await ctx.db
      .query('projects')
      .withIndex('by_owner', (q) => q.eq('ownerId', identity.subject))
      .order('desc')
      .take(limit)
  },
})

// Create new project
export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, { name }) => {
    const identity = await verifyAuth(ctx)
    const projectId = await ctx.db.insert('projects', {
      name,
      ownerId: identity.subject,
      updatedAt: Date.now(),
    })
    return projectId
  },
})
