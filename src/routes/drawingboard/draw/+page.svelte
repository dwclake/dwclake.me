<script lang="ts">
	import { Button, Canvas } from "$components/ui";
</script>

<main class="view-container">
	<div class="flex-center">
		<Canvas width={800} height={600} class="w-[60%] h-[40%] border border-mirage-950 dark:border-mirage-50 rounded-sm shadow-xl" />
	</div>
	<div class="flex-center space-x-4 mt-4">
		<Button>Submit</Button>
		<Button>Reset</Button>
	</div>
</main>
