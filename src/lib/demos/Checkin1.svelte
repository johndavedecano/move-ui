<script>
	// @ts-nocheck
	import Card from '$lib/components/Card.svelte';
</script>

<div class="wrapper">
	<Card customClass="checkin1" radius="lg" shadow="md">
		<div class="checkin1-img">
			<img src="/dance.png" alt="" class="dancing" />
		</div>
		<div class="checkin1-inner">
			<img src="/hi.png" alt="" class="mx-auto" />
			<div class="title-4 fw-600 text-center navy-dark mb-4">Hi Carla!</div>
			<div class="text-center gray-8 fw-400">So nice to see you today :)</div>
		</div>
	</Card>
</div>

<svelte:head>
	<style>
		body {
			background-color: var(--grape-light);
		}
	</style>
</svelte:head>

<style>
	.wrapper {
		width: 100%;
		height: 100vh;
		min-height: 800px;
		background-color: var(--grape-light);
		background-repeat: no-repeat;
		background-size: auto;
		background-position: center;
		background-image: url('/everybody.png');

		--default-icon-bg: #ebebeb;
	}

	.checkin1-img {
		position: absolute;
		z-index: 11;
		bottom: 320px;
		left: 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 1;
		transition: all 200ms ease-in-out;
	}

	:global(.checkin1-inner a.btn) {
		color: var(--gray-7);
		font-weight: 500;
	}

	.checkin1-inner {
		padding: 123px 27.5px 123px 27.5px;
	}

	:global(.checkin1) {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		border-bottom-left-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
		transition: height 100ms ease-in-out;
		z-index: 10;
	}
</style>
