<script>
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
		<div class="text-center flex j-content-center mb-6" style="padding-top: 95px;">
			<img src="/great-success.png" alt="" />
		</div>
		<div class="title-5 text-center navy-dark fw-600 mb-8 text-center">Great success</div>
		<div class="gray-7 text-center body fw-400">
			We’ve emailed <a href="/" class="navy-dark">test@test.com</a> with a magic link to log in.
			<br /><br />
			Check your spam if you’re struggling to find it.
		</div>
	</svelte:fragment>
	<svelte:fragment slot="actions">
		<div class="text-center pt-4 pb-4">
			<span class="caption gray-5">
				By continuing you agree to the <a href="/" class="coral-dark">terms</a> and
				<a href="/" class="coral-dark">privacy policy </a>
			</span>
		</div>
		<div class="pb-4 w-100">
			<Button customClass="mb-4" color="tertiary" variant="outline" size="lg" fullWidth
				>Resend (25s)</Button
			>
			<Button color="tertiary" variant="flat" size="lg" fullWidth>Log in with Password</Button>
		</div>
	</svelte:fragment>
</LoginWrapper>
