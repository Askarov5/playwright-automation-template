import { test, expect } from '@playwright/test';
import { buildUrl } from '../utils/urlBuilder';
import { IEndpointReq, IEndpointRes } from './types/type';
import {
  getEndpointExpectedData,
  getEndpointTestInputs,
} from './db/getDbData';

test.describe('Test Public GET Benefit List Endpoint: ', () => {
  //  default test data
  const td: IEndpointReq = {
    id: 'ABC123',
    categoryId: '73',
    asOfDate: '2011-10-01'
  };

  const url = buildUrl.getPublicEndPointUrl();
  /*
    Run to get test data
  */
 
  test.beforeAll(async ({}) => {
    // Get Test Data From DB and assign as to td object
    const testInputs: IEndpointReq = await getEndpointTestInputs(td);

    if (testInputs) {
      td.id = testInputs.id;
      td.categoryId = testInputs.categoryId;
    } else {
      console.error('Unable to get test inputs');
    }
  });

  // get values by category id
  test('validate getting values passing only required fields', async ({
    request,
  }) => {
    // Arrange
    const rd: IEndpointReq = {
      categoryId: td.categoryId,
    };
    const expectedData = await getEndpointExpectedData(rd);

    // Act
    const resp = await request.get(url, {
      params: rd as Record<string, string | number>,
    });

    // Assert
    await expect(resp).toBeOK();
    const body: IEndpointRes = await resp.json();
    // API response validation
    expect(body).not.toBeNull();
    expect(body.categoryId).toBe(rd.categoryId);
    // Data Validation
    expect(body.categoryId).toEqual(expectedData[0].categoryId);
  });

  // validate authorization
  test('validate authorization failed', async ({ request }) => {
    // Arrange
    const rd: IEndpointReq = {
      id: td.id,
      categoryId: td.categoryId,
    };

    // Act
    const resp = await request.get(url, {
      headers: {
        Authorization: 'Bearer invalid_token',
      },
      params: rd as Record<string, string | number | boolean>,
    });

    // Assert
    expect(resp.status()).toBe(401);
  });
});
