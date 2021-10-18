import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';

// GET TOKEN FROM LOCAL STORAGE
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)
  .currentUser?.accessToken;

console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
});

// const TOKEN = '';

// const TOKEN =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWE3YTI5YjA1MDE5MDBhNzNjOWY5NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzY1MjkzOCwiZXhwIjoxNjMzOTEyMTM4fQ.titZiREP1HDBWfPYQh8A8L05QwBmdotQqAbiN_Cx1g4';

// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user).currentUser
//     ?.accessToken ||
//   localStorage.setItem(
//     'persist:root',
//     JSON.stringify({
//       user: '{"currentUser":null,"isFetching":false,"error":false}',
//       _persist: '{"version":1,"rehydrated":true}'
//     })
//   );

// const TOKEN =
//   localStorage.getItem('persist:root') ??
//   localStorage.setItem('persist:root', JSON.stringify('user'));

// export const userRequest = (TOKEN) => {
//   console.log('inSideTonek', TOKEN);
//   let newToken = JSON.parse(JSON.parse(TOKEN)?.user).currentUser?.accessToken;
//   console.log('newToken', newToken);
//   axios.create({
//     baseURL: BASE_URL,
//     header: { token: `Bearer ${newToken}` }
//   });
// };

// export const userRequest = (TOKEN) => {
//   console.log('inSideTonek', TOKEN);
//   axios.create({
//     baseURL: BASE_URL,
//     header: { token: `Bearer ${TOKEN}` }
//   });
// };
