import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const signatures: string[] = [
		"placeholder",
		"placeholder",
		"placeholder",
		"placeholder",
		"placeholder",
		"placeholder"
	];

	return {
		signatures
	};
}
