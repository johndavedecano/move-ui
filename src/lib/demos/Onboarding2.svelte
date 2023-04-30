<script>
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LoginHeader from '$lib/components/LoginHeader.svelte';
	import LoginWrapper from '$lib/components/LoginWrapper.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import TextFieldMessage from '$lib/components/TextFieldMessage.svelte';
	import Checkbox from '$lib/components/CheckBox.svelte';
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
		<div class="title-5 navy-dark fw-600 mb-2">Enter your password</div>
		<div class="gray-6 body fw-400 mb-8">
			Quis ipsum eget ut commodo tristique tristique malesuada augue sed.
		</div>
		<form action="">
			<TextField label="Password" name="password" type="password" value="12345678">
				<span slot="append">
					<Icon name="eye" />
				</span>
				<span slot="message">
					<TextFieldMessage customClass="pt-2">At least 8 characters</TextFieldMessage>
				</span>
			</TextField>
			<div class="pt-6">
				<Checkbox>
					<span class="caption navy-dark">
						I have read and agree to the <a href="/" class="coral-dark">terms</a> and
						<a href="/" class="coral-dark">privacy policy </a>
					</span>
				</Checkbox>
			</div>
		</form>
	</svelte:fragment>
	<svelte:fragment slot="actions">
		<Button color="tertiary" size="lg" fullWidth>Continue</Button>
	</svelte:fragment>
</LoginWrapper>
