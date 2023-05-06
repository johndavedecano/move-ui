<script>
	// @ts-nocheck

	import Button from '$lib/components/Button.svelte';
	import HeartList from '$lib/components/HeartList.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LoginHeader from '$lib/components/LoginHeader.svelte';
	import LoginWrapper from '$lib/components/LoginWrapper.svelte';
</script>

<LoginWrapper>
	<svelte:fragment slot="header">
		<LoginHeader>
			<a href="/pages/onboarding1" slot="prepend">
				<Icon name="arrow-left" />
			</a>
			<div class="pr-6" slot="append" />
		</LoginHeader>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div style="padding-bottom: 50px;">
			<div class="title-5 navy-dark fw-600 mb-2 text-center">What are you looking for today?</div>
			<div class="body gray-6 mb-4 fw-400 text-center">Select all that are relevant</div>
			<HeartList />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="actions">
		<div class="w-100 mb-4">
			<Button color="tertiary" size="lg" fullWidth>Let's Go!</Button>
		</div>
		<div class="w-100">
			<Button color="tertiary" variant="flat" size="lg" fullWidth>Skip</Button>
		</div>
	</svelte:fragment>
</LoginWrapper>
