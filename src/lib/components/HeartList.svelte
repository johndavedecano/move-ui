<script>
	// @ts-nocheck
	import GenderListItem from '$lib/components/GenderListItem.svelte';

	let selected = 'orange';

	const labels = {
		orange: 'Boost my mood',
		green: 'I just want to move!',
		blue: 'I need to sweat',
		brown: 'I want to feel calm',
		purple: 'Other'
	};

	const onItemClicked = (evt) => {
		selected = evt.detail.selected;
	};
</script>

<GenderListItem
	on:selected={onItemClicked}
	selected={selected === 'orange'}
	label={labels['orange']}
	value="orange"
	customClass="mb-4"
>
	<span slot="icon">
		<img src="/heart-orange.png" alt="orange" />
	</span>
</GenderListItem>

<GenderListItem
	on:selected={onItemClicked}
	selected={selected === 'green'}
	label={labels['green']}
	value="green"
	customClass="mb-4"
>
	<span slot="icon">
		<img src="/heart-green.png" alt="green" />
	</span>
</GenderListItem>

<GenderListItem
	on:selected={onItemClicked}
	selected={selected === 'blue'}
	label={labels['blue']}
	value="blue"
	customClass="mb-4"
>
	<span slot="icon">
		<img src="/heart-blue.png" alt="blue" />
	</span>
</GenderListItem>

<GenderListItem
	on:selected={onItemClicked}
	selected={selected === 'brown'}
	label={labels['brown']}
	value="brown"
	customClass="mb-4"
>
	<span slot="icon">
		<img src="/heart-brown.png" alt="brown" />
	</span>
</GenderListItem>

<GenderListItem
	on:selected={onItemClicked}
	selected={selected === 'purple'}
	label={labels['purple']}
	value="purple"
	customClass="mb-4"
>
	<span slot="icon">
		<img src="/heart-purple.png" alt="purple" />
	</span>
</GenderListItem>

<style>
	img {
		width: 24px;
		height: auto;
	}
</style>
