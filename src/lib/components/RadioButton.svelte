<script>
	// @ts-nocheck
	import IconDot from './IconDot.svelte';

	export let id = '';
	export let name = 'radio-button';
</script>

<label for={name} class="radio-button">
	<input type="radio" {name} {id} {...$$restProps} />
	<div class="radio-button-checker">
		<IconDot class="radio-button-icon" />
	</div>
	{#if $$slots.default}
		<span class="radio-button-label">
			<slot />
		</span>
	{/if}
</label>

<style>
	.radio-button {
		align-items: center;
		cursor: pointer;
		display: inline-flex;
		overflow: hidden;
		position: relative;
	}

	.radio-button-checker {
		align-items: center;
		background-color: var(--white);
		border-radius: 50%;
		border: 1px solid var(--gray-6);
		cursor: pointer;
		display: flex;
		height: 20px;
		justify-content: center;
		width: 20px;
		transition: all 100ms ease-in-out;
	}

	.radio-button input {
		height: 20px;
		left: 0;
		opacity: 0;
		position: absolute;
		top: 0;
		width: 20px;
	}

	.radio-button .radio-button-icon {
		display: none;
	}

	.radio-button input:checked ~ .radio-button-checker {
		background-color: var(--coral-dark);
		border-color: var(--coral-dark);
	}

	.radio-button input:checked .radio-button-icon {
		display: block;
	}

	.radio-button input:disabled ~ .radio-button-checker {
		background-color: var(--gray-3);
		border-color: var(--gray-6);
	}

	:global(.radio-button input:disabled ~ .radio-button-checker .radio-button-icon rect) {
		fill: var(--gray-6) !important;
	}

	.radio-button-label {
		padding-left: 8px;
	}
</style>
