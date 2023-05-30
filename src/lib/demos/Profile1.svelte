<script>
	import NavMenu from '$lib/components/NavMenu.svelte';
	import ProfileEdit from '$lib/components/ProfileEdit.svelte';
	import ProfileLogout from '$lib/components/ProfileLogout.svelte';
	import ProfileMenu from '$lib/components/ProfileMenu.svelte';
	import ProfileStats from '$lib/components/ProfileStats.svelte';
</script>

<div class="profile">
	<div class="profile-content">
		<ProfileEdit />
		<ProfileStats />
		<ProfileMenu />
		<ProfileLogout />
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
</style>
