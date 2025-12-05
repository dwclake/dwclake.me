<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet<[]>;
		class?: string;
	}
	const { children, ...props }: Props = $props();
</script>

<div
	class="transform rounded-md border border-mirage-950 bg-mirage-50 p-2 transition duration-300 hover:scale-103 {props.class}"
	style="
		box-shadow: 2px 2px var(--color-mirage-950);
	"
>
	{@render children()}
</div>
