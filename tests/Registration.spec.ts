import { test, expect } from '@playwright/test';
import {run} from "../utils/dataHelpers";
test('Validate Status Code is 200 when register a new user', async ({ request }) => {

  const response = await request.post('http://localhost:8080/api/v2/user/register',{
    data: {
      "userDetails":{"password":"123123","cca2":"US",
      "phoneNumber":"+1-503-555-5441","emailAddress":"qajoey124@fluzapp.com",
      "firstName":"Joey","lastName":"Zhen","dateOfBirth":"05/20/1991"},
      "referralDetails":{},
      "deviceDetails":{"deviceId":"E4EDF59D-CEAD-4FC8-8E3F-5899FE287575","interface":"IOS",
      "operationSystem":"iOS","device":"MOBILE","brand":"Apple","model":"iPhone 12","osVersion":"14.1",
      "network":"DEVOR","ipAddress":"98.10.50.222","macAddress":"02:00:00:00:00:00","softwareVersion":"5.0.0.2v178"
  }}
  });
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  console.log(await response.json());
})




  
