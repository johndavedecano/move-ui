<script>
	// @ts-nocheck

	export let active = 'cardio';

	const setActive = (nextActive) => (active = nextActive);
</script>

<div class="exercises">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="exercises-item"
		class:active={active === 'cardio'}
		on:click={() => setActive('cardio')}
	>
		<div class="exercises-item-box mb-2">
			<img
				src="https://new-cdn.mamamia.com.au/cms-mainsite.appspot.com/media/hASdMmNR8D/cardio.png"
				alt="cardio"
			/>
		</div>
		<div class="text-center fw-600 label navy-dark">Cardio</div>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		href="/"
		class="exercises-item"
		class:active={active === 'yoga'}
		on:click={() => setActive('yoga')}
	>
		<div class="exercises-item-box mb-2">
			<img
				src="https://new-cdn.mamamia.com.au/cms-mainsite.appspot.com/media/YD18mh6cLH/yoga.png"
				alt="yoga"
			/>
		</div>
		<div class="text-center fw-600 label navy-dark">Yoga</div>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="exercises-item"
		class:active={active === 'pilates'}
		on:click|preventDefault={() => setActive('pilates')}
	>
		<div class="exercises-item-box mb-2">
			<img
				src="https://new-cdn.mamamia.com.au/cms-mainsite.appspot.com/media/boJdaT3j6d/pilates.png"
				alt="pilates"
			/>
		</div>
		<div class="text-center fw-600 label navy-dark">Pilates</div>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="exercises-item"
		class:active={active === 'strength'}
		on:click={() => setActive('strength')}
	>
		<div class="exercises-item-box mb-2">
			<img
				src="https://new-cdn.mamamia.com.au/cms-mainsite.appspot.com/media/npjjQszejr/strength.png"
				alt="strength"
			/>
		</div>
		<div class="text-center fw-600 label navy-dark">Strength</div>
	</div>
</div>

<style>
	.exercises {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8.75px;
	}

	.exercises-item.active .exercises-item-box {
		background-color: var(--coral-light);
	}

	.exercises-item {
		flex: 1;
		cursor: pointer;
		text-align: center;
		user-select: none;
	}

	.exercises-item-box {
		background: var(--gray-2);
		border-radius: 8px;
		height: 75px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 200ms ease-in-out;
	}
</style>
