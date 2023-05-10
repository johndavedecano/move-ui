<div class="header">
	<slot name="prepend" />
	<div class="logo">
		<slot name="center" />
	</div>
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
		z-index: 1000;
	}
	.logo {
		align-items: center;
		display: flex;
		flex-grow: 1;
		justify-content: center;
	}
</style>
