<script lang="ts">
	import { projects } from "$lib/constants";
	import { type PageProps } from "./$types";

	let { data }: PageProps = $props();

	const project = $derived(
		projects.find((project) => project.name === data.project_name)
	);
</script>

<main class="default-margin my-12">
	<div class="flex-center flex-col">
		Project details for {project?.name}
		<enhanced:img
			src={project?.logo || ""}
			alt="{project?.name} logo"
			class="mt-4 size-32"
		/>
	</div>
</main>
