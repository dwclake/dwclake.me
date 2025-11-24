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

<div class="w-full min-h-auto absolute top-0 left-0 text-mirage-950 bg-mirage-50 bg-linear-to-br from-mirage-400 via-rose-50 to-mirage-50 to-90%">
	<Navbar />
	{@render children()}
	<Sidebar />
</div>
