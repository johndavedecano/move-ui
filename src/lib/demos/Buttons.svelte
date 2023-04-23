<script>
	import Button from '$lib/components/Button.svelte';
</script>

<div class="px-4 mb-4">
	<h2 class="mb-4">Buttons</h2>
	<div class="mb-4">
		<div class="h5">Sizes</div>
	</div>
	<div class="d-flex mb-8">
		<Button color="tertiary" size="sm">Small</Button>
		<Button color="tertiary" size="md">Medium</Button>
		<Button color="tertiary" size="lg">large</Button>
	</div>
	<div class="mb-4">
		<div class="h5">Full Width</div>
	</div>
	<div class="d-flex mb-8">
		<Button fullWidth customClass="mb-4" color="tertiary" size="sm">Small</Button>
		<Button fullWidth customClass="mb-4" color="tertiary" size="md">Medium</Button>
		<Button fullWidth customClass="mb-4" color="tertiary" size="lg">large</Button>
	</div>
	<div class="mb-4">
		<div class="h5">Colors</div>
	</div>
	<div class="d-flex mb-8">
		<Button color="primary" size="md">Primary</Button>
		<Button color="secondary" size="md">Secondary</Button>
		<Button color="destructive" size="md">Destructive</Button>
		<Button color="tertiary" size="md">Tertiary</Button>
	</div>
	<div class="mb-4">
		<div class="h5">Variants</div>
	</div>
	<div class="d-flex mb-8">
		<Button color="primary" size="md">Filled</Button>
		<Button color="primary" size="md" variant="tonal">Tonal</Button>
		<Button color="primary" size="md" variant="outline">Outlined</Button>
		<Button color="primary" size="md" variant="flat">Flat</Button>
	</div>
	<div class="d-flex mb-8">
		<Button color="secondary" size="md">Filled</Button>
		<Button color="secondary" size="md" variant="tonal">Tonal</Button>
		<Button color="secondary" size="md" variant="outline">Outlined</Button>
		<Button color="secondary" size="md" variant="flat">Flat</Button>
	</div>
	<div class="d-flex mb-8">
		<Button color="destructive" size="md">Filled</Button>
		<Button color="destructive" size="md" variant="outline">Outlined</Button>
		<Button color="destructive" size="md" variant="flat">Flat</Button>
	</div>
	<div class="d-flex mb-8">
		<Button color="tertiary" size="md">Filled</Button>
		<Button color="tertiary" size="md" variant="tonal">Tonal</Button>
		<Button color="tertiary" size="md" variant="outline">Outlined</Button>
		<Button color="tertiary" size="md" variant="flat">Flat</Button>
	</div>
	<div class="mb-4">
		<div class="h5">Borders</div>
	</div>
	<div class="d-flex mb-8">
		<Button color="primary" size="md" border={false}>No Border</Button>
	</div>
	<div class="mb-4">
		<div class="h5">Custom Element</div>
	</div>
	<div class="d-flex mb-8">
		<Button color="primary" size="md" element="a" href="/">Link</Button>
	</div>
	<div class="mb-4">
		<div class="h5">Disabled</div>
	</div>
	<div class="d-flex mb-8">
		<Button color="primary" size="md" disabled>Primary</Button>
		<Button color="secondary" size="md" disabled>Secondary</Button>
		<Button color="destructive" size="md" disabled>Destructive</Button>
		<Button color="tertiary" size="md" disabled>Tertiary</Button>
	</div>
	<div class="d-flex mb-8">
		<Button disabled color="destructive" size="md">Filled</Button>
		<Button disabled color="destructive" size="md" variant="outline">Outlined</Button>
		<Button disabled color="destructive" size="md" variant="flat">Flat</Button>
	</div>

	<div class="mb-4">
		<div class="h5">Circle</div>
	</div>
	<div class="d-flex mb-8">
		<Button circle color="tertiary" size="sm">&times;</Button>
		<Button circle color="tertiary" size="sm" variant="tonal">&times;</Button>
		<Button circle color="tertiary" size="sm" variant="outline">&times;</Button>
		<Button circle color="tertiary" size="sm" variant="flat">&times;</Button>

		<Button circle color="tertiary" size="md">&times;</Button>
		<Button circle color="tertiary" size="md" variant="tonal">&times;</Button>
		<Button circle color="tertiary" size="md" variant="outline">&times;</Button>
		<Button circle color="tertiary" size="md" variant="flat">&times;</Button>

		<Button circle color="tertiary" size="lg">&times;</Button>
		<Button circle color="tertiary" size="lg" variant="tonal">&times;</Button>
		<Button circle color="tertiary" size="lg" variant="outline">&times;</Button>
		<Button circle color="tertiary" size="lg" variant="flat">&times;</Button>
	</div>

	<div class="d-flex mb-8">
		<Button circle color="primary" size="sm">&times;</Button>
		<Button circle color="primary" size="sm" variant="tonal">&times;</Button>
		<Button circle color="primary" size="sm" variant="outline">&times;</Button>
		<Button circle color="primary" size="sm" variant="flat">&times;</Button>

		<Button circle color="primary" size="md">&times;</Button>
		<Button circle color="primary" size="md" variant="tonal">&times;</Button>
		<Button circle color="primary" size="md" variant="outline">&times;</Button>
		<Button circle color="primary" size="md" variant="flat">&times;</Button>

		<Button circle color="primary" size="lg">&times;</Button>
		<Button circle color="primary" size="lg" variant="tonal">&times;</Button>
		<Button circle color="primary" size="lg" variant="outline">&times;</Button>
		<Button circle color="primary" size="lg" variant="flat">&times;</Button>
	</div>
	<div class="d-flex mb-8">
		<Button circle color="secondary" size="sm">&times;</Button>
		<Button circle color="secondary" size="sm" variant="tonal">&times;</Button>
		<Button circle color="secondary" size="sm" variant="outline">&times;</Button>
		<Button circle color="secondary" size="sm" variant="flat">&times;</Button>

		<Button circle color="secondary" size="md">&times;</Button>
		<Button circle color="secondary" size="md" variant="tonal">&times;</Button>
		<Button circle color="secondary" size="md" variant="outline">&times;</Button>
		<Button circle color="secondary" size="md" variant="flat">&times;</Button>

		<Button circle color="secondary" size="lg">&times;</Button>
		<Button circle color="secondary" size="lg" variant="tonal">&times;</Button>
		<Button circle color="secondary" size="lg" variant="outline">&times;</Button>
		<Button circle color="secondary" size="lg" variant="flat">&times;</Button>
	</div>
	<div class="d-flex mb-8">
		<Button circle color="destructive" size="sm">&times;</Button>
		<Button circle color="destructive" size="sm" variant="outline">&times;</Button>
		<Button circle color="destructive" size="sm" variant="flat">&times;</Button>

		<Button circle color="destructive" size="md">&times;</Button>
		<Button circle color="destructive" size="md" variant="outline">&times;</Button>
		<Button circle color="destructive" size="md" variant="flat">&times;</Button>

		<Button circle color="destructive" size="lg">&times;</Button>
		<Button circle color="destructive" size="lg" variant="outline">&times;</Button>
		<Button circle color="destructive" size="lg" variant="flat">&times;</Button>
	</div>
</div>
