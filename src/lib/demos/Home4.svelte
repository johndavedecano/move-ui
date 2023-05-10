<script>
	// @ts-nocheck
	import CollectionItems from '$lib/components/CollectionItems.svelte';
	import Collections from '$lib/components/Collections.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import NavMenu from '$lib/components/NavMenu.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import SortingModal from '$lib/components/SortingModal.svelte';
	import WorkoutItem from '$lib/components/WorkoutItem.svelte';

	let sorting = false;
</script>

<SortingModal open={sorting} on:close={() => (sorting = false)} />

<PageWrapper>
	<svelte:fragment slot="header">
		<PageHeader>
			<a href="/pages" slot="prepend">
				<Icon name="arrow-left" />
			</a>
			<div class="pr-6" slot="append" />
		</PageHeader>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div class="section-header-wrapper">
			<SectionHeader
				title="Collections"
				subtitle="Playlists of workouts curated around specific needs."
			>
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
				<Collections />
			</div>
		</div>

		<CollectionItems />

		<NavMenu />
	</svelte:fragment>
</PageWrapper>

<style>
	.section-header-wrapper {
		position: sticky;
		top: 96px;
		background-color: var(--white);
		padding-bottom: var(--space-4);
		z-index: 1;
	}
</style>
