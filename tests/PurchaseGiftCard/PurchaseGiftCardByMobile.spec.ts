import { test, expect, PlaywrightTestConfig } from '@playwright/test';
import { run } from "../../utils/dataHelpers";
import { getPurchaseToken } from '../../powerPage/getPurchaseToken'

test('Purchase a gift card by Mobile', async ({ request  }) => {
  const response = await request.post('https://purchase.service.staging.fluzapp.com/api/v1/purchase/gift-card',{
    data: {
      "offer_id": "e6dcaed0-7693-403e-8561-9d53d6363988",
      "purchase_amount": 15,
      "fluzpay_amount": 0,
      "bank_account_id": "f65683d0-6112-44db-8abc-e32fd2504fe1",
      "channel": "MOBILE_APP",
      "seat_id": "e819a1f2-65e2-4b26-915d-b071571f5f84",
      "bt_device_data": {"correlation_id":"418ac282b6784b4f8d4f74f5c300fef0","device_session_id":"7ECCA986CB654B8C87980562AB676E95","fraud_merchant_id":"600000"},
      "vesta_session_id": "",
      "riskified_device_id": "E4EDF59D-CEAD-4FC8-8E3F-5899FE287575"
    },
    headers:{
      "Authorization": "Bearer " + (await getPurchaseToken()).data.token
    }
  });
  expect(response.status()).toBe(200);
  console.log(await response.json());
})