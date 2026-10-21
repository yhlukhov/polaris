import { v } from 'convex/values'
import { query, mutation } from './_generated/server'

// Get all owner's projects
export const get = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if(!identity) return []
    return await ctx.db
      .query('projects')
      .withIndex('by_owner', (q) => q.eq('ownerId', identity.subject))
      .collect()
  },
})

// Create new project
export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, { name }) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('Unauthorized')
    await ctx.db.insert('projects', {
      name,
      importStatus: 'importing',
      ownerId: identity.subject,
    })
  },
})
