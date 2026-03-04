import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } from '$env/static/private';
import * as schema from './schema';

let dbInstance: ReturnType<typeof drizzle> | null = null;

function getDb() {
	if (!dbInstance) {
		const client = createClient({
			url: TURSO_DATABASE_URL || '',
			authToken: TURSO_AUTH_TOKEN || ''
		});
		dbInstance = drizzle(client, { schema });
	}
	return dbInstance;
}

export const db = {
	get: getDb
};
