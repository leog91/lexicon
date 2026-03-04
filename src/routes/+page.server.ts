import { db } from '$lib/db';
import { words } from '$lib/db/schema';
import { desc } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const allWords = await db.get().select().from(words).orderBy(desc(words.createdAt));
	return { words: allWords };
};
