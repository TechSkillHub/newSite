import { _ as __nuxt_component_0 } from './Dados-B8I8EVNJ.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
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
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'vee-validate';
import 'clsx';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-profile",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("dados");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionFormsDados = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-700 flex flex-col p-8" }, _attrs))}><div class="border-b border-darkTheme pb-8"><h1 class="text-4xl font-bold text-offWhite">Meu Perfil</h1></div><div class="flex flex-col pt-8"><div class="flex w-fit gap-1"><button class="${ssrRenderClass([{ "border-b-2 border-primary bg-white ": unref(activeTab) === "dados" }, "py-2 px-4 text-gray-700 rounded-t-md bg-grayTheme"])}"> Usu\xE1rios </button></div><div class="p-4 bg-white rounded-md rounded-tl-none">`);
      if (unref(activeTab) === "dados") {
        _push(ssrRenderComponent(_component_SectionFormsDados, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/my-profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=my-profile-DZpJrUXx.mjs.map
