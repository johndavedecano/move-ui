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

<style>
	.btn-outline-tertiary {
		background-color: var(--btn-bg) !important;
	}

	.btn-outline-tertiary {
		--btn-bg: transparent;
		--btn-border-color: currentcolor;
		--btn-border-style: solid;
		--btn-border-width: var(--space-1px);
		--btn-color: var(--navy);
		border: var(--btn-border-width) var(--btn-border-style) var(--btn-border-color);
	}

	.btn-flat-tertiary {
		background: transparent !important;
		border: 0 !important;
	}

	.btn-flat-tertiary {
		--btn-color: var(--navy);
	}

	.btn-tertiary {
		--btn-bg: var(--coral-dark);
		--btn-color: var(--white);
	}

	.btn-tertiary:hover {
		--btn-bg: var(--coral-dark);
		--btn-color: var(--white);
	}

	.btn-tertiary:focus {
		--btn-bg: var(--coral-dark);
		--btn-color: var(--white);
	}

	.btn-tonal-tertiary {
		--btn-bg: var(--coral-light);
		--btn-color: var(--coral-dark);
	}

	.btn-outline-tertiary {
		--btn-color: var(--coral-dark);
	}

	.btn-outline-tertiary:hover {
		--btn-color: var(--coral-dark);
	}

	.btn-outline-tertiary:focus {
		--btn-color: var(--coral-dark);
	}

	.btn-flat-tertiary {
		--btn-color: var(--coral-dark);
	}

	.btn-flat-tertiary:hover {
		--btn-color: var(--coral-dark);
	}

	.btn-flat-tertiary:focus {
		--btn-color: var(--coral-dark);
	}

	.btn-tertiary[disabled] {
		--btn-bg: var(--gray-3);
		--btn-color: var(--gray-6);
		--btn-cursor: not-allowed;
	}
</style>
