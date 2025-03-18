import { _ as __nuxt_component_1 } from "./page-CBFZGyFn.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { f as _export_sfc } from "../server.mjs";
import "vue-router";
import "defu";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "pinia";
import "unhead";
import "@unhead/shared";
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
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtPage, mergeProps({ class: "bg-offWhite" }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/clear.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const clear = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  clear as default
};
//# sourceMappingURL=clear-BvxCFZOZ.js.map
