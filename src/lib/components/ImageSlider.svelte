<script>
	// @ts-nocheck
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import DotNav from './DotNav.svelte';

	let width = 0;
	let height = 0;

	let active = 0;

	export let items = ['/slide-1.jpg', '/slide-2.jpg', '/slide-3.jpg', '/slide-4.jpg'];

	$: offset = active * width;

	const dimensions = (node) => {
		width = node.offsetWidth;
		height = node.offsetHeight;

		const handleResize = () => {
			width = node.offsetWidth;
			height = node.offsetHeight;
		};

		window.addEventListener('resize', handleResize, true);

		return {
			destroy() {
				window.removeEventListener('resize', handleResize, true);
			}
		};
	};
</script>

<div class="image-slider-wrapper">
	<div class="image-slider" use:dimensions>
		<div class="image-slider-items" style="transform: translateX({0 - offset}px);">
			{#each items as item}
				<div
					class="image-slider-item"
					style="background-image: url('{item}'); height: {height}px; min-width: {width}px;"
					transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
				/>
			{/each}
		</div>
	</div>
	<DotNav {items} {active} on:change={(evt) => (active = evt.detail.active)} />
</div>

<style>
	.image-slider-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.image-slider {
		position: relative;
		width: 100%;
		padding-top: 56.25%;
		border-radius: 12px;
		overflow: hidden;
	}

	.image-slider-items {
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		will-change: transform;
		transition: 0.3s ease-in-out;
		-webkit-transition: 0.3s ease-in-out;
	}

	.image-slider-item {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
