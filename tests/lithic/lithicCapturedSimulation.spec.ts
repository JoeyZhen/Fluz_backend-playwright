import { test, expect } from '@playwright/test';
import { getLithicToken } from '../../lithicPage/LithicTokenPage'

test('Clear the transaction with specified token', async ({ request }) => {
  //Using the token generated with above function to clear the transaction 
  const response = await request.post('https://sandbox.lithic.com/v1/simulate/clearing',{
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

})