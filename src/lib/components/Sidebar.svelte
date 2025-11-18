<script lang="ts">
	import { Menu, X } from "@lucide/svelte";
	import { twMerge } from "tw-merge";

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
	<div class="z-20 m-[1vh] rounded-3xl fixed overflow-y-auto top-0 right-0 size-12 bg-gray-50 border-5 border-gray-100 shadow-md transform transition-all ease-in-out duration-300 {open ? "h-[98vh] w-[25%] border-gray-200" : ""}">
		<div class="absolute top-0 right-0">
			<button class="flex-center h-10 w-10 cursor-pointer p-1" {onclick}>
				{#if open}
					<X size={30} />
				{:else}
					<Menu size={25} />
				{/if}
			</button>
		</div>
	</div>
		<div bind:this={overlay} class="fixed top-0 left-0 z-10 w-full h-full bg-gray-500 opacity-0 transition-opacity ease-in-out duration-300 cursor-pointer {open ? "opacity-50" : "pointer-events-none"}"></div>
</section>
