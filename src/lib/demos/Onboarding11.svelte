<script>
	// @ts-nocheck
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import CheckIcon from '$lib/components/CheckIcon.svelte';
	import Badge from '$lib/components/Badge.svelte';

	let active = 1;
</script>

<div class="wrapper">
	<Card customClass="unli-access" radius="lg" shadow="md">
		<div class="unli-access-inner">
			<div class="mb-4">
				<Icon name="mm-logo-big" />
			</div>
			<div class="title-4 navy-dark fw-500 mb-6">Unlock unlimited access</div>
			<div class="body gray-5 fw-400 mb-6">
				Accumsan scelerisque at posuere sit dolor. Faucibus vulputate
			</div>
			<div class="label mb-2 fw-500 flex a-items-center gray-7">
				<div class="pr-2"><Icon name="check-pink" /></div>
				All Mamamia podcasts, stories and events
			</div>
			<div class="label mb-2 fw-500 flex a-items-center gray-7">
				<div class="pr-2"><Icon name="check-pink" /></div>
				Exclusive partner discounts
			</div>
			<div class="label mb-2 fw-500 flex a-items-center gray-7 mb-6">
				<div class="pr-2"><Icon name="check-pink" /></div>
				Support independent media
			</div>
			<div class="plans">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="plan" on:click={() => (active = 0)}>
					<div class="plan-card" class:active={active === 0}>
						<div class="plan-name copy fw-600 navy-dark">
							<div class="plan-name-text">Monthly</div>
							<CheckIcon color={active === 0 ? 'coral-dark' : 'default-icon-bg'} />
						</div>
						<div class="plan-price">$7.99/month</div>
					</div>
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="plan" on:click={() => (active = 1)}>
					<Badge customClass="plan-discount">Save 30%</Badge>
					<div class="plan-card" class:active={active === 1}>
						<div class="plan-name copy fw-600 navy-dark">
							<div class="plan-name-text">Annual</div>
							<CheckIcon color={active === 1 ? 'coral-dark' : 'default-icon-bg'} />
						</div>
						<div class="plan-price">$69/year</div>
					</div>
				</div>
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

		--default-icon-bg: #ebebeb;
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

	.plans {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16px;
		height: 79px;
		width: 100%;
		margin-bottom: 48px;
		margin-top: 32px;
	}

	.plan {
		flex-grow: 1;
		position: relative;
		min-height: 79px;
		display: flex;
		display: flex;
		flex-direction: column;
	}

	:global(.plan .plan-discount) {
		position: absolute;
		right: 16px;
		top: -10px;
	}

	.plan-card {
		border-radius: 8px;
		border: solid 1px #ebebeb;
		background-color: var(--white);
		height: 75px;
		width: 100%;
		padding: 16px;
		display: flex;
		flex-direction: column;
		cursor: pointer;
		transition: all 100ms ease-in-out;
	}

	.plan-card.active {
		border-color: var(--coral-dark);
		background-color: var(--coral-light);
	}

	.plan-name {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.plan-name-text {
		font-family: 'Poppins';
		flex-grow: 1;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
	}

	.plan-price {
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 15px;
		color: var(--gray-7);
	}
</style>
