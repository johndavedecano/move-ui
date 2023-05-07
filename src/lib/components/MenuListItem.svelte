<script>
	export let title = '';
	export let subtitle = '';
	export let href = '';
</script>

<li class="menu-list-item">
	<a {href}>
		<span class="body"> {title} </span>
		{#if subtitle}
			<span class="caption gray-6 fw-400">{subtitle} </span>
		{/if}
	</a>
	<slot />
</li>

<style>
	li.menu-list-item {
		display: flex;
		align-items: center;
		padding: 16px;
		border-bottom: solid 1px var(--gray-4);
	}

	li.menu-list-item:last-child {
		border-bottom: none;
	}

	li.menu-list-item a:visited {
		color: var(--navy-dark);
	}

	li.menu-list-item a {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
</style>
