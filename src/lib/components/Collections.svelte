<script>
	import { createEventDispatcher } from 'svelte';

	export let active = 0;

	const dispatch = createEventDispatcher();

	const onClickItem = (nextActive = 0) => {
		active = nextActive;
		dispatch('change', { active });
	};
</script>

<div class="collections">
	<a
		class:active={active === 0}
		class="label fw-600"
		href="/"
		on:click|preventDefault={() => onClickItem(0)}
	>
		Pregnancy
	</a>
	<a
		class:active={active === 1}
		class="label fw-600"
		href="/"
		on:click|preventDefault={() => onClickItem(1)}
	>
		Post Natal
	</a>
	<a
		class:active={active === 2}
		class="label fw-600"
		href="/"
		on:click|preventDefault={() => onClickItem(2)}
	>
		Sore Back
	</a>
</div>

<style>
	.collections {
		display: flex;
		gap: 12px;
		overflow-x: auto;
	}

	.collections a {
		display: flex;
		border-radius: 8px;
		background-color: var(--gray-2);
		color: var(--navy-dark);
		padding: 12px 24px;
		transition: all 100ms ease-in-out;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		min-width: 160px;
		align-items: center;
		justify-content: center;
	}

	.collections a:hover,
	.collections a.active {
		background-color: var(--coral-light);
		color: var(--coral-dark);
	}
</style>
