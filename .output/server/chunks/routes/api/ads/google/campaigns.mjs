import { c as defineEventHandler, h as getUserSession, r as refreshGoogleAdsToken } from '../../../../_/nitro.mjs';
import { GoogleAdsApi } from 'google-ads-api';
import { OAuth2Client } from 'google-auth-library';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'mailersend';
import 'jsonwebtoken';
import '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';

const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN
});
async function fetchCustomerId(refreshToken) {
  if (!refreshToken) {
    throw new Error("Refresh token n\xE3o fornecido ou inv\xE1lido.");
  }
  const authClient = new OAuth2Client(
    process.env.GOOGLE_ADS_CLIENT_ID,
    process.env.GOOGLE_ADS_CLIENT_SECRET,
    process.env.GOOGLE_ADS_REDIRECT_URI
  );
  authClient.setCredentials({ refresh_token: refreshToken });
  try {
    const tokenResponse = await authClient.getAccessToken();
    const accessToken = tokenResponse.token;
    if (!accessToken) {
      throw new Error("Falha ao obter o access token.");
    }
    const accessibleCustomers = await client.listAccessibleCustomers(accessToken);
    if (!accessibleCustomers || accessibleCustomers.resource_names.length === 0) {
      throw new Error("Nenhum customer ID acess\xEDvel encontrado para este token.");
    }
    return accessibleCustomers.resource_names[0].split("/")[1];
  } catch (error) {
    console.error("Erro ao buscar customer ID do Google Ads:", error);
    throw new Error("Falha ao buscar customer ID");
  }
}
async function fetchGoogleAdsCampaigns(accessToken, customer) {
  if (!accessToken) {
    throw new Error("Access token n\xE3o fornecido ou inv\xE1lido.");
  }
  const customerId = customer;
  console.log("aqui", customerId);
  if (!customerId) {
    throw new Error("GOOGLE_ADS_CLIENT_ID n\xE3o est\xE1 definido nas vari\xE1veis de ambiente");
  }
  const authClient = new OAuth2Client(
    process.env.GOOGLE_ADS_CLIENT_ID,
    process.env.GOOGLE_ADS_CLIENT_SECRET,
    process.env.GOOGLE_ADS_REDIRECT_URI
  );
  authClient.setCredentials({ access_token: accessToken });
  try {
    const customer2 = client.Customer({
      customer_id: customerId,
      refresh_token: accessToken
      // login_customer_id: process.env.GOOGLE_ADS_MANAGER_ID!, // Opcional, se necessário
    });
    const campaigns = await customer2.query(`
      SELECT
        campaign.id,
        campaign.name,
        campaign.status,
        campaign.start_date,
        campaign.end_date
      FROM campaign
      WHERE campaign.status = 'ENABLED'
      LIMIT 50
    `);
    return campaigns;
  } catch (error) {
    console.error("Erro ao buscar campanhas do Google Ads:", error);
    throw new Error("Falha ao buscar campanhas");
  }
}

const campaigns = defineEventHandler(async (event) => {
  const user = await getUserSession(event);
  if (!user) throw new Error("Usu\xE1rio n\xE3o autenticado");
  const accessToken = await refreshGoogleAdsToken(user.id);
  const customer = await fetchCustomerId(accessToken);
  const campaigns = await fetchGoogleAdsCampaigns(accessToken, customer);
  return campaigns;
});

export { campaigns as default };
//# sourceMappingURL=campaigns.mjs.map
