import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { f as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "destr";
import "klona";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "vee-validate";
import "clsx";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<li${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</li>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseLi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ProseLi as default
};
//# sourceMappingURL=ProseLi-DSpGrpO0.js.map
