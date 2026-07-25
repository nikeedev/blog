import { error } from '@sveltejs/kit';

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
