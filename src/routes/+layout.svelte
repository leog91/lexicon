<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

<div class="min-h-screen bg-gray-900 text-gray-100">
  <header class="bg-gray-800 border-b border-gray-700">
    <div class="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/" class="text-xl font-semibold text-white hover:text-gray-300">
        Lexicon
      </a>
      <a
        href="/add"
        class="px-4 py-2 bg-white text-gray-900 text-sm rounded-md hover:bg-gray-200 transition-colors"
      >
        Add Word
      </a>
    </div>
  </header>

  <main class="max-w-3xl mx-auto px-4 py-8">
    {@render children()}
  </main>
</div>
