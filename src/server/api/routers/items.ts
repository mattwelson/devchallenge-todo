import { z } from "zod";
import { eq } from "drizzle-orm";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { insertItemSchema, items } from "@/server/db/schema";

export const itemsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(insertItemSchema.omit({ createdById: true }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(items).values({
        ...input,
        createdById: ctx.session.user.id,
      });
    }),

  update: protectedProcedure
    .input(insertItemSchema.omit({ createdById: true }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(items)
        .set({
          ...input,
          createdById: ctx.session.user.id,
        })
        .where(eq(items.id, input.id!));
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(items).where(eq(items.id, input.id!));
    }),

  get: publicProcedure
    .input(
      z
        .object({
          userId: z.string(),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const items = await ctx.db.query.items.findMany({
        where: (items, { eq }) =>
          eq(items.createdById, input?.userId ?? ctx.session?.user.id ?? ""),
        orderBy: (items, { desc }) => [desc(items.createdAt)],
      });

      return items ?? null;
    }),
});
