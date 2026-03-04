<script lang="ts">
	let { data } = $props();
</script>

<a href="/" class="text-sm text-gray-600 hover:text-gray-900">&larr; Back to words</a>

<article class="mt-6">
	<h1 class="text-3xl font-bold text-gray-900">{data.word.word}</h1>

	<div class="mt-6 space-y-4">
		<div>
			<h2 class="text-sm font-medium text-gray-500">Definition</h2>
			<p class="mt-1 text-gray-900">{data.word.definition}</p>
		</div>

		{#if data.word.translation}
			<div>
				<h2 class="text-sm font-medium text-gray-500">Translation</h2>
				<p class="mt-1 text-gray-900">{data.word.translation}</p>
			</div>
		{/if}

		<div>
			<h2 class="text-sm font-medium text-gray-500">Added</h2>
			<p class="mt-1 text-gray-900">{data.word.createdAt.toLocaleDateString()}</p>
		</div>
	</div>
</article>
