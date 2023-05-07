<script>
	import WorkoutItemHorizontal from './WorkoutItemHorizontal.svelte';
	import WorkoutItemVertical from './WorkoutItemVertical.svelte';

	export let direction = 'vertical';

	let component = direction === 'vertical' ? WorkoutItemVertical : WorkoutItemHorizontal;
</script>

<svelte:component this={component} {...$$restProps} />
