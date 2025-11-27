<script lang="ts">
	import { pages } from "$lib/constants";

	interface NavbarProps {
		flex?: string;
		onclick?: () => void;
		embedded?: boolean;
	}

	const { flex, onclick, embedded = false }: NavbarProps = $props();
</script>

<nav
	class="{!embedded
		? 'default-margin mt-6 hidden md:flex'
		: ''} m-4 mr-10 items-center justify-center"
>
	<ul class="flex {flex} {!embedded ? 'space-x-4' : ''} text-2xl">
		{#each pages as { href, name }}
			<li>
				<a
					class="cursor-pointer"
					{href}
					{onclick}
					data-sveltekit-preload-data="tap">{name}</a
				>
			</li>
		{/each}
	</ul>
</nav>
