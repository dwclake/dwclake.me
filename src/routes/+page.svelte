<script lang="ts">
	import portrait from "$assets/images/portrait.jpg?enhanced";
</script>

<main class="default-margin">
	<div class="flex jusify-around items-top w-full">
		<h1 class="text-5xl text-right font-bold md:text-8xl lg:text-9xl">
			DEVON<br/>JAMES<br/>WEBB
		</h1>
		<div class="flex ml-12">
			<enhanced:img src={portrait} class="object-cover h-auto border-4 border-b-16 md:border-8 md:border-b-32 lg:border-16 lg:border-b-64 border-mirage-950 dark:border-mirage-50 rounded-sm md:rounded-md lg:rounded-xl shadow-xl transition transform hover:scale-101 duration-300" alt="selife" aria-label="selfie" />
		</div>
	</div>
</main>
