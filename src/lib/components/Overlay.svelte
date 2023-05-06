<script>
	import Portal from './Portal.svelte';

	import { browser } from '$app/environment';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let show = false;

	const toggleOverflow = () => {
		if (show) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	};

	$: if (browser && show) toggleOverflow();

	const hideOverlay = () => {
		document.body.style.overflow = '';
		dispatch('close');
	};
</script>

<Portal target="body">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="overlay" class:show on:click|stopPropagation={hideOverlay}>
		<slot />
	</div>
</Portal>

<style>
	.overlay {
		background: rgba(0, 6, 64, 0.4);
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		z-index: 1000;
		display: none;
		opacity: 0;
		transition: all 100ms ease-in-out;
		width: 100%;
		height: 100%;
	}

	:global(.overlay.show) {
		display: flex;
		opacity: 1;
	}
</style>
