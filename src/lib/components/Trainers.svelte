<script>
	import { faker } from '@faker-js/faker';

	import Avatar from './Avatar.svelte';

	export let direction = 'horizontal';

	let items = Array.from(new Array(9));
</script>

<div class="trainer" class:vertical={direction === 'vertical'}>
	<div class="trainer-items">
		{#each items as _, i}
			<a class="trainer-item" href="/">
				<Avatar
					src={`https://randomuser.me/api/portraits/men/2${i}.jpg`}
					width="80"
					height="80"
					alt="Paul"
				/>
				<span
					class=" text-center navy-dark fw-500 trainer-name"
					class:caption={direction !== 'vertical'}
					class:label={direction === 'horizonal'}
				>
					{faker.name.fullName()}
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
		white-space: break-spaces;
	}

	.trainer.vertical {
		overflow-x: visible;
		overflow-y: auto;
	}

	.trainer.vertical .trainer-items {
		display: flex;
		flex-direction: column;
	}

	.trainer.vertical .trainer-items .trainer-item {
		flex-direction: row;
		gap: 16px;
		align-items: center;
	}
</style>
