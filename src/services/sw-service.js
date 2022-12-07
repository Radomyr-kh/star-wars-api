import axios from 'axios';

async function fetchFunction(url, next) {
  return axios.get(`${url}/${next}`);
}
export default fetchFunction;
