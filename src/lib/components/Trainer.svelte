<script>
	import { faker } from '@faker-js/faker';

	import Avatar from './Avatar.svelte';

	export let direction = 'horizontal';

	export let like = false;
</script>

<div
	class="trainer-item"
	class:vertical={direction === 'vertical'}
	class:horizontal={direction !== 'vertical'}
>
	<a href="/" on:click|preventDefault={() => {}}>
		<Avatar
			src={`https://randomuser.me/api/portraits/men/21.jpg`}
			width="80"
			height="80"
			alt="Paul"
		/>
	</a>
	<div class="trainer-item-content" class:text-center={direction !== 'vertical'}>
		<a href="/" on:click|preventDefault={() => {}}>
			<span
				class="navy-dark fw-500 trainer-name"
				class:caption={direction !== 'vertical'}
				class:label={direction === 'horizonal'}
			>
				{faker.name.fullName()}
			</span>
		</a>
	</div>
	{#if like}
		<a class="trainer-play-button" href="/" on:click|preventDefault={() => {}}>
			<img src="/like.png" alt="" />
		</a>
	{/if}
</div>

<style>
	.trainer-item {
		min-width: 80px;
		display: flex;

		gap: 8px;
	}

	.trainer-item.horizontal {
		flex-direction: column;
	}

	.trainer-item.vertical {
		flex-direction: row;
		align-items: center;
	}

	.trainer-item-content {
		flex-grow: 1;
	}

	.trainer-name {
		white-space: break-spaces;
	}
</style>
