<script>
	// @ts-nocheck

	import '$lib/components/styles.css';

	import SplashScreen from '$lib/components/SplashScreen.svelte';

	let active = 0;

	let items = [
		{
			title: 'Welcome to <br />MOVE by Mamamia',
			// prettier-ignore
			description: 'Eleifend tellus enim vitae viverra sodales. Blandit sed quam tincidunt risus malesuada tincidunt. Luctus.'
		},
		{
			title: 'For all body types',
			// prettier-ignore
			description: 'Enjoy new videos everyday eu a odio libero venenatis risus. Starting from $7.99 a month'
		},
		{
			title: 'Welcome to <br />MOVE by Mamamia',
			// prettier-ignore
			description: 'Eleifend tellus enim vitae viverra sodales. Blandit sed quam tincidunt risus malesuada tincidunt. Luctus.'
		}
	];

	const onChangeActive = (evt) => (active = evt.detail.active);
</script>

<SplashScreen {items} {active} on:change={onChangeActive} />
