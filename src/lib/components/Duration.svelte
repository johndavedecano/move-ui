<script>
	// @ts-nocheck

	export let active = '15';

	const setActive = (nextActive) => (active = nextActive);
</script>

<div class="duration">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="duration-item" class:active={active === '15'} on:click={() => setActive('15')}>
		<div class="duration-content">
			<div class="text-center fw-600 caption navy-dark">&#60;15 minutes</div>
		</div>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		href="/"
		class="duration-item"
		class:active={active === '15-30'}
		on:click={() => setActive('15-30')}
	>
		<div class="duration-content">
			<div class="text-center fw-600 caption navy-dark">15-30 minutes</div>
		</div>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="duration-item"
		class:active={active === '30-60'}
		on:click|preventDefault={() => setActive('30-60')}
	>
		<div class="duration-content">
			<div class="text-center fw-600 caption navy-dark">30-60 minutes</div>
		</div>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
</div>

<style>
	.duration {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8.75px;
	}

	.duration-item.active {
		border-color: var(--coral-dark);
	}

	.duration-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.duration-item {
		flex: 1;
		cursor: pointer;
		text-align: center;
		background: var(--gray-2);
		border-radius: 96px;
		border: solid 1px var(--gray-4);
		padding: 12px 16px;
		background-color: var(--white);
		user-select: none;
	}
</style>
