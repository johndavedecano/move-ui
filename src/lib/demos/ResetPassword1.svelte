<script>
	// @ts-nocheck

	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LoginHeader from '$lib/components/LoginHeader.svelte';
	import LoginWrapper from '$lib/components/LoginWrapper.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import TextFieldMessage from '$lib/components/TextFieldMessage.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
</script>

<LoginWrapper>
	<svelte:fragment slot="header">
		<LoginHeader>
			<a href="/pages/onboarding1" slot="prepend">
				<Icon name="arrow-left" />
			</a>
			<div class="pr-6" slot="append">
				<Button variant="flat">
					<Icon name="question" />
				</Button>
			</div>
		</LoginHeader>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div class="title-5 navy-dark fw-600 mb-2">Reset password</div>
		<div class="gray-6 body fw-400 mb-8">Enter the email you use for your Mamamia account</div>
		<form action="">
			<TextField label="Email" name="email" type="email" placeholder="Enter your email">
				<span slot="prepend">
					<Icon name="email" />
				</span>
				<span slot="message">
					<TextFieldMessage customClass="pt-2">Email field is required</TextFieldMessage>
				</span>
			</TextField>
		</form>
	</svelte:fragment>
	<svelte:fragment slot="actions">
		<Button color="tertiary" size="lg" fullWidth>Send Reset Link</Button>
	</svelte:fragment>
</LoginWrapper>
