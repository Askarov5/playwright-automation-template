import { test as setup, expect } from '@playwright/test';
import { buildUrl } from 'utils/urlBuilder';

setup('healthcheck', async ({ request }) => {
  // Arrange
  const url = buildUrl.getHealthCheck();

  // Act
  const resp = await request.get(url);

  // Assert
  await expect(resp).toBeOK();
});
