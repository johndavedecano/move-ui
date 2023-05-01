<script>
	// @ts-nocheck

	import Button from '$lib/components/Button.svelte';
	import CheckIcon from '$lib/components/CheckIcon.svelte';
	import CreditCardField from '$lib/components/CreditCardField.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LoginHeader from '$lib/components/LoginHeader.svelte';
	import LoginWrapper from '$lib/components/LoginWrapper.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import TextFieldMessage from '$lib/components/TextFieldMessage.svelte';
</script>

<LoginWrapper>
	<svelte:fragment slot="header">
		<LoginHeader />
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div class="progress">
			<div class="progress-item">
				<div class="progress-item-text fw-500 label">Email</div>
				<div class="progress-item-icon">
					<CheckIcon color="coral-dark" />
				</div>
			</div>
			<div class="progress-spacer">
				<div class="progress-line" />
			</div>
			<div class="progress-item">
				<div class="progress-item-text fw-500 label">Profile</div>
				<div class="progress-item-icon">
					<CheckIcon color="coral-dark" />
				</div>
			</div>
			<div class="progress-spacer">
				<div class="progress-line" />
			</div>
			<div class="progress-item">
				<div class="progress-item-text fw-500 label">Payment</div>
				<div class="progress-item-icon">
					<div class="progress-pending" />
				</div>
			</div>
		</div>
		<div class="title-6 navy-dark fw-600">Carla Honrado</div>
		<div class="navy-dark label fw-500 mb-6">carla.honrado@test.com</div>

		<div class="mb-6">
			<a href="/" class="gray-5 label fw-500" style="text-decoration: underline;">Promo code</a>
		</div>

		<div class="line-item mb-6">
			<div class="line-item-text gray-6 caption">Yearly Mamamia subscription (renews annually)</div>
			<div class="line-item-price gray-6 caption">$69.00</div>
		</div>

		<div class="line-item mb-6">
			<div class="line-item-summary fw-600 navy-darkv body">Total due today</div>
			<div class="line-item-price navy-dark title-6 fw-600">
				$69.00
				<div class="fw-400 caption gray-6">incl. GST</div>
			</div>
		</div>

		<div class="credit-card-wrapper">
			<div class="mb-4">
				<CreditCardField label="Card number" />
			</div>

			<div class="mb-4 card-details">
				<div class="flex-1">
					<TextField label="Expiration" placeholder="MM/YY" />
				</div>
				<div class="flex-1">
					<TextField label="Card number" placeholder="123" minLength={3} maxLength={3} />
				</div>
			</div>

			<div class="text-center pt-4 pb-2">
				<span class="caption gray-5">
					By proceeding you agree to our <a href="/" class="coral-dark">terms</a> and
					<a href="/" class="coral-dark">privacy policy </a>
				</span>
			</div>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="actions">
		<Button color="tertiary" size="lg" fullWidth>Pay Now</Button>
	</svelte:fragment>
</LoginWrapper>

<style>
	.progress {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 24px;
	}

	.progress-pending {
		border: 2px solid #ff3374;
		width: 24px;
		height: 24px;
		border-radius: 50%;
	}

	.progress-spacer {
		flex-grow: 1;
		display: flex;
		position: relative;
		align-self: stretch;
	}

	.progress-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-left: 12px;
		padding-right: 12px;
	}

	.progress-item-text {
		color: var(--black);
		padding-bottom: 12px;
	}

	.progress-line {
		height: 2px;
		background-color: var(--coral-dark);
		position: absolute;
		width: 100%;
		bottom: 12px;
		left: 0;
	}

	.line-item {
		display: flex;
		align-items: center;
	}

	.line-item-text {
		flex-grow: 1;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.line-item-summary {
		flex-grow: 1;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.line-item-price {
		text-align: right;
	}

	.credit-card-wrapper {
		padding: 24px 16px;
		border: solid 1px var(--gray-4);
		border-radius: 16px;
		min-height: 220px;
		display: flex;
		flex-direction: column;
	}

	.card-details {
		display: flex;
		gap: 15px;
	}
</style>
