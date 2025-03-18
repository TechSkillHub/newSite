import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { f as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "scroll h-[70vh] overflow-y-scroll" }, _attrs))}><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeeyyIY7aLPZn0BcRVYkrcb_FADjBrnmBCcQ254rhzxhkw5eQ/viewform?embedded=true" width="640" height="1900" frameborder="0" marginheight="0" marginwidth="0" class="mx-auto">Carregando…</iframe></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Forms/Dados.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Dados-CgeRF5sA.js.map
