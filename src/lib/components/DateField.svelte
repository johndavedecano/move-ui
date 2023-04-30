<script>
	import { DateInput } from 'date-picker-svelte';
	import Icon from './Icon.svelte';

	import { classnames } from './utils';

	export let name = '';
	export let label = '';
	export let placeholder = '';
	export let wrapperClass = '';
	export let inputClass = '';

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
		<DateInput {placeholder} class={customInputClass} {...$$restProps} bind:value />
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
</style>
