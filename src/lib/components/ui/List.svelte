<script lang="ts">
	import { type Snippet } from "svelte";

	interface Props<t> {
		Item: Snippet<[t]>;
		list: t[];
		class?: string;
	}
	const { Item, list, ...props }: Props<any> = $props();
</script>

<ul class="flex flex-wrap gap-2 {props.class}">
	{#each list as item}
		<li>{@render Item(item)}</li>
	{/each}
</ul>
