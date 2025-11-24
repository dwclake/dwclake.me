<script lang="ts">
	import { type PageProps } from "./$types";
	import { Plus } from "@lucide/svelte";
	import { Button } from "$components/ui";

	const { data }: PageProps = $props();

	const onclick = () => {

	}
</script>

<main class="size-full">
	<div class="flex-center pt-12 pb-6">
		<h1 class="font-bold text-5xl">Say hi!</h1>
	</div>
	<div class="flex-center pt-6">
		<a href="/drawingboard/draw" class="cursor-pointer border-3 border-mirage-950 rounded-sm">
			<Plus size="45" />
		</a>
	</div>
	<div class="flex-center pt-12">
		<div class="grid grid-cols-3 gap-y-6">
			{#each data.signatures as signature}
				<canvas class="flex m-4 border border-mirage-950 dark:border-mirage-50 rounded-sm shadow-xl" width="400" height="300">
					{signature}
				</canvas>
			{/each}
		</div>
	</div>
</main>
