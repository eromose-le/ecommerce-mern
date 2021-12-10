import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';

var TOKEN;

// GET TOKEN FROM LOCAL STORAGE
setTimeout(function () {
  var TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)
    .currentUser?.accessToken;

  console.log('begining check', TOKEN);
}, 3000);

export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
});
