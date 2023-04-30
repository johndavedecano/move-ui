<script>
	import Button from '$lib/components/Button.svelte';
	import CheckIcon from '$lib/components/CheckICon.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import TextFieldMessage from '$lib/components/TextFieldMessage.svelte';
</script>

<div class="wrapper">
	<div class="header">
		<a href="/" class="logo">
			<Icon name="mm-logo" />
		</a>
	</div>
	<div class="content">
		<div class="content-inner">
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
		</div>
	</div>
	<div class="actions">
		<Button color="tertiary" size="lg" fullWidth>Continue</Button>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: stretch;
		--space-left: 24px;
		--space-right: 24px;
		--top-height: 96px;
		--bottom-height: 74px;
	}
	.header {
		display: flex;
		height: var(--top-height);
		background-color: var(--white);
		align-items: center;
		padding-left: var(--space-left);
		padding-right: var(--space-right);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
	}
	.content-inner {
		padding-left: var(--space-left);
		padding-right: var(--space-right);
		padding-top: var(--top-height);
		padding-bottom: var(--bottom-height);
	}
	.actions {
		display: flex;
		align-items: center;
		justify-content: center;
		height: var(--bottom-height);
		padding-left: var(--space-left);
		padding-right: var(--space-right);
		position: fixed;
		background-color: var(--white);
		bottom: 0;
		left: 0;
		width: 100%;
	}
</style>
