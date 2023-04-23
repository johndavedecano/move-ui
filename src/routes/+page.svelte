<script>
	// @ts-nocheck

	import '$lib/components/styles.css';
	import '$lib/components/custom.css';

	import Buttons from '$lib/demos/Buttons.svelte';

	let show = 'buttons';

	const toggle = (type) => (show = type);
</script>

<div class="px-4 py-8">
	<h1>Move Svelte Components</h1>
	<p class="mb-8">Component library for the move project</p>
	<ul class="demo-list">
		<li>
			<a href="/" on:click|preventDefault={() => toggle('buttons')}>Buttons</a>
		</li>
	</ul>
	<hr />
	{#if show === 'buttons'}
		<Buttons />
	{:else if show === ''}
		<Buttons />
	{:else}
		<Buttons />
	{/if}
</div>

<style>
	.demo-list {
		margin: 0;
		padding: 0;
		display: flex;
	}
	.demo-list li a {
		display: flex;
		padding: 5px;
		border: solid 1px var(--navy);
	}
</style>
