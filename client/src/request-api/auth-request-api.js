import axios from 'axios';

axios.defaults.withCredentials = true;
const baseURL = 'http://localhost:8080/api/auth';
const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export const register = (firstName, lastName, email, password) =>{
  return api.post('/register', {
    firstName,
    lastName,
    email,
    password,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  )}
const apis = {
  register

}
export default apis;