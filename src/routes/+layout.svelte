<script lang="ts">
	import { Sidebar } from "$components";
	import "../app.css";
	import favicon from "$lib/assets/svg/dragpath-logo-transparent.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Devon James Webb</title>
</svelte:head>

{@render children()}
<Sidebar />
