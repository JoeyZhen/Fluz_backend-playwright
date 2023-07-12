import { test, expect } from '@playwright/test';
import {run} from "../../utils/dataHelpers";
import { getPurchaseToken } from '../../powerPage/getPurchaseToken'

test('Create a Lithic virtual card with MX account', async ({ request }) => {

  const response = await request.post('https://purchase.service.staging.fluzapp.com/api/v1/purchase/virtual-card',{
    data: {
        "bank_account_id":"be975101-24e5-4626-b650-b4d0e2921567",
        "channel":"ENTERPRISE",
        "fluzpay_amount":0,
        "offer_id":"b2dcc2ca-f566-4ede-b4d4-362be38c4653",
        "purchase_amount":5,
        "riskified_device_id":"emjjet37499sokqd9iemul02m5i8c",
        "seat_id":"e819a1f2-65e2-4b26-915d-b071571f5f84",
        "vesta_session_id":""
  },
  headers:{
    "Authorization": "Bearer " + (await getPurchaseToken()).data.token
  }
  });
  console.log(await response.json()); 
  expect(response.status()).toBe(200);
})



