const stores = () => {
  const loadingStore = useLoadingStore();
  const modalStore = useModalStore();
  return { loadingStore, modalStore };
};

export const statusTokenAds = async () => {
  const { loadingStore } = stores();
  loadingStore.showLoading();
  return useFetchData<any>(
  "/api/ads/google/status",
    {
      method: "GET",
      requiresAuth: true,
    },
  )
  .then(response => {    
    return response
  })
  .catch(error => {      
    throw error
  })
  .finally(() => {
    loadingStore.closeLoading();
  });
};

export const getCampaigns = async () => {
  const { loadingStore } = stores();
  loadingStore.showLoading();
  return useFetchData<any>(
  "/api/ads/google/campaigns",
    {
      method: "GET",
      requiresAuth: true,
    },
  )
  .then(response => {    
    return response
  })
  .catch(error => {      
    throw error
  })
  .finally(() => {
    loadingStore.closeLoading();
  });
};