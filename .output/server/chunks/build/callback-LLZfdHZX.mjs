import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useAuthStore, a as useUserStore } from './server.mjs';
import { useRouter, useRoute } from 'vue-router';
import '../_/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'mailersend';
import 'jsonwebtoken';
import '@prisma/client';
import 'node:http';
import 'node:https';
import '@iconify/utils';
import 'consola/core';
import 'node:fs';
import 'node:path';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'vee-validate';
import 'clsx';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "callback",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const userStore = useUserStore();
    const router = useRouter();
    const route = useRoute();
    const token = route.query.token;
    const user = route.query.user ? JSON.parse(route.query.user) : null;
    if (token && user) {
      try {
        authStore.setToken(token);
        userStore.setUser(user);
        router.push("/logged");
      } catch (error) {
        console.error("Erro de autentica\xE7\xE3o:", error);
      }
    } else {
      console.error("Token ou usu\xE1rio n\xE3o encontrados no callback");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/callback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=callback-LLZfdHZX.mjs.map
