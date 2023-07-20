//fetch popular movies

import 'dotenv/config'
const API_KEY=process.env.API_KEY
const API_BASE_URL=process.env.API_BASE_URL
export async function popularMovies() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
       console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching movie data:', error);
      return [];
    }
  }


