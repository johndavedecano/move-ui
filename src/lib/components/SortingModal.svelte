<script>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte';

	import Card from './Card.svelte';
	import Portal from './Portal.svelte';
	import Overlay from './Overlay.svelte';
	import SortList from './SortList.svelte';

	export let open = false;

	const dispatcher = createEventDispatcher();

	const onClose = () => dispatcher('close');
</script>

<Overlay show={open} on:close={onClose} />

<Portal>
	<div class="sorting-modal-wrapper" class:open>
		<Card customClass="sorting-modal-card" radius="lg" shadow="md">
			<div class="py-4 px-2 sorting-modal-body">
				<SortList />
			</div>
		</Card>
	</div>
</Portal>

<style>
	.sorting-modal-wrapper {
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
		transition: display 300ms ease-in;
	}

	.sorting-modal-wrapper.open {
		display: flex;
	}

	.sorting-modal-body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
	}

	:global(.sorting-modal-card) {
		border-bottom-left-radius: 0px !important;
		border-bottom-right-radius: 0px !important;
		pointer-events: all;
	}
</style>
