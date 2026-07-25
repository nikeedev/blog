<script lang="ts">
	import Layout from '$lib/layout.svelte';

	let { data } = $props();

	const Post = data.component;
</script>

<svelte:head>
    <style>
        #date {
            font-size: 13px;
        }
    </style>
</svelte:head>

<Layout metadata={data.metadata}>
    <h1>{data.metadata.title}</h1>
    <p id="date">{data.metadata.date}</p>

    <Post />
    <a href="../"><i>back...</i></a> 
</Layout>
