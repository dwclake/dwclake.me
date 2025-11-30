<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet<[]>;
		class?: string;
		onclick?: () => void;
	}
	const { children, onclick, ...props }: Props = $props();
</script>

<button class="flex cursor-pointer items-center justify-center {props.class}" {onclick}>
	{@render children()}
</button>
