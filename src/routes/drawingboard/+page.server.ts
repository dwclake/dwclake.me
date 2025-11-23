import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const signatures: string[] = [
		"hey",
		"hi",
		"hello",
		"howdy",
		"heyy",
		"what's up"
	];

	return {
		signatures
	};
}
