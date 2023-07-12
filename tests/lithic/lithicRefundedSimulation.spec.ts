import { test, expect } from '@playwright/test';
import axios from 'axios';
import { run} from "../../utils/dataHelpers";

test('Refund transaction', async ({ request }) => {
  
  const response = await request.post('https://sandbox.lithic.com/v1/simulate/return',{
    data: {
        "descriptor":"Sample Return",
        "amount":500,
        "pan":"4111111380419385"
  }, headers:{
    "Content-Type":"application/json",
    "Authorization":"3edf0c4d-3e2c-4fbf-9499-7667a3459158"
  }
  })
  expect(response.status()).toBe(201);
  expect(response.ok()).toBeTruthy();
  console.log(await response.json());
});