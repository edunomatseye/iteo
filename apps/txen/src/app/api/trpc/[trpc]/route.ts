import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '../../../../trpc/server/router/_app';
import { db } from '../../../../../drizzle/client';

// export API handler
// @link https://trpc.io/docs/v11/server/adapters
const handler = (req: Request) =>
  fetchRequestHandler({
    req,
    endpoint: '/api/trpc',
    router: appRouter,
    createContext: () => ({
      headers: new Headers({
        append: 'Content-Type',
      }),
      db,
    }),
  });

export { handler as GET, handler as POST };
