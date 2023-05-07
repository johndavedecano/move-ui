<script>
	export let title = 'Collections';
	export let link = '/';
	export let linkText = 'View all';
	export let subtitle = 'Playlists of workouts curated around specific needs.';
</script>

<div class="section-header">
	<div class="section-header-top">
		<div class="section-header-title">
			<span class="title-6 navy-dark fw-600">
				{title}
			</span>
		</div>
		{#if $$slots.action}
			<slot name="action" />
		{:else if link}
			<a href={link} class="section-header-link label coral-dark fw-600">
				{linkText}
			</a>
		{/if}
	</div>
	{#if subtitle}
		<div class="section-header-bottom">
			<span class="caption gray-5 fw-400"> {subtitle} </span>
		</div>
	{/if}
</div>

<style>
	.section-header {
		display: flex;
		flex-direction: column;
	}

	.section-header-top {
		display: flex;
		align-items: center;
		margin-top: 4.5px;
	}

	.section-header-title {
		flex-grow: 1;
	}
</style>
