<script lang="ts">
	let { form } = $props();
</script>

<h1 class="text-2xl font-semibold text-white mb-6">Add New Word</h1>

<form method="POST" class="space-y-6 max-w-lg">
	{#if form?.error}
		<p class="text-red-400 text-sm">{form.error}</p>
	{/if}

	<div>
		<label for="word" class="block text-sm font-medium text-gray-300">Word</label>
		<input
			type="text"
			id="word"
			name="word"
			value={form?.word ?? ''}
			required
			class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-white focus:border-white sm:text-sm text-white"
		/>
	</div>

	<div>
		<label for="definition" class="block text-sm font-medium text-gray-300">Definition</label>
		<textarea
			id="definition"
			name="definition"
			rows="3"
			required
			class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-white focus:border-white sm:text-sm text-white"
		>{form?.definition ?? ''}</textarea>
	</div>

	<div>
		<label for="translation" class="block text-sm font-medium text-gray-300">Translation (optional)</label>
		<input
			type="text"
			id="translation"
			name="translation"
			class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-white focus:border-white sm:text-sm text-white"
		/>
	</div>

	<div class="flex gap-4">
		<button
			type="submit"
			class="px-4 py-2 bg-white text-gray-900 text-sm rounded-md hover:bg-gray-200 transition-colors"
		>
			Add Word
		</button>
		<a href="/" class="px-4 py-2 text-sm text-gray-400 hover:text-white">Cancel</a>
	</div>
</form>
