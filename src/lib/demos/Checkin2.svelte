<script>
	// @ts-nocheck
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import EmotionList from '$lib/components/EmotionList.svelte';

	let active = 1;
</script>

<div class="wrapper">
	<Card customClass="unli-access" radius="lg" shadow="md">
		<div class="unli-access-inner">
			<div class="title-6 fw-500 text-center black mb-4">How are you feeling?</div>
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
		background-image: url('/checkin.png');
		background-size: cover;
		background-position: top center;

		--default-icon-bg: #ebebeb;
	}

	:global(.unli-access-inner a.btn) {
		color: var(--gray-7);
		font-weight: 500;
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
