import { defineComponent, mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { h as _imports_0, g as _export_sfc } from "../server.mjs";
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "capa",
        class: "bg-offWhite h-screen overflow-x-hidden flex justify-center items-center"
      }, _attrs))}><div class="max-w-screen-lg grid gap-8 h-fit text-center"><h1 class="text-5xl title uppercase">Proposta Comercial</h1><h1 class="text-3xl title">(Serviço Oferecido)</h1><h1 class="text-7xl title uppercase text-primary font-bold mt-8">(Cliente)</h1></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Proposta/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "QuemSomos",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "quem-somos",
        class: "bg-offWhite h-screen overflow-x-hidden flex justify-center items-center"
      }, _attrs))}><div class="max-w-screen-lg grid grid-flow-col gap-8 items-center h-fit"><img${ssrRenderAttr("src", unref(_imports_0))} alt="Logo" class="w-80 h-80 logo"><div class="grid grid-flow-row h-full gap-8"><h1 class="text-5xl title font-semibold">Quem é a <span class="text-primary font-theme font-normal">Tech Skill Hub</span>?</h1><p class="text-2xl"> A <span class="text-primary font-theme">TSH</span> foi criada quando identificamos a dificuldade de diversos setores em se posicionar no digital, assim surgiu nosso nome onde a ideia é juntar diversas habilidades em um único lugar de modo que podemos ajudar nosso clientes em toda a a jornada deles no universo do digital. </p></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Proposta/QuemSomos.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Funil",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "funil",
        class: "bg-offWhite h-screen overflow-x-hidden flex justify-center items-center text-center"
      }, _attrs))} data-v-9397d3d4><div class="max-w-screen-xl grid grid-flow-col gap-8 items-center h-fit" data-v-9397d3d4><div class="grid grid-flow-row h-full gap-8" data-v-9397d3d4><h1 class="text-5xl title font-semibold uppercase leading-tight" data-v-9397d3d4>Começando a sua <span class="text-primary font-theme font-normal" data-v-9397d3d4>revolução digital</span></h1><h2 class="title text-2xl" data-v-9397d3d4>Funil de Vendas Ideal:</h2><div class="funnel" data-v-9397d3d4><div class="funnel-part" data-v-9397d3d4>SEO, Ads e Redes Sociais</div><div class="funnel-part" data-v-9397d3d4>Site e LandingPage</div><div class="funnel-part" data-v-9397d3d4>WhatsApp</div><div class="funnel-part" data-v-9397d3d4>Venda</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Proposta/Funil.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9397d3d4"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Funil01",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "funil01",
        class: "bg-offWhite h-screen overflow-x-hidden flex justify-center items-center text-center"
      }, _attrs))} data-v-d2c84449><div class="max-w-screen-xl grid grid-flow-col gap-8 items-center h-fit" data-v-d2c84449><div class="grid grid-flow-row h-full gap-8" data-v-d2c84449><h1 class="text-5xl title font-semibold uppercase leading-tight" data-v-d2c84449>Começando a sua <span class="text-primary font-theme font-normal" data-v-d2c84449>revolução digital</span></h1><div class="funnel" data-v-d2c84449><div class="funnel-part" data-v-d2c84449>SEO</div></div><p data-v-d2c84449>SEO é um conjunto de técnicas e estratégias para sites ficarem melhor posicionados nos buscadores,<br data-v-d2c84449> gerar reconhecimento de marca, aumentar o tráfego e as conversões.</p><div class="flex gap-4" data-v-d2c84449><div class="bg-gray-300 w-full h-80" data-v-d2c84449></div><div class="bg-gray-300 w-full h-80" data-v-d2c84449></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Proposta/Funil01.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d2c84449"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "proposta",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionProposta = _sfc_main$4;
      const _component_SectionPropostaQuemSomos = _sfc_main$3;
      const _component_SectionPropostaFunil = __nuxt_component_2;
      const _component_SectionPropostaFunil01 = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-h-screen relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionProposta, { ref: "section1" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionPropostaQuemSomos, { ref: "section2" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionPropostaFunil, { ref: "section3" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionPropostaFunil01, { ref: "section4" }, null, _parent));
      _push(`<div class="h-screen"></div><img${ssrRenderAttr("src", unref(_imports_0))} alt="Logo" class="fixed bottom-8 right-8 w-28 h-28 opacity-70"></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/proposta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=proposta-Bh2iEZ05.js.map
