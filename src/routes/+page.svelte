<script lang="ts">
	let { data } = $props();
</script>

{#if data.words.length === 0}
	<div class="text-center py-12">
		<p class="text-gray-500">No words yet.</p>
		<a href="/add" class="text-gray-900 hover:underline">Add your first word</a>
	</div>
{:else}
	<ul class="space-y-4">
		{#each data.words as word}
			<li>
				<a
					href="/word/{word.id}"
					class="block p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
				>
					<h2 class="text-lg font-medium text-gray-900">{word.word}</h2>
					<p class="text-gray-600 mt-1">{word.definition}</p>
				</a>
			</li>
		{/each}
	</ul>
{/if}
