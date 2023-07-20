<script>
	import { loginStore } from "../../store/login";
	export let isOpen ;
    const Logout=()=>{
        isOpen = false
        loginStore.set({email:"",password:""});
    }
    const closeModal=()=>{
        isOpen = false
    }
    
</script>

{#if isOpen}
	<div class="modal-overlay">
		<div class="modal">
			<div class="modal-header">
				<slot name="header" />
			</div>
			<div class="modal-content">
				<slot name="content" />
			</div>
			<div class="modal-footer">
				<button on:click={Logout}>Logout</button>
                <button on:click={closeModal}>close</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal {
		background-color: #fff;
		width: 400px;
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.modal-header {
		background-color: #007bff;
		color: #fff;
		padding: 1rem;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}

	.modal-content {
		padding: 1rem;
        color: black;
	}

	.modal-footer {
		text-align: right;
		padding: 1rem;
		border-top: 1px solid #ccc;
	}
</style>
