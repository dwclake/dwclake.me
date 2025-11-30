<script lang="ts">
	interface Props {
		class?: string;
	}
	const { ...props }: Props = $props();
</script>

<select class="select {props.class}" {...props}> </select>
