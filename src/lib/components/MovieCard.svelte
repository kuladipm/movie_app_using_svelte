<script>
// @ts-nocheck

    /**
	 * @type {{ Poster: any; Title: any; Year: any; Runtime: any; }}
	 */
     export let movie;
     const API_BASE_URL = 'https://api.themoviedb.org/gPbM0MK8CP8A174rmUwGsADNYKD.jpg';
  </script>
  
  <div class="movie-card">
    <a href={'/movie/'+movie.id}>
    <img src="https://image.tmdb.org/t/p/w200{movie.poster_path}" alt={movie.title} />
  </a>
    <div class="info">
      <h5>{movie.title}</h5>
      <p>{movie.release_date}</p>
    </div>
  </div>
  
  <style>
    .movie-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 4px;
      margin: 1rem;
      width: 100%;
      box-sizing: border-box;
    }
  
    .movie-card img {
      width: max-content;
      height: 250px;
      object-fit: cover;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
  </style>
  