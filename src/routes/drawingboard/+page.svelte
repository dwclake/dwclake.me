<script lang="ts">
	import { type PageProps } from "./$types";
	import { Plus } from "@lucide/svelte";
	import { Button } from "$components/ui";

	const { data }: PageProps = $props();

	const onclick = () => {

	}
</script>

<main class="view-container">
	<div class="flex-center">
		<span class="font-bold text-5xl pr-4">Say hi!</span>
	</div>
	<div class="flex-center pt-6 pb-12">
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 pb-12">
			{#each data.signatures as signature}
				<canvas class="flex border border-mirage-950 dark:border-mirage-50 rounded-sm shadow-xl transform scale-80 sm:scale-100 md:scale-85 lg:scale-95 duration-200" width="400" height="300">
					{signature}
				</canvas>
			{/each}
			<div class="flex-center">
				<a href="/drawingboard/draw" class="flex-center cursor-pointer border border-mirage-950 dark:border-mirage-50 rounded-sm shadow-xl transform scale-80 hover:scale-82 sm:scale-100 sm:hover:scale-102 md:scale-85 md:hover:scale-87 lg:scale-95 lg:hover:scale-97 duration-200 w-[400px] h-[300px]">
					<Plus size="45" />
				</a>
			</div>
		</div>
	</div>
	<div class="flex-center pb-12">
	</div>
</main>
