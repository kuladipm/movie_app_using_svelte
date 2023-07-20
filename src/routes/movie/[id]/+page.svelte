<script>
	import MovieDetails from '$lib/components/MovieDetails.svelte';
	export let data;
	const movie = data.movies;
</script>
	<MovieDetails {movie} />

