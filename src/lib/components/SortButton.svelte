<script>
	import Icon from './Icon.svelte';
</script>

<a
	href="/"
	on:click|preventDefault={() => console.log('sorting...')}
	class="fw-600 navy-dark label"
>
	<span class="mr-2">Sort</span>
	<Icon name="sort" />
</a>
