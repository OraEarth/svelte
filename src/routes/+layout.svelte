<script>
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger,Modal, BottomNav, BottomNavItem, Button, Tooltip,  } from 'flowbite-svelte'
	import { goto } from '$app/navigation';
	import { DarkMode } from 'flowbite-svelte';
	let darkmodebtn =	'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';
	let defaultModal = false;
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
	  <img
		src="https://flowbite.com/docs/images/logo.svg"
		class="mr-3 h-6 sm:h-9"
		alt="Flowbite Logo"
	  />
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
		Ora Earth
	  </span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
	  <NavLi href="/" active={true}>Home</NavLi>
	  <NavLi href="/about">About</NavLi>
	</NavUl>
<DarkMode btnClass={darkmodebtn} />

  </Navbar>

  <div class="p-12">
 	 <slot />
	</div>



<BottomNav position="absolute" navType="application" innerDiv="grid-cols-5">
	<BottomNavItem on:click={() => goto("/")} btnName="Home" appBtnPosition="left">
		<svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
		</svg>
	</BottomNavItem>
	<BottomNavItem on:click={() => goto("/")} btnName="Settings" appBtnPosition="middle">
		<svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
		</svg>
	</BottomNavItem>
	<div class="flex items-center justify-center">
	  <BottomNavItem on:click={() => defaultModal = true} btnName="Create new item" appBtnPosition="custom" btnDefault="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
		  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path>
		  </svg>
	  </BottomNavItem>
	</div>
	<BottomNavItem on:click={() => goto("/")} btnName="Settings" appBtnPosition="middle">
		<svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
		</svg>
	</BottomNavItem>
	<BottomNavItem on:click={() => goto("/")} btnName="Profile" appBtnPosition="right">
		<svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		  <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
		</svg>
	</BottomNavItem>
  </BottomNav>


  <Modal title="Terms of Service" bind:open={defaultModal} autoclose>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
	  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
	</p>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
	  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
	</p>
	<svelte:fragment slot='footer'>
	  <Button on:click={() => alert('Handle "success"')}>I accept</Button>
	  <Button color="alternative">Decline</Button>
	</svelte:fragment>
  </Modal>