<script lang="ts">
	import {
		about,
		contacts,
		education,
		hobbies,
		projects,
		skills
	} from "$lib/constants";
	import portrait from "$assets/images/portrait.jpg?enhanced";
</script>

<main class="page-margin">
	<div
		class="jusify-around items-top flex w-full flex-col flex-wrap lg:flex-row lg:flex-nowrap"
	>
		<h1 class="text-right text-5xl font-bold lg:text-7xl xl:text-9xl">
			DEVON<br />JAMES<br />WEBB
		</h1>
		<div class="flex lg:ml-12">
			<enhanced:img
				src={portrait}
				class="mt-4 h-auto transform rounded-xl border-16 border-b-64 border-mirage-950 object-cover shadow-xl transition duration-300 hover:scale-101 md:mt-0"
				alt="selife"
				aria-label="selfie"
			/>
		</div>
	</div>
	<div id="introduction" class="mt-6">
		<h2 class="text-2xl font-semibold md:text-4xl xl:text-6xl">
			Introduction
		</h2>
		<p class="mt-4 text-lg md:text-2xl">{about.introduction}</p>
	</div>
	<div id="projects" class="mt-6">
		<h2 class="text-2xl font-semibold md:text-4xl xl:text-6xl">Projects</h2>
		<ul class="flex-center mt-4 flex-wrap space-y-4 space-x-4">
			{#each projects as project}
				<li
					class="tranform mb-4 rounded-md border border-mirage-200 bg-mirage-100 shadow-md duration-200 hover:scale-103"
				>
					<a
						href="/projects/{project.name}"
						data-sveltekit-preload-data="tap"
					>
						<enhanced:img
							src={project.logo}
							alt={project.name}
							class="size-[100px] object-contain px-2 pt-2"
						/>
						<span
							class="flex-center text-xl font-semibold text-mirage-950"
						>
							{project.name}
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div id="skills" class="mt-6">
		<h2 class="text-2xl font-semibold md:text-4xl xl:text-6xl">Skills</h2>
		<h4 class="mt-4">Work skills:</h4>
		<ul class="flex flex-wrap gap-x-2 gap-y-1">
			{#each skills.work as skill}
				<li
					class="transform rounded-md border border-mirage-200 bg-mirage-100 p-2 text-lg shadow-md duration-300 hover:scale-103"
				>
					{skill}
				</li>
			{/each}
		</ul>
		<h4 class="mt-4">Tech skills:</h4>
		<ul class="flex flex-wrap gap-x-2 gap-y-2">
			{#each skills.tech as skill}
				<li
					class="transform rounded-md border border-mirage-200 bg-mirage-100 p-2 text-lg shadow-md duration-300 hover:scale-105"
				>
					{skill}
				</li>
			{/each}
		</ul>
	</div>
	<div id="education" class="mt-6">
		<h2 class="text-2xl font-semibold md:text-4xl xl:text-6xl">
			Education
		</h2>
		<ul class="mt-4 flex flex-col gap-y-4">
			{#each education as edu}
				<li
					class="transform rounded-md border border-mirage-200 bg-mirage-100 p-4 shadow-md duration-300 hover:scale-103"
				>
					<h3 class="text-xl font-semibold">{edu.institution}</h3>
					<p class="text-lg italic">
						{#if edu.degree}
							{edu.degree} &mdash;
						{/if}
						{edu.start} to {edu.end}
					</p>
					{#if edu.details}
						<p>{edu.details}</p>
					{/if}
					{#if edu.relevantCourses}
						<span class="mt-2">Relevant Courses:</span>
						<div class="flex flex-col">
							{#each edu.relevantCourses as course}
								<li class="ml-4">
									{course.code} &mdash; {course.name}
								</li>
							{/each}
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<div id="experience" class="mt-6">
		<h2 class="text-2xl font-semibold md:text-4xl xl:text-6xl">
			Experience
		</h2>
		<p class="mt-4 text-xl">Work Experience</p>
	</div>
	<div id="contact" class="mt-6">
		<h2 class="text-2xl font-semibold md:text-4xl xl:text-6xl">Contact</h2>
		<ul class="mt-4 flex flex-col gap-y-2 text-lg md:text-xl">
			<li
				class="transform rounded-md border border-mirage-200 bg-mirage-100 p-2 shadow-md duration-300 hover:scale-103"
			>
				<span class="font-semibold">Email:</span>
				<a
					class="cursor-pointer text-mirage-900 hover:text-mirage-950 hover:underline"
					href={contacts.email}
				>
					{contacts.email}
				</a>
			</li>
			<li
				class="transform rounded-md border border-mirage-200 bg-mirage-100 p-2 shadow-md duration-300 hover:scale-103"
			>
				<span class="font-semibold">University Email:</span>
				<a
					class="cursor-pointer text-mirage-900 hover:text-mirage-950 hover:underline"
					href={contacts.edu}
				>
					{contacts.edu}
				</a>
			</li>
			<li
				class="transform rounded-md border border-mirage-200 bg-mirage-100 p-2 shadow-md duration-300 hover:scale-103"
			>
				<span class="font-semibold">GitHub:</span>
				<a
					class="cursor-pointer text-mirage-900 hover:text-mirage-950 hover:underline"
					href={contacts.edu}
				>
					dwclake
				</a>
			</li>
		</ul>
	</div>
	<div id="hobbies" class="mt-6">
		<h2 class="text-2xl font-semibold md:text-4xl xl:text-6xl">Hobbies</h2>
		<ul class="flex-center mt-4 space-x-4">
			{#each hobbies as hobby}
				<li
					class="tranform rounded-md border border-mirage-200 bg-mirage-100 p-2 shadow-md duration-200 hover:scale-103"
				>
					<a
						href="/others/{hobby.name}"
						data-sveltekit-preload-data="tap"
					>
						<span
							class="flex-center text-xl font-semibold text-mirage-950"
							>{hobby.name}</span
						>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</main>
