<script>
	// @ts-nocheck

	export let active = 'chill';

	const setActive = (nextActive) => (active = nextActive);
</script>

<div class="intensity">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="intensity-item" class:active={active === 'chill'} on:click={() => setActive('chill')}>
		<div class="intensity-content">
			<div class="intensity-item-box mb-1">
				<img src="/chill.png" alt="chill" />
			</div>
			<div class="text-center fw-600 caption navy-dark">Chill</div>
		</div>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		href="/"
		class="intensity-item"
		class:active={active === 'move'}
		on:click={() => setActive('move')}
	>
		<div class="intensity-content">
			<div class="intensity-item-box mb-2">
				<img src="/move.png" alt="move" />
			</div>
			<div class="text-center fw-600 caption navy-dark">Move</div>
		</div>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="intensity-item"
		class:active={active === 'sweat'}
		on:click|preventDefault={() => setActive('sweat')}
	>
		<div class="intensity-content">
			<div class="intensity-item-box mb-2">
				<img src="/sweat.png" alt="sweat" />
			</div>
			<div class="text-center fw-600 caption navy-dark">Sweat</div>
		</div>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
</div>

<style>
	.intensity {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8.75px;
	}

	.intensity-item.active {
		background-color: var(--coral-light);
		border-color: var(--coral-dark);
	}

	.intensity-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.intensity-item {
		flex: 1;
		cursor: pointer;
		text-align: center;
		background: var(--gray-2);
		border-radius: 8px;
		border: solid 1px var(--gray-4);
		padding: 12px 16px;
		user-select: none;
	}

	.intensity-item-box {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 200ms ease-in-out;
	}
</style>
