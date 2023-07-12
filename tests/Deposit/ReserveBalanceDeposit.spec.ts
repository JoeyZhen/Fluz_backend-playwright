import { test, expect } from '@playwright/test';
import { getPurchaseToken } from '../../powerPage/getPurchaseToken'

test('Add funds to reserve balance from card', async ({ request }) => {

  const response = await request.post('https://power.staging.fluz.app/api/v1/cash-balance/deposit',{
    data: {
        "bank_account_id": "f5f7206a-a301-449d-9b28-051cf4dc6857",
        "bank_card_id": "de71e78d-143e-443b-adfc-ff581e6d8bec",
        "bt_device_data":{"correlation_id":"11e945ca5771789353ec1108fbbbb7bc"},
        "deposit_amount": 100,
        "deposit_type": "RESERVE_BALANCE",
        "riskified_device_id": "emjjet37499sokqd9iemul02m5i8c",
        "seat_id": "e819a1f2-65e2-4b26-915d-b071571f5f84"
        
  },
  headers:{
    "Authorization": "Bearer " + (await getPurchaseToken()).data.token
  }
  });
  expect(response.status()).toBe(200);
  console.log(await response.json()); 
})