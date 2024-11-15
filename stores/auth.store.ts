export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false as boolean,
    token: null as null | string,
    emailToken: null as string | null,
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
      this.isLoggedIn = true;
    },
    initializeStore() {
      if (this.token) {
        this.setToken(this.token);
      }
    },
    logout() {
      this.token = null;
      this.isLoggedIn = false;
      useUserStore().clearUserData();      
    },
    setEmailToken(token: string) {
      this.emailToken = token;
    },
    removeEmailToken() {
      this.emailToken = null;
    },
  },
  getters: {
    isLog: (state) => !!state.isLoggedIn,
  }, 
  persist: true
});
