<script lang="ts">
	let { data } = $props();
</script>

{#if data.words.length === 0}
	<div class="text-center py-12">
		<p class="text-gray-400">No words yet.</p>
		<a href="/add" class="text-white hover:underline">Add your first word</a>
	</div>
{:else}
	<ul class="space-y-4">
		{#each data.words as word}
			<li>
				<a
					href="/word/{word.id}"
					class="block p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
				>
					<h2 class="text-lg font-medium text-white">{word.word}</h2>
					<p class="text-gray-400 mt-1">{word.definition}</p>
				</a>
			</li>
		{/each}
	</ul>
{/if}
