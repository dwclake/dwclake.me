<script lang="ts">
	import { projects } from "$lib/constants";
	import { type PageProps } from "./$types";

	let { data }: PageProps = $props();

	const project = projects.find((p) => p.name === data.project_name);
</script>

<main>
	Project details for {project?.name}
	<img src={project?.logo} alt="{project?.name} logo" class="w-32 h-32 mt-4" />
</main>
