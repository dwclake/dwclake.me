<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet<[]>;
		class?: string;
		onclick?: () => void;
	}
	const { children, onclick, ...props }: Props = $props();
</script>

<button
	class="flex transform cursor-pointer items-center justify-center rounded-md border-2 border-mirage-300 bg-mirage-50 p-2 shadow-mirage-300 duration-300 hover:scale-103 {props.class}"
	{onclick}
>
	{@render children()}
</button>
