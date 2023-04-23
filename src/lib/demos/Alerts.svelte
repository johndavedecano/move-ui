<script>
	import Alert from '$lib/components/Alert.svelte';
	import IconFire from '$lib/components/IconFire.svelte';
</script>

<div class="px-4 mb-4">
	<h2 class="mb-4">Alerts</h2>
	<div class="mb-8">
		<Alert
			title="Podcasts will start playing automatically when you start your workout."
			customClass="mb-4"
		/>
		<Alert
			type="error"
			title="Ooops! There was an error!"
			body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			customClass="mb-4"
		/>
		<Alert
			type="success"
			title="Congratulations!"
			body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			customClass="mb-4"
		/>
		<Alert
			type="info"
			title="Notice to the public!"
			body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			customClass="mb-4"
		/>
		<Alert
			type="warning"
			title="I am telling you now. There is a problem!"
			body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			customClass="mb-4"
		/>
		<Alert
			title="Podcasts will start playing automatically when you start your workout."
			customClass="mb-4"
		>
			<div slot="prepend" class="pr-2">
				<IconFire />
			</div>
		</Alert>
	</div>
</div>
