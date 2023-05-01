<script>
	// @ts-nocheck
	import { classnames } from './utils';

	export let name = '';
	export let label = '';
	export let placeholder = '';
	export let wrapperClass = '';
	export let inputClass = '';
	export let element = 'input';

	let value;
	let type = 'card';

	$: customWrapperClass = classnames(['cc-field', 'br-12', wrapperClass]);

	$: customInputClass = classnames([inputClass]);

	const hasIcons = ['visa', 'mastercard', 'amex', 'diners'];

	function creditCardType(number) {
		// visa
		var re = new RegExp('^4');
		if (number.match(re) != null) return 'Visa';

		// Mastercard
		re = new RegExp('^5[1-5]');
		if (number.match(re) != null) return 'Mastercard';

		// AMEX
		re = new RegExp('^3[47]');
		if (number.match(re) != null) return 'AMEX';

		// Discover
		re = new RegExp(
			'^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)'
		);
		if (number.match(re) != null) return 'Discover';

		// Diners
		re = new RegExp('^36');
		if (number.match(re) != null) return 'Diners';

		// Diners - Carte Blanche
		re = new RegExp('^30[0-5]');
		if (number.match(re) != null) return 'Diners - Carte Blanche';

		// JCB
		re = new RegExp('^35(2[89]|[3-8][0-9])');
		if (number.match(re) != null) return 'JCB';

		// Visa Electron
		re = new RegExp('^(4026|417500|4508|4844|491(3|7))');
		if (number.match(re) != null) return 'Visa Electron';

		return '';
	}

	const creditCardFormat = (node, length = 19) => {
		const formatCardNumber = (value) => {
			const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
			const onlyNumbers = value.replace(/[^\d]/g, '');

			return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
				[$1, $2, $3, $4].filter((group) => !!group).join(' ')
			);
		};

		function updateValue(e) {
			node.value = formatCardNumber(node.value);

			type = String(creditCardType(node.value)).toLowerCase();

			if (!hasIcons.includes(type)) type = 'card';
		}

		node.setAttribute('maxLength', length);

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
	<div class="cc-field-input br-12">
		<div class="cc-field-prepend">
			<img src={`/${type}.png`} alt="visa" class="cc-icon" />
		</div>
		<input
			this={element}
			class={customInputClass}
			{placeholder}
			bind:value
			use:creditCardFormat
			{...$$restProps}
		/>
		{#if $$slots.append}
			<div class="cc-field-append">
				<slot name="append" />
			</div>
		{/if}
	</div>
	{#if $$slots.message}
		<div class="cc-field-message">
			<slot name="message" />
		</div>
	{/if}
</div>

<style>
	.cc-field {
		display: flex;
		flex-direction: column;
	}

	.cc-icon {
		width: 32px;
		height: auto;
	}

	.cc-field label {
		color: var(--navy-dark);
		font-size: var(--label);
		font-weight: var(--fw-400);
		margin-bottom: var(--space-3);
	}

	.cc-field-message {
		padding-top: var(--space-1);
	}

	.cc-field-input {
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

	.cc-field-input:focus-within {
		border-color: var(--coral-dark);
	}

	.cc-field-input:has(:disabled) {
		border-color: var(--gray-4);
		background-color: var(--gray-3);
	}

	.cc-field-input input:disabled {
		color: var(--gray-5);
	}

	.cc-field-input input {
		border: none;
		color: var(--navy-dark);
		display: inline-flex;
		font-size: var(--label);
		font-weight: var(--fw-400);
		height: 100%;
		width: 100%;
	}

	.cc-field-input input:focus {
		border: none;
		outline: none;
	}

	input[type='date']::-webkit-inner-spin-button,
	input[type='date']::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none;
	}
</style>
