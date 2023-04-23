<script>
	import Avatar from '$lib/components/Avatar.svelte';
</script>

<div class="px-4 mb-4">
	<h2 class="mb-4">Avatars</h2>
	<div class="mb-4">
		<div class="h5">Sizes</div>
	</div>
	<div class="d-flex mb-8">
		<Avatar
			src="https://randomuser.me/api/portraits/men/22.jpg"
			width="16"
			height="16"
			alt="Paul"
		/>
		<Avatar
			src="https://randomuser.me/api/portraits/men/22.jpg"
			width="24"
			height="24"
			alt="Paul"
		/>
		<Avatar
			src="https://randomuser.me/api/portraits/men/22.jpg"
			width="32"
			height="32"
			alt="Paul"
		/>
		<Avatar
			src="https://randomuser.me/api/portraits/men/22.jpg"
			width="42"
			height="42"
			alt="Paul"
		/>
		<Avatar
			src="https://randomuser.me/api/portraits/men/22.jpg"
			width="64"
			height="64"
			alt="Paul"
		/>
	</div>
	<div class="mb-4">
		<div class="h5">Colors</div>
	</div>
	<div class="d-flex mb-8">
		<Avatar bg="var(--navy)" fg="white" width="42" height="42">PS</Avatar>
		<Avatar bg="var(--coral)" fg="white" width="42" height="42">PS</Avatar>
		<Avatar bg="var(--coral-dark)" fg="white" width="42" height="42">PS</Avatar>
		<Avatar bg="var(--coral-light)" fg="white" width="42" height="42">PS</Avatar>
	</div>

	<div class="mb-4">
		<div class="h5">Variants</div>
	</div>
	<div class="d-flex">
		<Avatar bg="var(--coral)" fg="white" width="42" height="42" variant="square">SQ</Avatar>
		<Avatar bg="var(--success)" fg="white" width="42" height="42" variant="rounded">CR</Avatar>
	</div>
</div>
