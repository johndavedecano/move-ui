<script>
	import Icon from './Icon.svelte';

	export let src = '/workout.jpg';
	export let title = 'Core Strengthening Pilates: A 20-Minute Workout';
	export let category = 'Pilates';
	export let duration = '15 mins';

	$: url = `url(${src})`;
</script>

<div class="workout-vr">
	<div class="workout-vr-img br-16" style="--background-img: {url};" />
	<div class="workout-vr-content pt-4">
		<a class="label navy-dark fw-500" href="/">
			{title}
		</a>
		<div class="caption gray-6 fw-400">{category} &#149; <Icon name="clock" /> {duration}</div>
	</div>
</div>

<style>
	.workout-vr {
		display: flex;
		align-items: stretch;
		flex-direction: column;
		min-width: 120px;
	}
	.workout-vr-img {
		display: flex;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-image: var(--background-img);
		width: 100%;
		aspect-ratio: 16 / 9;
	}
	.workout-vr-content {
		display: flex;
		flex-direction: column;
		text-align: left;
	}
</style>
