<script>
	import Icon from './Icon.svelte';

	export let color = '';
	export let element = 'div';

	$: selectedColor = `--${color}`;
</script>

<svelte:element
	this={element}
	class="check-icon"
	style="--check-icon-bg: var({selectedColor});"
	{...$$restProps}
>
	{#if $$slots.default}
		<slot />
	{:else}
		<Icon name="check" />
	{/if}
</svelte:element>

<style>
	.check-icon {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background-color: var(--check-icon-bg, --coral-dark);
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
