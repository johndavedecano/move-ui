<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';

	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import DotNav from './DotNav.svelte';

	export let active = 0;

	export let items = [];

	const dispatch = createEventDispatcher();

	const onGetStarted = () => console.log('get started');

	$: current = items[active];
</script>

<div class="splash" style="--background-image: url({current.background});">
	<Card customClass="splash-card" radius="lg">
		<div class="splash-card-inner">
			<div class="navy-dark text-center title-4 fw-600 mb-4">
				{@html current.title}
			</div>
			<div class="text-center body gray-8 mb-6">
				{current.description}
			</div>
			<DotNav
				{active}
				{items}
				on:change={(evt) => dispatch('change', { active: evt.detail.active })}
			/>
			<div class="mb-6" />
			<Button color="tertiary" size="lg" fullWidth on:click={onGetStarted}>Get Started</Button>
		</div>
	</Card>
</div>

<style>
	.splash {
		width: 100%;
		height: 100vh;
		background-color: var(--grape-light);
		background-repeat: no-repeat;
		background-size: contain;
		background-position-y: top;
		background-position-x: center;
		background-image: var(--background-image);
	}

	.splash-card-inner {
		padding: 32px 27.5px 32px 27.5px;
	}

	:global(.splash-card) {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		border-bottom-left-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
		transition: height 100ms ease-in-out;
	}
</style>
