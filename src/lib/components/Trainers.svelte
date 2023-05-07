<script>
	import Avatar from './Avatar.svelte';

	let items = Array.from(new Array(9));
</script>

<div class="trainer">
	<div class="trainer-items">
		{#each items as _, i}
			<a class="trainer-item" href="/">
				<Avatar
					src={`https://randomuser.me/api/portraits/men/2${i}.jpg`}
					width="80"
					height="80"
					alt="Paul"
				/>
				<span class="caption text-center navy-dark fw-500 trainer-name">
					Paul {i}
				</span>
			</a>
		{/each}
	</div>
</div>

<style>
	.trainer {
		width: 100%;
		overflow-x: auto;
	}

	.trainer-items {
		display: flex;
		gap: 16px;
	}

	.trainer-item {
		min-width: 80px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.trainer-name {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>
