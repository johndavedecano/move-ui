<script>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte';

	import BottomModal from './BottomModal.svelte';
	import GenderList from './GenderList.svelte';
	import Button from './Button.svelte';

	export let open = false;
	export let value = '';

	let selected = '';

	const dispatcher = createEventDispatcher();

	const onClose = () => dispatcher('close');

	const onSave = () => {
		dispatcher('change', { selected });
		dispatcher('close');
	};

	$: if (open) {
		selected = value;
	}
</script>

<BottomModal on:close={onClose} {open}>
	<div class="px-6 pt-6">
		<GenderList on:selected={(evt) => (selected = evt.detail.selected)} />
		<div class="mb-2 pt-4">
			<Button color="tertiary" size="lg" fullWidth on:click={onSave}>Save</Button>
		</div>
		<Button on:click={onClose} color="tertiary" variant="flat" size="lg" fullWidth>Cancel</Button>
	</div>
</BottomModal>
