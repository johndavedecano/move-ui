<script>
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LoginHeader from '$lib/components/LoginHeader.svelte';
	import LoginWrapper from '$lib/components/LoginWrapper.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import TextFieldMessage from '$lib/components/TextFieldMessage.svelte';
</script>

<LoginWrapper>
	<svelte:fragment slot="header">
		<LoginHeader />
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div class="title-5 navy-dark fw-600 mb-2">Enter your email</div>
		<div class="gray-6 body fw-400 mb-8">
			Quis ipsum eget ut commodo tristique tristique malesuada augue sed.
		</div>
		<form action="">
			<TextField
				wrapperClass="mb-8"
				label="Email"
				name="email"
				type="email"
				value="carla.honrado@test.com"
			>
				<span slot="prepend">
					<Icon name="email" />
				</span>
				<span slot="message">
					<TextFieldMessage customClass="pt-2">Email field is required</TextFieldMessage>
				</span>
			</TextField>
			<TextField label="Password" name="password" type="password" value="12345678">
				<span slot="append">
					<Icon name="eye" />
				</span>
				<span slot="message">
					<TextFieldMessage customClass="pt-2">At least 8 characters</TextFieldMessage>
				</span>
			</TextField>

			<div class="text-center pt-4 pb-6">
				<span class="caption gray-5">
					By continuing you agree to the <a href="/" class="coral-dark">terms</a> and
					<a href="/" class="coral-dark">privacy policy </a>
				</span>
			</div>
			<div class="flex a-items-center j-content-center">
				<a href="/" class="label fw-500 coral-dark">Forgot password</a>
				<div class="flex-1" />
				<a href="/" class="label fw-500 coral-dark">Help</a>
			</div>
		</form>
	</svelte:fragment>
	<svelte:fragment slot="actions">
		<Button color="tertiary" size="lg" fullWidth>Login</Button>
	</svelte:fragment>
</LoginWrapper>
