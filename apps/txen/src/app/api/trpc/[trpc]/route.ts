import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../../../../trpc/server/router/_app';

// export API handler
// @link https://trpc.io/docs/v11/server/adapters
const handler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});

export { handler as GET, handler as POST };
