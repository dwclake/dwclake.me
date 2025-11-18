<script lang="ts">
	import { Navbar, Sidebar } from "$components";
	import "../app.css";
	import favicon from "$lib/assets/svg/dragpath-logo-transparent.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Devon James Webb</title>
</svelte:head>

<div class="w-full h-full text-dark bg-light dark:bg-dark dark:text-light">
	<Navbar />
	{@render children()}
	<Sidebar />
</div>
