<script>
	import Card from '$lib/components/Card.svelte';
</script>

<div class="px-4 mb-4">
	<h2 class="mb-4">Cards</h2>
	<div class="mb-8">
		<Card customClass="mb-4">
			<div class="p-8">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis eu erat eu
					sodales.
				</p>
			</div>
		</Card>
		<Card border="sm" customClass="mb-4">
			<div class="p-8">
				<p>Bordered SM</p>
			</div>
		</Card>
		<Card border="md" customClass="mb-4">
			<div class="p-8">
				<p>Bordered MD</p>
			</div>
		</Card>
		<Card border="lg" customClass="mb-4">
			<div class="p-8">
				<p>Bordered LG</p>
			</div>
		</Card>
		<Card shadow="sm" customClass="mb-4">
			<div class="p-8">
				<p>Shadow SM</p>
			</div>
		</Card>
		<Card shadow="md" customClass="mb-4">
			<div class="p-8">
				<p>Shadow MD</p>
			</div>
		</Card>
		<Card shadow="lg" customClass="mb-4">
			<div class="p-8">
				<p>Shadow SM</p>
			</div>
		</Card>
	</div>
</div>
