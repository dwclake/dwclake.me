<script lang="ts">
	import { about, education, skills } from "$lib/constants";
	import portrait from "$assets/images/portrait.jpg?enhanced";

	// TODO make contact part of this page, and have the link point to "#contact"
	// also make projects part of this page and link to "#projects"
	// maybe get rid of their links from the top bar entirely (or only on md/lg or below)
	// expand others to music writing and photography page links
</script>

<main class="page-margin">
	<div
		class="jusify-around items-top flex w-full flex-col flex-wrap lg:flex-row lg:flex-nowrap"
	>
		<h1 class="text-right text-5xl font-bold lg:text-9xl">
			DEVON<br />JAMES<br />WEBB
		</h1>
		<div class="flex lg:ml-12">
			<enhanced:img
				src={portrait}
				class="mt-4 h-auto transform rounded-sm border-4 border-b-16 border-mirage-950 object-cover shadow-xl transition duration-300 hover:scale-101 md:rounded-md md:border-8 md:border-b-32 xl:rounded-xl xl:border-16 xl:border-b-64"
				alt="selife"
				aria-label="selfie"
			/>
		</div>
	</div>
	<div id="introduction" class="mt-6">
		<h2 class="text-2xl font-semibold lg:text-6xl">Introduction</h2>
		<p class="text-lg md:text-2xl">{about.introduction}</p>
	</div>
	<div id="projects" class="mt-6">
		<h2 class="text-2xl font-semibold lg:text-6xl">Projects</h2>
		<p class="text-lg md:text-2xl">Project details</p>
	</div>
	<div id="skills" class="mt-6">
		<h2 class="text-2xl font-semibold lg:text-6xl">Skills</h2>
		<p class="text-lg md:text-2xl">Skill details</p>
	</div>
	<div id="education" class="mt-6">
		<h2 class="text-2xl font-semibold lg:text-6xl">Education</h2>
		<p class="text-lg md:text-2xl">Education details</p>
	</div>
	<div id="experience" class="mt-6">
		<h2 class="text-2xl font-semibold lg:text-6xl">Experience</h2>
		<p class="text-lg md:text-2xl">Experience details</p>
	</div>
	<div id="contact" class="mt-6">
		<h2 class="text-2xl font-semibold lg:text-6xl">Contact</h2>
		<p class="text-lg md:text-2xl">Contact details</p>
	</div>
</main>
