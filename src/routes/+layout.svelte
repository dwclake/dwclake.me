<script lang="ts">
	import { Navbar, Sidebar } from "$components";
	import "../app.css";
	import favicon from "$lib/assets/images/dragpath-logo-transparent.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Devon James Webb</title>
</svelte:head>

<div class="w-full h-full text-mirage-950 bg-mirage-50 dark:bg-mirage-950 dark:text-mirage-50">
	<Navbar flex="" />
	{@render children()}
	<Sidebar />
</div>
