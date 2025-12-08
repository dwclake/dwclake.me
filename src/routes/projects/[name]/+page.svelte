<script lang="ts">
	import { projects } from "$lib/constants";
	import { type PageProps } from "./$types";

	import { store } from "$state";
	import { alternate_links } from "$lib/constants";

	store.links = alternate_links;

	let { data }: PageProps = $props();

	const project = $derived(
		projects.find((project) => project.name === data.project_name)
	);
</script>

<svelte:head>
	<title>{project?.name}</title>
</svelte:head>

<main class="page-margin">
	<div class="flex-center flex-col">
		Project details for {project?.name}
		<enhanced:img
			src={project?.logo || ""}
			alt="{project?.name} logo"
			class="mt-4 size-32"
		/>
	</div>
	<div id="description" class="mt-6">
		<h2 class="heading-2">Description</h2>
		<p class="paragraph-3 mt-4">{project?.description}</p>
	</div>
</main>
