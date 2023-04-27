<script>
	// @ts-nocheck

	import GenderListItem from '$lib/components/GenderListItem.svelte';

	let selected = 'female';

	const labels = {
		male: 'Male',
		female: 'Female',
		'non-binary': 'Non-binary',
		other: 'Other',
		none: 'Prefer not to say'
	};

	const onItemClicked = (evt) => {
		selected = evt.detail.selected;
	};
</script>

<GenderListItem
	on:selected={onItemClicked}
	selected={selected === 'female'}
	label={labels['female']}
	value="female"
	customClass="mb-4"
>
	<span slot="icon">
		<img src="/female.png" alt="female" />
	</span>
</GenderListItem>

<GenderListItem
	on:selected={onItemClicked}
	selected={selected === 'male'}
	value="male"
	label={labels['male']}
	customClass="mb-4"
>
	<span slot="icon">
		<img src="/male.png" alt="male" />
	</span>
</GenderListItem>

<GenderListItem
	on:selected={onItemClicked}
	selected={selected === 'non-binary'}
	value="non-binary"
	label={labels['non-binary']}
	customClass="mb-4"
>
	<span slot="icon">
		<img src="/non-binary.png" alt="non-binary" />
	</span>
</GenderListItem>

<GenderListItem
	on:selected={onItemClicked}
	selected={selected === 'other'}
	value="other"
	label={labels['other']}
	customClass="mb-4"
>
	<span slot="icon">
		<img src="/star.png" alt="star" />
	</span>
</GenderListItem>

<GenderListItem
	on:selected={onItemClicked}
	selected={selected === 'none'}
	value="none"
	label={labels['none']}
>
	<span slot="icon">
		<img src="/monkey.png" alt="monkey" />
	</span>
</GenderListItem>

<style>
	img {
		width: 24px;
		height: auto;
	}
</style>
