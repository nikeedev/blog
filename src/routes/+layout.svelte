<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
  	import logo from '$lib/assets/logo.png';
    import '../style.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
    <meta property="og:image" content="{logo}">
</svelte:head>

{@render children()}
