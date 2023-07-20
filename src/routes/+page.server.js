import { popularMovies } from '../services/apiServices';

export const load = async () => {
	const API_KEY = 'ff4a84fec583def1f4c7fd291e29223f';
	const API_BASE_URL = 'https://api.themoviedb.org/3/';
	try {
		const response = await fetch(
			`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
		);
		const data = await response.json();
		console.log(data);
		return {
			movies: data.results
		};
	} catch (error) {
		console.error('Error fetching movie data:', error);
		return [];
	}
};
