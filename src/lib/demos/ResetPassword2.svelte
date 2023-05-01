<script>
	// @ts-nocheck

	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LoginHeader from '$lib/components/LoginHeader.svelte';
	import LoginWrapper from '$lib/components/LoginWrapper.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import TextFieldMessage from '$lib/components/TextFieldMessage.svelte';
	import Checkbox from '$lib/components/CheckBox.svelte';
</script>

<LoginWrapper>
	<svelte:fragment slot="content">
		<div class="text-center mb-4 mt-32">
			<img src="/password-reset.png" alt="" class="mx-auto" />
		</div>
		<div class="title-4 navy-dark fw-600 mb-2 text-center">Password reset link sent</div>
		<div class="gray-6 body fw-400 mb-8 text-center">
			We've emailed test@test.com with a link to reset your password. Make sure to check spam.
		</div>
	</svelte:fragment>
	<svelte:fragment slot="actions">
		<Button color="tertiary" size="lg" fullWidth>Ok</Button>
	</svelte:fragment>
</LoginWrapper>
