<script>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let item;

	const onClickClose = () => {
		dispatch('close', item);
	};

	const onClickContent = (evt) => {
		if (item.closeOnClick) {
			evt.stopPropagation();
			dispatch('close', item);
		}
	};
</script>

<div
	in:scale
	out:fade
	class="svelte-et-alert"
	class:svelte-et-alert-primary={item.type === 'primary'}
	class:svelte-et-alert-dark={item.type === 'dark'}
	class:svelte-et-alert-default={item.type === 'default'}
	class:svelte-et-alert-info={item.type === 'info'}
	class:svelte-et-alert-success={item.type === 'success'}
	class:svelte-et-alert-warning={item.type === 'warning'}
	class:svelte-et-alert-error={item.type === 'error'}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="svelte-et-alert-content" on:click={onClickContent}>
		{#if item.title}
			<div class="svelte-et-header">
				<div class="svelte-et-title">
					{item.title || ''}
				</div>
			</div>
		{/if}
		{#if item.showClose}
			<a href="/" class="svelte-et-close" on:click|preventDefault={onClickClose}>x</a>
		{/if}
		<div class="svelte-et-text">
			{item.text}
		</div>
	</div>
</div>
