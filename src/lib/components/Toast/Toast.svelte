<script>
	// @ts-nocheck

	import { onDestroy, onMount } from 'svelte';

	import toastStore from './toast.store';
	import Alert from '../Alert.svelte';
	import Portal from '../Portal.svelte';

	let subscription;
	let timers = {};
	let showing = {};

	$: topLeft = $toastStore.filter((item) => item.position === 'top-left');
	$: topRight = $toastStore.filter((item) => item.position === 'top-right');
	$: topCenter = $toastStore.filter((item) => item.position === 'top-center');
	$: bottomLeft = $toastStore.filter((item) => item.position === 'bottom-left');
	$: bottomRight = $toastStore.filter((item) => item.position === 'bottom-right');
	$: bottomCenter = $toastStore.filter((item) => item.position === 'bottom-center');

	const parseId = (option) => option?.id || '';

	const showToast = (option = {}) => {
		if (option.id) {
			const id = parseId(option);
			showing[id] = true;
			if (window && window.setTimeout) {
				timers[id] = window.setTimeout(() => closeItem(id), option.delay);
			}
		}
	};

	const subscribe = () => {
		subscription = toastStore.onPushed((option) => showToast(option));
	};

	const unsubscribe = () => {
		if (typeof subscription === 'function') subscription();
		Object.keys(timers).map((key) => {
			if (window && window.clearTimeout) {
				window.clearTimeout(timers[key]);
			}
		});
	};

	const closeItem = (id) => {
		if (typeof id === 'string') {
			delete showing[id];
			if (window && window.clearTimeout) {
				window.clearTimeout(timers[id]);
			}
			toastStore.remove(id);
		}
	};

	onMount(() => subscribe());

	onDestroy(() => unsubscribe());
</script>

<Portal>
	{#if bottomLeft.length}
		<div class="mm-toast mm-toast-bottom mm-toast-bottom-left">
			{#each bottomLeft as item (item.id)}
				{#if showing[parseId(item)]}
					<svelte:component
						this={Alert}
						title={item.title}
						body={item.text}
						type={item.type}
						closable={true}
						on:close={() => closeItem(item.id)}
					/>
				{/if}
			{/each}
		</div>
	{/if}

	{#if bottomRight.length}
		<div class="mm-toast mm-toast-bottom mm-toast-bottom-right">
			{#each bottomRight as item (item.id)}
				{#if showing[parseId(item)]}
					<svelte:component
						this={Alert}
						title={item.title}
						body={item.text}
						type={item.type}
						closable={true}
						on:close={() => closeItem(item.id)}
					/>
				{/if}
			{/each}
		</div>
	{/if}

	{#if bottomCenter.length}
		<div class="mm-toast mm-toast-bottom mm-toast-bottom-center">
			{#each bottomCenter as item (item.id)}
				{#if showing[parseId(item)]}
					<svelte:component
						this={Alert}
						title={item.title}
						body={item.text}
						type={item.type}
						closable={true}
						on:close={() => closeItem(item.id)}
					/>
				{/if}
			{/each}
		</div>
	{/if}

	{#if topLeft.length}
		<div class="mm-toast mm-toast-top mm-toast-top-left">
			{#each topLeft as item (item.id)}
				{#if showing[parseId(item)]}
					<svelte:component
						this={Alert}
						title={item.title}
						body={item.text}
						type={item.type}
						closable={true}
						on:close={() => closeItem(item.id)}
					/>
				{/if}
			{/each}
		</div>
	{/if}

	{#if topRight.length}
		<div class="mm-toast mm-toast-top mm-toast-top-right">
			{#each topRight as item (item.id)}
				{#if showing[parseId(item)]}
					<svelte:component
						this={Alert}
						title={item.title}
						body={item.text}
						type={item.type}
						closable={true}
						on:close={() => closeItem(item.id)}
					/>
				{/if}
			{/each}
		</div>
	{/if}

	{#if topCenter.length}
		<div class="mm-toast mm-toast-top mm-toast-top-center">
			{#each topCenter as item (item.id)}
				{#if showing[parseId(item)]}
					<svelte:component
						this={Alert}
						title={item.title}
						body={item.text}
						type={item.type}
						closable={true}
						on:close={() => closeItem(item.id)}
					/>
				{/if}
			{/each}
		</div>
	{/if}
</Portal>

<style>
	.mm-toast {
		--mm-toast-offset: 16px;
		--mm-toast-zindex: 9999;
	}

	.mm-toast {
		position: fixed;
		z-index: var(--mm-toast-zindex);
		top: var(--mm-toast-offset);
		left: var(--mm-toast-offset);
		right: var(--mm-toast-offset);
		bottom: var(--mm-toast-offset);
		pointer-events: none;
		display: flex;
		gap: var(--mm-toast-offset);
	}

	.mm-toast-top :global(.mm-toast-alert) {
		margin-bottom: var(--mm-toast-offset);
	}

	.mm-toast-top-left {
		align-items: flex-start;
		justify-content: flex-end;
		flex-direction: column-reverse;
	}

	.mm-toast-top-right {
		align-items: flex-end;
		justify-content: flex-end;
		flex-direction: column-reverse;
	}

	.mm-toast-top-center {
		align-items: center;
		justify-content: flex-end;
		flex-direction: column-reverse;
	}

	.mm-toast-bottom :global(.mm-toast-alert) {
		margin-top: var(--mm-toast-offset);
	}

	.mm-toast-bottom-left {
		align-items: flex-start;
		justify-content: flex-end;
		flex-direction: column;
	}

	.mm-toast-bottom-right {
		align-items: flex-end;
		justify-content: flex-end;
		flex-direction: column;
	}

	.mm-toast-bottom-center {
		align-items: center;
		justify-content: flex-end;
		flex-direction: column;
	}
</style>
