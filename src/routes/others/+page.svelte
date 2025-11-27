<script lang="ts">
	import { others } from "$lib/constants";
</script>

<main class="page-margin">
	<ul class="flex-center space-x-4">
		{#each others as other}
			<li
				class="tranform rounded-sm border border-mirage-950 p-2 shadow-xl duration-200 hover:scale-105"
			>
				<a
					href="/others/{other.name}"
					data-sveltekit-preload-data="tap"
				>
					<span
						class="flex-center text-xl font-semibold text-mirage-950"
						>{other.name}</span
					>
				</a>
			</li>
		{/each}
	</ul>
</main>
