import "vue";
import "hookable";
import { i as defineNuxtRouteMiddleware, a as useUserStore, u as useAuthStore, c as useModalStore } from "../server.mjs";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "unctx";
import "h3";
import "pinia";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "@iconify/vue";
import "vue/server-renderer";
import "@iconify/utils/lib/css/icon";
import "vee-validate";
import "clsx";
const auth = defineNuxtRouteMiddleware(async (to, from) => {
  useUserStore();
  useAuthStore();
  useModalStore();
  to.meta.auth === true;
  to.meta.admin === true;
});
export {
  auth as default
};
//# sourceMappingURL=auth-Cw54jdRo.js.map
