import { default_links } from "./constants";

export const store: {
	links: { name: string; href: string }[];
} = $state({
	links: default_links
});
export const drawings = $state([]);
export const projects = $state([]);
export const blogs = $state([]);
export const photos = $state([]);
export const writings = $state([]);
export const songs = $state([]);
