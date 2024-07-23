import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as Schema from './migrations/schema';
import * as Relations from './migrations/relations';

const connectionString = process.env.SUPABASE_DATABASE_URL as string;

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema: { ...Schema, ...Relations } });
