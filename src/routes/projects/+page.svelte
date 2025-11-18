<script lang="ts">
	const links = [
		{ href: "/projects/ruka", name: "Ruka" },
		{ href: "/projects/solecism", name: "Solecism" },
		{ href: "/projects/eyeDHD", name: "eyeDHD" }
	];
</script>

<main>
	<nav class="">
		<ul class="flex flex-col">
			{#each links as { href, name }}
				<li><a class="" {href}>{name}</a></li>
			{/each}
		</ul>
	</nav>
</main>
