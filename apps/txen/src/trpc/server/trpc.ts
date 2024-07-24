import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import { ZodError } from 'zod';
import { db } from '../../../drizzle/client';

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
export const createTRPCContext = async (opts: {
  headers: Headers;
  auth: { userId: string };
}) => {
  return {
    db,
    userId: opts.auth.userId,
    ...opts,
  };
};

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */
// const t = initTRPC.context<typeof createTRPCContext>().create({
const t = initTRPC.create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;

// const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
//   if (!ctx.userId) {
//     throw new TRPCError({ code: 'UNAUTHORIZED' });
//   }
//   // Make ctx.userId non-nullable in protected procedures
//   return next({ ctx: { userId: ctx.userId } });
// });

/**
 * Protected (authenticated) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use this. It verifies
 * the session is valid and guarantees `ctx.session.user` is not null.
 *
 * @see https://trpc.io/docs/procedures
 */
// export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
