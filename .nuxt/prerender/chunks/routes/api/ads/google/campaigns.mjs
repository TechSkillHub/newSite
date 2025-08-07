import { defineEventHandler } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/h3/dist/index.mjs';
import { g as getUserSession, r as refreshGoogleAdsToken } from '../../../../_/nitro.mjs';
import { GoogleAdsApi } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/google-ads-api/build/src/index.js';
import { OAuth2Client } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/google-auth-library/build/src/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unified/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-parse/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-rehype/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-gfm/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-raw/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/detab/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/hast-util-to-string/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/github-slugger/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/mailersend/lib/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/jsonwebtoken/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@prisma/client/default.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unenv/runtime/npm/consola.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/radix3/dist/index.mjs';

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
