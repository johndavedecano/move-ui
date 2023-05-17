<script>
	// @ts-nocheck
	import { classnames } from './utils';
	import { createEventDispatcher } from 'svelte';

	import Card from './Card.svelte';

	export let label = 'Female';
	export let value = '';
	export let selected = false;
	export let customClass = '';

	const dispatcher = createEventDispatcher();

	const classes = classnames(['gender-list-item', selected ? 'selected' : '', customClass]);
</script>

<Card
	border="sm"
	radius="sm"
	customClass={classes}
	borderColor={selected ? 'coral-light' : 'gray-4'}
	{...$$restProps}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="p-4 gender-list-item-content"
		on:click={() =>
			dispatcher('selected', {
				selected: value
			})}
	>
		<div class="gender-list-avatar" class:gender-list-avatar-selected={selected}>
			<slot name="icon" />
		</div>
		<div class="gender-list-text pl-6">
			{label}
		</div>
	</div>
</Card>

<style>
	:global(.gender-list-item) {
		user-select: none;
	}

	.gender-list-item-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		cursor: pointer;
	}

	.gender-list-text {
		color: var(--navy-dark);
		font-weight: var(--fw-500);
		font-size: var(--label);
		line-height: var(--line-height);
	}

	.gender-list-avatar {
		width: 48px;
		height: 48px;
		background-color: var(--gray-2);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 100ms ease-in-out;
	}

	.gender-list-avatar-selected {
		background-color: var(--coral-light);
	}
</style>
