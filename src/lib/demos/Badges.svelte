<script>
	import Badge from '$lib/components/Badge.svelte';
</script>

<div class="px-4 mb-4">
	<h2 class="mb-4">Badges</h2>
	<div class="mb-4">
		<div class="h5">Sizes</div>
	</div>
	<div class="d-flex mb-8">
		<Badge color="tertiary" size="sm">Small</Badge>
		<Badge color="tertiary" size="md">Medium</Badge>
	</div>
	<div class="mb-4">
		<div class="h5">Colors</div>
	</div>
	<div class="d-flex mb-8">
		<Badge color="info" size="md">Info</Badge>
		<Badge color="warning" size="md">Warning</Badge>
		<Badge color="light-error" size="md">light error</Badge>
		<Badge color="light-success" size="md">light success</Badge>
		<Badge color="tertiary" size="md">Tertiary</Badge>
	</div>
</div>
