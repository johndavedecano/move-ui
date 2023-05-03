<script>
	// @ts-nocheck

	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LoginHeader from '$lib/components/LoginHeader.svelte';
	import LoginWrapper from '$lib/components/LoginWrapper.svelte';
	import TextField from '$lib/components/TextField.svelte';
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
		<div class="title-5 navy-dark fw-600 mb-2">Log in</div>
		<div class="gray-6 body fw-400 mb-8">You already have an account with us</div>
		<form action="">
			<TextField
				wrapperClass="mb-4"
				label="Email"
				name="email"
				type="email"
				value="carla.honrado@test.com"
				disabled
			/>
			<TextField label="Password" name="password" type="password" value="12345678">
				<span slot="append">
					<Icon name="eye" />
				</span>
			</TextField>

			<div class="pt-4">
				<Button color="tertiary" size="lg" fullWidth>Log in</Button>
			</div>

			<div class="text-center pt-4 pb-8" />
			<div class="flex a-items-center j-content-center">
				<a href="/" class="label fw-500 coral-dark">Forgot password</a>
				<div class="flex-1" />
				<a href="/" class="label fw-500 coral-dark">Help</a>
			</div>
		</form>
	</svelte:fragment>
</LoginWrapper>
