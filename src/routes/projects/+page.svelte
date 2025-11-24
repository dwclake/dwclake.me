<script lang="ts">
	import { projects } from "$lib/constants";
</script>

<main class="default-margin">
	<ul class="flex-center space-x-4">
		{#each projects as project}
			<li class="border border-mirage-950 rounded-sm shadow-xl tranform hover:scale-105 duration-200">
				<a href="/projects/{project.name}" data-sveltekit-preload-data="tap">
					<img src={project.logo} alt={project.name} width={100} height={100} />
					<span class="text-mirage-950 font-semibold text-xl flex-center">{project.name}</span>
				</a>
			</li>
		{/each}
	</ul>
</main>
