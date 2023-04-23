<script>
	import cx from 'classnames';

	export let size = ''; // lg, md, sm
	export let variant = ''; // filled, tonal, outlined, flat
	export let color = 'primary'; // primary, seconary, destructive
	export let disabled = false;
	export let icon = false;

	$: classes = cx({
		btn: true
	});
</script>

<button class={classes}>
	<slot />
</button>
