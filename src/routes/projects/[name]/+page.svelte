<script lang="ts">
	import { type PageProps } from "./$types";
	let { data }: PageProps = $props();
</script>

<main>
	Project details for {data.project_name}
</main>
