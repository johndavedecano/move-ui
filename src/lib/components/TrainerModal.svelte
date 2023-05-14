<script>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte';

	import BottomModal from './BottomModal.svelte';

	export let open = false;

	const dispatcher = createEventDispatcher();

	const onClose = () => dispatcher('close');

	const onClickItem = (selected) => dispatcher('change', { selected });
</script>

<BottomModal on:close={onClose} {open}>
	<div class="px-6 py-2">
		<ul class="trainer-action-list">
			<li>
				<a
					href="/"
					class="navy-dark fw-500 body"
					on:click|preventDefault={() => onClickItem('share')}
				>
					<span class="mr-6">
						<img src="/share.png" alt="" />
					</span>
					Share
				</a>
			</li>
			<li>
				<a
					href="/"
					class="navy-dark fw-500 body"
					on:click|preventDefault={() => onClickItem('copy-link')}
				>
					<span class="mr-6">
						<svg
							width="22"
							height="10"
							viewBox="0 0 22 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 5C0 7.76142 2.23858 10 5 10H8C8.55228 10 9 9.55229 9 9C9 8.44771 8.55228 8 8 8H5C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2H8C8.55228 2 9 1.55228 9 1C9 0.447715 8.55228 0 8 0H5C2.23858 0 0 2.23858 0 5Z"
								fill="#000640"
							/>
							<path
								d="M13 9C13 9.55229 13.4477 10 14 10H17C19.7614 10 22 7.76142 22 5C22 2.23858 19.7614 0 17 0H14C13.4477 0 13 0.447715 13 1C13 1.55228 13.4477 2 14 2H17C18.6569 2 20 3.34315 20 5C20 6.65685 18.6569 8 17 8H14C13.4477 8 13 8.44771 13 9Z"
								fill="#000640"
							/>
							<path
								d="M7 6C6.44772 6 6 5.55228 6 5C6 4.44772 6.44772 4 7 4H15C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6H7Z"
								fill="#000640"
							/>
						</svg>
					</span>
					Copy Link
				</a>
			</li>
			<li>
				<a
					href="/"
					class="navy-dark fw-500 body last"
					on:click|preventDefault={() => onClickItem('instagram')}
				>
					<span class="mr-6">
						<svg
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 3C2 2.44772 2.44772 2 3 2H10C10.5523 2 11 1.55228 11 1C11 0.447715 10.5523 0 10 0H3C1.34315 0 0 1.34315 0 3V19C0 20.6569 1.34315 22 3 22H19C20.6569 22 22 20.6569 22 19V12C22 11.4477 21.5523 11 21 11C20.4477 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H3C2.44772 20 2 19.5523 2 19V3Z"
								fill="#000640"
							/>
							<path
								d="M15 0C14.4477 0 14 0.447715 14 1C14 1.55228 14.4477 2 15 2H18.5858L7.29289 13.2929C6.90237 13.6834 6.90237 14.3166 7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L20 3.41421V7C20 7.55228 20.4477 8 21 8C21.5523 8 22 7.55228 22 7V1C22 0.447715 21.5523 0 21 0H15Z"
								fill="#000640"
							/>
						</svg>
					</span>
					Instagram (@lizzabland)
				</a>
			</li>
		</ul>
	</div>
</BottomModal>

<style>
	ul.trainer-action-list {
		margin: 0;
		padding: 0;
		list-style: none;
		user-select: none;
	}

	ul.trainer-action-list li {
		padding: 0;
		margin: 0;
	}

	ul.trainer-action-list li a {
		display: flex;
		align-items: center;
		padding-top: var(--space-4);
		padding-bottom: var(--space-4);
		border-bottom: solid 1px var(--gray-3);
	}

	ul.trainer-action-list li a.last {
		border-bottom: none;
	}
</style>
