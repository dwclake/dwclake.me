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
	{@render children()}
	<Sidebar>
		<nav class="flex flex-col space-y-1">
			<a href="/">Home</a>
			<a href="/projects">Projects</a>
			<a href="/sayhi">Say hi!</a>
			<a href="/writing">Writing</a>
			<a href="/music">Music</a>
			<a href="/contact">Contact</a>
		</nav>
	</Sidebar>
</div>
