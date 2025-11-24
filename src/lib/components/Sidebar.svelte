<script lang="ts">
	import { X } from "@lucide/svelte";

	import { WebGLCanvas } from "$components/ui";
	import { init, render } from "$lib/animations/flower";
	import { pages, projects } from "$lib/constants";

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

<section>
	<div class="z-50 m-[1vh] rounded-3xl fixed top-0 right-0 size-8 bg-light dark:bg-dark shadow-md dark:shadow-gray-700 transition transform duration-300 { open ? "size-fit rounded-xl translate-x-1 -translate-y-1" : "translate-0" }">
		<div class="{ open ? "absolute top-3 right-3" : "w-full h-full flex-center" }">
			<button class="p-0 m-0 flex-center size-5 cursor-pointer" {onclick}>
				{#if open}
					<X size={20} />
				{:else}
					<WebGLCanvas width={600} height={600} {init} {render} class="size-10" />
				{/if}
			</button>
		</div>
		{#if open}
			<nav class="m-4 mr-10">
				<ul class="flex flex-col space-y-0.5 text-lg">
					{#each pages as { href, name }}
						<li><a class="cursor-pointer" {href} {onclick}>{name}</a></li>
						{#if name === "Projects"}
							<li>
								<ul class="flex flex-col">
									{#each projects as project}
										<li class="pl-4">
											<a
												class="cursor-pointer"
												href="{href}/{project.name}"
												{onclick}
											>
												{project.name}
											</a>
										</li>
									{/each}
								</ul>
							</li>
						{/if}
					{/each}
				</ul>
			</nav>
		{/if}
	</div>
	<div bind:this={overlay} class="fixed top-0 left-0 z-40 w-full h-full bg-gray-500 opacity-0 transition-opacity duration-300 cursor-pointer { open ? "opacity-50" : "pointer-events-none" }"></div>
</section>
