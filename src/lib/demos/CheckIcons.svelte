<script>
	// @ts-nocheck

	import CheckIcon from '$lib/components/CheckIcon.svelte';
	import IconDot from '$lib/components/IconDot.svelte';
	import IconFire from '$lib/components/IconFire.svelte';
</script>

<div class="mb-4 flex" style="gap: 5px;">
	<CheckIcon color="coral-dark" />
	<CheckIcon color="info" />
	<CheckIcon color="success" />
	<CheckIcon color="navy-dark" />
	<CheckIcon color="warning" />
	<CheckIcon color="alert" />
	<CheckIcon color="error" />

	<CheckIcon color="navy-dark">
		<IconDot />
	</CheckIcon>

	<CheckIcon color="navy-dark">
		<IconFire />
	</CheckIcon>
</div>
