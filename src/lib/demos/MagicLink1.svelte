<script>
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import LoginHeader from '$lib/components/LoginHeader.svelte';
	import LoginWrapper from '$lib/components/LoginWrapper.svelte';
</script>

<LoginWrapper>
	<svelte:fragment slot="header">
		<LoginHeader>
			<a href="/pages/onboarding1" slot="prepend">
				<Icon name="arrow-left" />
			</a>
			<div class="pr-6" slot="append" />
		</LoginHeader>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div class="title-5 navy-dark fw-600 mb-2">You already have an account with us</div>
		<div class="gray-6 body fw-400 mb-8">Choose how you'd like to log in</div>
		<form action="">
			<Button color="tertiary" customClass="mb-4" size="lg" fullWidth
				>Magically log me in <svg
					width="13"
					height="12"
					viewBox="0 0 13 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.63807 0.861919C7.37772 0.601569 6.95561 0.601569 6.69526 0.861919C6.43491 1.12227 6.43491 1.54438 6.69526 1.80473L10.2239 5.33332H1.16667C0.798477 5.33332 0.5 5.6318 0.5 5.99999C0.5 6.36818 0.798477 6.66666 1.16667 6.66666H10.2239L6.69526 10.1953C6.43491 10.4556 6.43491 10.8777 6.69526 11.1381C6.95561 11.3984 7.37772 11.3984 7.63807 11.1381L12.3047 6.47139C12.5651 6.21104 12.5651 5.78893 12.3047 5.52858L7.63807 0.861919Z"
						fill="white"
					/>
				</svg>
			</Button>

			<Button color="tertiary" variant="outline" size="lg" fullWidth
				>Enter password <svg
					width="13"
					height="12"
					viewBox="0 0 13 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.63807 0.861919C7.37772 0.601569 6.95561 0.601569 6.69526 0.861919C6.43491 1.12227 6.43491 1.54438 6.69526 1.80473L10.2239 5.33332H1.16667C0.798477 5.33332 0.5 5.6318 0.5 5.99999C0.5 6.36818 0.798477 6.66666 1.16667 6.66666H10.2239L6.69526 10.1953C6.43491 10.4556 6.43491 10.8777 6.69526 11.1381C6.95561 11.3984 7.37772 11.3984 7.63807 11.1381L12.3047 6.47139C12.5651 6.21104 12.5651 5.78893 12.3047 5.52858L7.63807 0.861919Z"
						fill="#FF3374"
					/>
				</svg>
			</Button>
		</form>
	</svelte:fragment>
</LoginWrapper>
