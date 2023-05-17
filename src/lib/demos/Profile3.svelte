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
			<div slot="center" class="body fw-600 navy-dark">Preferences</div>
			<div class="pr-6" slot="append" />
		</PageHeader>
	</svelte:fragment>

	<svelte:fragment slot="content">
		<div class="overline-large gray-6 fw-600 mb-2 pl-2">AUDIO & SOUND</div>
		<div class="mb-6">
			<MenuList>
				<MenuListItem
					title="Instructor Audio"
					subtitle="Turn off audio from instructor so you can listen to podcasts or workout in quiet."
				>
					<Switch />
				</MenuListItem>
				<MenuListItem title="Sound Effects" subtitle="Be guided through activities by audio cues.">
					<Switch />
				</MenuListItem>
			</MenuList>
		</div>

		<div class="overline-large gray-6 fw-600 mb-2 pl-2">VIDEO</div>
		<div class="mb-6">
			<MenuList>
				<MenuListItem title="Quality">
					<a href="/" class="gray-6" on:click|preventDefault={() => (quality = true)}>Auto</a>
				</MenuListItem>
			</MenuList>
		</div>
	</svelte:fragment>
</PageWrapper>
