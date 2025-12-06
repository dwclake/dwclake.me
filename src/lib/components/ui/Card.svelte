<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet<[]>;
		class?: string;
	}
	const { children, ...props }: Props = $props();
</script>

<div
	class="transform rounded-md border-2 border-mirage-300 bg-mirage-50 p-2 shadow-mirage-300 transition duration-300 hover:scale-103 {props.class}"
>
	{@render children()}
</div>
