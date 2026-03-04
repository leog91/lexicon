import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { env } from '$env/dynamic/private';
import * as schema from './schema';

let dbInstance: ReturnType<typeof drizzle> | null = null;

function getDb() {
	if (!dbInstance) {
		const client = createClient({
			url: env.TURSO_DATABASE_URL || '',
			authToken: env.TURSO_AUTH_TOKEN || ''
		});
		dbInstance = drizzle(client, { schema });
	}
	return dbInstance;
}

export const db = {
	get: getDb
};
