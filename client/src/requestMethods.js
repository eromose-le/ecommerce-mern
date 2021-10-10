import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWE3YTI5YjA1MDE5MDBhNzNjOWY5NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzY1MjkzOCwiZXhwIjoxNjMzOTEyMTM4fQ.titZiREP1HDBWfPYQh8A8L05QwBmdotQqAbiN_Cx1g4';

export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
});
