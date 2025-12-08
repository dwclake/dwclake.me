<script lang="ts">
	import { store } from "$state";
	import { alternate_links } from "$lib/constants";

	store.links = alternate_links;
</script>

<svelte:head>
	<title>Photgraphy</title>
</svelte:head>

<main class="page-margin">
	<div class="flex-center">Photography stuff</div>
</main>
