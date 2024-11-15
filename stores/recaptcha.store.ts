export const useRecaptchaStore = defineStore("recaptcha", {
  state: () => ({
    token: null as string | null,
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    clearToken() {
      this.token = null;
    },
  },
});
