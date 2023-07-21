<script>
  // @ts-nocheck
  import MovieCard from '$lib/components/MovieCard.svelte';
  import SideNav from '$lib/components/SideNav.svelte';
  export let data;
  console.log(data.movies);
</script>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0rem 1rem;
    display: flex;
  }

  .movie-container {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    grid-gap: 1rem;
  }
</style>

<main>
  <SideNav />

  <div class="movie-container">
    {#each data.movies as movie}
      <MovieCard {movie} />
    {/each}
  </div>
</main>
