import { error } from '@sveltejs/kit';

export const prerender = true;

export const entries = async () => {
	const posts = import.meta.glob('/src/posts/*.svx');

	return Object.keys(posts).map((path) => ({
		post: path.split('/').pop()?.replace('.svx', '')
	}));
};

export async function load({ params }) {
    const posts = import.meta.glob('/src/posts/*.svx');

    const post = posts[`/src/posts/${params.post}.svx`];

    if (!post) {
        error(404, 'Post not found');
    }

    const module = await post();

    return {
        component: module.default,
        metadata: module.metadata
    };
}
