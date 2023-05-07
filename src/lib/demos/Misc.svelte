<script>
	import EmotionList from '$lib/components/EmotionList.svelte';
	import GenderList from '$lib/components/GenderList.svelte';
	import Exercises from '$lib/components/Exercises.svelte';
	import Intensity from '$lib/components/Intensity.svelte';
	import Duration from '$lib/components/Duration.svelte';
	import SortList from '$lib/components/SortList.svelte';
	import Overlay from '$lib/components/Overlay.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import WorkoutItem from '$lib/components/WorkoutItem.svelte';

	let overlay = false;

	$: console.log({ overlay });
</script>

<div class="mb-4">
	<GenderList />
</div>

<div class="mb-4">
	<EmotionList />
</div>

<div class="mb-4">
	<Exercises />
</div>

<div class="mb-4">
	<Intensity />
</div>

<div class="mb-4">
	<Duration />
</div>

<div class="mb-4">
	<SortList />
</div>

<div class="mb-4 text-center">
	<Overlay show={overlay} on:close={() => (overlay = false)} />
	<Button color="secondary" size="md" on:click={() => (overlay = !overlay)}>Toggle Overlay</Button>
</div>

<div class="mb-2">
	<WorkoutItem direction="horizonal" />
</div>

<div class="mb-2">
	<WorkoutItem direction="horizonal" />
</div>

<div class="mb-2">
	<WorkoutItem direction="horizonal" />
</div>

<div class="mb-4">
	<WorkoutItem direction="horizonal" />
</div>

<div class="mb-4">
	<div class="flex">
		<WorkoutItem direction="vertical" />
		<WorkoutItem direction="vertical" />
		<WorkoutItem direction="vertical" />
		<WorkoutItem direction="vertical" />
	</div>
</div>
