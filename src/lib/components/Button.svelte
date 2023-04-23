<script>
	// @ts-nocheck
	export let size = 'med';
	export let variant = 'filled';
	export let color = 'primary';
	export let circle = false;
	export let border = true;
	export let fullWidth = false;
	export let customClass = '';
	export let element = 'button';

	const createVariant = ({ variant, color }) => {
		if (variant === 'filled') return `btn-${color}`;
		if (variant === 'tonal') return color === 'primary' ? 'btn-tonal' : `btn-tonal-${color}`;
		if (variant === 'outline') return color === 'primary' ? `btn-outline` : `btn-outline-${color}`;
		if (variant === 'flat') return color === 'primary' ? `btn-flat` : `btn-flat-${color}`;
		return `btn-${color} btn-${variant}`;
	};

	$: classes = [
		'btn',
		size ? `btn-${size}` : '',
		createVariant({ variant, color }),
		border ? '' : 'btn-border-none',
		circle ? 'btn-circle' : '',
		fullWidth ? 'w-100' : '',
		customClass
	]
		.filter((v) => v)
		.join(' ');
</script>

<svelte:element this={element} {...$$restProps} class={classes}>
	<slot />
</svelte:element>
