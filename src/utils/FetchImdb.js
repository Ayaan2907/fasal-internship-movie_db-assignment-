import axios from "axios";

export const FETCH_PARAMS = {
  BASE_API_URL: "http://www.omdbapi.com",
  API_KEY: "aa660442", //doesn't need to be confidential
  TITLE: "s",
  ID: "i",
};

// function responsible for fetching the movies with varying parameters
export default async function FetchImdb(param, value) {
  const resp = await axios.get(
    `${FETCH_PARAMS.BASE_API_URL}?${param}=${value}&apikey=${FETCH_PARAMS.API_KEY}`
  );
  return resp.data;
}
