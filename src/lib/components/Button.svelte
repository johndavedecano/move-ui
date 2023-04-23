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
		if (variant === 'tonal') return `btn-${color} btn-tonal`;

		if (variant === 'outline' && color === 'primary') return `btn-outline`;

		if (variant === 'outline') return `btn-outline-${color}`;

		if (variant === 'flat' && color === 'primary') return `btn-flat`;

		if (variant === 'flat') return `btn-flat-${color}`;

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
