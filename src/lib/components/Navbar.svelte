<script lang="ts">
	import { pages, projects } from "$lib/constants";

	interface NavbarProps {
		flex?: string,
		projectStyle?: string
	}

	const { flex, projectStyle }: NavbarProps = $props();
</script>

<nav class="hidden md:flex justify-center items-center m-4 mr-10">
	<ul class="flex {flex} space-x-4 text-lg">
		{#each pages as { href, name }}
			{#if name === "projects"}
				<div class="hidden lg:flex transform -translate-y-1 border rounded-sm border-mirage-200 bg-mirage-50 p-1">
					<span class="text-mirage-700 pr-4">{name}</span>
					<ul class="flex {flex} space-x-4">
						{#each projects as project}
							<a
								class="cursor-pointer {projectStyle}"
								href="{href}/{project.name}"
								data-sveltekit-preload-data="tap"
							>
								{project.name}
							</a>
						{/each}
					</ul>
				</div>
			{:else}
				<a class="cursor-pointer" {href}>{name}</a>
			{/if}
		{/each}
	</ul>
</nav>
