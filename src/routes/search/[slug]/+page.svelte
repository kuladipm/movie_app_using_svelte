<script>
    // @ts-nocheck
    import MovieCard from '$lib/components/MovieCard.svelte';
    export let data;
    console.log(data.movies)
    </script>
    <main>
        <div class="movie-container">
          {#each data.movies as movie}
            <MovieCard {movie} />
          {/each}
        </div>
      </main>
    <style>
      main {
        max-width: 1200px;
        margin: 0 auto;
        padding:0rem 1rem;
      }
      .movie-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        grid-gap: 1rem;
      }
    </style>