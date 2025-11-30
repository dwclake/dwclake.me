<script lang="ts">
	interface Props {
		class?: string;
		width: number;
		height: number;
	}
	const { ...props }: Props = $props();
</script>

<canvas {...props}> </canvas>
