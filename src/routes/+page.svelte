<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
    <title>blog - by nikee</title>
</svelte:head>

<h1>blog - by nikee</h1>

<ul>
	{#each data.posts as post}
		<li>
			<a href="/{post.slug}">
				{post.metadata.title}
			</a>
			<p>{post.metadata.description}</p>
		</li>
	{/each}
</ul>

