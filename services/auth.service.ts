import type { User } from "~/utils/types/User";
const stores = () => {
  const router = useRouter();
  const loadingStore = useLoadingStore();
  const modalStore = useModalStore();
  const authStore = useAuthStore();
  const userStore = useUserStore();
  return { router, loadingStore, modalStore, authStore, userStore };
};


export const loginUser = async (data:object) => {
  const { router, loadingStore, authStore, userStore } = stores();
  loadingStore.showLoading();
  await useFetchData<{ token: string, user: User }>(
    "/api/auth/login",
    {
      method: "POST",
      body: data,
      // requiresCaptcha: true,
    },
  )
    .then(response => {
      authStore.setToken(response.token);
      userStore.setUser(response.user)
      router.push("/");
    })
    .catch(error => {      
      throw error
    })
    .finally(() => {
      loadingStore.closeLoading();
    });
};

export const sendMailNewPassword = async (data:object) => {
  const { loadingStore, modalStore } = stores();
  loadingStore.showLoading();
  await useFetchData<{ message: string }>(
    "/api/auth/forgot-password",
    {
      method: "POST",
      body: data,
      // requiresCaptcha: true,
    },
  )
    .then(response => {
      modalStore.showModal({
        title: 'Success',
        message: response.message
      })
      return response
    })
    .catch(error => {
      throw error
    })
    .finally(() => {
      loadingStore.closeLoading();
    });
};

export const resetPassword = async (data:object) => {
  const { loadingStore, modalStore } = stores();

  loadingStore.showLoading();
  await useFetchData<{ message: string }>(
    "/api/auth/reset-password",
    {
      method: "POST",
      body: data,
      // requiresCaptcha: true,
    },
  )
    .then(response => {
      modalStore.showModal({
        title: 'Success',
        message: response.message
      })
      return response
    })
    .catch(error => {
      throw error
    })
    .finally(() => {
      loadingStore.closeLoading();
    });
};