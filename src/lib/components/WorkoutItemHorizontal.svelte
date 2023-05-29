<script>
	import Icon from './Icon.svelte';
	import LikeButton from './LikeButton.svelte';

	export let src = '/workout.jpg';
	export let title = 'Core Strengthening Pilates: A 20-Minute Workout';
	export let category = 'Pilates';
	export let duration = '15 mins';
	export let like = false;

	$: url = `url(${src})`;
</script>

<div class="workout-hr">
	<div class="workout-hr-img br-8" style="--background-img: {url};" />
	<div class="workout-hr-content pl-4">
		<a class="label navy-dark fw-500" href="/">
			{title}
		</a>
		<div class="caption gray-6 fw-400">{category} &#149; <Icon name="clock" /> {duration}</div>
	</div>
	{#if like}
		<LikeButton />
	{/if}
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
		min-width: 120px;
		height: 80px;
	}
	.workout-hr-content {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
</style>
