import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as useUserStore } from './server.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Google",
  __ssrInlineRender: true,
  setup(__props) {
    useUserStore();
    const isConnected = ref(false);
    const campaigns = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!unref(isConnected)) {
        _push(`<div class="flex justify-center items-center h-96"><button class="bg-primary text-white px-4 py-2 rounded"> Conectar Google Ads </button></div>`);
      } else {
        _push(`<div><h2 class="text-lg font-bold">Campanhas do Google Ads</h2><ul><!--[-->`);
        ssrRenderList(unref(campaigns), (campaign) => {
          _push(`<li>${ssrInterpolate(campaign.name)} - ${ssrInterpolate(campaign.status)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/AdsReports/Google.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Meta",
  __ssrInlineRender: true,
  setup(__props) {
    const isConnected = ref(false);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!unref(isConnected)) {
        _push(`<div class="flex justify-center items-center h-96"><button class="bg-primary text-white px-4 py-2 rounded"> Conectar Meta Ads </button></div>`);
      } else {
        _push(`<div><h2 class="text-lg font-bold">Campanhas do Meta Ads</h2><ul></ul></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/AdsReports/Meta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ads-reports",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("google");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionAdsReportsGoogle = _sfc_main$2;
      const _component_SectionAdsReportsMeta = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-700 flex flex-col p-8" }, _attrs))}><div class="border-b border-darkTheme pb-8"><h1 class="text-4xl font-bold text-offWhite">Relat\xF3rios Tr\xE1fego Pago</h1></div><div class="flex flex-col pt-8"><div class="flex w-fit gap-1"><button class="${ssrRenderClass([{ "border-b-2 border-primary bg-white ": unref(activeTab) === "google" }, "py-2 px-4 text-gray-700 rounded-t-md bg-grayTheme"])}"> Google Ads </button><button class="${ssrRenderClass([{ "border-b-2 border-primary bg-white": unref(activeTab) === "meta" }, "py-2 px-4 text-gray-700 rounded-t-md bg-grayTheme"])}"> Meta Ads </button></div><div class="p-4 bg-white rounded-md rounded-tl-none">`);
      if (unref(activeTab) === "google") {
        _push(ssrRenderComponent(_component_SectionAdsReportsGoogle, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "meta") {
        _push(ssrRenderComponent(_component_SectionAdsReportsMeta, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/ads-reports.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ads-reports-CAVByXUT.mjs.map
