<script>
	// @ts-nocheck

	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LoginHeader from '$lib/components/LoginHeader.svelte';
	import LoginWrapper from '$lib/components/LoginWrapper.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import TextFieldMessage from '$lib/components/TextFieldMessage.svelte';
</script>

<LoginWrapper>
	<svelte:fragment slot="header">
		<LoginHeader>
			<a href="/pages/onboarding1" slot="prepend">
				<Icon name="arrow-left" />
			</a>
			<div class="text-center coral-dark fw-600 body" slot="center">Step 1 of 5</div>
			<div class="pr-6" slot="append" />
		</LoginHeader>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div class="title-5 navy-dark fw-600 mb-8 text-center">What is your full name?</div>
		<form action="">
			<TextField label="First name" name="firstName" type="text" value="Carla" wrapperClass="mb-4">
				<span slot="message">
					<TextFieldMessage customClass="pt-2">First name field is required</TextFieldMessage>
				</span>
			</TextField>
			<TextField label="Last name" name="lastName" type="text" value="Honrado">
				<span slot="message">
					<TextFieldMessage customClass="pt-2">Last name field is required</TextFieldMessage>
				</span>
			</TextField>
		</form>
	</svelte:fragment>
	<svelte:fragment slot="actions">
		<div class="text-center pt-4 pb-2">
			<span class="caption gray-5">
				We protect your data in-line with our <a href="/" class="coral-dark">privacy policy </a>
			</span>
		</div>
		<div class="w-100">
			<Button color="tertiary" size="lg" fullWidth>Continue</Button>
		</div>
	</svelte:fragment>
</LoginWrapper>
