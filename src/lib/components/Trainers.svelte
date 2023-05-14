<script>
	import Trainer from './Trainer.svelte';

	export let direction = 'horizontal';

	export let like = false;

	let items = Array.from(new Array(9));
</script>

<div class="trainer" class:vertical={direction === 'vertical'}>
	<div class="trainer-items">
		{#each items as _, i}
			<Trainer {direction} {like} />
		{/each}
	</div>
</div>

<style>
	.trainer {
		width: 100%;
		overflow-x: auto;
	}

	.trainer-items {
		display: flex;
		gap: 16px;
	}

	.trainer.vertical {
		overflow-x: visible;
		overflow-y: auto;
	}

	.trainer.vertical .trainer-items {
		display: flex;
		flex-direction: column;
	}
</style>
