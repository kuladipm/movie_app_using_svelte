<script>
	import { movieWatchListStore } from '../../store/watchList';
	import { onMount } from 'svelte';
	export let movie;
	const movie_id = movie.id;
	let buttonTitle = 'Add To WatchList';
	$: title = buttonTitle;
	console.log(movie);
	const dateString = movie.release_date;
	function formatRuntime(runtime) {
		const hours = Math.floor(runtime / 60);
		const minutes = runtime % 60;
		return `${hours}h ${minutes}m`;
	}

	onMount(() => {
		movieWatchListStore.subscribe((value) => {
			console.log(title);
			const isFound = value.find((item) => item.movie_id == movie_id);
			console.log(isFound);
			if (isFound) {
				title = 'Remove From WatchList';
			}
			console.log(title);
		});
	});

	const isMovieInWatchlist = async () => {
		const watchlistItems = $movieWatchListStore;
		const watchlistArray = Object.values(watchlistItems);
		console.log(watchlistArray.length);
		if (title === 'Add To WatchList') {
			if (watchlistArray.length !== 0) {
				console.log(watchlistItems);
				const isFound = watchlistArray.find((item) => item === movie_id);
				console.log(isFound);
				if (isFound) {
					title = 'Remove From WatchList';
				} else {
					movieWatchListStore.update((items) => {
						return [
							...items,
							{
								movie_id: movie_id
							}
						];
					});
					title = 'Remove From WatchList';
				}
			} else {
				movieWatchListStore.update((items) => {
					return [
						...items,
						{
							movie_id: movie_id
						}
					];
				});
				title = 'Remove From WatchList';
			}
		} else {
			movieWatchListStore.update((remove) => {
				console.log(remove);
				let item = remove.filter((movie) => movie.movie_id !== movie_id);
				return [...item];
			});
			title = 'Add To WatchList';
		}
	};
</script>

<main>
	<div class="container">
		<div class="poster">
			<img src="https://image.tmdb.org/t/p/w200{movie.poster_path}" alt={movie.title} />
		</div>
		<div class="details">
			<h2>{movie.title}<span class="release_date"> ({movie.release_date.split('-')[0]}) </span></h2>
			<div class="facts">
				<span class="release">{movie.release_date} (IN) </span>
				<span class="genres">
					{#each movie.genres as gen}
						&nbsp{gen.name},
					{/each}
					<span class="runtime">{formatRuntime(movie.runtime)} </span>
				</span>
			</div>
			<div>
				<button on:click={isMovieInWatchlist}>{title}</button>
			</div>
			<p>{movie.tagline}</p>
			<p>release_date: {movie.release_date}</p>
			<p>Overview: {movie.overview}</p>
		</div>
	</div>
</main>

<style>
	main {
		padding: 2rem;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		background-color: rgba(241.5, 220.5, 199.5, 1);
	}

	.poster {
		flex: 0 0 300px;
		margin: 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		overflow: hidden;
	}

	.poster img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	.details {
		flex: 1 1 300px;
		margin: 1rem;
		margin-top: 0rem;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
		width: 100%;
		margin: 0;
		padding: 0;
		font-size: 2.2rem;
	}
	.release_date {
		opacity: 0.8;
		font-weight: 400;
	}
	.facts {
		display: flex;
	}
	p {
		margin: 0.5rem 0;
	}

	@media (max-width: 768px) {
		.container {
			flex-direction: column;
		}

		.poster,
		.details {
			flex: 1 1 100%;
			margin: 0;
		}
	}
</style>
