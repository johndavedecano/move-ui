<script>
	import Select from 'svelte-select';
	import 'flag-icons/css/flag-icons.min.css';
	import countries from './countries';
	import { classnames } from './utils';

	export let name = 'country';
	export let label = 'Country';
	export let wrapperClass = '';

	$: customWrapperClass = classnames(['country-select', wrapperClass]);
</script>

<div class={customWrapperClass}>
	<label for={name}>
		{label}
	</label>
	<div class="">
		<Select
			{name}
			items={countries}
			placeholder="Select Country"
			itemId="code"
			label="name"
			--height="52px"
			--border-radius="12px"
			--item-hover-bg="var(--coral-light)"
			--item-is-active-bg="var(--coral-dark)"
			--item-is-active-color="var(--white)"
			--item-is-not-selectable-color="var(--white)"
			searchable
		>
			<div slot="item" let:item let:index class="flag-item">
				<span class={`flag fi fi-${String(item.code).toLowerCase()}`} />
				<div class="flag-label">
					{item.name}
				</div>
			</div>
			<div slot="selection" let:selection class="flag-item">
				<span class={`flag fi fi-${String(selection.code).toLowerCase()}`} />
				<div class="flag-label">
					{selection.name}
				</div>
			</div>
		</Select>
	</div>
</div>

<style>
	.country-select {
		display: flex;
		flex-direction: column;

		--item-color: var(--navy-dark);
	}

	label {
		color: var(--navy-dark);
		font-size: var(--label);
		font-weight: var(--fw-400);
		margin-bottom: var(--space-3);
	}

	.flag-item {
		display: flex;
		align-items: center;
		height: 100%;
	}

	.flag {
		min-width: 16px;
	}

	.flag-label {
		padding-left: 8px;
		flex-grow: 1;
		font-size: 14px;
		line-height: 18px;
		font-weight: 400;
	}

	:global(.svelte-select) {
		border-color: var(--gray-4) !important;
	}

	:global(.svelte-select.focused) {
		border-color: var(--coral-dark) !important;
	}
</style>
