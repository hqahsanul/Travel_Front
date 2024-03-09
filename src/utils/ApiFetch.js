/* global localStorage */

import axios from "axios";

function getHeaders() {
  return { "Content-Type": "application/json" };
}
function getToken() {
  return localStorage.getItem("userToken")?.slice(1, -1);
}

async function apiGet(url, params = {}) {
  return axios
    .get(import.meta.env.VITE_APP_API_BASE_URL + url, {
      params,
    })
    .then((json) => json.data)
    .catch((error) => error.response.data);
}

async function apiPost(url, body, headers = {}) {
  return axios
    .post(import.meta.env.VITE_APP_API_BASE_URL + url, body, headers)
    .then((json) => json.data)
    .catch((error) => error.response.data);
}

// function checkUserLogin(callback) {
//   if (localStorage.getItem("userData")) {
//     callback("/chat-category");
//   }
// }

// export { getHeaders, apiGet, apiPost, apiPut, apiDelete }
export { getHeaders, apiPost, apiGet };
