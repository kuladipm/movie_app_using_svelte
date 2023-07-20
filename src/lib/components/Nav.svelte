<script>
	import { goto } from '$app/navigation';
	import { loginStore,registerStore } from '../../store/login';
	import Modal from './Modal.svelte';
	let searchTerm = '';
	$: isModalOpen = false;
	let email = '';
	$: isLogedIn = email;
	loginStore.subscribe((value) => {
		console.log(value);
		email = value.email;
		isLogedIn = value.login;
	});
	loginStore.subscribe((value) => {
		console.log(value);
		
	});
	function handleFormSubmit(event) {
		event.preventDefault();
		const searchPagePath = '/search/' + encodeURIComponent(searchTerm);
		goto(searchPagePath);
		searchTerm = '';
	}

	function handleSearchKeydown(event) {
		if (event.key === 'Enter') {
			handleFormSubmit(event);
		}
	}
</script>

<nav>
	<div class="name">TMBDM</div>
	<form on:submit={handleFormSubmit}>
		<input
			type="text"
			bind:value={searchTerm}
			placeholder="Search movies"
			on:keydown={handleSearchKeydown}
		/>
		<button type="submit">Search</button>
	</form>
	<div class="links">
		<a href="/">Home</a>
		<a href="/login">Login</a>
		<a href="/register">Register</a>
		{#if isLogedIn}
			<button on:click={() => {isModalOpen = true;console.log(isModalOpen)}}>Profile</button>
		{/if}

		<!-- svelte-ignore a11y-missing-content -->
	</div>
	{#if isModalOpen ||isLogedIn }
	<Modal isOpen={isModalOpen}>
		<h2 slot="header">Hello {email}</h2>
		<p slot="content">Welcome to Movie App</p>
	</Modal>
	{/if}
	
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #333;
		color: #fff;
		padding: 1rem;
	}

	.name {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.links a {
		color: #fff;
		margin-left: 1rem;
		text-decoration: none;
	}

	input {
		margin-left: 33rem;
		padding: 0.5rem;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
		flex: 1;
	}

	button {
		margin-left: 0rem;
		padding: 0.5rem 1rem;
		font-size: 16px;
		border: none;
		border-radius: 4px;
		background-color: #007bff;
		color: #fff;
		cursor: pointer;
	}
	
</style>
