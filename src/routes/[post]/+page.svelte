<script lang="ts">
	import Layout from '$lib/layout.svelte';
    import { resolve } from '$app/paths';

	let { data } = $props();

	const Post = data.component;
</script>

<svelte:head>
    <meta property="og:title" content="{data.metadata.title}">
    <meta property="og:description" content="{data.metadata.description}">
</svelte:head>

<Layout metadata={data.metadata}>
    <p class="post-title"> &gt; {data.metadata.title}</p>
    <p class="post-date">{data.metadata.date}</p>

    <Post />
    <a class="back" href="{resolve("/")}"><i>back...?</i></a> 
</Layout>
