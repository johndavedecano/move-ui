<script>
	// @ts-nocheck
</script>

<div class="emotion-list">
	<div class="br-8 emotion-list-item">
		<img src="/emotion-1.png" alt="1" />
	</div>
	<div class="br-8 emotion-list-item">
		<img src="/emotion-2.png" alt="2" />
	</div>
	<div class="br-8 emotion-list-item">
		<img src="/emotion-3.png" alt="3" />
	</div>
	<div class="br-8 emotion-list-item">
		<img src="/emotion-4.png" alt="4" />
	</div>
	<div class="br-8 emotion-list-item">
		<img src="/emotion-5.png" alt="5" />
	</div>
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
		background: #ffffff;
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
		background-color: var(--coral-light);
		border-color: var(--coral-dark);
	}

	img {
		width: 24px;
		height: auto;
	}
</style>
