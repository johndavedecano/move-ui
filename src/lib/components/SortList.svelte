<script>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte';

	import Card from './Card.svelte';

	const dispatcher = createEventDispatcher();

	const onClickItem = (selected) => dispatcher('change', { selected });
</script>

<Card customClass="sort-list-wrapper" radius="lg" shadow="md">
	<div class="px-6 py-4">
		<ul class="sort-list">
			<li>
				<a
					href="/"
					class="navy-dark fw-500 body"
					on:click|preventDefault={() => onClickItem('recommended')}
				>
					<span class="mr-6">
						<svg
							width="22"
							height="20"
							viewBox="0 0 22 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M5.12727 2.04209C3.48884 2.29066 2 3.66688 2 6.22843C2 7.47358 2.52019 8.83837 3.4074 10.2397C4.28814 11.6308 5.47933 12.9773 6.69805 14.1654C7.91306 15.3499 9.13205 16.3543 10.0492 17.0636C10.4255 17.3546 10.7495 17.5948 11 17.7763C11.2505 17.5948 11.5745 17.3546 11.9508 17.0636C12.868 16.3543 14.0869 15.3499 15.3019 14.1654C16.5207 12.9773 17.7119 11.6308 18.5926 10.2397C19.4798 8.83837 20 7.47358 20 6.22843C20 3.66688 18.5112 2.29066 16.8727 2.04209C15.2089 1.78966 13.1101 2.66543 11.9085 5.27788C11.7453 5.63268 11.3905 5.86002 11 5.86002C10.6095 5.86002 10.2547 5.63268 10.0915 5.27788C8.88992 2.66543 6.7911 1.78966 5.12727 2.04209ZM11 19L11.5581 19.8298C11.2206 20.0568 10.7794 20.0568 10.4419 19.8298L11 19ZM11 2.88494C9.38486 0.674031 7.02171 -0.268209 4.82727 0.0647179C2.14752 0.471274 0 2.74407 0 6.22843C0 8.00624 0.729813 9.74937 1.7176 11.3095C2.71186 12.8799 4.02067 14.3484 5.30195 15.5975C6.58694 16.8502 7.86795 17.905 8.82575 18.6457C9.30547 19.0167 9.70611 19.3104 9.98828 19.5124C10.1294 19.6134 10.241 19.6916 10.3183 19.7451C10.3569 19.7718 10.3869 19.7924 10.4077 19.8066L10.4319 19.8231L10.4387 19.8277L10.4419 19.8298C10.4419 19.8298 10.4419 19.8298 11 19C11.5581 19.8298 11.5581 19.8298 11.5581 19.8298L11.5613 19.8277L11.5681 19.8231L11.5923 19.8066C11.6131 19.7924 11.6431 19.7718 11.6817 19.7451C11.759 19.6916 11.8706 19.6134 12.0117 19.5124C12.2939 19.3104 12.6945 19.0167 13.1742 18.6457C14.132 17.905 15.4131 16.8502 16.6981 15.5975C17.9793 14.3484 19.2881 12.8799 20.2824 11.3095C21.2702 9.74937 22 8.00624 22 6.22843C22 2.74407 19.8525 0.471274 17.1727 0.0647179C14.9783 -0.268209 12.6151 0.674031 11 2.88494Z"
								fill="#000640"
							/>
						</svg>
					</span>
					Recommended
				</a>
			</li>
			<li>
				<a
					href="/"
					class="navy-dark fw-500 body"
					on:click|preventDefault={() => onClickItem('alphabetical')}
				>
					<span class="mr-6">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12.9192 6.10608C12.7616 5.7384 12.4 5.5 12 5.5C11.6 5.5 11.2384 5.7384 11.0809 6.10608L6.58087 16.6061C6.36331 17.1137 6.59846 17.7016 7.10609 17.9191C7.61372 18.1367 8.2016 17.9016 8.41916 17.3939L9.44512 15H14.5549L15.5809 17.3939C15.7984 17.9016 16.3863 18.1367 16.8939 17.9191C17.4016 17.7016 17.6367 17.1137 17.4192 16.6061L12.9192 6.10608ZM12 9.03859L13.6978 13H10.3023L12 9.03859Z"
								fill="#000640"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
								fill="#000640"
							/>
						</svg>
					</span>
					Alphabetical
				</a>
			</li>
			<li>
				<a
					href="/"
					class="navy-dark fw-500 body"
					on:click|preventDefault={() => onClickItem('duration')}
				>
					<span class="mr-6">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L14.7929 16.2071C15.1834 16.5976 15.8166 16.5976 16.2071 16.2071C16.5976 15.8166 16.5976 15.1834 16.2071 14.7929L13 11.5858V5Z"
								fill="#000640"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
								fill="#000640"
							/>
						</svg>
					</span>
					Duration(Short-Long)
				</a>
			</li>
			<li>
				<a
					href="/"
					class="navy-dark fw-500 body last"
					on:click|preventDefault={() => onClickItem('date')}
				>
					<span class="mr-6">
						<svg
							width="22"
							height="21"
							viewBox="0 0 22 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M6 0C6.55228 0 7 0.447715 7 1V2H15V1C15 0.447715 15.4477 0 16 0C16.5523 0 17 0.447715 17 1V2H19C20.6569 2 22 3.34315 22 5V18C22 19.6569 20.6569 21 19 21H3C1.34315 21 0 19.6569 0 18V5C0 3.34315 1.34315 2 3 2H5V1C5 0.447715 5.44772 0 6 0ZM3 4C2.44772 4 2 4.44772 2 5V7H20V5C20 4.44772 19.5523 4 19 4H3ZM20 9H2V18C2 18.5523 2.44772 19 3 19H19C19.5523 19 20 18.5523 20 18V9Z"
								fill="#000640"
							/>
						</svg>
					</span>
					Date Added(Newest-Oldest)
				</a>
			</li>
		</ul>
	</div>
</Card>

<style>
	ul.sort-list {
		margin: 0;
		padding: 0;
		list-style: none;
		user-select: none;
	}

	ul.sort-list li {
		padding: 0;
		margin: 0;
	}

	ul.sort-list li a {
		display: flex;
		align-items: center;
		padding-top: var(--space-4);
		padding-bottom: var(--space-4);
		border-bottom: solid 1px var(--gray-3);
	}

	ul.sort-list li a.last {
		border-bottom: none;
	}
</style>
