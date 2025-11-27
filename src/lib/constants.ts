import rukaLogo from "$assets/images/projects/ruka/logo.svg?enhanced";
import osLogo from "$assets/images/projects/oldies-station/logo.svg?enhanced";
import eyedhdLogo from "$assets/images/projects/eyeDHD/logo.svg?enhanced";

interface About {
	introduction: string;
}

interface Skills {
	workSkills: string[];
	techSkills: string[];
}

interface University {
	name: string;
	start: string;
	end: string;
	degree?: string;
	completed?: boolean;
	relevantCourses?: { code: string; name: string }[];
}

export const about: About = {
	introduction:
		"Salut! Comment ça va? I am a undergraduate computer science major at Frenso State University. I love nature, music, photography, and programming."
};

export const skills: Skills = {
	workSkills: [
		"Great at problem solving",
		"Works great with teams",
		"Strong communication skills",
		"Adapts to change easily"
	],
	techSkills: [
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

export const education: University[] = [
	{
		name: "California State University, Fresno",
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
		name: "California State University, Monterey",
		start: "August 2020",
		end: "December 2020",
		degree: "Bachelor's of Science in Biology",
		completed: false
	},
	{
		name: "Fresno City College",
		start: "January 2015",
		end: "May 2020"
	}
];

interface Project {
	name: string;
	link: string;
	logo: any; // @sveltejs/enhanced-img.Picture
	description: string;
}

export const projects: Project[] = [
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

export const others = [
	{ name: "photography" },
	{ name: "writing" },
	{ name: "music" }
];

export const pages = [
	{ name: "home", href: "/" },
	{ name: "projects", href: "/projects" },
	{ name: "contact", href: "/contact" },
	{ name: "say hi!", href: "/say-hi" },
	{ name: "others", href: "/others" }
];
