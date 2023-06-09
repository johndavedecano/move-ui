<script>
	// @ts-nocheck

	import { classnames } from './utils';

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

		if (color === 'primary') return `btn-${variant}`;

		if (variant === 'tonal') return `btn-tonal-${color}`;

		if (variant === 'outline') return `btn-outline-${color}`;

		if (variant === 'flat') return `btn-flat-${color}`;

		return `btn-${color} btn-${variant}`;
	};

	const buttonSize = {
		sm: 'btn-sm',
		md: 'btn-med',
		lg: 'btn-lg'
	};

	$: classes = classnames([
		'btn',
		createVariant({ variant, color }),
		buttonSize[size],
		border ? '' : 'btn-border-none',
		circle ? 'btn-circle' : '',
		fullWidth ? 'w-100' : '',
		customClass
	]);
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<svelte:element
	this={element}
	{...$$restProps}
	class={classes}
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
>
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
		--btn-border-width: 1px;
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
		transition: all 100ms ease-in-out;
	}

	.btn-tertiary:hover {
		--btn-bg: var(--coral);
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
