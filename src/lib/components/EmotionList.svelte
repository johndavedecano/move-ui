<script>
	// @ts-nocheck
	let selected = 0;

	const onClickItem = (next) => (selected = next);
</script>

<div class="emotion-list">
	<a
		class="br-8 emotion-list-item"
		class:selected={selected === 1}
		href="/"
		on:click|preventDefault={() => onClickItem(1)}
	>
		<img src="/emotion-1.png" alt="1" />
	</a>
	<a
		class="br-8 emotion-list-item"
		class:selected={selected === 2}
		href="/"
		on:click|preventDefault={() => onClickItem(2)}
	>
		<img src="/emotion-2.png" alt="2" />
	</a>
	<a
		class="br-8 emotion-list-item"
		class:selected={selected === 3}
		href="/"
		on:click|preventDefault={() => onClickItem(3)}
	>
		<img src="/emotion-3.png" alt="3" />
	</a>
	<a
		class="br-8 emotion-list-item"
		class:selected={selected === 4}
		href="/"
		on:click|preventDefault={() => onClickItem(4)}
	>
		<img src="/emotion-4.png" alt="4" />
	</a>
	<a
		class="br-8 emotion-list-item"
		class:selected={selected === 5}
		href="/"
		on:click|preventDefault={() => onClickItem(5)}
	>
		<img src="/emotion-5.png" alt="5" />
	</a>
</div>

<style>
	.emotion-list {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.emotion-list-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 59px;
		height: 48px;
		background: var(--white);
		border: 1px solid var(--gray-4);
		border-radius: 8px;
		cursor: pointer;
		transition: all 100ms ease-in-out;
	}

	.emotion-list-item:hover img {
		transform: scale(1.1);
	}

	.emotion-list-item:hover,
	:global(.emotion-list-item.selected) {
		background-color: var(--coral-light) !important;
		border-color: var(--coral-dark) !important;
	}

	img {
		width: 24px;
		height: auto;
	}
</style>
