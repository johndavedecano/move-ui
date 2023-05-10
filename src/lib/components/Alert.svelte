<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';
	import { classnames } from './utils';

	import AlertSuccessIcon from './AlertSuccessIcon.svelte';
	import AlertErrorIcon from './AlertErrorIcon.svelte';
	import AlertInfoIcon from './AlertInfoIcon.svelte';
	import AlertWarningIcon from './AlertWarningIcon.svelte';
	import AlertCloseIcon from './AlertCloseIcon.svelte';

	export let fullWidth = false;
	export let customClass = '';
	export let element = 'div';
	export let title = '';
	export let body = '';
	export let closable = true;
	export let type = '';

	$: classes = classnames(['alert', 'br-8', 'shadow-med', fullWidth ? 'w-100' : '', customClass]);

	const types = {
		success: AlertSuccessIcon,
		info: AlertInfoIcon,
		warning: AlertWarningIcon,
		error: AlertErrorIcon
	};

	const dispatcher = createEventDispatcher();
</script>

<svelte:element this={element} {...$$restProps} class={classes}>
	<div class="alert-prepend">
		<slot name="prepend" />
	</div>
	{#if type && types[type]}
		<div class="alert-icon">
			<svelte:component this={types[type]} />
		</div>
	{/if}
	<div class="alert-content">
		<div class="alert-title">
			{title}
		</div>
		<div class="alert-body">
			{body}
		</div>
	</div>
	{#if closable}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="alert-append pl-4" on:click={() => dispatcher('close')}>
			<AlertCloseIcon />
		</div>
	{/if}
</svelte:element>

<style>
	.alert {
		display: flex;
		padding: 16px 14px 16px 16px;
		background-color: var(--navy-dark);
		flex-direction: row;
	}

	.alert-content {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
	}

	.alert-icon {
		padding-right: 12px;
	}

	.alert-title {
		font-size: var(--caption);
		color: var(--white);
		font-weight: var(--fw-700);
	}

	.alert-body {
		font-size: var(--caption);
		color: var(--white);
		font-weight: var(--medium);
		margin-top: 4.5px;
	}
	.alert-prepend {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.alert-append {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
</style>
