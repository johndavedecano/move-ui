<script>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte';

	import AlertSuccessIcon from './AlertSuccessIcon.svelte';
	import AlertErrorIcon from './AlertErrorIcon.svelte';
	import AlertInfoIcon from './AlertInfoIcon.svelte';
	import AlertWarningIcon from './AlertWarningIcon.svelte';

	export let fullWidth = false;
	export let customClass = '';
	export let element = 'div';
	export let title = '';
	export let body = '';
	export let closable = true;
	export let type = '';

	$: classes = ['alert', 'br-8', 'shadow-med', fullWidth ? 'w-100' : '', customClass]
		.filter((v) => v)
		.join(' ');

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
		<div class="alert-append" on:click={() => dispatcher('close')}>
			<svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.853553 0.646447C0.658291 0.451184 0.341709 0.451184 0.146447 0.646447C-0.0488155 0.841709 -0.0488155 1.15829 0.146447 1.35355L3.29293 4.50004L0.146447 7.64652C-0.0488153 7.84178 -0.0488155 8.15837 0.146447 8.35363C0.341709 8.54889 0.658291 8.54889 0.853553 8.35363L4.00004 5.20714L7.14645 8.35355C7.34171 8.54882 7.65829 8.54882 7.85355 8.35355C8.04882 8.15829 8.04882 7.84171 7.85355 7.64645L4.70714 4.50004L7.85355 1.35363C8.04882 1.15837 8.04882 0.841784 7.85355 0.646522C7.65829 0.45126 7.34171 0.45126 7.14645 0.646522L4.00004 3.79293L0.853553 0.646447Z"
					fill="white"
				/>
			</svg>
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
