<script>
	import EmotionList from '$lib/components/EmotionList.svelte';
	import GenderList from '$lib/components/GenderList.svelte';
	import Exercises from '$lib/components/Exercises.svelte';
	import Intensity from '$lib/components/Intensity.svelte';
	import Duration from '$lib/components/Duration.svelte';
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
