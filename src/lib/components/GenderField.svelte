<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';
	import { classnames } from './utils';

	export let name = '';
	export let label = '';
	export let wrapperClass = '';
	export let inputClass = '';
	export let element = 'input';
	export let value = '';

	$: customWrapperClass = classnames(['gender-field', 'br-12', wrapperClass]);

	$: customInputClass = classnames([inputClass]);

	const labels = {
		male: 'Male',
		female: 'Female',
		'non-binary': 'Non-binary',
		other: 'Other',
		none: 'Prefer not to say'
	};

	const avatars = {
		male: 'male.png',
		female: 'female.png',
		'non-binary': 'non-binary.png',
		other: 'star.png',
		none: 'monkey.png'
	};

	$: src = value && avatars[value] ? String(`/${avatars[value]}`).toLowerCase() : '';
	$: inputLabel = value && labels[value] ? labels[value] : '';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={customWrapperClass}>
	<label for={name}>{label}</label>
	<div class="gender-field-input br-12">
		{#if src}
			<div class="gender-field-prepend">
				<div class="avatar">
					<img {src} alt="" />
				</div>
			</div>
		{/if}
		<svelte:element
			this={element}
			class={customInputClass}
			readonly
			value={inputLabel}
			placeholder="Select Gender"
		/>
	</div>
	{#if $$slots.message}
		<div class="gender-field-message">
			<slot name="message" />
		</div>
	{/if}
</div>

<style>
	.gender-field {
		display: flex;
		flex-direction: column;
	}

	.gender-field .avatar {
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--gray-2);
		border-radius: 50%;
	}

	.gender-field .avatar img {
		width: 16px;
		height: auto;
	}

	.gender-field label {
		color: var(--navy-dark);
		font-size: var(--label);
		font-weight: var(--fw-400);
		margin-bottom: var(--space-3);
	}

	.gender-field-message {
		padding-top: var(--space-1);
	}

	.gender-field-input {
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

	.gender-field-input:focus-within {
		border-color: var(--coral-dark);
	}

	.gender-field-input:has(:disabled) {
		border-color: var(--gray-4);
		background-color: var(--gray-3);
	}

	.gender-field-input input:disabled,
	.gender-field-input textarea:disabled {
		color: var(--gray-5);
	}

	.gender-field-input input,
	.gender-field-input textarea {
		border: none;
		color: var(--navy-dark);
		display: inline-flex;
		font-size: var(--label);
		font-weight: var(--fw-400);
		height: 100%;
		width: 100%;
	}

	.gender-field-input input:focus,
	.gender-field-input textarea:focus {
		border: none;
		outline: none;
	}

	input[type='date']::-webkit-inner-spin-button,
	input[type='date']::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none;
	}
</style>
