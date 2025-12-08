<script lang="ts">
	import { ArrowUpToLine } from "@lucide/svelte";
	import { Card } from "$components/ui";

	import { store } from "$state";
	import { Button, List } from "$components/ui";

	interface NavbarProps {
		class?: string;
		onclick?: () => void;
		embedded?: boolean;
	}

	const { onclick, embedded = false, ...props }: NavbarProps = $props();
	const links = $derived(store.links);
</script>

<section>
	<nav
		class="m-4 mr-10 items-center justify-center {!embedded
			? 'default-margin mt-6 hidden md:flex'
			: ''}"
	>
		<List
			list={links}
			class="{!embedded ? 'space-x-2 lg:space-x-4' : ''} {props.class}"
		>
			{#snippet Item({ name, href })}
				<a
					class="link md:text-md text-lg lg:text-xl xl:text-2xl"
					{href}
					{onclick}
					data-sveltekit-preload-data="tap"
				>
					<Button>{name}</Button>
				</a>
			{/snippet}
		</List>
	</nav>
	{#if !embedded}
		<Card class="flex-center link fixed right-4 bottom-4 z-50 p-1">
			<a href="#top">
				<ArrowUpToLine size={25} />
			</a>
		</Card>
	{/if}
</section>
