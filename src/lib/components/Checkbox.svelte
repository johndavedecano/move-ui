<script>
	// @ts-nocheck

	import Icon from './Icon.svelte';

	export let id = '';
	export let name = 'checkbox';
</script>

<label for={name} class="checkbox">
	<input type="checkbox" {name} {id} {...$$restProps} />
	<div class="checkbox-checker">
		<Icon name="check" class="checkbox-icon" />
	</div>
	{#if $$slots.default}
		<span class="checkbox-label">
			<slot />
		</span>
	{/if}
</label>

<style>
	.checkbox {
		align-items: center;
		cursor: pointer;
		display: inline-flex;
		overflow: hidden;
		position: relative;
	}

	.checkbox-checker {
		align-items: center;
		background-color: var(--white);
		border-radius: 4px;
		border: 1px solid var(--gray-6);
		cursor: pointer;
		display: flex;
		height: 20px;
		justify-content: center;
		width: 20px;
		transition: all 100ms ease-in-out;
	}

	.checkbox input {
		height: 20px;
		left: 0;
		opacity: 0;
		position: absolute;
		top: 0;
		width: 20px;
	}

	.checkbox .checkbox-icon {
		display: none;
	}

	.checkbox input:checked ~ .checkbox-checker {
		background-color: var(--coral-dark);
		border-color: var(--coral-dark);
	}

	.checkbox input:checked .checkbox-icon {
		display: block;
	}

	.checkbox input:disabled ~ .checkbox-checker {
		background-color: var(--gray-3);
		border-color: var(--gray-6);
	}

	:global(.checkbox input:disabled ~ .checkbox-checker .checkbox-icon path) {
		fill: var(--gray-6) !important;
	}

	.checkbox-label {
		padding-left: 8px;
	}
</style>
