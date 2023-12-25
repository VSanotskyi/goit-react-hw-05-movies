import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const api_key = '82b205270d637f8e7c805273646956b7';

const params = {
  params: {
    api_key,
    sorted_by: 'created_at.asc',
  },
};

axios.defaults.baseURL = BASE_URL;

const fetchTrendingMovies = async (page) => {
  const { data } = await axios(`trending/movie/day?page=${page}`, params);
  return data;
};

const fetchSearchMovies = async (page, search) => {
  const { data } = await axios(`/search/movie?query=${search}&page=${page}`,
    params);
  return data;
};

const fetchDetailsMovies = async (id) => {
  const { data } = await axios(`movie/${id}`, params);
  return data;
};

const fetchMovieCredits = async (id) => {
  const { data } = await axios(`movie/${id}/credits`, params);
  return data;
};

const fetchMovieCast = async (id) => {
  const { data } = await axios(`movie/${id}/reviews`, params);
  return data;
};

export {
  fetchTrendingMovies,
  fetchDetailsMovies,
  fetchSearchMovies,
  fetchMovieCredits,
  fetchMovieCast,
};
