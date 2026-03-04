<script lang="ts">
	let { form } = $props();
</script>

<h1 class="text-2xl font-semibold text-gray-900 mb-6">Add New Word</h1>

<form method="POST" class="space-y-6 max-w-lg">
	{#if form?.error}
		<p class="text-red-600 text-sm">{form.error}</p>
	{/if}

	<div>
		<label for="word" class="block text-sm font-medium text-gray-700">Word</label>
		<input
			type="text"
			id="word"
			name="word"
			value={form?.word ?? ''}
			required
			class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
		/>
	</div>

	<div>
		<label for="definition" class="block text-sm font-medium text-gray-700">Definition</label>
		<textarea
			id="definition"
			name="definition"
			rows="3"
			required
			class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
		>{form?.definition ?? ''}</textarea>
	</div>

	<div>
		<label for="translation" class="block text-sm font-medium text-gray-700">Translation (optional)</label>
		<input
			type="text"
			id="translation"
			name="translation"
			class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
		/>
	</div>

	<div class="flex gap-4">
		<button
			type="submit"
			class="px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors"
		>
			Add Word
		</button>
		<a href="/" class="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">Cancel</a>
	</div>
</form>
