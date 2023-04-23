<script>
	// @ts-nocheck

	import { classnames } from './utils';

	// @ts-nocheck
	export let size = 'md';
	export let color = 'tertiary';
	export let fullWidth = false;
	export let customClass = '';
	export let element = 'span';

	const badgeSize = {
		sm: 'badge-small',
		md: 'badge-med'
	};

	$: classes = classnames([
		'badge',
		badgeSize[size],
		color ? `badge-${color}` : 'badge-tertiary',
		fullWidth ? 'w-100' : '',
		customClass
	]);
</script>

<svelte:element this={element} {...$$restProps} class={classes}>
	<slot />
</svelte:element>

<style>
	.badge-tertiary {
		--badge-color: var(--white);
		--badge-bg: var(--coral-dark);
	}
	.badge-reverse {
		--badge-color: var(--black);
		--badge-bg: var(--white);
	}
	.badge-light {
		--badge-color: var(--gray-700);
		--badge-bg: var(--gray-300);
	}
	.badge-light-success {
		--badge-color: var(--success);
		--badge-bg: var(--success-light);
	}
	.badge-light-error {
		--badge-color: var(--error);
		--badge-bg: var(--error-light);
	}
	.badge-light-alert {
		--badge-color: var(--alert);
		--badge-bg: var(--alert-light);
	}
	.badge-light-warning {
		--badge-color: var(--warning);
		--badge-bg: var(--warning-light);
	}
	.badge-light-info {
		--badge-color: var(--info);
		--badge-bg: var(--info-light);
	}
	.badge-dark {
		--badge-color: var(--white);
		--badge-bg: var(--gray-700);
	}
	.badge-dark-success {
		--badge-color: var(--white);
		--badge-bg: var(--success);
	}
	.badge-dark-error {
		--badge-color: var(--white);
		--badge-bg: var(--error);
	}
	.badge-dark-alert {
		--badge-color: var(--black);
		--badge-bg: var(--alert);
	}
	.badge-dark-warning {
		--badge-color: var(--white);
		--badge-bg: var(--warning);
	}
	.badge-dark-info {
		--badge-color: var(--white);
		--badge-bg: var(--info);
	}
	.badge-light-success {
		--badge-color: var(--success);
		--badge-bg: var(--success-light);
	}
</style>
