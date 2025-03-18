import "vue";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { defineStore } from "pinia";
const useRecaptchaStore = defineStore("recaptcha", {
  state: () => ({
    token: null
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },
    clearToken() {
      this.token = null;
    }
  }
});
export {
  useRecaptchaStore as u
};
//# sourceMappingURL=recaptcha.store-DppCBRLy.js.map
