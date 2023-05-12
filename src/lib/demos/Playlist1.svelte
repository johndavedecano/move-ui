<script>
	import FilterModal from '$lib/components/FilterModal.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import SortingModal from '$lib/components/SortingModal.svelte';
	import WorkoutItem from '$lib/components/WorkoutItem.svelte';

	let sorting = false;
	let filter = false;
</script>

<SortingModal open={sorting} on:close={() => (sorting = false)} />
<FilterModal open={filter} on:close={() => (filter = false)} />

<div class="playlist">
	<div class="playlist-overlay" />
	<div class="playlist-header">
		<div class="playlist-header-top">
			<div class="playlist-top-left">
				<a href="/">
					<Icon name="arrow-left" />
				</a>
			</div>
			<div class="playlist-top-center" />
			<div class="playlist-top-right">
				<a href="/" on:click|preventDefault={() => (filter = true)}>
					<Icon name="filter" />
				</a>
			</div>
		</div>
		<div class="header-top-content">
			<div class="text-center white title-6 fw-600 mb-4">Pregnancy</div>
			<div class="caption white fw-400">
				More than 300,000 women join Mia Freedman each week as she has fresh and original
				conversations with interesting people who have fascinating stories...<span class="fw-600"
					>MORE</span
				>
			</div>
		</div>
	</div>
	<div class="playlist-content">
		<div class="playlist-content-header">
			<SectionHeader title="12 workouts found">
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
		</div>

		<div class="playlist-items">
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
	</div>
</div>

<style>
	.playlist {
		width: 100%;
		min-height: 100vh;
		overflow-y: auto;
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		background-color: var(--navy-dark);

		background-image: url('/pregnant.jpg');
		background-size: contain;
		background-position: top center;
		background-repeat: no-repeat;
	}

	.playlist-overlay {
		background: linear-gradient(180deg, rgba(0, 6, 64, 0) 0%, #000640 100%), url(.jpg);
		position: absolute;
		min-height: 250px;
		width: 100%;
		z-index: 1;
		top: 0;
		left: 0;
	}

	.playlist-header {
		min-height: 226px;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.playlist-header-top {
		height: 108px;
		display: flex;
		align-items: center;
		padding-left: 26px;
		padding-right: 26px;
		z-index: 2;
	}

	.header-top-content {
		padding-left: 26px;
		padding-right: 26px;
		padding-bottom: 26px;
		z-index: 2;
	}

	:global(.playlist-header-top svg > path) {
		fill: white !important;
	}

	.playlist-top-center {
		flex-grow: 1;
	}

	.playlist-content {
		height: calc(100vh - 226px);
		background-color: white;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
		z-index: 2;
		display: flex;
		flex-direction: column;
	}

	.playlist-items {
		overflow-y: auto;
		max-height: calc(100% - 80.5px);
		padding-left: 24px;
		padding-right: 24px;
		padding-bottom: 24px;
	}

	.playlist-content-header {
		padding-left: 24px;
		padding-right: 24px;
		padding-top: 24px;
	}
</style>
