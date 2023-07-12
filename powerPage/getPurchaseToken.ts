import axios from "axios";
import { getAuthToken } from '../powerPage/getAuthToken'

export async function getPurchaseToken(){
axios.defaults.headers.common['Authorization'] = "Bearer " + (await getAuthToken()).data.accessToken;
const res = await axios.post('https://power.staging.fluz.app/api/v1/user/pin-code/check', 
  {
    pin: '1234'
      }
    )
    return res;
}

