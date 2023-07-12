import axios from "axios";

export async function getLithicToken(){

axios.defaults.headers.common['Authorization'] = '3edf0c4d-3e2c-4fbf-9499-7667a3459158';

const res = await axios.post('https://sandbox.lithic.com/v1/simulate/authorize', 
  {
    descriptor:'Sample Transaction - auth', amount:1000, pan:'4111111380419385'}
)
    return res;
}
