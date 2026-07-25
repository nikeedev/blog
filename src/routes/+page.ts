export async function load() {
	const posts = import.meta.glob('/src/posts/*.svx');

	const allPosts = await Promise.all(
		Object.entries(posts).map(async ([path, resolver]) => {
			const post = await resolver();

			return {
				slug: path.split('/').pop()?.replace('.svx', ''),
				metadata: post.metadata
			};
		})
	);

	allPosts.sort(
		(a, b) =>
			new Date(b.metadata.date).getTime() -
			new Date(a.metadata.date).getTime()
	);

	return {
		posts: allPosts
	};
}

/*export async function load() {
	const posts = import.meta.glob('/src/posts/*.svx');

	const allPosts = await Promise.all(
		Object.entries(posts).map(async ([path, resolver]) => {
			try {
				const post = await resolver();
				console.log("SUCCESS:", post);

				return {
					slug: path.split('/').pop()?.replace('.svx', ''),
					metadata: post.metadata
				};
			} catch (e) {
				console.error("FAILED IMPORT:", path);
				console.error(e);
				throw e;
			}
		})
	);

	return { posts: allPosts };
}*/
