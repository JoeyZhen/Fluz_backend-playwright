import { test, expect } from '@playwright/test';
import { getLithicToken } from '../../lithicPage/LithicTokenPage'
import { run } from "../../utils/dataHelpers";

test('Void the transaction with specified token', async ({ request }) => {
  //Using the token generated with above function to void the transaction
  try{
  const response = await request.post('https://sandbox.lithic.com/v1/simulate/void',{
    data: {
      "amount": 1000,
      "token": (await getLithicToken()).data.token
  }, headers:{
    "Content-Type":"application/json",
    "Authorization": "3edf0c4d-3e2c-4fbf-9499-7667a3459158"
  }
  });
  expect(response.status()).toBe(201);
  expect(response.ok()).toBeTruthy();
  console.log(await response.json());
}
catch(e){
  run("TEST FAILED")
  throw new Error(e)
}
})