<script>
	import Avatar from './Avatar.svelte';
</script>

<div class="avatar-field">
	<Avatar width="124" height="124" src="https://randomuser.me/api/portraits/women/95.jpg" />
	<a class="avatar-field-button" href="/" on:click|preventDefault={() => {}}>
		<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11ZM14 11C14 12.6569 12.6569 14 11 14C9.34315 14 8 12.6569 8 11C8 9.34315 9.34315 8 11 8C12.6569 8 14 9.34315 14 11Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M7 0C6.56957 0 6.18743 0.27543 6.05132 0.683772L5.27924 3H3C1.34315 3 0 4.34315 0 6V17C0 18.6569 1.34315 20 3 20H19C20.6569 20 22 18.6569 22 17V6C22 4.34315 20.6569 3 19 3H16.7208L15.9487 0.683772C15.8126 0.27543 15.4304 0 15 0H7ZM6.94868 4.31623L7.72076 2H14.2792L15.0513 4.31623C15.1874 4.72457 15.5696 5 16 5H19C19.5523 5 20 5.44772 20 6V17C20 17.5523 19.5523 18 19 18H3C2.44772 18 2 17.5523 2 17V6C2 5.44772 2.44772 5 3 5H6C6.43043 5 6.81257 4.72457 6.94868 4.31623Z"
				fill="white"
			/>
		</svg>
	</a>
</div>

<style>
	.avatar-field {
		width: 124px;
		position: relative;
	}

	.avatar-field-button {
		width: 40px;
		height: 40px;
		display: inline-flex;
		background-color: var(--coral-dark);
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: solid 2px var(--white);
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>
