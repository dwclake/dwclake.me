<script lang="ts">
	import { Card, List } from "$components/ui";
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
		<h1 class="heading-1 mb-4 text-right">
			DEVON<br />JAMES<br />WEBB
		</h1>
		<Card class="mt-4 flex pb-16 hover:scale-101 md:mt-0 lg:ml-12">
			<enhanced:img
				src={portrait}
				class="h-auto rounded-lg object-cover"
				alt="selife"
				aria-label="selfie"
			/>
		</Card>
	</div>
	<div id="introduction" class="mt-6">
		<h2 class="heading-2">Introduction</h2>
		<p class="heading-3 mt-4 font-normal">{about.introduction}</p>
	</div>
	<div id="projects" class="mt-6">
		<h2 class="heading-2">Projects</h2>
		<List class="mt-4" list={projects}>
			{#snippet Item({ name, logo }: any)}
				<Card class="link mb-4">
					<a
						href="/projects/{name}"
						data-sveltekit-preload-data="tap"
					>
						<enhanced:img
							src={logo}
							alt={name}
							class="size-[100px] object-contain px-1 pt-1"
						/>
						<span class="flex-center heading-4">
							{name}
						</span>
					</a>
				</Card>
			{/snippet}
		</List>
	</div>
	<div id="skills" class="mt-6">
		<h2 class="heading-2">Skills</h2>
		<h4 class="heading-4 mt-4">Work skills:</h4>
		<List list={skills.work}>
			{#snippet Item(skill: string)}
				<Card><p class="paragraph">{skill}</p></Card>
			{/snippet}
		</List>
		<h4 class="heading-4 mt-4">Tech skills:</h4>
		<List list={skills.tech}>
			{#snippet Item(skill: string)}
				<Card><p class="paragraph">{skill}</p></Card>
			{/snippet}
		</List>
	</div>
	<div id="education" class="mt-6">
		<h2 class="heading-2">Education</h2>
		<List class="mt-4 flex-col" list={education}>
			{#snippet Item({
				institution,
				start,
				end,
				degree,
				completed,
				relevantCourses
			}: any)}
				<Card>
					<h4 class="heading-4">
						{institution}
						<span class="paragraph italic">
							{start} to {end}
						</span>
					</h4>
					<p class="paragraph italic">
						{#if degree}
							{degree}
							{completed ? "&mdash; Earned" : undefined}
						{/if}
					</p>
					{#if relevantCourses}
						<h4 class="heading-4 mt-2">Relevant Courses:</h4>
						<List list={relevantCourses} class="ml-4">
							{#snippet Item({ code, name }: any)}
								<p class="paragraph">{code} &mdash; {name}</p>
							{/snippet}
						</List>
					{/if}
				</Card>
			{/snippet}
		</List>
	</div>
	<!--
	<div id="experience" class="mt-6">
		<h2 class="heading-2">Experience</h2>
		<p class="mt-4 text-xl">Work Experience</p>
	</div>
	-->
	<div id="contact" class="mt-6">
		<h2 class="heading-2">Contact</h2>
		<List class="mt-4 flex-col" list={contacts}>
			{#snippet Item({ title, value }: any)}
				<Card>
					<span class="heading-4">{title}:</span>
					<a class="link paragraph" href={value}>
						{value}
					</a>
				</Card>
			{/snippet}
		</List>
	</div>
	<div id="hobbies" class="mt-6">
		<h2 class="heading-2">Hobbies</h2>
		<List class="mt-4" list={hobbies}>
			{#snippet Item(hobby: string)}
				<Card>
					<a href="/others/{hobby}" data-sveltekit-preload-data="tap">
						<span class="flex-center link heading-4">
							{hobby}
						</span>
					</a>
				</Card>
			{/snippet}
		</List>
	</div>
</main>
