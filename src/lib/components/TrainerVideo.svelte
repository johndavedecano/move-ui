<script>
	import Icon from './Icon.svelte';

	export let src = '/slide-2.jpg';
	export let title = 'Meet Lizzie';
	export let duration = '15 mins';

	$: url = `url(${src})`;
</script>

<div class="trainer-video-hr">
	<div class="trainer-video-hr-img br-8" style="--background-img: {url};" />
	<div class="trainer-video-hr-content pl-4">
		<a class="label navy-dark fw-500" href="/">
			{title}
		</a>
		<div class="caption gray-6 fw-400"><Icon name="clock" /> {duration}</div>
	</div>
	<a class="trainer-play-button" href="/" on:click|preventDefault={() => {}}>
		<img src="/play.png" alt="" />
	</a>
</div>

<style>
	.trainer-video-hr {
		display: flex;
		align-items: center;
	}
	.trainer-video-hr-img {
		display: flex;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-image: var(--background-img);
		min-width: 120px;
		aspect-ratio: 16/9;
	}
	.trainer-video-hr-content {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
</style>
