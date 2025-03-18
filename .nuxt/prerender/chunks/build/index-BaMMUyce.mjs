import { defineComponent, mergeProps, useSSRContext } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-secondaryLight flex items-center justify-center h-[2000px]" }, _attrs))}><h1 class="text-4xl font-bold">HOME ADMIN</h1></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BaMMUyce.mjs.map
