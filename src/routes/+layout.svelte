<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-gray-50">
	<header class="bg-white border-b border-gray-200">
		<div class="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
			<a href="/" class="text-xl font-semibold text-gray-900 hover:text-gray-600">
				My Words
			</a>
			<a
				href="/add"
				class="px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors"
			>
				Add Word
			</a>
		</div>
	</header>

	<main class="max-w-3xl mx-auto px-4 py-8">
		{@render children()}
	</main>
</div>
