<script lang="ts">
	import { WebGLCanvas } from "$components/ui";
	import { init, render } from "$lib/animations/flower";
	import "../app.css";
	import favicon from "$lib/assets/svg/dragpath-logo-transparent.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Devon James Webb</title>
</svelte:head>

<WebGLCanvas width={600} height={600} {init} {render} />
{@render children()}
