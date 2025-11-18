<script lang="ts">
	import { Menu, X } from "@lucide/svelte";

	import { WebGLCanvas } from "$components/ui";
	import { init, render } from "$lib/animations/flower";

	const { children } = $props();

	let open = $state(false);
	let overlay: HTMLDivElement | undefined = $state(undefined);

	const onclick = () => {
		open = !open;
	}

	$effect(() => {
		if (!overlay) return;
		overlay.onclick = () => open = false;
	});
</script>

<section class="">
	<div class="z-20 m-[1vh] rounded-3xl fixed top-0 right-0 size-12 bg-light dark:bg-dark shadow-md transform transition-all duration-300 {open ? "size-fit" : "overflow-hidden"}">
		<div class="absolute top-0 right-0">
			<button class="flex-center h-10 w-10 cursor-pointer pr-2 pt-3" {onclick}>
				{#if open}
					<X size={25} />
				{:else}
					<WebGLCanvas width={600} height={600} {init} {render} class="flex object-contain size-12" />
				{/if}
			</button>
		</div>
		{#if open}
			<div class="flex-center flex-1 m-4 mr-10">
				{@render children?.()}
			</div>
		{/if}
	</div>
	<div bind:this={overlay} class="fixed top-0 left-0 z-10 w-full h-full bg-gray-500 opacity-0 transition-opacity duration-300 cursor-pointer {open ? "opacity-50" : "pointer-events-none"}"></div>
</section>
