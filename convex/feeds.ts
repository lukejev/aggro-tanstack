import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("feeds").collect();
  },
});

export const addFeed = mutation({
  args: { name: v.string(), url: v.string() },
  handler: async (ctx, { name, url }) => {
    const feedId = await ctx.db.insert("feeds", { name, url });
    return feedId
  },
})