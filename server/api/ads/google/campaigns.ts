import { defineEventHandler } from 'h3';
import { getUserSession } from '~/server/utils/session';
import { refreshGoogleAdsToken } from '~/server/utils/googleAds';
import { fetchGoogleAdsCampaigns, fetchCustomerId } from '~/server/services/googleAdsService'; // Supondo que você tenha um serviço para isso

export default defineEventHandler(async (event) => {
  const user = await getUserSession(event);
  if (!user) throw new Error('Usuário não autenticado');

  // Atualiza token se necessário
  const accessToken = await refreshGoogleAdsToken(user.id);

  const customer = await fetchCustomerId(accessToken!);
  
  // Busque campanhas
  const campaigns = await fetchGoogleAdsCampaigns(accessToken!, customer);
  return campaigns;
});
