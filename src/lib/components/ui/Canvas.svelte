<script lang="ts">
	interface Props {
		class?: string;
	}
	const { ...props }: Props = $props();
</script>

<canvas {...props}> </canvas>
