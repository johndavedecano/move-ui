<script>
	import { DateInput } from 'date-picker-svelte';
	import Icon from './Icon.svelte';

	import { classnames } from './utils';

	export let name = '';
	export let label = '';
	export let placeholder = '';
	export let wrapperClass = '';
	export let inputClass = '';
	export let format = 'dd/MM/yyyy';

	let value = new Date();

	$: customWrapperClass = classnames(['text-field', 'br-12', wrapperClass]);

	$: customInputClass = classnames([inputClass]);
</script>

<div class={customWrapperClass}>
	<label for={name}>{label}</label>
	<div class="text-field-input br-12">
		<div class="text-field-prepend">
			<Icon name="calendar" />
		</div>
		<DateInput {placeholder} class={customInputClass} {format} {...$$restProps} bind:value />
	</div>
	{#if $$slots.message}
		<div class="text-field-message">
			<slot name="message" />
		</div>
	{/if}
</div>

<style>
	.text-field {
		display: flex;
		flex-direction: column;
	}

	.text-field label {
		color: var(--navy-dark);
		font-size: var(--label);
		font-weight: var(--fw-400);
		margin-bottom: var(--space-1);
	}

	:global(.text-field-input input:disabled) {
		color: var(--gray-5) !important;
	}

	:global(.date-time-field) {
		display: inline;
		width: 100%;
	}

	:global(.text-field-input input) {
		border: none !important;
		color: var(--navy-dark) !important;
		display: inline-flex !important;
		font-size: var(--label) !important;
		font-weight: var(--fw-400) !important;
		height: 100% !important;
		width: 100% !important;
		min-width: 100% !important;
		padding: 0 !important;
		margin: 0 !important;
	}

	:global(.text-field-input input:focus) {
		border: none !important;
		outline: none !important;
		min-width: 100% !important;
		padding: 0 !important;
		margin: 0 !important;
		box-shadow: none !important;
	}

	.text-field-message {
		padding-top: var(--space-1);
	}

	.text-field-input {
		align-items: center;
		background: var(--white);
		border: 1px solid var(--gray-4);
		display: flex;
		flex-direction: row;
		gap: 8px;
		min-height: 52px;
		padding: 8px 12px;
		transition: border 100ms ease-in-out;
	}

	.text-field-input:focus-within {
		border-color: var(--coral-dark);
	}

	.text-field-input:has(:disabled) {
		border-color: var(--gray-4);
		background-color: var(--gray-3);
	}

	input[type='date']::-webkit-inner-spin-button,
	input[type='date']::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none;
	}
</style>
