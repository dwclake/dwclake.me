<script lang="ts">
	import "../app.scss";
	import favicon from "$lib/assets/svg/ghoose-main-transparent-icon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Devon James Webb</title>
</svelte:head>

{@render children()}