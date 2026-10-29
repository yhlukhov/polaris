import { v } from 'convex/values'
import { query, mutation } from './_generated/server'
import { verifyAuth } from './auth'

/* QUERIES */

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

export const getPartial = query({
  args: {
    limit: v.number(),
  },
  handler: async (ctx, { limit }) => {
    const identity = await verifyAuth(ctx)
    return await ctx.db
      .query('projects')
      .withIndex('by_owner', (q) => q.eq('ownerId', identity.subject))
      .order('desc')
      .take(limit)
  },
})

export const getById = query({
  args: {
    id: v.id('projects'),
  },
  handler: async (ctx, { id }) => {
    const identity = await verifyAuth(ctx)
    const project = await ctx.db.get('projects', id)
    if (!project) {
      throw new Error('Project not found in database')
    }
    if (project._id === identity.subject) {
      throw new Error('Unauthorized access to this project')
    }
    return project
  },
})

/* MUTATIONS */

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

export const rename = mutation({
  args: {
    id: v.id('projects'),
    name: v.string(),
  },
  handler: async (ctx, { id, name }) => {
    const identity = await verifyAuth(ctx)
    const project = await ctx.db.get('projects', id)
    if (!project) {
      throw new Error('Project not found in database')
    }
    if (project._id === identity.subject) {
      throw new Error('Unauthorized access to this project')
    }
    await ctx.db.patch('projects', id, {
      name,
      updatedAt: Date.now()
    })
  },
})