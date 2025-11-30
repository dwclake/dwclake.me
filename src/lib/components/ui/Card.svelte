<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet<[]>;
		class?: string;
	}
	const { children, ...props }: Props = $props();
</script>

<div class="card {props.class}">
	{@render children()}
</div>
