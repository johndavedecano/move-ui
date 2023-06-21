<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';

	import { classnames } from './utils';

	import countries from './countries';

	import 'flag-icons/css/flag-icons.min.css';
	import Portal from './Portal.svelte';

	export let name = '';
	export let label = '';
	export let placeholder = '';
	export let wrapperClass = '';
	export let inputClass = '';
	export let value = 'US';

	const dispatcher = createEventDispatcher();

	let open = false;

	let offset = {};

	let wrapper;

	let options;

	let search = '';

	let input;

	$: open && get_wrapper_offset(wrapper);

	const handle_click_outside = (evt) => {
		let outside = true;

		if (
			evt.target === wrapper ||
			evt.target === options ||
			wrapper.contains(evt.target) ||
			options.contains(evt.target)
		) {
			outside = false;
		}

		if (outside) {
			search = '';
			open = false;
		}
	};

	const toggle_dropdown = () => {
		open = !open;
		setTimeout(() => input.focus());
	};

	const is_escaped = (evt) => {
		var isEscape = false;

		if ('key' in evt) {
			isEscape = evt.key === 'Escape' || evt.key === 'Esc';
		} else {
			isEscape = evt.keyCode === 27;
		}

		return isEscape;
	};

	const handle_keydown = (evt) => {
		evt = evt || window.event;

		if (is_escaped(evt)) {
			search = '';
			open = false;
		}
	};

	const get_wrapper_offset = (node) => {
		var box = node.getBoundingClientRect();

		var body = document.body;
		var docEl = document.documentElement;

		var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
		var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

		var clientTop = docEl.clientTop || body.clientTop || 0;
		var clientLeft = docEl.clientLeft || body.clientLeft || 0;

		var top = box.top + scrollTop - clientTop;
		var left = box.left + scrollLeft - clientLeft;

		return { top, left, width: node.offsetWidth, height: node.offsetHeight };
	};

	const calculate_position = (node) => {
		offset = get_wrapper_offset(node);

		const handleResize = () => {
			offset = get_wrapper_offset(node);
		};

		window.addEventListener('resize', handleResize, true);
		window.addEventListener('keydown', handle_keydown, true);

		document.addEventListener('click', handle_click_outside, true);

		return {
			destroy() {
				window.removeEventListener('resize', handleResize, true);
				window.removeEventListener('keydown', handle_keydown, true);

				document.removeEventListener('click', handle_click_outside, true);
			}
		};
	};

	const search_countries = (keyword) => {
		return keyword
			? countries.filter((c) =>
					String(c.name).toLowerCase().startsWith(String(keyword).toLowerCase())
			  )
			: countries;
	};

	const on_select_item = (item) => {
		value = item.code;

		dispatcher('change', item);

		search = '';

		open = false;
	};

	$: customWrapperClass = classnames(['country-field', 'br-12', wrapperClass]);

	$: customInputClass = classnames([inputClass]);

	$: selected = countries.find((c) => c.code === value) || {};

	$: items = search_countries(search);

	$: console.log({ items, search });
</script>

<div use:calculate_position bind:this={wrapper} class={customWrapperClass}>
	{#if label}
		<label for={name}>{label}</label>
	{/if}
	<div class="country-field-input br-12">
		{#if !open}
			<div class="country-field-prepend">
				{#if selected}
					<span class={`flag fi fi-${String(selected.code).toLowerCase()}`} />
				{/if}
			</div>
		{/if}

		{#if open}
			<input
				{...$$restProps}
				bind:this={input}
				bind:value={search}
				class={customInputClass}
				placeholder={selected.name || placeholder}
			/>
		{:else}
			<input
				{...$$restProps}
				value={selected.name}
				class={customInputClass}
				{placeholder}
				readonly
				on:click={toggle_dropdown}
			/>
		{/if}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="country-field-append" on:click={toggle_dropdown}>
			<svg
				width="12"
				height="7"
				viewBox="0 0 12 7"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class:open
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0.195262 0.528514C0.455612 0.268165 0.877722 0.268165 1.13807 0.528514L6 5.39044L10.8619 0.528514C11.1223 0.268165 11.5444 0.268165 11.8047 0.528514C12.0651 0.788864 12.0651 1.21097 11.8047 1.47132L6.4714 6.80466C6.21106 7.06501 5.78895 7.06501 5.5286 6.80466L0.195262 1.47132C-0.0650874 1.21097 -0.0650874 0.788864 0.195262 0.528514Z"
					fill="#696969"
				/>
			</svg>
		</div>
	</div>
	{#if $$slots.message}
		<div class="country-field-message">
			<slot name="message" />
		</div>
	{/if}
</div>

<Portal>
	{#if open}
		<div
			bind:this={options}
			role="listbox"
			tabindex="-1"
			class="country-list br-8 shadow-med border-1"
			style="top: {offset.height + offset.top}px; left: {offset.left}px; width: {offset.width}px "
		>
			{#each items as item}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="flag-item"
					on:click={() => on_select_item(item)}
					role="option"
					tabindex="-1"
					aria-selected={value === item.code}
				>
					<span class={`flag fi fi-${String(item.code).toLowerCase()}`} />
					<div class="flag-label">
						{item.name}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</Portal>

<style>
	.country-list {
		position: absolute;
		max-height: 200px;
		background-color: var(--white);
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	svg.open {
		transform: rotate(180deg);
	}

	.flag-item {
		display: flex;
		align-items: center;
		padding: 12px 16px;
		cursor: pointer;
		user-select: none;
	}

	.flag-item:hover {
		background-color: var(--coral-light);
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

	.country-field {
		display: flex;
		flex-direction: column;
	}

	.country-field label {
		color: var(--navy-dark);
		font-size: var(--label);
		font-weight: var(--fw-400);
		margin-bottom: var(--space-3);
	}

	.country-field-message {
		padding-top: var(--space-1);
	}

	.country-field-input {
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

	.country-field-input:focus-within {
		border-color: var(--coral-dark);
	}

	.country-field-input:has(:disabled) {
		border-color: var(--gray-4);
		background-color: var(--gray-3);
	}

	.country-field-input input:disabled {
		color: var(--gray-5);
	}

	.country-field-input input {
		border: none;
		color: var(--navy-dark);
		display: inline-flex;
		font-size: var(--label);
		font-weight: var(--fw-400);
		height: 100%;
		width: 100%;
	}

	.country-field-input input:focus {
		border: none;
		outline: none;
	}

	input[type='date']::-webkit-inner-spin-button,
	input[type='date']::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none;
	}
</style>
