<script>
	import Icon from './Icon.svelte';

	export let src = '/workout.jpg';
	export let title = 'Core Strengthening Pilates: A 20-Minute Workout';
	export let category = 'Pilates';
	export let duration = '15 mins';

	$: url = `url(${src})`;
</script>

<div class="workout-hr">
	<div class="workout-hr-img br-8" style="--background-img: {url};" />
	<div class="workout-hr-content pl-4">
		<div class="label navy-dark fw-500">
			{title}
		</div>
		<div class="caption gray-6 fw-400">{category} &#149; <Icon name="clock" /> {duration}</div>
	</div>
</div>

<style>
	.workout-hr {
		display: flex;
		align-items: center;
	}
	.workout-hr-img {
		display: flex;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-image: var(--background-img);
		background-color: var(--coral-dark);
		width: 120px;
		height: 80px;
	}
	.workout-hr-content {
		display: flex;
		flex-direction: column;
	}
</style>
