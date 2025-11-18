<script lang="ts">
	import { Menu, X } from "@lucide/svelte";

	import { WebGLCanvas } from "$components/ui";
	import { init, render } from "$lib/animations/flower";

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
	<div class="z-20 m-[1vh] rounded-3xl fixed overflow-y-auto top-0 right-0 size-12 bg-[#e3e4e8] shadow-md transform transition-all duration-300 {open ? "h-[98vh] w-[97vw] sm:w-[50vw] lg:w-[35vw]" : ""}">
		<div class="absolute top-0 right-0">
			<button class="flex-center h-12 w-12 cursor-pointer ml-0.5 mt-px" {onclick}>
				{#if open}
					<X size={30} />
				{:else}
					<WebGLCanvas width={600} height={600} {init} {render} class="flex object-contain size-13" />
				{/if}
			</button>
		</div>
	</div>
		<div bind:this={overlay} class="fixed top-0 left-0 z-10 w-full h-full bg-gray-500 opacity-0 transition-opacity duration-300 cursor-pointer {open ? "opacity-50" : "pointer-events-none"}"></div>
</section>
