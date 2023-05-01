<script>
	// @ts-nocheck
	// import { createEventDispatcher } from 'svelte';
	// import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LoginHeader from '$lib/components/LoginHeader.svelte';
	import LoginWrapper from '$lib/components/LoginWrapper.svelte';
</script>

<div class="wrapper">
	<Card customClass="unli-access" radius="lg" shadow="md">
		<div class="unli-access-inner">
			<div class="title-4 navy-dark fw-500 mb-6">Unlock unlimited access</div>
			<div class="body gray-5 fw-400 mb-6">
				Accumsan scelerisque at posuere sit dolor. Faucibus vulputate
			</div>
			<div class="label fw-500 flex a-items-center gray-7">
				<div class="pr-2"><Icon name="check-pink" /></div>
				All Mamamia podcasts, stories and events
			</div>
			<div class="label fw-500 flex a-items-center gray-7">
				<div class="pr-2"><Icon name="check-pink" /></div>
				Exclusive partner discounts
			</div>
			<div class="label fw-500 flex a-items-center gray-7 mb-6">
				<div class="pr-2"><Icon name="check-pink" /></div>
				Support independent media
			</div>
			<Button color="tertiary" size="lg" fullWidth>Proceed to Payment</Button>
		</div>
	</Card>
</div>

<style>
	.wrapper {
		width: 100%;
		height: 100vh;
		background-color: var(--grape-light);
		background-repeat: no-repeat;
		background-size: contain;
		background-position-y: top;
		background-position-x: center;
	}
	.unli-access-inner {
		padding: 32px 27.5px 32px 27.5px;
	}

	:global(.unli-access) {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		border-bottom-left-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
		transition: height 100ms ease-in-out;
	}
</style>
