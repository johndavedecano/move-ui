<script>
	import CollectionItem from './CollectionItem.svelte';

	let items = Array.from(new Array(9));
</script>

<div class="collection-items">
	{#each items as item}
		<CollectionItem />
	{/each}
</div>

<style>
	.collection-items {
		display: flex;
		flex-direction: column;
	}
</style>
