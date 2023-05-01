<script>
	// @ts-nocheck

	import { classnames } from './utils';

	export let name = '';
	export let label = '';
	export let placeholder = '';
	export let wrapperClass = '';
	export let inputClass = '';

	let value;

	$: customWrapperClass = classnames(['expiration-field', 'br-12', wrapperClass]);

	$: customInputClass = classnames([inputClass]);

	const formatExpiration = (node, length = 5) => {
		const formatValue = (value) => {
			return value
				.replace(
					/^([1-9]\/|[2-9])$/g,
					'0$1/' // 3 > 03/
				)
				.replace(
					/^(0[1-9]|1[0-2])$/g,
					'$1/' // 11 > 11/
				)
				.replace(
					/^([0-1])([3-9])$/g,
					'0$1/$2' // 13 > 01/3
				)
				.replace(
					/^(0?[1-9]|1[0-2])([0-9]{2})$/g,
					'$1/$2' // 141 > 01/41
				)
				.replace(
					/^([0]+)\/|[0]+$/g,
					'0' // 0/ > 0 and 00 > 0
				)
				.replace(
					/[^\d\/]|^[\/]*$/g,
					'' // To allow only digits and `/`
				)
				.replace(
					/\/\//g,
					'/' // Prevent entering more than 1 `/`
				);
		};

		function updateValue() {
			node.value = formatValue(node.value);
		}

		node.setAttribute('maxLength', 5);

		node.addEventListener('input', updateValue);
		node.addEventListener('paste', updateValue);

		return {
			destroy() {
				node.removeEventListener('input', updateValue);
				node.removeEventListener('paste', updateValue);
			}
		};
	};
</script>

<div class={customWrapperClass}>
	<label for={name}>{label}</label>
	<div class="expiration-field-input br-12">
		{#if $$slots.prepend}
			<div class="expiration-field-prepend">
				<slot name="prepend" />
			</div>
		{/if}
		<input
			type="text"
			{placeholder}
			class={customInputClass}
			{...$$restProps}
			bind:value
			use:formatExpiration
		/>
		{#if $$slots.append}
			<div class="expiration-field-append">
				<slot name="append" />
			</div>
		{/if}
	</div>
	{#if $$slots.message}
		<div class="expiration-field-message">
			<slot name="message" />
		</div>
	{/if}
</div>

<style>
	.expiration-field {
		display: flex;
		flex-direction: column;
	}

	.expiration-field label {
		color: var(--navy-dark);
		font-size: var(--label);
		font-weight: var(--fw-400);
		margin-bottom: var(--space-3);
	}

	.expiration-field-message {
		padding-top: var(--space-1);
	}

	.expiration-field-input {
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

	.expiration-field-input:focus-within {
		border-color: var(--coral-dark);
	}

	.expiration-field-input:has(:disabled) {
		border-color: var(--gray-4);
		background-color: var(--gray-3);
	}

	.expiration-field-input input:disabled,
	.expiration-field-input textarea:disabled {
		color: var(--gray-5);
	}

	.expiration-field-input input,
	.expiration-field-input textarea {
		border: none;
		color: var(--navy-dark);
		display: inline-flex;
		font-size: var(--label);
		font-weight: var(--fw-400);
		height: 100%;
		width: 100%;
	}

	.expiration-field-input input:focus,
	.expiration-field-input textarea:focus {
		border: none;
		outline: none;
	}

	input[type='date']::-webkit-inner-spin-button,
	input[type='date']::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none;
	}
</style>
