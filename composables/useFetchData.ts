// Types
import type { FetchOptions } from "~/utils/types/FetchOptions";

export const useFetchData = async <T>(
  endpoint: string,
  options: FetchOptions,
) => {
  const authStore = useAuthStore();
  const recaptcha = useRecaptchaStore();
  const modalStore = useModalStore();
  const router = useRouter();

  const response = await $fetch<T>(
    `${endpoint}`,
    {
      method: options.method,
      body: options.body,
      headers: {
        // Token
        ...(options.requiresAuth &&
          authStore.token && {
            Authorization: `Bearer ${authStore.token}`,
          }),
        // Captcha
        ...(options.requiresCaptcha &&
          recaptcha.token && { captcha: recaptcha.token }),
      },
      onResponse({ response }) {
        if (response.status === 401) {
          modalStore.showModal({
            title: "Login expired",
            message: "Your session has expired, please log in again.",
          });
          console.log('logou');
          
          authStore.logout();
          router.push("/");
        } else if (response.status === 500) {
          modalStore.showModal({
            title: "Server failure",
            message: response._data.message ? response._data.message :
              "Internal server error. Please try again later.",
          });
        } else if (response.status === 404) {
          modalStore.showModal({
            title: "Invalid route",
            message:
              "Internal server error. Please try again later.",
          });
        } else if (response.status === 423) {
          modalStore.showModal({
            title: "Access Temporarily Unavailable",
            message:
              "The requested feature is currently blocked. Please try again later.",
          });
        } else if (response.status === 409) {
          modalStore.showModal({
            title: "Error when registering",
            message:
              "Check the data entered and try again.",
          });
        } else if (response.status === 429) {
          modalStore.showModal({
            title: "Attention",
            message: response._data.message,
          });
        }
      },
    },
  );

  return response;
};
