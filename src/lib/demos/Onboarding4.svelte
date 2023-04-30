<script>
	import Button from '$lib/components/Button.svelte';
	import GenderList from '$lib/components/GenderList.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LoginHeader from '$lib/components/LoginHeader.svelte';
	import LoginWrapper from '$lib/components/LoginWrapper.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import TextFieldMessage from '$lib/components/TextFieldMessage.svelte';
	import Checkbox from '$lib/components/checkbox.svelte';
</script>

<LoginWrapper>
	<svelte:fragment slot="header">
		<LoginHeader>
			<a href="/pages/onboarding1" slot="prepend">
				<Icon name="arrow-left" />
			</a>
			<div class="text-center coral-dark fw-600 body" slot="center">Step 2 of 5</div>
			<div class="pr-6" slot="append" />
		</LoginHeader>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div style="padding-bottom: 50px;">
			<div class="title-5 navy-dark fw-600 mb-8 text-center">
				How do you describe your gender identity?
			</div>
			<GenderList />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="actions">
		<div class="text-center pt-4 pb-2">
			<span class="caption gray-5">
				We protect your data in-line with our <a href="/" class="coral-dark">privacy policy </a>
			</span>
		</div>
		<div class="pb-4 w-100">
			<Button color="tertiary" size="lg" fullWidth>Continue</Button>
		</div>
	</svelte:fragment>
</LoginWrapper>
