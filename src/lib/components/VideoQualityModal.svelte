<script>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte';

	import BottomModal from './BottomModal.svelte';
	import RadioButton from './RadioButton.svelte';

	export let open = false;

	const dispatcher = createEventDispatcher();

	const onClose = () => dispatcher('close');
</script>

<BottomModal on:close={onClose} {open}>
	<div class="px-6 pb-6 pt-7">
		<div class="video-qualities">
			<div class="video-qualities-item">
				<RadioButton checked />
				<div class="video-quality-content">
					<div class="body navy-dark fw-400">Auto (Recommended)</div>
					<div class="gray-6 caption fw-400">
						Automatically adjust video quality depending on internet speed
					</div>
				</div>
			</div>

			<div class="video-qualities-item">
				<RadioButton checked />
				<div class="video-quality-content">
					<div class="body navy-dark fw-400">High</div>
					<div class="gray-6 caption fw-400">Highest quality, uses more data</div>
				</div>
			</div>

			<div class="video-qualities-item">
				<RadioButton checked />
				<div class="video-quality-content">
					<div class="body navy-dark fw-400">Medium</div>
				</div>
			</div>

			<div class="video-qualities-item">
				<RadioButton checked />
				<div class="video-quality-content">
					<div class="body navy-dark fw-400">Low</div>
					<div class="gray-6 caption fw-400">Minimum quality, uses less data</div>
				</div>
			</div>
		</div>
	</div>
</BottomModal>

<style>
	.video-qualities {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.video-qualities-item {
		display: flex;
		flex-direction: row;
		gap: 24px;
		align-items: center;
	}

	.video-quality-content {
		display: flex;
		flex-direction: column;
		gap: 4px;
		flex-grow: 1;
	}
</style>
