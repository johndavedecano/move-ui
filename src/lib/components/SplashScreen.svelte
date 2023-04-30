<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';

	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';

	export let active = 0;

	export let items = [];

	const dispatch = createEventDispatcher();

	const onClickItem = (nextActive) => dispatch('change', { active: nextActive });

	const onGetStarted = () => console.log('get started');

	$: current = items[active];
</script>

<div class="splash">
	<Card customClass="splash-card" radius="lg">
		<div class="splash-card-inner">
			<div class="navy-dark text-center title-4 fw-600 mb-4">
				{@html current.title}
			</div>
			<div class="text-center body gray-8 mb-6">
				{current.description}
			</div>
			<ul class="splash-dots">
				{#each items as _, i}
					<li>
						<a href="/" on:click|preventDefault={() => onClickItem(i)} class:active={active === i}
							>{i}</a
						>
					</li>
				{/each}
			</ul>
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
	}

	.splash-card-inner {
		padding: 32px 27.5px 32px 27.5px;
	}

	.splash-dots {
		width: 100%;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		gap: 4px;
	}

	.splash-dots li {
		margin: 0;
		padding: 0;
	}

	.splash-dots li a {
		font-size: 0;
		display: block;
		width: 8px;
		height: 8px;
		background-color: var(--coral-light);
		border-radius: 50%;
		transition: width 100ms ease-in-out;
	}

	.splash-dots li a:hover {
		background-color: var(--coral);
	}

	.splash-dots li a.active {
		background-color: var(--coral-dark);
		width: 24px;
		border-radius: 8px;
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
