<script>
	// @ts-nocheck

	import Button from '$lib/components/Button.svelte';
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
		<div class="title-5 text-center navy-dark fw-500 mb-4 mt-12">Abracadabra!</div>
		<div class="text-center flex j-content-center w-400 mb-1">
			<img src="/magic-link.png" alt="" />
		</div>
		<div class="title-4 text-center navy-dark fw-600 mb-4">Check your email</div>
		<div class="gray-6 text-center body fw-400 mb-8">
			We sent you an email at <strong class="gray-5">test@test.com</strong>, click the link to be
			magically logged in - no password needed! Make sure to check spam.
		</div>
		<div class="text-right pt-3">
			<Button color="tertiary" size="md" variant="flat" element="a">Help</Button>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="actions">
		<Button color="tertiary" size="lg" fullWidth disabled>Resend (20s)</Button>
	</svelte:fragment>
</LoginWrapper>
