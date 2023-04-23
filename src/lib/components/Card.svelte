<script>
	// @ts-nocheck
	import { classnames } from './utils';

	export let customClass = '';
	export let element = 'div';
	export let radius = 'md';
	export let shadow = 'none';
	export let border = 'none';
	export let borderColor = 'gray-5';

	const borderRadius = {
		sm: 'br-8',
		md: 'br-12',
		lg: 'br-24',
		xl: 'br-32'
	};

	const boxShadow = {
		sm: 'shadow-sm',
		md: 'shadow-med',
		lg: 'shadow-lg'
	};

	const borderWidths = {
		none: 'border-0',
		sm: 'border',
		md: 'border-2',
		lg: 'border-4',
		xl: 'border-6',
		xxl: 'border-8'
	};

	$: classes = classnames([
		'card',
		`border-${borderColor}`,
		borderRadius[radius],
		boxShadow[shadow],
		borderWidths[border],
		customClass
	]);
</script>

<svelte:element this={element} {...$$restProps} class={classes}>
	<slot />
</svelte:element>

<style>
	.card {
		background-color: var(--white);
		border-style: solid;
	}
	.br-24 {
		border-radius: 24px;
	}
</style>
