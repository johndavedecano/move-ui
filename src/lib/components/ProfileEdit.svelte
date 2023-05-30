<script>
	// @ts-nocheck

	import Avatar from '$lib/components/Avatar.svelte';
</script>

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

<style>
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
</style>
