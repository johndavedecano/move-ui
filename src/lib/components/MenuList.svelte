<ul class="menu-list">
	<slot />
</ul>

<style>
	.menu-list {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;
		flex-direction: column;
		border: solid 1px var(--gray-4);
		border-radius: 12px;
		background-color: white;
	}
</style>
