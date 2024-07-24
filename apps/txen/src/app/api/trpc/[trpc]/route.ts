import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '../../../../trpc/server/router/_app';

// export API handler
// @link https://trpc.io/docs/v11/server/adapters
const handler = (req: Request) =>
  fetchRequestHandler({
    req,
    endpoint: '/api/trpc',
    router: appRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
