<script>
	// @ts-nocheck
	import Icon from '$lib/components/Icon.svelte';
	import NavMenu from '$lib/components/NavMenu.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import SortingModal from '$lib/components/SortingModal.svelte';
	import TabbedMenu from '$lib/components/TabbedMenu.svelte';
	import Trainers from '$lib/components/Trainers.svelte';
	import WorkoutItem from '$lib/components/WorkoutItem.svelte';

	let sorting = false;

	let active = 0;

	let tabs = [
		{
			label: 'View all (14)',
			value: 0
		},
		{
			label: 'Trainers (2)',
			value: 1
		},
		{
			label: 'Workouts (2)',
			value: 2
		}
	];

	let titles = ['All Favorites', 'Trainers', 'Workouts'];

	$: title = titles[active];
</script>

<SortingModal open={sorting} on:close={() => (sorting = false)} />

<PageWrapper>
	<svelte:fragment slot="header">
		<PageHeader>
			<div class="pl-6" slot="prepend" />
			<div slot="center">
				<div class="text-center body navy-dark fw-600">Favorites</div>
			</div>
			<div class="pr-6" slot="append" />
		</PageHeader>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div class="section-header-wrapper">
			<SectionHeader {title}>
				<svelte:fragment slot="action">
					<a
						href="/"
						on:click|preventDefault={() => (sorting = true)}
						class="fw-600 navy-dark label"
					>
						<span class="mr-2">Sort</span>
						<Icon name="sort" />
					</a>
				</svelte:fragment>
			</SectionHeader>
			<div class="pt-4">
				<TabbedMenu items={tabs} {active} on:change={(evt) => (active = evt.detail.active)} />
			</div>
		</div>

		{#if active === 0 || active === 1}
			<Trainers direction="vertical" like />
		{/if}

		{#if active === 0 || active === 2}
			<div class="mb-4 mt-6">
				<WorkoutItem direction="horizonal" like />
			</div>

			<div class="mb-4">
				<WorkoutItem direction="horizonal" like />
			</div>

			<div class="mb-4">
				<WorkoutItem direction="horizonal" like />
			</div>

			<div class="mb-4">
				<WorkoutItem direction="horizonal" like />
			</div>
		{/if}
		<NavMenu />
	</svelte:fragment>
</PageWrapper>

<style>
	.section-header-wrapper {
		position: sticky;
		top: 96px;
		background-color: var(--white);
		padding-bottom: var(--space-4);
	}
</style>
