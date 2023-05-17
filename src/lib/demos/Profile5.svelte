<script>
	// @ts-nocheck
	import Icon from '$lib/components/Icon.svelte';
	import MenuList from '$lib/components/MenuList.svelte';
	import MenuListItem from '$lib/components/MenuListItem.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import Switch from '$lib/components/Switch.svelte';
	import VideoQualityModal from '$lib/components/VideoQualityModal.svelte';

	let quality = false;
</script>

<VideoQualityModal open={quality} on:close={() => (quality = false)} />

<PageWrapper>
	<svelte:fragment slot="header">
		<PageHeader>
			<div slot="prepend">
				<a href="/pages">
					<Icon name="arrow-left" />
				</a>
			</div>
			<div slot="center" class="body fw-600 navy-dark">Exercise<br /> Settings</div>
			<div class="pr-6" slot="append" />
		</PageHeader>
	</svelte:fragment>

	<svelte:fragment slot="content">
		<div class="mb-6">
			<MenuList>
				<MenuListItem title="Activity Level">
					<a href="/" class="coral-dark fw-400" on:click|preventDefault={() => (quality = true)}
						>Add</a
					>
					<div class="pl-6 activity-chevron">
						<Icon name="chevron-right" />
					</div>
				</MenuListItem>
				<MenuListItem title="Physical Changes">
					<a href="/" class="coral-dark fw-400" on:click|preventDefault={() => (quality = true)}
						>Add</a
					>
					<div class="pl-6 activity-chevron">
						<Icon name="chevron-right" />
					</div>
				</MenuListItem>
				<MenuListItem title="Workout Schedule">
					<a href="/" class="coral-dark fw-400" on:click|preventDefault={() => (quality = true)}
						>Add</a
					>
					<div class="pl-6 activity-chevron">
						<Icon name="chevron-right" />
					</div>
				</MenuListItem>
				<MenuListItem title="Workout Days">
					<a href="/" class="coral-dark fw-400" on:click|preventDefault={() => (quality = true)}
						>Add</a
					>
					<div class="pl-6 activity-chevron">
						<Icon name="chevron-right" />
					</div>
				</MenuListItem>
			</MenuList>
		</div>

		<div class="px-6">
			<div class="overline-large gray-6 fw-600 mb-2">Notifications</div>
			<div class="caption gray-6 fw-400">
				Notifications are currently turned off. Go to profile page to change your settings.
			</div>
		</div>
	</svelte:fragment>
</PageWrapper>

<style>
	:global(.activity-chevron svg path) {
		fill: var(--coral-dark) !important;
	}
</style>
