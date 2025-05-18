import { _ as __nuxt_component_0 } from "./Dados-B8I8EVNJ.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import "hookable";
import "../server.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create-user",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("dados");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionFormsDados = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-700 flex flex-col p-8" }, _attrs))}><div class="border-b border-darkTheme pb-8"><h1 class="text-4xl font-bold text-offWhite">Configurações</h1></div><div class="flex flex-col pt-8"><div class="flex w-fit gap-1"><button class="${ssrRenderClass([{ "border-b-2 border-primary bg-white ": unref(activeTab) === "dados" }, "py-2 px-4 text-gray-700 rounded-t-md bg-grayTheme"])}"> Dados do contratatante </button></div><div class="p-4 bg-white rounded-md rounded-tl-none">`);
      if (unref(activeTab) === "register") {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/create-user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=create-user-BGrORQQ2.js.map
