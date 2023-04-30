<script>
	import { page } from '$app/stores';

	import Splash from '$lib/demos/Splash.svelte';

	$: slug = $page.params.slug;

	$: component =
		{
			splash: Splash
		}[slug] || Splash;
</script>

<svelte:component this={component} />
