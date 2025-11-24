import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
	return {
		project_name: params.name
	}
}
