<script lang="ts">
	import { others } from "$lib/constants";
</script>

<main class="default-margin">
	<ul class="flex-center space-x-4">
		{#each others as other}
			<li class="border border-mirage-950 rounded-sm p-2 shadow-xl tranform hover:scale-105 duration-200">
				<a href="/others/{other.name}" data-sveltekit-preload-data="tap">
					<span class="text-mirage-950 font-semibold text-xl flex-center">{other.name}</span>
				</a>
			</li>
		{/each}
	</ul>
</main>
