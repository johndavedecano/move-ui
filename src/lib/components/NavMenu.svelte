<script>
	import Avatar from './Avatar.svelte';
	import Portal from './Portal.svelte';

	let active = 0;
</script>

<Portal>
	<div class="nav-menu">
		<a
			href="/"
			class="nav-menu-item navy"
			class:active={active === 0}
			on:click|preventDefault={() => (active = 0)}
		>
			<svg
				width="23"
				height="23"
				viewBox="0 0 23 23"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12.8016 1.37004C11.8074 0.723819 10.5259 0.72382 9.53166 1.37005L1.53166 6.57004C0.680283 7.12344 0.166626 8.06995 0.166626 9.08538V20C0.166626 21.6569 1.50977 23 3.16663 23H19.1666C20.8235 23 22.1666 21.6569 22.1666 20V9.08538C22.1666 8.06995 21.653 7.12344 20.8016 6.57004L12.8016 1.37004ZM10.6216 3.04693C10.953 2.83152 11.3802 2.83152 11.7116 3.04693L19.7116 8.24693C19.9954 8.4314 20.1666 8.7469 20.1666 9.08538V20C20.1666 20.5523 19.7189 21 19.1666 21H15.1665L15.1666 13.4615C15.1666 11.3739 13.1817 10 11.1667 10C9.1517 10 7.1668 11.3739 7.16678 13.4615L7.16663 21L8.34844 21H3.16663C2.61434 21 2.16663 20.5523 2.16663 20V9.08538C2.16663 8.7469 2.33784 8.4314 2.62164 8.24693L10.6216 3.04693ZM9.16663 21H14.3483L13.1665 21L13.1666 13.4615C13.1666 12.8302 12.4653 12 11.1667 12C9.8681 12 9.16678 12.8302 9.16678 13.4615L9.16663 21Z"
					fill="#000C80"
				/>
			</svg>

			<span> Home </span>
		</a>
		<a
			href="/"
			class="nav-menu-item navy"
			class:active={active === 1}
			on:click|preventDefault={() => (active = 1)}
		>
			<svg
				width="23"
				height="20"
				viewBox="0 0 23 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12.0581 19.8298C11.7206 20.0568 11.2794 20.0568 10.9419 19.8298L10.9387 19.8277L10.9319 19.8231L10.9077 19.8066C10.8869 19.7924 10.8569 19.7718 10.8183 19.7451C10.741 19.6916 10.6294 19.6134 10.4883 19.5124C10.2061 19.3104 9.80547 19.0167 9.32575 18.6457C8.36795 17.905 7.08694 16.8502 5.80195 15.5975C4.52067 14.3484 3.21186 12.8799 2.2176 11.3095C1.22981 9.74937 0.5 8.00624 0.5 6.22843C0.5 2.74407 2.64752 0.471274 5.32727 0.0647179C7.52171 -0.268209 9.88486 0.674031 11.5 2.88494C13.1151 0.674031 15.4783 -0.268209 17.6727 0.0647179C20.3525 0.471274 22.5 2.74407 22.5 6.22843C22.5 8.00624 21.7702 9.74937 20.7824 11.3095C19.7881 12.8799 18.4793 14.3484 17.1981 15.5975C15.9131 16.8502 14.632 17.905 13.6742 18.6457C13.1945 19.0167 12.7939 19.3104 12.5117 19.5124C12.3706 19.6134 12.259 19.6916 12.1817 19.7451C12.1431 19.7718 12.1131 19.7924 12.0923 19.8066L12.0681 19.8231L12.0613 19.8277L12.0581 19.8298Z"
					fill="#000C80"
				/>
			</svg>

			<span> Favorites </span>
		</a>
		<a
			href="/"
			class="nav-menu-item navy"
			class:active={active === 2}
			on:click|preventDefault={() => (active = 2)}
		>
			<Avatar
				src="https://randomuser.me/api/portraits/men/22.jpg"
				width="24"
				height="24"
				alt="Paul"
			/>
			<span> Profile </span>
		</a>
	</div>
</Portal>

<style>
	.nav-menu {
		height: 54px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 92px;
		position: sticky;
		bottom: 0;
		left: 0;
		background-color: var(--white);
	}

	.nav-menu a {
		font-style: normal;
		font-size: 8px;
		line-height: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		flex-direction: column;
		opacity: 0.5;
		transition: all 200ms ease-in-out;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
	}

	.nav-menu a:focus,
	.nav-menu a.active {
		opacity: 1;
	}
</style>
