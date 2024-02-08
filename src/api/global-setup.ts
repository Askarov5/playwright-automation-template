import type { APIResponse } from '@playwright/test';
import { request } from '@playwright/test';

async function globalSetup() {
  // Read secrets from key-vaults

  // GET SERVICE API AUTH TOKEN
  try {
    const resp: APIResponse = await (
      await request.newContext()
    ).post(process.env.AUTH_TOKEN_URL as string, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      form: {
        client_id: process.env.CLIENT_ID as string,
        grant_type: process.env.GRANT_TYPE as string,
        scope: process.env.SCOPE as string,
        client_secret: process.env.CLIENT_SECRET as string,
      },
      timeout: 300000,
    });

    const respJson = await resp.json();
    // set auth token as env var
    process.env.AUTH_TOKEN = respJson.access_token;

  } catch (e) {
    console.error('Unable to authenticate. Occurred error: ' + e);
  }
}

export default globalSetup;
