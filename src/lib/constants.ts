import rukaLogo from "$lib/assets/images/projects/ruka/logo.svg?enhanced";
import osLogo from "$lib/assets/images/projects/oldies-station/logo.svg?enhanced";
import eyedhdLogo from "$lib/assets/images/projects/eyeDHD/logo.svg?enhanced";

export const projects = [
	{
		name: "ruka",
		link: "https://www.github.com/ruka-lang/ruka",
		logo: rukaLogo
	},
	{
		name: "solecism",
		link: "https://www.github.com/oldies-station/solecism",
		logo: osLogo
	},
	{
		name: "eyedhd",
		link: "https://www.github.com/BernyFranklin/eyeDHD",
		logo: eyedhdLogo
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
	{ name: "others", href: "/others"}
];
