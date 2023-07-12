import { test, expect } from '@playwright/test';
import {run} from "../utils/dataHelpers";
import { getAuthToken } from '../powerPage/getAuthToken'

test('Validate the pin code of the user', async ({ request }) => {
  const response = await request.post('https://power.staging.fluz.app/api/v1/user/pin-code/check',{
    data: {
      "pin": "1234"
      },
      headers:{
        "authorization": "Bearer " + (await getAuthToken()).data.accessToken
      }
  });
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  console.log(await response.json());
})




  
