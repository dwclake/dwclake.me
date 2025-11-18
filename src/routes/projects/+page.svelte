<script lang="ts">
	import { projects } from "$lib/constants";
</script>

<main>
	<nav class="">
		<ul class="flex flex-col">
			{#each projects as project}
				<li><a class="cursor-pointer underline" href="/projects/{project.name}">{project.name}</a></li>
			{/each}
		</ul>
	</nav>
</main>
