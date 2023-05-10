<script>
	// @ts-nocheck
	import '$lib/components/styles.css';

	import Buttons from '$lib/demos/Buttons.svelte';
	import Avatars from '$lib/demos/Avatars.svelte';
	import Badges from '$lib/demos/Badges.svelte';
	import Alerts from '$lib/demos/Alerts.svelte';
	import Cards from '$lib/demos/Cards.svelte';
	import Forms from '$lib/demos/Forms.svelte';
	import Checkboxes from '$lib/demos/Checkboxes.svelte';
	import RadioButtons from '$lib/demos/RadioButtons.svelte';
	import CheckIcons from '$lib/demos/CheckIcons.svelte';

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
			<a href="/" on:click|preventDefault={() => toggle('checkboxes')}>Checkboxes</a>
		</li>
		<li>
			<a href="/" on:click|preventDefault={() => toggle('radio-buttons')}>Radio Buttons</a>
		</li>
		<li>
			<a href="/" on:click|preventDefault={() => toggle('check-icons')}>Check Icons</a>
		</li>
		<li>
			<a href="/pages/toasts">Toasts</a>
		</li>
		<li>
			<a href="/pages">Pages</a>
		</li>
		<li>
			<a href="/pages/misc">Misc</a>
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
	{:else if show === 'checkboxes'}
		<Checkboxes />
	{:else if show === 'radio-buttons'}
		<RadioButtons />
	{:else if show === 'check-icons'}
		<CheckIcons />
	{:else}
		<Buttons />
	{/if}
</div>

<style>
	.demo-list {
		margin: 0;
		padding: 0;
		display: flex;
		width: 100vw;
		overflow-x: auto;
	}
	.demo-list li a {
		display: flex;
		padding: 5px;
		border: solid 1px var(--navy);
		min-width: 120px;
		text-align: center;
		justify-content: center;
		align-items: center;
		white-space: nowrap;
	}
</style>
