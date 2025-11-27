<script lang="ts">
	import { Navbar, Sidebar } from "$components";
	import "../app.css";
	import favicon from "$assets/images/ghoose-main-transparent-icon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Devon James Webb</title>
</svelte:head>

<div
	class="absolute w-full justify-center bg-mirage-50 bg-linear-to-br from-mirage-400 via-rose-50 to-mirage-50 to-90% text-mirage-950"
>
	<Navbar />
	{@render children()}
	<Sidebar />
</div>
