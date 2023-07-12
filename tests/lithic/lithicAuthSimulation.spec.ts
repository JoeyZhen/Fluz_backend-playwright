import { test, expect } from '@playwright/test';
import axios from 'axios';
import { run} from "../../utils/dataHelpers";

test('simulate auth for $1000', async ({ request }) => {

  const response = await request.post('https://sandbox.lithic.com/v1/simulate/authorize',{
    data: {
        "descriptor":"Sample Transaction - auth",
        "amount":1000,
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