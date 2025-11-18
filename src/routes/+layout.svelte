<script lang="ts">
	import { Sidebar } from "$components";
	import "../app.css";
	import favicon from "$lib/assets/images/dragpath-logo-transparent.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Devon James Webb</title>
</svelte:head>

<div class="w-full h-full text-dark bg-light dark:bg-dark dark:text-light">
	{@render children()}
	<Sidebar />
</div>
