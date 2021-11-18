import axios from "axios";
const API_KEY = '42d503a798cec5824a2b2ce5bd34169e';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovies() { 
        return axios(withBaseUrl('movie/popular'));
    }

    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }
}