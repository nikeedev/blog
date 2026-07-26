<script lang="ts">
    import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
    <title>blog - by nikee</title>
    <meta property="og:title" content="blog - by nikee">
    <meta property="og:description" content="Welcome to my blog :3">
</svelte:head>

<p id="title">&gt; blog</p>
<p id="nikee" style="bottom:0;">made by <a href="https://nikee.dev">nikeedev</a></p>
<div id="posts">
    {#each data.posts as post}
        <button class="post" onclick="{() => {window.location.href = resolve("/") + post.slug}}">
            <p class="posts-title">{post.metadata.title}</p>
            <p class="posts-date">{post.metadata.date}</p>
	        <p class="posts-desc">{post.metadata.description}</p>
        </button>
    {/each}
</div>


