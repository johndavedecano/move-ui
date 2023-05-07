<script>
	import Icon from './Icon.svelte';
	import MenuList from './MenuList.svelte';
	import MenuListItem from './MenuListItem.svelte';
	import Switch from './Switch.svelte';

	let items = [
		{
			title: 'Exercise Settings',
			href: '/'
		},
		{
			title: 'Preferences',
			href: '/'
		},
		{
			title: 'Subscriptions',
			href: '/'
		},
		{
			title: 'Apple Health',
			subtitle: 'Sync workout data to Apple Health',
			href: '/',
			key: 'apple-health'
		},
		{
			title: 'Support',
			href: '/'
		},
		{
			title: 'About',
			href: '/'
		}
	];
</script>

<MenuList>
	{#each items as item}
		<MenuListItem title={item.title} href={item.href} subtitle={item.subtitle}>
			{#if item.key === 'apple-health'}
				<Switch />
			{:else}
				<Icon name="chevron-right" />
			{/if}
		</MenuListItem>
	{/each}
</MenuList>
