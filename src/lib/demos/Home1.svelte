<script>
	// @ts-nocheck
	import Collections from '$lib/components/Collections.svelte';
	import Exercises from '$lib/components/Exercises.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import ImageSlider from '$lib/components/ImageSlider.svelte';
	import NavMenu from '$lib/components/NavMenu.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Trainers from '$lib/components/Trainers.svelte';
	import WorkoutItem from '$lib/components/WorkoutItem.svelte';
	import WorkoutListVertical from '$lib/components/WorkoutListVertical.svelte';
</script>

<PageWrapper>
	<svelte:fragment slot="header">
		<PageHeader>
			<a href="/pages/onboarding1" slot="prepend">
				<Icon name="mm-logo" />
			</a>
			<div class="pr-6" slot="append">
				<a href="/">
					<Icon name="filter" />
				</a>
			</div>
		</PageHeader>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<ImageSlider />
		<div class="pt-4">
			<Exercises />
		</div>

		<div class="pt-4">
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

		<div class="pt-4">
			<SectionHeader
				title="Collections"
				subtitle="Playlists of workouts curated around specific needs."
			/>
		</div>

		<div class="pt-4">
			<Collections />
		</div>

		<div class="pt-4">
			<SectionHeader title="Recommended" subtitle="Based on how you're feeling right now." />

			<WorkoutListVertical />
		</div>

		<div class="p-4">
			<SectionHeader title="Trainers" />

			<div class="pt-4">
				<Trainers direction="horizontal" />
			</div>
		</div>

		<div class="pt-4">
			<SectionHeader
				title="Workouts you enjoyed"
				subtitle="These are the workouts that made you feel better."
			/>

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

		<div class="pt-4">
			<SectionHeader
				title="Try Something New"
				subtitle="Workouts you haven't tried yet, but we think you'll love."
			/>
			<WorkoutListVertical />
		</div>

		<div class="pt-4">
			<SectionHeader title="Popular" subtitle="The workouts other Move users are enjoying most." />

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

		<NavMenu />
	</svelte:fragment>
</PageWrapper>
