import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = () => {
	const signatures = [] as Blob[];

	return {
		signatures
	};
};

export const actions: Actions = {};
