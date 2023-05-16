<script>
	// @ts-nocheck

	import AvatarField from '$lib/components/AvatarField.svelte';
	import Button from '$lib/components/Button.svelte';
	import CountrySelect from '$lib/components/CountrySelect.svelte';
	import DateField from '$lib/components/DateField.svelte';

	// @ts-nocheck
	import Icon from '$lib/components/Icon.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import SortingModal from '$lib/components/SortingModal.svelte';
	import TextField from '$lib/components/TextField.svelte';

	let sorting = false;
</script>

<SortingModal open={sorting} on:close={() => (sorting = false)} />

<PageWrapper>
	<svelte:fragment slot="header">
		<PageHeader>
			<div slot="prepend">
				<a href="/pages">
					<Icon name="arrow-left" />
				</a>
			</div>
			<div slot="center" class="body fw-600 navy-dark">Edit Profile</div>
			<div slot="append">
				<a href="/pages">
					<Icon name="question" />
				</a>
			</div>
		</PageHeader>
	</svelte:fragment>

	<svelte:fragment slot="content">
		<div class="mb-6 avatar-field-wrapper">
			<AvatarField />
		</div>
		<form action="">
			<div class="mb-6 grid grid-col-1">
				<TextField label="Email" name="email" type="email" value="carla.honrado@test.com">
					<span slot="prepend">
						<Icon name="email" />
					</span>
				</TextField>
			</div>
			<div class="grid grid-col-2 gap-4 mb-6">
				<div>
					<TextField label="First name" name="first_name" type="text" value="Carla">
						<span slot="prepend">
							<Icon name="email" />
						</span>
					</TextField>
				</div>
				<div>
					<TextField label="Last name" name="last_name" type="text" value="Honrado">
						<span slot="prepend">
							<Icon name="email" />
						</span>
					</TextField>
				</div>
			</div>
			<div class="mb-6 grid grid-col-1">
				<TextField label="Gender" name="gender" type="text" value="Female" />
			</div>

			<div class="mb-6 grid grid-col-1">
				<DateField label="Date of birth" name="dob" value="" />
			</div>

			<div class="grid grid-col-2 gap-4 mb-6">
				<div>
					<CountrySelect label="Country" name="first_name" />
				</div>
				<div>
					<TextField label="Postcode" name="postcode" type="text" value="4834RK">
						<span slot="prepend">
							<Icon name="email" />
						</span>
					</TextField>
				</div>
			</div>
		</form>
		<div class="bottom-spacer" />
	</svelte:fragment>

	<svelte:fragment slot="actions">
		<div class="mb-2">
			<Button color="tertiary" variant="flat" size="lg" fullWidth>Reset Password</Button>
		</div>
		<Button color="tertiary" size="lg" fullWidth>Save</Button>
	</svelte:fragment>
</PageWrapper>

<style>
	.avatar-field-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 97px;
	}

	.bottom-spacer {
		height: 80px;
	}
</style>
