import { defineComponent, useSSRContext } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/vue/server-renderer/index.mjs';
import { u as useAuthStore, a as useUserStore } from './server.mjs';
import { useRouter, useRoute } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unified/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-parse/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-rehype/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-gfm/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-raw/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/detab/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/hast-util-to-string/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/github-slugger/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/mailersend/lib/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/jsonwebtoken/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@prisma/client/default.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unenv/runtime/npm/consola.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/vee-validate/dist/vee-validate.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/clsx/dist/clsx.mjs';

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
