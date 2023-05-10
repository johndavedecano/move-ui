<script>
	// @ts-nocheck

	import { classnames } from './utils';

	export let wrapperClass;

	$: classes = classnames(['wrapper', wrapperClass]);
</script>

<div class={wrapperClass}>
	{#if $$slots.header}
		<slot name="header" />
	{/if}
	<div class="content">
		<div class="content-inner">
			{#if $$slots.content}
				<slot name="content">
					<div class="title-5 navy-dark fw-600 mb-2">Enter your email</div>
					<div class="gray-6 body fw-400 mb-8">
						Quis ipsum eget ut commodo tristique tristique malesuada augue sed.
					</div>
				</slot>
			{/if}
		</div>
	</div>
	{#if $$slots.actions}
		<div class="actions">
			<slot name="actions" />
		</div>
	{/if}
</div>

<style>
	.wrapper {
		--bottom-height: 74px;
		display: flex;
		flex-direction: column;
		justify-content: stretch;
		max-width: 100%;
		height: 100vh;
	}
	.content-inner {
		padding-bottom: var(--bottom-height);
		padding-left: var(--space-6);
		padding-right: var(--space-6);
		padding-top: 96px;
	}
	.actions {
		align-items: center;
		background-color: var(--white);
		bottom: 0;
		display: flex;
		flex-direction: column;
		min-height: var(--bottom-height);
		justify-content: center;
		left: 0;
		padding-left: var(--space-6);
		padding-right: var(--space-6);
		padding-bottom: var(--space-4);
		position: fixed;
		width: 100%;
	}
</style>
