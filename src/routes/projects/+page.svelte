<script lang="ts">
	import { projects } from "$lib/constants";
</script>

<main class="page-margin">
	<ul class="flex-center space-x-4">
		{#each projects as project}
			<li
				class="tranform rounded-sm border border-mirage-950 shadow-xl duration-200 hover:scale-105"
			>
				<a
					href="/projects/{project.name}"
					data-sveltekit-preload-data="tap"
				>
					<enhanced:img
						src={project.logo}
						alt={project.name}
						class="size-[100px]"
					/>
					<span
						class="flex-center text-xl font-semibold text-mirage-950"
						>{project.name}</span
					>
				</a>
			</li>
		{/each}
	</ul>
</main>
