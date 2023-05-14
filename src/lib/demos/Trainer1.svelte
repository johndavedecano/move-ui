<script>
	import Icon from '$lib/components/Icon.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import SortingModal from '$lib/components/SortingModal.svelte';
	import TrainerModal from '$lib/components/TrainerModal.svelte';
	import TrainerVideo from '$lib/components/TrainerVideo.svelte';
	import WorkoutItem from '$lib/components/WorkoutItem.svelte';

	let sorting = false;
	let share = false;
</script>

<SortingModal open={sorting} on:close={() => (sorting = false)} />
<TrainerModal open={share} on:close={() => (share = false)} />

<div class="trainer">
	<div class="trainer-header">
		<div class="trainer-header-top">
			<div class="trainer-top-left">
				<a href="/" on:click|preventDefault={() => {}} class="trainer-icon-link arrow-icon-link">
					<Icon name="arrow-left" />
				</a>
			</div>
			<div class="trainer-top-center" />
			<div class="trainer-top-right">
				<a href="/" class="trainer-icon-link" on:click|preventDefault={() => {}}>
					<Icon name="heart" />
				</a>
				<a href="/" class="trainer-icon-link dots" on:click|preventDefault={() => (share = true)}>
					<Icon name="dots" />
				</a>
			</div>
		</div>
	</div>
	<div class="trainer-content">
		<div class="trainer-content-header">
			<div class="title-5 navy-dark fw-600 mb-2">Lizzie Bland</div>
			<div class="caption fw-400 gray-7 mb-6">
				More than 300,000 women join Mia Freedman each week as she has fresh and original
				<!-- svelte-ignore a11y-invalid-attribute -->
				conversations with... <a href="#" class="coral-dark fw-600">MORE</a>
			</div>
			<div class="mb-6">
				<TrainerVideo />
			</div>
		</div>

		<div class="trainer-items">
			<SectionHeader title="Workouts">
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
	.trainer {
		width: 100%;
		min-height: 100vh;
		overflow-y: auto;
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		background-color: var(--navy-dark);

		background-image: url('/slide-2.jpg');
		background-size: contain;
		background-position: top center;
		background-repeat: no-repeat;
	}

	.trainer .trainer-icon-link {
		display: flex;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		align-items: center;
		justify-content: center;
	}

	:global(.trainer .trainer-icon-link svg) {
		width: 20px;
		height: auto;
	}

	.trainer .arrow-icon-link {
		display: flex;
		background-color: var(--white);
		opacity: 0.75;
		transition: opacity 200ms ease-in-out;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		align-items: center;
		justify-content: center;
	}

	:global(.trainer .dots svg) {
		height: 3px;
	}

	.trainer .arrow-icon-link:hover {
		opacity: 1;
	}

	:global(.trainer-header-top svg > path) {
		fill: var(--navy-dark) !important;
	}

	.trainer-header {
		min-height: 226px;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.trainer-header-top {
		height: 108px;
		display: flex;
		align-items: center;
		padding-left: 26px;
		padding-right: 26px;
		z-index: 2;
	}

	.trainer-top-center {
		flex-grow: 1;
	}

	.trainer-top-right {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.trainer-content {
		height: calc(100vh - 226px);
		background-color: white;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
		z-index: 2;
		display: flex;
		flex-direction: column;
	}

	.trainer-items {
		overflow-y: auto;
		max-height: calc(100% - 80.5px);
		padding-left: 24px;
		padding-right: 24px;
		padding-bottom: 24px;
	}

	.trainer-content-header {
		padding-left: 24px;
		padding-right: 24px;
		padding-top: 24px;
	}
</style>
