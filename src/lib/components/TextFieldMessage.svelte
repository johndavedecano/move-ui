<script>
	// @ts-nocheck

	import CheckIcon from '$lib/components/CheckIcon.svelte';

	import { classnames } from './utils';

	export let iconColor = 'gray-5';
	export let textColor = 'gray-5';

	export let customClass;

	$: wrapperClass = classnames(['flex a-items-center', customClass]);

	$: classes = classnames(['pl-3 caption fw-500', textColor]);
</script>

<div class={wrapperClass}>
	<CheckIcon color={iconColor} />
	<div class={classes}>
		<slot />
	</div>
</div>
