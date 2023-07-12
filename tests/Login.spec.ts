import { test, expect } from '@playwright/test';
import {run} from "../utils/dataHelpers";

test('Validate Status Code is 200 when login', async ({ request }) => {
  const response = await request.post('http://localhost:8080/api/v2/user/login/traditional',{
    data: {
      "credentials": { "userLogin": "5035555555", "password": "123123" },
      "deviceDetails": {
      "deviceId": "E4EDF59D-CEAD-4FC8-8E3F-5899FE287575",
      "interface": "IOS",
      "operationSystem": "iOS",
      "device": "MOBILE",
      "brand": "Apple",
      "model": "iPhone 12",
      "osVersion": "14.1",
      "network": "DEVOR",
      "ipAddress": "98.10.50.222",
      "macAddress": "02:00:00:00:00:00",
      "softwareVersion": "5.0.0.2v187"
  }}
  });
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  expect(' ' + (await response.body()).toString().includes("accessToken", 0) == "true");
  console.log(await response.json());
})
  

test('Validate the response is failure', async ({ request }) => {
  const response = await request.post('http://localhost:8080/api/v2/user/login/traditional',{
    data: {
      "credentials": { "userLogin": "5", "password": "123123" },
      "deviceDetails": {
      "deviceId": "E4EDF59D-CEAD-4FC8-8E3F-5899FE287575",
      "interface": "IOS",
      "operationSystem": "iOS",
      "device": "MOBILE",
      "brand": "Apple",
      "model": "iPhone 12",
      "osVersion": "14.1",
      "network": "DEVOR",
      "ipAddress": "98.10.50.222",
      "macAddress": "02:00:00:00:00:00",
      "softwareVersion": "5.0.0.2v187"
  }}
  });
  expect(await response.json()).toMatchObject({
      success:false
  })  
})



