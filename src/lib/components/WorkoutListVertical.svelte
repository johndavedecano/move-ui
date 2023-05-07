<script>
	import WorkoutItem from './WorkoutItem.svelte';

	let items = Array.from(new Array(10));
</script>

<div class="workout pt-6">
	<div class="workout-items">
		{#each items as _}
			<div class="workout-item">
				<WorkoutItem direction="vertical" />
			</div>
		{/each}
	</div>
</div>

<style>
	.workout {
		width: 100%;
		overflow-x: auto;
	}

	.workout-items {
		display: flex;
		gap: 12px;
	}

	.workout-item {
		min-width: 240px;
	}
</style>
