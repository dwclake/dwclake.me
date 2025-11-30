import rukaLogo from "$assets/images/projects/ruka/logo.svg?enhanced";
// import osLogo from "$assets/images/projects/oldies-station/logo.svg?enhanced";
import eyedhdLogo from "$assets/images/projects/eyeDHD/logo.svg?enhanced";

interface About {
	introduction: string;
}

export const about: About = {
	introduction:
		"Salut! Comment ça va? I am a undergraduate computer science major at Frenso State University. My passions are compiler/programming language design and web development. I love animals, nature, music, photography, and writing."
};

interface Skills {
	work: string[];
	tech: string[];
}

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
		"Sqlite",
		//"Bun",
		"React",
		"Electron",
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
	relevantCourses?: { code: string; name: string }[];
}

export const education: University[] = [
	{
		institution: "California State University, Fresno",
		start: "August 2022",
		end: "Current",
		degree: "Bachelor's of Science in Computer Science",
		completed: false,
		relevantCourses: [
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
		link: "https://www.github.com/ruka-lang/ruka",
		logo: rukaLogo,
		description: ""
	},
	// {
	// 	name: "solecism",
	// 	link: "https://www.github.com/oldies-station/solecism",
	// 	logo: osLogo,
	// 	description: ""
	// },
	{
		name: "eyedhd",
		link: "https://www.github.com/BernyFranklin/eyeDHD",
		logo: eyedhdLogo,
		description: ""
	}
];

export const contacts = [
	{ title: "Email", value: "clake.dw@gmail.com" },
	{ title: "Edu", value: "dwebb559@mail.fresnostate.edu" },
	{ title: "Github", value: "https://www.github.com/dwclake" }
];

export const hobbies = ["photography", "writing", "music"];

export const navlinks = [
	{ name: "home", href: "/" },
	{ name: "projects", href: "#projects" },
	{ name: "education", href: "#education" },
	{ name: "experience", href: "#experience" },
	{ name: "contact", href: "#contact" },
	{ name: "hobbies", href: "#hobbies" },
	{ name: "say hi!", href: "/say-hi" }
];
