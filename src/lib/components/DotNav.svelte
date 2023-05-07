<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';

	export let active = 0;

	export let items = [];

	const dispatch = createEventDispatcher();

	const onClickItem = (nextActive) => dispatch('change', { active: nextActive });
</script>

<ul class="dot-nav">
	{#each items as _, i}
		<li>
			<a href="/" on:click|preventDefault={() => onClickItem(i)} class:active={active === i}>{i}</a>
		</li>
	{/each}
</ul>

<style>
	.dot-nav {
		width: 100%;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		gap: 4px;
	}

	.dot-nav li {
		margin: 0;
		padding: 0;
	}

	.dot-nav li a {
		font-size: 0;
		display: block;
		width: 8px;
		height: 8px;
		background-color: var(--coral-light);
		border-radius: 50%;
		transition: width 100ms ease-in-out;
	}

	.dot-nav li a:hover {
		background-color: var(--coral);
	}

	.dot-nav li a.active {
		background-color: var(--coral-dark);
		width: 24px;
		border-radius: 8px;
	}
</style>
