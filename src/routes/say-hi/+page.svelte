<script lang="ts">
	import { type PageProps } from "./$types";
	import { Plus } from "@lucide/svelte";
	import { Button } from "$components/ui";

	const { data }: PageProps = $props();

	const onclick = () => {};

	$effect(() => {
		const canvases =
			document.querySelectorAll<HTMLCanvasElement>(".drawing");
		canvases.forEach((canvas) => {
			const ctx = canvas.getContext("2d");
			const signature = canvas.getAttribute("id");
			if (ctx && signature) {
				ctx.fillStyle = "#191825";
				ctx.font = "30px Roboto";
				ctx.textAlign = "center";
				ctx.fillText(signature, canvas.width / 2, canvas.height / 2);

				//const img = new Image();
				//img.onload = () => {
				//ctx.clearRect(0, 0, canvas.width, canvas.height);
				//ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				//};
			}
		});
	});
</script>

<main class="default-margin my-12">
	<div class="flex-center">
		<span class="text-5xl font-bold">Say hi!</span>
	</div>
	<div class="flex-center pt-12 pb-12">
		<div
			class="grid grid-cols-1 gap-x-16 sm:gap-y-4 md:gap-y-8 lg:gap-y-12 xl:grid-cols-2"
		>
			{#each data.signatures as signature}
				<canvas
					class="drawing flex-center scale-80 transform rounded-sm border border-mirage-950 shadow-xl duration-200 sm:scale-100 md:scale-105 lg:scale-110"
					width="400"
					height="300"
					id={signature}
				>
				</canvas>
			{/each}
			<div class="flex-center">
				<a
					href="/say-hi/draw"
					class="flex-center aspect-4/3 h-[300px] w-[400px] scale-80 transform cursor-pointer rounded-sm border border-mirage-950 shadow-xl duration-200 hover:scale-83 sm:scale-100 sm:hover:scale-103 md:scale-105 md:hover:scale-108 lg:scale-110 lg:hover:scale-113"
				>
					<Plus size="45" />
				</a>
			</div>
		</div>
	</div>
</main>
