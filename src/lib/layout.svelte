<script lang="ts">
	let { children, metadata } = $props();
</script>

<svelte:head>
    <title>{metadata.title} - {metadata.date}</title>
	<meta name="description" content={metadata.description} />
</svelte:head>


{@render children()}
