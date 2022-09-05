// import React from 'react'

const { default: axios } = require("axios");

// export default function FetchImdb() {
//   return (
//     <div>FetchImdb</div>
//   )
// }
const BASE_API_URL = "http://www.omdbapi.com";
const API_KEY = "aa660442"; //doesn't need to be confidential

const FetchImdb = async (param, value) => {
  
  const resp = await axios.get(
    `${BASE_API_URL}/?${param}=${value}&apikey=${API_KEY}`
  );
  return resp.data;
};

export default FetchImdb()