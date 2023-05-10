<script>
	import Toast from '$lib/components/Toast/Toast.svelte';
	import showToast from '$lib/components/Toast/show-toast';

	let settings = {
		type: 'primary',
		position: 'top-right',
		text: 'Alerts are available for any length of text, as well as an optional close button.',
		title: 'Como Estas!',
		delay: 3000
	};

	const handleClick = () => {
		showToast(settings);
	};
</script>

<div class="container">
	<div class="d-flex justify-content-center p-4">
		<div class="card col-lg-5">
			<div class="card-body">
				<div class="h2 title-4">Mamamia Toast</div>
				<p class="lead mb-2 gray-6 mb-8">Here is a pretty simple demo for you.</p>

				<div class="form-group mb-3">
					<label for="">Title</label>
					<input type="text" bind:value={settings.title} class="form-control form-control-lg" />
				</div>

				<div class="form-group mb-3">
					<label for="">Message</label>
					<textarea bind:value={settings.text} class="form-control form-control-lg" />
				</div>

				<div class="form-group mb-3">
					<label for="">Delay</label>
					<input type="number" bind:value={settings.delay} class="form-control form-control-lg" />
					<span class="helper-text">Milliseconds</span>
				</div>

				<div class="form-group mb-3">
					<label for="">Select Type</label>
					<select bind:value={settings.type} class="form-control form-control-lg">
						<option value="primary"> primary </option>
						<option value="dark"> dark </option>
						<option value="default"> default </option>
						<option value="info"> info </option>
						<option value="warning"> warning </option>
						<option value="error"> error </option>
						<option value="success"> success </option>
					</select>
				</div>
				<div class="form-group mb-4">
					<label for="">Select Position</label>
					<select bind:value={settings.position} class="form-control form-control-lg">
						<option value="top-left"> top-left </option>
						<option value="top-right"> top-right </option>
						<option value="top-center"> top-center </option>
						<option value="bottom-left"> bottom-left </option>
						<option value="bottom-right"> bottom-right </option>
						<option value="bottom-center"> bottom-center </option>
					</select>
				</div>
				<button class="btn btn-primary btn-lg" on:click={handleClick}> Show Toast </button>
			</div>
		</div>
	</div>
</div>

<Toast />

<style>
	.form-group {
		display: flex;
		flex-direction: column;
		margin-bottom: 24px;
	}

	label {
		font-weight: 500;
		margin-bottom: 8px;
	}

	input,
	textarea,
	select {
		padding: 16px;
		border: solid 1px var(--gray-4);
		border-radius: 16px;
	}
</style>
