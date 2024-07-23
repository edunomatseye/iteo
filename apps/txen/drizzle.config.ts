import { defineConfig } from 'drizzle-kit';

import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

export default defineConfig({
  schema: '.drizzle/migrations/*.ts',
  out: './drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.SUPABASE_DATABASE_URL as string,
  },
  verbose: true,
});
