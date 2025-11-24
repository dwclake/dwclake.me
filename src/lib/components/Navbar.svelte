<script lang="ts">
	import { pages } from "$lib/constants";

	interface NavbarProps {
		flex?: string,
		onclick?: () => void,
		embedded: boolean
	}

	const { flex, onclick, embedded = false }: NavbarProps = $props();
</script>

<nav class="{!embedded ? "hidden md:flex" : ""} justify-center items-center m-4 mr-10">
	<ul class="flex {flex} {!embedded ? "space-x-4" : ""} text-lg">
		{#each pages as { href, name }}
			<li><a class="cursor-pointer" {href} {onclick} data-sveltekit-preload-data="tap">{name}</a></li>
		{/each}
	</ul>
</nav>
