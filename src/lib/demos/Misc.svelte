<script>
	import EmotionList from '$lib/components/EmotionList.svelte';
	import GenderList from '$lib/components/GenderList.svelte';
	import Exercises from '$lib/components/Exercises.svelte';
	import Intensity from '$lib/components/Intensity.svelte';
	import Duration from '$lib/components/Duration.svelte';
	import SortList from '$lib/components/SortList.svelte';
	import Overlay from '$lib/components/Overlay.svelte';
	import Button from '$lib/components/Button.svelte';
	import WorkoutItem from '$lib/components/WorkoutItem.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Collections from '$lib/components/Collections.svelte';
	import WorkoutListVertical from '$lib/components/WorkoutListVertical.svelte';
	import Trainers from '$lib/components/Trainers.svelte';
	import CollectionItems from '$lib/components/CollectionItems.svelte';
	import ImageSlider from '$lib/components/ImageSlider.svelte';
	import NavMenu from '$lib/components/NavMenu.svelte';
	import ProfileMenu from '$lib/components/ProfileMenu.svelte';
	import SortButton from '$lib/components/SortButton.svelte';

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

<div class="p-4">
	<SectionHeader title="Recent" subtitle="Workouts you completed recently." />

	<div class="mb-4 mt-6">
		<WorkoutItem direction="horizonal" />
	</div>

	<div class="mb-4">
		<WorkoutItem direction="horizonal" />
	</div>

	<div class="mb-4">
		<WorkoutItem direction="horizonal" />
	</div>

	<div class="mb-4">
		<WorkoutItem direction="horizonal" />
	</div>
</div>

<div class="p-4">
	<SectionHeader title="Recommended" subtitle="Based on how you're feeling right now." />

	<WorkoutListVertical />
</div>

<div class="p-4">
	<SectionHeader title="Recent" subtitle="Workouts you completed recently.">
		<svelte:fragment slot="action">
			<SortButton />
		</svelte:fragment>
	</SectionHeader>

	<div class="mb-4 mt-6">
		<WorkoutItem direction="horizonal" />
	</div>

	<div class="mb-4">
		<WorkoutItem direction="horizonal" />
	</div>

	<div class="mb-4">
		<WorkoutItem direction="horizonal" />
	</div>

	<div class="mb-4">
		<WorkoutItem direction="horizonal" />
	</div>
</div>

<div class="p-4">
	<SectionHeader
		title="Collections"
		subtitle="Playlists of workouts curated around specific needs."
	>
		<svelte:fragment slot="action">
			<a
				href="/"
				on:click|preventDefault={() => console.log('sorting...')}
				class="fw-600 navy-dark label"
			>
				<span class="mr-2">Sort</span>
				<Icon name="sort" />
			</a>
		</svelte:fragment>
	</SectionHeader>

	<div class="pt-4">
		<Collections />
		<div class="pt-4">
			<CollectionItems />
		</div>
	</div>
</div>

<div class="p-4">
	<SectionHeader title="Horizonal Trainers" />

	<div class="pt-4">
		<Trainers />
	</div>
</div>

<div class="p-4">
	<SectionHeader title="Vertical Trainers" />

	<div class="pt-4">
		<Trainers direction="vertical" />
	</div>
</div>

<div class="p-4">
	<SectionHeader title="Image Slider" />

	<div class="pt-4">
		<ImageSlider />
	</div>
</div>

<NavMenu />

<div class="p-4">
	<ProfileMenu />
</div>

<div class="pl-16" style="height: 90px;" />
