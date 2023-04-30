<script>
	import Icon from '$lib/components/Icon.svelte';
</script>

<div class="header">
	<slot name="prepend" />
	<a href="/" class="logo">
		<Icon name="mm-logo" />
	</a>
	<slot name="append" />
</div>

<style>
	.header {
		align-items: center;
		background-color: var(--white);
		display: flex;
		height: 96px;
		left: 0;
		padding-left: var(--space-6);
		padding-right: var(--space-6);
		position: fixed;
		top: 0;
		width: 100%;
	}
	.logo {
		align-items: center;
		display: flex;
		flex-grow: 1;
		justify-content: center;
	}
</style>
