<script>
	export let count = 25;
	export let imgSrc =
		'https://new-cdn.mamamia.com.au/cms-mainsite.appspot.com/media/ppEBZC9bDo/slide-2.jpg';
	export let title = 'Prenatal Pilates for Labor and Delivery';
	export let subtitle = 'More than 300,000 women join Mia Freedman each week as she has...';
</script>

<div class="collection-item mb-4" style="--image-src: {imgSrc};">
	<span class="collection-item-count grape fw-700"> {count} </span>
	<div class="collection-item-img" style="--background-img: url(var(--image-src));" />
	<div class="collection-item-content pl-4">
		<div class="navy-dark body fw-500 mb-2">{title}</div>
		<div class="gray-6 caption fw-400">
			{subtitle}
		</div>
	</div>
</div>

<style>
	.collection-item {
		background-color: var(--gray-1);
		border-radius: 12px;
		display: flex;
		padding: 16px;
		position: relative;
		overflow: hidden;
	}

	.collection-item-img {
		width: 60px;
		height: 60px;
		min-width: 60px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-image: var(--background-img);
		border-radius: 8px;
	}

	.collection-item-content {
		flex-grow: 1;
	}

	.collection-item-count {
		background: var(--grape-light);
		width: 28px;
		height: 20px;
		color: var(--grape);
		font-size: 9px;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		right: 0;
		border-radius: 0px 4px 4px 12px;
	}
</style>
