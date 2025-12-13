import ruka_logo from "$assets/images/projects/ruka/logo.svg?enhanced";
import solecism_logo from "$assets/images/projects/solecism/logo.svg?enhanced";
import eyedhd_logo from "$assets/images/projects/eyeDHD/logo.svg?enhanced";

interface About {
	introduction: string;
}

export const about: About = {
	introduction:
		"Salut! Comment ça va? I am a undergraduate computer science major at Frenso State University. My passions are compiler/programming language design and web development. I love animals and nature, photography, writing, and music."
};

interface Skills {
	work: string[];
	tech: string[];
}

/*
![web-dev](https://skillicons.dev/icons?i=ts,svelte,tailwind,react,electron,sqlite&perline=6)
![low-level](https://skillicons.dev/icons?i=zig,c,ocaml)
![others](https://skillicons.dev/icons?i=git,github,linux)

<div align="left">
	<img width="35" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png" alt="TypeScript" title="TypeScript"/>
	<img width="35" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/svelte.png" alt="Svelte" title="Svelte"/>
	<img width="35" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png" alt="Tailwind CSS" title="Tailwind CSS"/>
	<img width="35" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="React" title="React"/>
	<img width="35" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/electron.png" alt="Electron" title="Electron"/>
	<img width="35" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sqlite.png" alt="SQLite" title="SQLite"/>
</div>


<div align="left">
	<img width="35" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ziglang.png" alt="Zig" title="Zig"/>
	<img width="35" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c.png" alt="C" title="C"/>
	<img width="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ocaml/ocaml-original.svg" alt="OCaml" title="OCaml"/>
</div>

<div align="left">
	<img width="35" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png" alt="Git" title="Git"/>
	<img width="35" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png" alt="GitHub" title="GitHub"/>
	<img width="35" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/linux.png" alt="Linux" title="Linux"/>
</div>
*/

export const skills: Skills = {
	work: [
		"Great at problem solving",
		"Works great in teams",
		"Strong communication skills",
		"Adapts to change quickly"
	],
	tech: [
		"Typescript",
		"Svelte",
		"Tailwind",
		"Bun",
		"Solidjs",
		"Electrobun",
		"React",
		"Electron",
		"Sqlite",
		"Zig",
		"C",
		"Git",
		"Github",
		"Linux"
	]
};

interface University {
	institution: string;
	start: string;
	end: string;
	degree?: string;
	completed?: boolean;
	relevant_courses?: { code: string; name: string }[];
}

export const education: University[] = [
	{
		institution: "California State University, Fresno",
		start: "August 2022",
		end: "Current",
		degree: "Bachelor's of Science in Computer Science",
		completed: false,
		relevant_courses: [
			{
				code: "CSCI 150",
				name: "Software Engineering"
			}
		]
	},
	{
		institution: "University of Manitoba",
		start: "August 2021",
		end: "May 2022",
		degree: "Bachelor's of Science in Microbiology",
		completed: false
	},
	{
		institution: "California State University, Monterey",
		start: "August 2020",
		end: "December 2020",
		degree: "Bachelor's of Science in Biology",
		completed: false
	},
	{
		institution: "Fresno City College",
		start: "January 2015",
		end: "May 2020"
	}
];

export const projects = [
	{
		name: "ruka",
		github: "https://www.github.com/ruka-lang/ruka",
		website: "https://www.ruka-lang.org",
		logo: ruka_logo,
		description:
			"Full-stack programming language, targeting arm64, wasm, and javascript; written in Zig."
	},
	{
		name: "solecism",
		github: "https://www.github.com/dwclake/solecism",
		website: "https://solecism.dwclake.me",
		logo: solecism_logo,
		description:
			"WYSIWYG editor for creative projects, hopefully one part of an open-source creative software suite; built with Electrobun and Solidjs."
	},
	{
		name: "eyedhd",
		github: "https://www.github.com/BernyFranklin/eyeDHD",
		website: "",
		logo: eyedhd_logo,
		description:
			"Tool for generating eye movement and dilation animations using measurements taken by the Fresno State Psychology department during their research striving to diagnose ADHD quantitatively; built with Electron and React."
	}
];

export const contacts = [
	{ title: "Email", value: "clake.dw@gmail.com" },
	{ title: "Edu", value: "dwebb559@mail.fresnostate.edu" },
	{ title: "Github", value: "https://www.github.com/dwclake" }
];

export const hobbies = ["photography", "writing", "music"];

export const default_links = [
	{ name: "home", href: "/" },
	{ name: "projects", href: "#projects" },
	{ name: "education", href: "#education" },
	//{ name: "experience", href: "#experience" },
	{ name: "contact", href: "#contact" },
	{ name: "hobbies", href: "#hobbies" }
	//{ name: "say hi!", href: "/say-hi" }
];

export const alternate_links = [
	{ name: "home", href: "/" },
	{ name: "projects", href: "/#projects" },
	{ name: "education", href: "/#education" },
	//{ name: "experience", href: "/#experience" },
	{ name: "contact", href: "/#contact" },
	{ name: "hobbies", href: "/#hobbies" }
	//{ name: "say hi!", href: "/say-hi" }
];

export default {
	hobbies,
	contacts,
	default_links,
	alternate_links,
	education,
	skills,
	about,
	projects
};
