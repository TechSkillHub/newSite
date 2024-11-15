import { GoogleAdsApi } from 'google-ads-api';
import { OAuth2Client } from 'google-auth-library';
import axios from 'axios';

// Configuração do cliente Google Ads
const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID!,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET!,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN!,
});

export async function fetchCustomerId(refreshToken: string) {
  if (!refreshToken) {
    throw new Error('Refresh token não fornecido ou inválido.');
  }

  // Configuração do cliente OAuth2 para trocar refresh token pelo access token
  const authClient = new OAuth2Client(
    process.env.GOOGLE_ADS_CLIENT_ID!,
    process.env.GOOGLE_ADS_CLIENT_SECRET!,
    process.env.GOOGLE_ADS_REDIRECT_URI
  );

  authClient.setCredentials({ refresh_token: refreshToken });

  try {
    // Obtenção do access token usando o refresh token
    const tokenResponse = await authClient.getAccessToken();
    const accessToken = tokenResponse.token;

    if (!accessToken) {
      throw new Error('Falha ao obter o access token.');
    }

    // Uso do access token para buscar os customers acessíveis
    const accessibleCustomers = await client.listAccessibleCustomers(accessToken);
    
    if (!accessibleCustomers || accessibleCustomers.resource_names.length === 0) {
      throw new Error('Nenhum customer ID acessível encontrado para este token.');
    }    
    // Retorna o primeiro customer ID encontrado
    return accessibleCustomers.resource_names[0].split('/')[1]; // Extrai o customer_id do formato 'customers/{customer_id}'
  } catch (error) {
    console.error('Erro ao buscar customer ID do Google Ads:', error);
    throw new Error('Falha ao buscar customer ID');
  }
}

export async function fetchGoogleAdsCampaigns(accessToken: string | null | undefined, customer: string) {
  if (!accessToken) {
    throw new Error('Access token não fornecido ou inválido.');
  }

  const customerId = customer;
  console.log('aqui', customerId);


  if (!customerId) {
    throw new Error('GOOGLE_ADS_CLIENT_ID não está definido nas variáveis de ambiente');
  }

  // Define o cliente OAuth
  const authClient = new OAuth2Client(
    process.env.GOOGLE_ADS_CLIENT_ID!,
    process.env.GOOGLE_ADS_CLIENT_SECRET!,
    process.env.GOOGLE_ADS_REDIRECT_URI,
  );
  authClient.setCredentials({ access_token: accessToken });

  try {
    // Criação do cliente Google Ads com o token de acesso
    const customer = client.Customer({
      customer_id: customerId,
      refresh_token: accessToken,
      // login_customer_id: process.env.GOOGLE_ADS_MANAGER_ID!, // Opcional, se necessário
    });

    // Busca as campanhas ativas
    const campaigns = await customer.query(`
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
    console.error('Erro ao buscar campanhas do Google Ads:', error);
    throw new Error('Falha ao buscar campanhas');
  }
}
