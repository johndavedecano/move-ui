<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';

	const onClickItem = () => {};
</script>

<div class="splash">
	<Card customClass="splash-card" radius="lg">
		<div class="splash-card-inner">
			<div class="navy-dark text-center title-4 fw-600 mb-4">Welcome to<br /> MOVE by Mamamia</div>
			<div class="text-center body gray-8 mb-6">
				Eleifend tellus enim vitae viverra sodales. Blandit sed quam tincidunt risus malesuada
				tincidunt. Luctus.
			</div>
			<ul class="splash-dots">
				<li><a href="/" on:click|preventDefault={() => onClickItem(1)} class="active">1</a></li>
				<li><a href="/" on:click|preventDefault={() => onClickItem(2)}>2</a></li>
				<li><a href="/" on:click|preventDefault={() => onClickItem(3)}>3</a></li>
			</ul>
			<div class="mb-6" />
			<Button color="tertiary" size="lg" fullWidth>Get Started</Button>
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
	}
</style>
