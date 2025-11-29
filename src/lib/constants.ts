import rukaLogo from "$assets/images/projects/ruka/logo.svg?enhanced";
import osLogo from "$assets/images/projects/oldies-station/logo.svg?enhanced";
import eyedhdLogo from "$assets/images/projects/eyeDHD/logo.svg?enhanced";

interface About {
	introduction: string;
}

export const about: About = {
	introduction:
		"Salut! Comment ça va? I am a undergraduate computer science major at Frenso State University. I love nature, music, photography, and programming."
};

interface Skills {
	work: string[];
	tech: string[];
}

export const skills: Skills = {
	work: [
		"Great at problem solving",
		"Works great with teams",
		"Strong communication skills",
		"Adapts to change easily"
	],
	tech: [
		"Typescript",
		"Sveltekit",
		"Tailwind",
		"Sqlite",
		"Bun",
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
	details?: string;
	relevantCourses?: { code: string; name: string }[];
}

export const education: University[] = [
	{
		institution: "California State University, Fresno",
		start: "August 2022",
		end: "Current",
		degree: "Bachelor's of Science in Computer Science",
		relevantCourses: [
			{
				code: "CSCI 150",
				name: "Software Engineering"
			}
		]
	},
	{
		institution: "California State University, Monterey",
		start: "August 2020",
		end: "December 2020"
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
	{
		name: "solecism",
		link: "https://www.github.com/oldies-station/solecism",
		logo: osLogo,
		description: ""
	},
	{
		name: "eyedhd",
		link: "https://www.github.com/BernyFranklin/eyeDHD",
		logo: eyedhdLogo,
		description: ""
	}
];

export const contacts = {
	email: "clake.dw@gmail.com",
	edu: "dwebb559@mail.fresnostate.edu",
	github: "https://www.github.com/dwclake"
};

export const hobbies = [
	{ name: "photography" },
	{ name: "writing" },
	{ name: "music" }
];

export const pages = [
	{ name: "home", href: "/" },
	{ name: "projects", href: "#projects" },
	{ name: "education", href: "#education" },
	{ name: "experience", href: "#experience" },
	{ name: "contact", href: "#contact" },
	{ name: "hobbies", href: "#hobbies" },
	{ name: "say hi!", href: "/say-hi" }
];
