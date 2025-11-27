<script lang="ts">
	import { X } from "@lucide/svelte";

	import { Navbar } from "$components";
	import { WebGLCanvas } from "$components/ui";
	import { init, render } from "$lib/animations/flower";

	let open = $state(false);
	let overlay: HTMLDivElement | undefined = $state(undefined);

	const onclick = () => {
		open = !open;
	};

	$effect(() => {
		if (!overlay) return;
		overlay.onclick = () => (open = false);
	});
</script>

<section>
	<div
		class="fixed top-0 right-0 z-100 m-[1vh] block size-8 transform rounded-3xl bg-mirage-50 shadow-md transition duration-300 md:hidden {open
			? 'size-fit translate-x-1 -translate-y-1 rounded-xl'
			: 'translate-0'}"
	>
		<div
			class={open
				? "absolute top-3 right-3"
				: "flex-center h-full w-full"}
		>
			<button class="flex-center m-0 size-5 cursor-pointer p-0" {onclick}>
				{#if open}
					<X size={20} />
				{:else}
					<WebGLCanvas
						width={600}
						height={600}
						{init}
						{render}
						class="size-10"
					/>
				{/if}
			</button>
		</div>
		{#if open}
			<Navbar flex="flex-col" embedded={true} {onclick} />
		{/if}
	</div>
	<div
		bind:this={overlay}
		class="fixed top-0 left-0 z-40 h-full w-full cursor-pointer bg-mirage-500 opacity-0 transition-opacity duration-300 {open
			? 'opacity-50'
			: 'pointer-events-none'}"
	></div>
</section>
