<script lang="ts">
	import { Button, Canvas } from "$components/ui";

	import { store } from "$state";
	import { alternate_links } from "$lib/constants";

	store.links = alternate_links;
</script>

<main class="page-margin">
	<div class="flex-center">
		<Canvas
			width={800}
			height={600}
			class="h-[40%] w-[60%] rounded-sm border border-mirage-950 shadow-xl dark:border-mirage-50"
		/>
	</div>
	<div class="flex-center mt-4 space-x-4">
		<Button>Submit</Button>
		<Button>Reset</Button>
	</div>
</main>
