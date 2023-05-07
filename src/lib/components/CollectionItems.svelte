<script>
	let items = Array.from(new Array(9));
</script>

<div class="collection-items">
	{#each items as item}
		<div class="collection-item mb-4">
			<span class="collection-item-count grape fw-700"> 25 </span>
			<div class="collection-item-img" style="--background-img: url('/slide-2.jpg');" />
			<div class="collection-item-content pl-4">
				<div class="navy-dark body fw-500 mb-2">Prenatal Pilates for Labor and Delivery</div>
				<div class="gray-6 caption fw-400">
					More than 300,000 women join Mia Freedman each week as she has...
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.collection-items {
		display: flex;
		flex-direction: column;
	}

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
