<script>
	import CountryField from '$lib/components/CountryField.svelte';
	import EmotionList from '$lib/components/EmotionList.svelte';
	import GenderList from '$lib/components/GenderList.svelte';
	import IconEmail from '$lib/components/IconEmail.svelte';
	import IconEye from '$lib/components/IconEye.svelte';
	import TextField from '$lib/components/TextField.svelte';
</script>

<CountryField
	wrapperClass="mb-4"
	label="Country"
	name="country"
	placeholder="Select Country"
	required
/>

<TextField
	wrapperClass="mb-4"
	label="Email"
	name="email"
	type="email"
	placeholder="Your email address"
	required
/>

<TextField
	wrapperClass="mb-4"
	label="Email"
	name="email"
	type="email"
	placeholder="I am a disabled input"
	required
	disabled
/>

<TextField
	wrapperClass="mb-4"
	label="Prepend Icon"
	name="email"
	type="email"
	placeholder="Your email address"
	required
>
	<span slot="prepend">
		<IconEmail />
	</span>
</TextField>

<TextField
	wrapperClass="mb-4"
	label="Password"
	name="password"
	type="password"
	placeholder="Secure Password"
	required
>
	<span slot="append">
		<IconEye />
	</span>
</TextField>

<TextField
	wrapperClass="mb-4"
	label="Email"
	name="email"
	type="email"
	placeholder="Your email address"
	required
>
	<span class="caption error-message" slot="message">Email is required</span>
</TextField>

<TextField
	wrapperClass="mb-4"
	label="Comments"
	name="comment"
	placeholder="Your commend goes here..."
	element="textarea"
	required
	rows="5"
/>

<div class="mb-4">
	<GenderList />
</div>

<div class="mb-4">
	<EmotionList />
</div>

<style>
	.error-message {
		color: var(--coral-dark);
	}
</style>
