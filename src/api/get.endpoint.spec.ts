import { test, expect } from '@playwright/test';
import { buildUrl } from '../utils/urlBuilder';
import { IEndpointReq, IEndpointRes } from './types/type';
import { IErrorRes } from 'utils/types';

import {
  getEndpointExpectedData,
  getEndpointTestInputs,
} from './db/getDbData';

test.describe('Test GET Benefit List Endpoint: ', () => {
  //  default test data
  const td: IEndpointReq = {
    id: 'ABC123',
    categoryId: '73',
    asOfDate: '2011-10-01'
  };

  const url = buildUrl.getPrivateEndPointUrl();
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
      params: rd as Record<string, string | number | boolean>,
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

  // Negative Scenarios

  const invalidIds = ['@bc', 'abcdefgh', 'abc0123456789'];
  for (const id of invalidIds) {
    test(`validate the error: id (${id}) must be alpha-numeric with min length of 9 and max length of 12`, async ({
      request,
    }) => {
      // Arrange
      const rd: IEndpointReq = {
        id: id,
        categoryId: td.categoryId,
      };
      
      // Act
      const resp = await request.get(url,  {
        params: rd as Record<string, string | number | boolean>,
      });

      // Assert
      expect(resp.status()).toBe(400);
      const body: IErrorRes[] = await resp.json();
      expect(body[0].title).toContain(
        'Must be alphanumeric with a length of 9 or 12'
      );
    });
  }
});
