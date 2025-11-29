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
		<div class="card mt-4 flex p-4 pb-16 hover:scale-101 md:mt-0 lg:ml-12">
			<enhanced:img
				src={portrait}
				class="h-auto object-cover"
				alt="selife"
				aria-label="selfie"
			/>
		</div>
	</div>
	<div id="introduction" class="mt-6">
		<h2 class="heading-2">Introduction</h2>
		<p class="mt-4 text-lg md:text-2xl">{about.introduction}</p>
	</div>
	<div id="projects" class="mt-6">
		<h2 class="heading-2">Projects</h2>
		<ul class="list mt-4">
			{#each projects as project}
				<li class="card mb-4 p-0">
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
		<h2 class="heading-2">Skills</h2>
		<h4 class="mt-4 font-semibold">Work skills:</h4>
		<ul class="list">
			{#each skills.work as skill}
				<li class="card text-lg">
					{skill}
				</li>
			{/each}
		</ul>
		<h4 class="mt-4 font-semibold">Tech skills:</h4>
		<ul class="list">
			{#each skills.tech as skill}
				<li class="card text-lg">
					{skill}
				</li>
			{/each}
		</ul>
	</div>
	<div id="education" class="mt-6">
		<h2 class="heading-2">Education</h2>
		<ul class="list mt-4 flex-col">
			{#each education as edu}
				<li class="card p-4">
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
		<h2 class="heading-2">Experience</h2>
		<p class="mt-4 text-xl">Work Experience</p>
	</div>
	<div id="contact" class="mt-6">
		<h2 class="heading-2">Contact</h2>
		<ul class="list mt-4 flex-col">
			<li class="card text-lg md:text-xl">
				<span class="font-semibold">Email:</span>
				<a
					class="cursor-pointer text-mirage-900 hover:text-mirage-950 hover:underline"
					href={contacts.email}
				>
					{contacts.email}
				</a>
			</li>
			<li class="card text-lg md:text-xl">
				<span class="font-semibold">University Email:</span>
				<a
					class="cursor-pointer text-mirage-900 hover:text-mirage-950 hover:underline"
					href={contacts.edu}
				>
					{contacts.edu}
				</a>
			</li>
			<li class="card text-lg md:text-xl">
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
		<h2 class="heading-2">Hobbies</h2>
		<ul class="list mt-4">
			{#each hobbies as hobby}
				<li class="card">
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
