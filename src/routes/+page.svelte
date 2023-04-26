<script>
	// @ts-nocheck

	import '$lib/components/styles.css';

	import Buttons from '$lib/demos/Buttons.svelte';
	import Avatars from '$lib/demos/Avatars.svelte';
	import Badges from '$lib/demos/Badges.svelte';
	import Alerts from '$lib/demos/Alerts.svelte';
	import Cards from '$lib/demos/Cards.svelte';
	import Forms from '$lib/demos/Forms.svelte';

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
		<li>
			<a href="/" on:click|preventDefault={() => toggle('avatars')}>Avatars</a>
		</li>
		<li>
			<a href="/" on:click|preventDefault={() => toggle('badges')}>Badges</a>
		</li>
		<li>
			<a href="/" on:click|preventDefault={() => toggle('alerts')}>Alerts</a>
		</li>
		<li>
			<a href="/" on:click|preventDefault={() => toggle('cards')}>Cards</a>
		</li>
		<li>
			<a href="/" on:click|preventDefault={() => toggle('forms')}>Forms</a>
		</li>
		<li>
			<a href="/splash">Splash</a>
		</li>
	</ul>
	<hr />
	{#if show === 'buttons'}
		<Buttons />
	{:else if show === 'avatars'}
		<Avatars />
	{:else if show === 'badges'}
		<Badges />
	{:else if show === 'alerts'}
		<Alerts />
	{:else if show === 'cards'}
		<Cards />
	{:else if show === 'forms'}
		<Forms />
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
