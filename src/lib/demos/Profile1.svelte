<script>
	// @ts-nocheck

	import Avatar from '$lib/components/Avatar.svelte';
	import NavMenu from '$lib/components/NavMenu.svelte';
	import ProfileMenu from '$lib/components/ProfileMenu.svelte';
</script>

<div class="profile">
	<div class="profile-content">
		<div class="profile-top mb-6">
			<Avatar src="https://randomuser.me/api/portraits/women/8.jpg" width="40" height="40" />
			<div class="profile-top-content">
				<div class="username">Carla Honrado</div>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" on:click={(evt) => evt.preventDefault()} class="caption gray-5 fw-500"
					>Edit Profile</a
				>
			</div>
		</div>
		<div class="profile-stats mb-6">
			<div class="profile-stats-col">
				<div class="stat-tall">
					<div class="stat-card-top">
						<div class="stat-card-title fw-500 navy-dark small">Workouts<br /> completed</div>
						<img src="/completed-workouts.png" alt="" />
					</div>
					<div class="flex-1" />
					<div class="title-1 fw-500 navy-dark">48</div>
				</div>
				<div class="stat-small">
					<div class="stat-card-top">
						<div class="stat-card-title fw-500 navy-dark small">Favorite Category</div>
						<img src="/favorite-category.png" alt="" />
					</div>
					<div class="flex-1" />
					<div>
						<img src="/pilates.png" alt="" class="mb-1" />
						<div class="navy-dark body fw-600">Pilates</div>
					</div>
				</div>
			</div>
			<div class="profile-stats-col">
				<div class="stat-small minutes">
					<div class="stat-card-top">
						<div class="stat-card-title fw-500 white small">Workouts<br /> minutes</div>
						<img src="/workout-minutes.png" alt="" />
					</div>
					<div class="flex-1" />
					<div class="title-3 fw-500 white">1,024</div>
				</div>
				<div class="stat-tall">
					<div class="stat-card-top">
						<div class="stat-card-title fw-500 navy-dark small">Favorite Trainer</div>
						<img src="/favorite-trainer.png" alt="" />
					</div>
					<div class="flex-1" />
					<div class="mb-1">
						<Avatar src="https://randomuser.me/api/portraits/women/8.jpg" width="32" height="32" />
					</div>
					<div class="navy-dark body fw-600">Lizzie Bland</div>
				</div>
			</div>
		</div>

		<ProfileMenu />

		<div class="pt-8 text-center">
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="" on:click={(evt) => evt.preventDefault()} class="coral-dark label fw-600">Logout</a>
		</div>

		<NavMenu />
	</div>
</div>

<style>
	.profile {
		width: 100%;
		max-height: 100vh;
		overflow-y: auto;
		padding-bottom: 100px;
	}

	.profile-content {
		display: flex;
		flex-direction: column;
		padding-top: 53px;
		padding-left: 24px;
		padding-right: 24px;
	}

	.profile-top {
		display: flex;
		align-items: center;
	}

	.profile-top-content {
		display: flex;
		flex-direction: column;
		padding-left: 12px;
	}

	.profile-top-content .username {
		font-family: var(--sans);
		font-size: var(--copy);
		font-weight: var(--fw-600);
		line-height: var(--lh);
		letter-spacing: var(--ls);
		color: var(--black);
	}

	.profile-stats {
		display: flex;
		gap: 16px;
	}

	.profile-stats-col {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.stat-tall {
		border-radius: 8px;
		height: 163px;
		padding: 12px;

		background: #ffffff;
		box-shadow: 0px 2px 30px #f5f5f5;
		border-radius: 8px;

		display: flex;
		flex-direction: column;
	}

	.stat-small {
		border-radius: 8px;
		height: 126px;
		padding: 12px;

		background: #ffffff;
		box-shadow: 0px 2px 30px #f5f5f5;
		border-radius: 8px;

		display: flex;
		flex-direction: column;
	}

	.stat-small.minutes {
		background-color: var(--grape-dark);
	}

	.stat-card-top {
		display: flex;
		align-items: center;
	}

	.stat-card-title {
		flex-grow: 1;
	}
</style>
