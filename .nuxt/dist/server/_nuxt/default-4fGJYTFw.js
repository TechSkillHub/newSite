import { f as _export_sfc, g as __nuxt_component_0, o as __nuxt_component_2$1, b as useRouter, c as useModalStore, d as useLoadingStore, u as useAuthStore, a as useUserStore, p as _sfc_main$6, h as _imports_0 } from "../server.mjs";
import { mergeProps, useSSRContext, defineComponent, withCtx, createVNode, ref, watch, unref, createTextVNode, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as __nuxt_component_1$1 } from "./page-CBFZGyFn.js";
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
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0;
  _push(ssrRenderComponent(_component_Icon, mergeProps({
    name: "material-symbols:menu",
    size: "40"
  }, _attrs), null, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Hamburguer.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SocialIcon",
  __ssrInlineRender: true,
  props: {
    icon: {},
    url: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      const _component_Icon = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        href: _ctx.url,
        target: "_blank",
        "aria-label": "Social Link"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: _ctx.icon,
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: _ctx.icon,
                size: "20"
              }, null, 8, ["name"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/SocialIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const socialLinks = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/tech.skillhub",
    icon: "fa6-brands:instagram"
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/tsh.techskillhub/",
    icon: "fa6-brands:facebook"
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/tech-skill-hub/",
    icon: "fa6-brands:linkedin"
  }
  // {
  //   title: 'YouTube',
  //   url: 'https://youtube.com/',
  //   icon: 'fa6-brands:youtube'
  // },
  // {
  //   title: 'X',
  //   url: 'https://x.com/',
  //   icon: 'fa6-brands:x-twitter'
  // },
];
const headerNav = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "Soluções",
    link: "/#solucoes"
  },
  {
    title: "Serviços",
    link: "/#servicos"
  },
  {
    title: "Sobre nós",
    link: "/#sobre-nos"
  }
  // {
  //   title: 'Marketing digital',
  //   link: '/'
  // },
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useModalStore();
    useLoadingStore();
    useAuthStore();
    useUserStore();
    const scrollY = ref(0);
    const isOpen = ref(false);
    watch(isOpen, (newValue) => {
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LogosBrand = _sfc_main$6;
      const _component_IconsHamburguer = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_2$1;
      const _component_Icon = __nuxt_component_0;
      const _component_IconsSocialIcon = _sfc_main$4;
      _push(`<!--[--><nav class="${ssrRenderClass([unref(scrollY) > 90 ? "!bg-gray-700 !bg-opacity-40 backdrop-blur-sm" : "", "fixed w-full p-6 bg-header text-header h-header flex shadow-md z-20 transition-all ease-in-out duration-500"])}"><div class="flex items-center justify-between container mx-auto w-full"><div class="">`);
      _push(ssrRenderComponent(_component_LogosBrand, null, null, _parent));
      _push(`</div><div class="md:hidden"><button>`);
      _push(ssrRenderComponent(_component_IconsHamburguer, null, null, _parent));
      _push(`</button></div><div class="hidden md:block"><ul class="flex space-x-8 text-sm font-sans items-center uppercase"><!--[-->`);
      ssrRenderList(unref(headerNav), (item, index) => {
        _push(`<li class="hover:text-primaryLight">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.link
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
      _push(`<!--]--></ul></div></div></nav><div style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" class="z-30 fixed inset-0 transition duration-500 ease-in-out"><div class="absolute inset-0 bg-black opacity-50"></div></div><aside class="${ssrRenderClass([unref(isOpen) ? "translate-x-0" : "-translate-x-full", "p-5 pt-8 transform top-0 -left-[1px] w-9/12 bg-white text-darkTheme fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"])}"><div class="close"><button class="absolute top-0 right-0 mt-4 mr-4" aria-label="Close">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols:close",
        size: "25"
      }, null, _parent));
      _push(`</button></div><ul class="divide-y font-sans"><!--[-->`);
      ssrRenderList(unref(headerNav), (item, index) => {
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
      _push(`<!--]--></ul><div class="follow"><p class="italic font-sans text-sm">follow us:</p><div class="social flex space-x-5 mt-4"><!--[-->`);
      ssrRenderList(unref(socialLinks), (item, index) => {
        _push(ssrRenderComponent(_component_IconsSocialIcon, {
          key: index,
          icon: item.icon,
          url: item.url
        }, null, _parent));
      });
      _push(`<!--]--></div></div></aside><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WhatsApp",
  __ssrInlineRender: true,
  setup(__props) {
    const msg = ref("");
    const chat = ref(false);
    const openChat = () => {
      chat.value = !chat.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container relative flex justify-end z-10" }, _attrs))} data-v-5a4ae532><div class="fixed bottom-6 right-8 flex flex-col justify-end items-end" data-v-5a4ae532>`);
      if (unref(chat)) {
        _push(`<div class="w-80 h-80 rounded-lg overflow-hidden bg-whats flex flex-col justify-between" data-v-5a4ae532><div data-v-5a4ae532><div class="bg-[#005c4b] text-white w-full p-4 flex gap-4 items-center text-xl font-semibold" data-v-5a4ae532><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-10 h-10 bg-white rounded-full" data-v-5a4ae532><p data-v-5a4ae532>Tech Skill Hub</p></div><div class="p-4 relative" data-v-5a4ae532><div class="rounded-e-lg rounded-b-lg relative py-2 px-4 text-sm w-fit bg-[#353535] text-white message" data-v-5a4ae532> Olá, tudo bem? </div><div class="rounded-lg relative p-2 px-4 mt-2 text-sm w-fit bg-[#353535] text-white" data-v-5a4ae532> Como podemos ajudar você hoje? </div></div></div><div class="p-4 flex justify-between gap-2" data-v-5a4ae532><input type="text" placeholder="Mensagem" class="rounded-full bg-[#353535] text-white py-2 px-6 outline-none text-sm w-full"${ssrRenderAttr("value", unref(msg))} data-v-5a4ae532><div class="bg-[#1daa61] rounded-full w-9 h-9 flex justify-center items-center p-2 cursor-pointer" data-v-5a4ae532>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:send",
          size: "30",
          class: "text-[#000000]"
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:whatsapp-icon",
        size: "50",
        onClick: openChat,
        class: "cursor-pointer mt-2"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/WhatsApp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5a4ae532"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LogosBrand = _sfc_main$6;
      const _component_IconsSocialIcon = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-footer text-footer w-full py-8 z-10 relative border-t border-grayTheme" }, _attrs))}><div class="container flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0"><div class="md:w-1/3 md:justify-start">`);
      _push(ssrRenderComponent(_component_LogosBrand, null, null, _parent));
      _push(`</div><div class="md:w-2/3"></div><div class="md:w-1/3 flex justify-end gap-3"><!--[-->`);
      ssrRenderList(unref(socialLinks), (item, index) => {
        _push(ssrRenderComponent(_component_IconsSocialIcon, {
          key: index,
          icon: item.icon,
          url: item.url
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="container pt-4"><small class="block text-center">© 2024 TechSkillHub LTDA. Todos os direitos reservados.</small></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ElementsHeader = _sfc_main$3;
  const _component_NuxtPage = __nuxt_component_1$1;
  const _component_ElementsWhatsApp = __nuxt_component_2;
  const _component_ElementsFooter = _sfc_main$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_ElementsHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtPage, { class: "min-h-[calc(100vh-var(--height-header))] pt-header" }, null, _parent));
  _push(ssrRenderComponent(_component_ElementsWhatsApp, null, null, _parent));
  _push(ssrRenderComponent(_component_ElementsFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-517cdfe1"]]);
export {
  _default as default
};
//# sourceMappingURL=default-4fGJYTFw.js.map
