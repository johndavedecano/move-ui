<script>
	// @ts-nocheck
	import '$lib/components/styles.css';

	import { page } from '$app/stores';

	import Splash from '$lib/demos/Splash.svelte';
	import Onboarding1 from '$lib/demos/Onboarding1.svelte';
	import Onboarding2 from '$lib/demos/Onboarding2.svelte';
	import Onboarding3 from '$lib/demos/Onboarding3.svelte';
	import Onboarding4 from '$lib/demos/Onboarding4.svelte';
	import Onboarding5 from '$lib/demos/Onboarding5.svelte';
	import Onboarding6 from '$lib/demos/Onboarding6.svelte';
	import Onboarding7 from '$lib/demos/Onboarding7.svelte';
	import Onboarding8 from '$lib/demos/Onboarding8.svelte';
	import Onboarding9 from '$lib/demos/Onboarding9.svelte';
	import Onboarding10 from '$lib/demos/Onboarding10.svelte';
	import Onboarding11 from '$lib/demos/Onboarding11.svelte';
	import Onboarding12 from '$lib/demos/Onboarding12.svelte';
	// reset password
	import ResetPassword1 from '$lib/demos/ResetPassword1.svelte';
	import ResetPassword2 from '$lib/demos/ResetPassword2.svelte';
	import ResetPassword3 from '$lib/demos/ResetPassword3.svelte';
	import ResetPassword4 from '$lib/demos/ResetPassword4.svelte';
	// magic link
	import MagicLink1 from '$lib/demos/MagicLink1.svelte';
	import MagicLink2 from '$lib/demos/MagicLink2.svelte';
	import MagicLink3 from '$lib/demos/MagicLink3.svelte';
	import MagicLink4 from '$lib/demos/MagicLink4.svelte';

	import Checkin1 from '$lib/demos/Checkin1.svelte';
	import Checkin2 from '$lib/demos/Checkin2.svelte';

	import Home1 from '$lib/demos/Home1.svelte';
	import Home2 from '$lib/demos/Home2.svelte';
	import Home3 from '$lib/demos/Home3.svelte';
	import Home4 from '$lib/demos/Home4.svelte';
	import Home5 from '$lib/demos/Home5.svelte';

	import SplashCheckin from '$lib/demos/SplashCheckin.svelte';
	import Misc from '$lib/demos/Misc.svelte';
	import Toasts from '$lib/demos/Toasts.svelte';
	import Playlist1 from '$lib/demos/Playlist1.svelte';

	$: slug = $page.params.slug;

	$: component =
		{
			splash: Splash,
			onboarding1: Onboarding1,
			onboarding2: Onboarding2,
			onboarding3: Onboarding3,
			onboarding4: Onboarding4,
			onboarding5: Onboarding5,
			onboarding6: Onboarding6,
			onboarding7: Onboarding7,
			onboarding8: Onboarding8,
			onboarding9: Onboarding9,
			onboarding10: Onboarding10,
			onboarding11: Onboarding11,
			onboarding12: Onboarding12,
			resetpassword1: ResetPassword1,
			resetpassword2: ResetPassword2,
			resetpassword3: ResetPassword3,
			resetpassword4: ResetPassword4,
			magiclink1: MagicLink1,
			magiclink2: MagicLink2,
			magiclink3: MagicLink3,
			magiclink4: MagicLink4,
			checkin: SplashCheckin,
			checkin1: Checkin1,
			checkin2: Checkin2,
			home1: Home1,
			home2: Home2,
			home3: Home3,
			home4: Home4,
			home5: Home5,
			playlist1: Playlist1,
			misc: Misc,
			toasts: Toasts
		}[slug] || Splash;
</script>

<svelte:component this={component} />
