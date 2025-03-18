import { o as __nuxt_component_2, p as _sfc_main$2, g as __nuxt_component_0, f as _export_sfc } from "../server.mjs";
import { defineComponent, ref, watch, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, mergeProps } from "vue";
import { ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttrs } from "vue/server-renderer";
import { _ as __nuxt_component_1 } from "./page-CBFZGyFn.js";
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
const adminNav = [
  {
    title: "Home",
    link: "/dashboard"
  },
  {
    title: "Meu Perfil",
    link: "/dashboard/my-profile"
  },
  {
    title: "Formulários",
    link: "/dashboard/forms"
  },
  {
    title: "Relatórios Anúncios",
    link: "/dashboard/ads-reports"
  },
  {
    title: "Teste",
    link: "/dashboard/ads-reports",
    claim: "admin"
  },
  {
    title: "Exit",
    link: "/"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavDashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const drawer = () => {
      isOpen.value = !isOpen.value;
    };
    watch(isOpen, (newValue) => {
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2;
      const _component_LogosBrand = _sfc_main$2;
      const _component_Icon = __nuxt_component_0;
      _push(`<!--[--><div class="hidden md:block h-screen relative md:w-3/12"><aside class="bg-darkTheme left-0 h-full p-8 fixed md:w-1/5 flex flex-col justify-between"><ul class="divide-y flex flex-col text-offWhite"><!--[-->`);
      ssrRenderList(unref(adminNav), (item, index) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.link,
          class: "my-4 inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_LogosBrand, { class: "justify-center" }, null, _parent));
      _push(`</aside></div><aside class="${ssrRenderClass([unref(isOpen) ? "-translate-x-0" : "-translate-x-full", "md:hidden p-5 transform top-0 left-0 w-9/12 bg-white fixed h-full ease-in-out transition-all duration-300 z-40"])}"><div class="bg-white rounded-r-full w-auto h-14 flex items-center justify-center absolute -right-10 top-5">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: !unref(isOpen) ? "tabler:arrow-badge-right-filled" : "tabler:arrow-badge-left",
        size: "40",
        class: "bg-primary mr-1",
        onClick: drawer
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_LogosBrand, { class: "pb-6 border-b" }, null, _parent));
      _push(`<ul class="divide-y flex flex-col"><!--[-->`);
      ssrRenderList(unref(adminNav), (item, index) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.link,
          onClick: ($event) => isOpen.value = false,
          class: "my-4 inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></aside><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/NavDashboard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ElementsNavDashboard = _sfc_main$1;
  const _component_NuxtPage = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex relative" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ElementsNavDashboard, { class: "fixed" }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtPage, { class: "min-h-screen w-full" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  admin as default
};
//# sourceMappingURL=admin-C8f1jAFl.js.map
