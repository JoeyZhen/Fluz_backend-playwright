import { test, expect} from '@playwright/test';
import {run} from "../utils/dataHelpers";
import { getAuthToken } from '../powerPage/getAuthToken'

test('Send the request to delete the account', async ({ request  }) => {
  const response = await request.post('http://localhost:8080/api/v2/user/account/delete',{
    headers:{
      "Authorization": "Bearer " + (await getAuthToken()).data.accessToken
}
  });
  expect(response.status()).toBe(200);
  console.log(await response.json());
})