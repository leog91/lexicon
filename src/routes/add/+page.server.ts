import { db } from '$lib/db';
import { words } from '$lib/db/schema';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const word = formData.get('word')?.toString().trim();
		const definition = formData.get('definition')?.toString().trim();
		const translation = formData.get('translation')?.toString().trim() || undefined;

		if (!word || !definition) {
			return fail(400, { error: 'Word and definition are required', word, definition });
		}

		await db.get().insert(words).values({ word, definition, translation });

		throw redirect(303, '/');
	}
};
