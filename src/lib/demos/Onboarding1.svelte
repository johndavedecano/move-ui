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
		<LoginHeader />
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div class="title-5 navy-dark fw-600 mb-2">Enter your email</div>
		<div class="gray-6 body fw-400 mb-8">
			Quis ipsum eget ut commodo tristique tristique malesuada augue sed.
		</div>
		<form action="">
			<TextField label="Email" name="email" type="email" value="carla.honrado@test.com">
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
		<Button color="tertiary" size="lg" fullWidth>Continue</Button>
	</svelte:fragment>
</LoginWrapper>
