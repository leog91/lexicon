<script lang="ts">
	let { data } = $props();
</script>

<a href="/" class="text-sm text-gray-400 hover:text-white">&larr; Back to words</a>

<article class="mt-6">
	<h1 class="text-3xl font-bold text-white">{data.word.word}</h1>

	<div class="mt-6 space-y-4">
		<div>
			<h2 class="text-sm font-medium text-gray-400">Definition</h2>
			<p class="mt-1 text-white">{data.word.definition}</p>
		</div>

		{#if data.word.translation}
			<div>
				<h2 class="text-sm font-medium text-gray-400">Translation</h2>
				<p class="mt-1 text-white">{data.word.translation}</p>
			</div>
		{/if}

		<div>
			<h2 class="text-sm font-medium text-gray-400">Added</h2>
			<p class="mt-1 text-white">{data.word.createdAt.toLocaleDateString()}</p>
		</div>
	</div>
</article>
