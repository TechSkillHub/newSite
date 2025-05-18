import { _ as __nuxt_component_0 } from "./Dados-B8I8EVNJ.js";
import { mergeProps, useSSRContext, defineComponent, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { g as _export_sfc } from "../server.mjs";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
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
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "scroll h-[70vh] overflow-y-scroll" }, _attrs))}><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKccAhf0oVkFCfezJmakfMQEaLz-IaO23S9i-dKEPCg7Szlw/viewform?embedded=true" width="640" height="2000" frameborder="0" marginheight="0" marginwidth="0" class="mx-auto">Carregando…</iframe></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Forms/Briefing.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "forms",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("dados");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionFormsDados = __nuxt_component_0;
      const _component_SectionFormsBriefing = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-700 flex flex-col p-8" }, _attrs))}><div class="border-b border-darkTheme pb-8"><h1 class="text-4xl font-bold text-offWhite">Formulários</h1></div><div class="flex flex-col pt-8"><div class="flex w-fit gap-1"><button class="${ssrRenderClass([{ "border-b-2 border-primary bg-white ": unref(activeTab) === "dados" }, "py-2 px-4 text-gray-700 rounded-t-md bg-grayTheme"])}"> Dados do contratatante </button><button class="${ssrRenderClass([{ "border-b-2 border-primary bg-white": unref(activeTab) === "briefing" }, "py-2 px-4 text-gray-700 rounded-t-md bg-grayTheme"])}"> Briefing de Identidade Visual </button></div><div class="p-4 bg-white rounded-md rounded-tl-none">`);
      if (unref(activeTab) === "dados") {
        _push(ssrRenderComponent(_component_SectionFormsDados, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "briefing") {
        _push(ssrRenderComponent(_component_SectionFormsBriefing, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/forms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=forms-OK3fujY8.js.map
