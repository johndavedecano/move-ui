<script>
	import { classnames } from './utils';

	export let bg = '';
	export let fg = '';
	export let src = '';
	export let alt = '';
	export let variant = 'rounded';
	export let customClass = '';
	export let width = '42';
	export let height = '42';

	$: backgroundColor = bg ? bg : 'var(--gray-200)';
	$: textColor = fg ? fg : 'var(--gray-200)';

	$: avatarVariant = variant === 'rounded' ? 'circle' : 'square';

	$: classes = classnames(['overflow-hidden', 'inline-flex', 'fw-500', avatarVariant, customClass]);
</script>

<div
	{...$$restProps}
	class={classes}
	style="width: {width}px; height: {height}px; background-color: {backgroundColor}; color: {textColor};"
>
	{#if src}
		<img {src} {alt} />
	{:else}
		<slot />
	{/if}
</div>

<style>
	div {
		align-items: center;
		justify-content: center;
		text-transform: uppercase;
		font-size: 20px;
	}
	div img {
		width: 100%;
		height: 100%;
	}
</style>
