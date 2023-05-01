<script>
	import Button from '$lib/components/Button.svelte';
	import DateField from '$lib/components/DateField.svelte';
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
			<div class="text-center coral-dark fw-600 body" slot="center">Step 3 of 5</div>
			<div class="pr-6" slot="append" />
		</LoginHeader>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div class="title-5 navy-dark fw-600 mb-8 text-center">Your birthday</div>
		<form action="">
			<DateField name="dob" type="date" wrapperClass="mb-4" placeholder="DD/MM/YYYY" />
		</form>
	</svelte:fragment>
	<svelte:fragment slot="actions">
		<div class="text-center pt-4 pb-2">
			<span class="caption gray-5">
				We protect your data in-line with our <a href="/" class="coral-dark">privacy policy </a>
			</span>
		</div>
		<div class=" w-100">
			<Button color="tertiary" size="lg" fullWidth>Continue</Button>
		</div>
	</svelte:fragment>
</LoginWrapper>
