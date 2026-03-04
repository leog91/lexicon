import { db } from '$lib/db';
import { words } from '$lib/db/schema';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const id = parseInt(params.id);
	const word = await db.get().select().from(words).where(({ id: eqId }) => eqId(id)).get();

	if (!word) {
		throw error(404, 'Word not found');
	}

	return { word };
};
