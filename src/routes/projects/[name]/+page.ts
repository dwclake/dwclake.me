import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
	return {
		project_name: params.name
	}
}
