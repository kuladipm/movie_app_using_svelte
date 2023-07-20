<script>
	import { loginStore, registerStore } from '../../store/login';
	import { goto } from '$app/navigation';
	let email = '';
	let password = '';

	function handleLogin() {
		let checkvalue = $registerStore;
		let result = checkvalue.find((item) => (item.email == email&&item.password==password));
    if (result) {
      loginStore.set({ email, password });
      goto('/');
    } else {
      alert('please enter valid user details or register')
    }
	}
</script>

<main>
	<h1>Login</h1>
	<form on:submit|preventDefault={handleLogin}>
		<label>
			Email:
			<input type="email" bind:value={email} />
		</label>
		<label>
			Password:
			<input type="password" bind:value={password} />
		</label>
		<button type="submit">Login</button>
	</form>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background-color: #f0f0f0;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		text-align: left;
		font-weight: bold;
	}

	input {
		padding: 0.5rem;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		padding: 0.5rem 1rem;
		font-size: 16px;
		border: none;
		border-radius: 4px;
		background-color: #007bff;
		color: #fff;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.5rem;
		}

		input {
			width: 100%;
		}

		button {
			width: 100%;
		}
	}
</style>
