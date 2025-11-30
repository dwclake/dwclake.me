<script lang="ts">
	import { ArrowUpToLine } from "@lucide/svelte";

	import { navlinks } from "$lib/constants";

	interface NavbarProps {
		flex?: string;
		onclick?: () => void;
		embedded?: boolean;
	}

	const { flex, onclick, embedded = false }: NavbarProps = $props();
</script>

<section>
	<nav
		class="m-4 mr-10 items-center justify-center {!embedded
			? 'default-margin mt-6 hidden md:flex'
			: ''}"
	>
		<ul
			class="flex {flex} md:text-md text-lg lg:text-xl xl:text-2xl {!embedded
				? 'space-x-2 lg:space-x-4'
				: ''}"
		>
			{#each navlinks as { href, name }}
				<li>
					<a
						class="link"
						{href}
						{onclick}
						data-sveltekit-preload-data="tap">{name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
	{#if !embedded}
		<div class="flex-center card link fixed right-4 bottom-4 z-50 p-1">
			<a href="#top">
				<ArrowUpToLine size={25} />
			</a>
		</div>
	{/if}
</section>
