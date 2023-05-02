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

	import SplashCheckin from '$lib/demos/SplashCheckin.svelte';
	import Misc from '$lib/demos/Misc.svelte';

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
			checkin: SplashCheckin,
			misc: Misc
		}[slug] || Splash;
</script>

<svelte:component this={component} />
