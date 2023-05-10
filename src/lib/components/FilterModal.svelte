<script>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte';

	import Card from './Card.svelte';
	import Portal from './Portal.svelte';
	import Overlay from './Overlay.svelte';
	import Icon from './Icon.svelte';
	import Exercises from './Exercises.svelte';
	import Button from './Button.svelte';
	import Duration from './Duration.svelte';
	import Intensity from './Intensity.svelte';

	export let open = false;

	const dispatcher = createEventDispatcher();

	const onClose = () => dispatcher('close');
</script>

<Overlay show={open} on:close={onClose} />

<Portal>
	<div class="filter-modal-wrapper" class:open>
		<Card customClass="filter-modal-card" radius="lg" shadow="md">
			<div class="px-6 py-4 filter-modal-body">
				<div class="filter-modal-header">
					<div class="title-5 black fw-600 flex-1">Filter</div>
					<a href="/" on:click|preventDefault={onClose}>
						<Icon name="close" />
					</a>
				</div>
				<div class="pt-4">
					<div class="fw-500 body black fw-500 mb-1">Workout Type</div>
					<div class="fw-500 caption gray-7 fw-500 mb-2">A short description of this section</div>
					<Exercises />
				</div>
				<div class="pt-4">
					<div class="fw-500 body black fw-500 mb-2">Duration</div>
					<Duration />
				</div>
				<div class="pt-4">
					<div class="fw-500 body black fw-500 mb-2">Intensity</div>
					<Intensity />
				</div>
				<div class="filter-modal-actions pt-6">
					<Button color="primary" size="lg" variant="flat">Reset</Button>
					<div class="flex-1">
						<Button color="tertiary" size="lg" fullWidth>Filter Results (12)</Button>
					</div>
				</div>
			</div>
		</Card>
	</div>
</Portal>

<style>
	.filter-modal-wrapper {
		z-index: 3000;
		position: fixed;
		display: none;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: flex-end;
		align-items: stretch;
		pointer-events: none;
	}

	.filter-modal-wrapper.open {
		display: flex;
	}

	.filter-modal-body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
	}

	.filter-modal-header {
		display: flex;
		align-items: center;
	}

	.filter-modal-actions {
		display: flex;
		align-items: center;
	}

	:global(.filter-modal-card) {
		border-bottom-left-radius: 0px !important;
		border-bottom-right-radius: 0px !important;
		min-height: 300px;
		pointer-events: all;
	}
</style>
