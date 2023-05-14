<script>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte';

	import SortList from './SortList.svelte';
	import BottomModal from './BottomModal.svelte';

	export let open = false;

	const dispatcher = createEventDispatcher();

	const onClose = () => dispatcher('close');
</script>

<BottomModal on:close={onClose} {open}>
	<SortList />
</BottomModal>
