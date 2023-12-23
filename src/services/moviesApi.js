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

const getTrendingMovies = async (page) => {
  const { data } = await axios(`trending/movie/day?page=${page}`, params);
  return data;
};

const getSearchMovies = async (search) => {
  const { data } = await axios(`/search/movie?query=${search}`, params);
  return data;
};

const getDetailsMovies = async (id) => {
  const { data } = await axios(`movie/${id}`, params);
  return data;
};

export { getTrendingMovies, getSearchMovies, getDetailsMovies };
