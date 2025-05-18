import * as vue$1 from 'vue';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withAsyncContext, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { g as _export_sfc, f as __nuxt_component_0$2, _ as _sfc_main$6$1 } from './server.mjs';
import { q as queryContent } from './query-rjsxAzRX.mjs';
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
import './preview-1rvcWeJv.mjs';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vue$1);

var vue=require$$0;function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}var script = vue.defineComponent({
  name: "Vue3Autocounter",
  interval: null,
  props: {
    startAmount: {
      type: Number,
      default: 0
    },
    endAmount: {
      type: Number,
      default: 0,
      required: true
    },
    duration: {
      type: Number,
      default: 3,
      validator: function validator(duration) {
        return duration > 0;
      }
    },
    autoinit: {
      type: Boolean,
      default: true
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    separator: {
      type: String,
      default: ','
    },
    decimalSeparator: {
      type: String,
      default: '.'
    },
    decimals: {
      type: Number,
      default: 0,
      validator: function validator(decimals) {
        return decimals >= 0;
      }
    }
  },
  data: function data() {
    return {
      timestamp: 0,
      startTimestamp: 0,
      currentAmount: 0,
      currentStartAmount: 0,
      currentDuration: 0,
      paused: false,
      remaining: 0,
      animationFrame: 0
    };
  },
  mounted: function mounted() {
    this.currentAmount = this.startAmount;
    this.currentStartAmount = this.startAmount;
    this.currentDuration = this.duration * 1000;
    this.remaining = this.duration * 1000;
    if (this.autoinit) this.start();else this.paused = true;
    this.$emit('mounted');
  },
  unmounted: function unmounted() {
    this.cancelAnimation();
  },
  watch: {
    startAmount: function startAmount() {
      this.reset();
    },
    endAmount: function endAmount() {
      this.reset();
    },
    duration: function duration() {
      this.reset();
    }
  },
  computed: {
    isCountingUp: function isCountingUp() {
      return this.endAmount > this.startAmount;
    },
    displayedAmount: function displayedAmount() {
      return "".concat(this.prefix).concat(this.formatedAmount).concat(this.suffix);
    },
    formatedAmount: function formatedAmount() {
      var regex = /(\d+)(\d{3})/;
      var numberString = this.currentAmount.toFixed(this.decimals);
      numberString += '';
      var numberArray = numberString.split('.');
      var numbers = numberArray[0];
      var decimals = numberArray.length > 1 ? this.decimalSeparator + numberArray[1] : '';
      var isNumber = !isNaN(parseFloat(this.separator));
      if (this.separator && !isNumber) {
        while (regex.test(numbers)) numbers = numbers.replace(regex, '$1' + this.separator + '$2');
      }
      return numbers + decimals;
    }
  },
  methods: {
    start: function start() {
      this.cancelAnimation();
      this.currentStartAmount = this.startAmount;
      this.startTimestamp = null;
      this.currentDuration = this.duration * 1000;
      this.paused = false;
      this.animationFrame = window.requestAnimationFrame(this.counting);
    },
    pause: function pause() {
      if (this.paused) return;
      this.cancelAnimation();
      this.paused = true;
    },
    resume: function resume() {
      if (!this.paused) return;
      this.startTimestamp = null;
      this.currentDuration = +this.remaining;
      this.currentStartAmount = +this.currentAmount;
      this.animationFrame = window.requestAnimationFrame(this.counting);
      this.paused = false;
    },
    reset: function reset() {
      this.paused = false;
      this.startTimestamp = null;
      this.cancelAnimation();
      this.currentAmount = this.startAmount;
      if (this.autoinit) this.start();else this.paused = true;
    },
    counting: function counting(timestamp) {
      this.timestamp = timestamp;
      if (!this.startTimestamp) this.startTimestamp = timestamp;
      var progress = timestamp - this.startTimestamp;
      this.remaining = this.currentDuration - progress;
      if (!this.isCountingUp) {
        this.currentAmount = this.currentStartAmount - (this.currentStartAmount - this.endAmount) * (progress / this.currentDuration);
        this.currentAmount = this.currentAmount < this.endAmount ? this.endAmount : this.currentAmount;
      } else {
        this.currentAmount = this.currentStartAmount + (this.endAmount - this.currentStartAmount) * (progress / this.currentDuration);
        this.currentAmount = this.currentAmount > this.endAmount ? this.endAmount : this.currentAmount;
      }
      if (progress < this.currentDuration) this.animationFrame = window.requestAnimationFrame(this.counting);else this.$emit('finished');
    },
    cancelAnimation: function cancelAnimation() {
      if (this.animationFrame) window.cancelAnimationFrame(this.animationFrame);
    }
  }
});function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("span", null, vue.toDisplayString(_ctx.displayedAmount), 1);
}script.render = render;// Import vue component

// Define typescript interfaces for installable component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var component = /*#__PURE__*/(function () {
  // Assign InstallableComponent type
  var installable = script;

  // Attach install function executed by Vue.use()
  installable.install = function (app) {
    app.component('Vue3Autocounter', installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)
Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    exportName = _ref2[0],
    exported = _ref2[1];
  if (exportName !== 'default') component[exportName] = exported;
});var vue3Autocounter_ssr=component;

const Vue3autocounter = /*@__PURE__*/getDefaultExportFromCjs(vue3Autocounter_ssr);

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Writer",
  __ssrInlineRender: true,
  props: {
    array: {},
    eraseSpeed: { default: 100 },
    typeSpeed: { default: 200 },
    delay: { default: 2e3 },
    intervals: { default: 500 },
    start: { default: 0 },
    caret: { default: "cursor" },
    iterations: { default: 0 }
  },
  emits: ["typed"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const typeValue = ref("");
    const count = ref(0);
    const typeStatus = ref(false);
    const arrayIndex = ref(0);
    const charIndex = ref(0);
    function typewriter() {
      let loop = 0;
      if (charIndex.value < __props.array[arrayIndex.value].length) {
        if (!typeStatus.value) {
          typeStatus.value = true;
        }
        typeValue.value += __props.array[arrayIndex.value].charAt(charIndex.value);
        charIndex.value += 1;
        setTimeout(typewriter, __props.typeSpeed);
      } else {
        count.value += 1;
        onTyped(__props.array[arrayIndex.value]);
        if (count.value === __props.array.length) {
          loop += 1;
          if (loop === __props.iterations) {
            return typeStatus.value = false;
          }
        }
        typeStatus.value = false;
        setTimeout(eraser, __props.delay);
      }
    }
    function eraser() {
      if (charIndex.value > 0) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value = __props.array[arrayIndex.value].substring(0, charIndex.value - 1);
        charIndex.value -= 1;
        setTimeout(eraser, __props.eraseSpeed);
      } else {
        typeStatus.value = false;
        arrayIndex.value += 1;
        if (arrayIndex.value >= __props.array.length) arrayIndex.value = 0;
        setTimeout(typewriter, __props.typeSpeed + __props.intervals);
      }
    }
    function onTyped(typedString) {
      emit("typed", typedString);
    }
    setTimeout(typewriter, __props.start);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "is-typed" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<span class="typed">${ssrInterpolate(unref(typeValue))}</span><span class="${ssrRenderClass(_ctx.caret + " " + { typing: unref(typeStatus) })}">\xA0</span></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/effects/Writer.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const useContentCustom = async () => {
  const data = await queryContent("main").findOne();
  return data;
};
const number = "+5511942814929";
const whatsApp = `https://wa.me/${number}`;
const _sfc_main$8 = {
  __name: "Hero",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const content = ([__temp, __restore] = withAsyncContext(() => useContentCustom()), __temp = await __temp, __restore(), __temp);
    const hero = content.hero;
    const msg = ref("Ol\xE1, quero explorar a mudan\xE7a no digital.");
    const sendMsg = () => {
      (void 0).open(`${whatsApp}?text=${encodeURIComponent(msg.value)}`, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EffectsWriter = _sfc_main$9;
      const _component_Icon = __nuxt_component_0$2;
      const _component_FieldButton = _sfc_main$6$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-darkTheme flex items-center min-h-[calc(100vh-var(--height-header))] py-8" }, _attrs))}><div class="container flex justify-between items-center md:h-[480px] flex-col md:flex-row gap-8"><div class="md:w-1/2 h-full"><h1 class="md:text-8xl text-5xl text-center md:text-left font-bold uppercase text-white"> Sua<br>`);
      _push(ssrRenderComponent(_component_EffectsWriter, {
        array: ["Revolu\xE7\xE3o", "Presen\xE7a", "Solu\xE7\xE3o"],
        caret: "cursor"
      }, null, _parent));
      _push(` Digital<br> Come\xE7a<br> Aqui<span class="text-primary">.</span></h1></div><div class="md:w-[46%] flex flex-col justify-between h-full"><p class="text-justify text-grayTheme">${ssrInterpolate(unref(hero).text)}</p><div class="flex flex-col gap-2 md:items-end mt-8"><!--[-->`);
      ssrRenderList(unref(hero).items, (item, index) => {
        _push(`<div class="text-white uppercase rounded-full px-2 py-2 bg-gray-700 md:w-2/3 flex items-center gap-2 leading-none">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:check-circle",
          size: "24",
          class: "text-primary"
        }, null, _parent));
        _push(`<span class="mt-[2px]">${ssrInterpolate(item)}</span></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_FieldButton, {
        class: "uppercase md:w-2/3 mt-4 rounded-full py-4 md:text-xl text-lg",
        onClick: sendMsg
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="w-11/12"${_scopeId}>${ssrInterpolate(unref(hero).cta)}</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "material-symbols:arrow-insert",
              class: "-scale-x-100 text-3xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "w-11/12" }, toDisplayString(unref(hero).cta), 1),
              createVNode(_component_Icon, {
                name: "material-symbols:arrow-insert",
                class: "-scale-x-100 text-3xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Hero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ScrollX",
  __ssrInlineRender: true,
  props: {
    line1: {},
    line2: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mask grid gap-4 overflow-hidden" }, _attrs))} data-v-d48c76dd><div class="carousel" data-v-d48c76dd><div class="group" data-v-d48c76dd><!--[-->`);
      ssrRenderList(_ctx.line1, (item, index) => {
        _push(`<div class="card" data-v-d48c76dd><h1 data-v-d48c76dd>${ssrInterpolate(item.title)}</h1><p data-v-d48c76dd>${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div><div aria-hidden class="group" data-v-d48c76dd><!--[-->`);
      ssrRenderList(_ctx.line1, (item, index) => {
        _push(`<div class="card" data-v-d48c76dd><h1 data-v-d48c76dd>${ssrInterpolate(item.title)}</h1><p data-v-d48c76dd>${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (_ctx.line2) {
        _push(`<div class="carousel" data-v-d48c76dd><div class="group inverse" data-v-d48c76dd><!--[-->`);
        ssrRenderList(_ctx.line2, (item, index) => {
          _push(`<div class="card" data-v-d48c76dd><h1 data-v-d48c76dd>${ssrInterpolate(item.title)}</h1><p data-v-d48c76dd>${ssrInterpolate(item.description)}</p></div>`);
        });
        _push(`<!--]--></div><div aria-hidden class="group inverse" data-v-d48c76dd><!--[-->`);
        ssrRenderList(_ctx.line2, (item, index) => {
          _push(`<div class="card" data-v-d48c76dd><h1 data-v-d48c76dd>${ssrInterpolate(item.title)}</h1><p data-v-d48c76dd>${ssrInterpolate(item.description)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/effects/ScrollX.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-d48c76dd"]]);
const _sfc_main$6 = {
  __name: "ProblemCases",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const content = ([__temp, __restore] = withAsyncContext(() => useContentCustom()), __temp = await __temp, __restore(), __temp);
    const problems = content.problems;
    const msg = ref("Ol\xE1, quero saber como resolver meus problemas digitais.");
    const sendMsg = () => {
      (void 0).open(`${whatsApp}?text=${encodeURIComponent(msg.value)}`, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EffectsScrollX = __nuxt_component_0$1;
      const _component_FieldButton = _sfc_main$6$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-darkTheme flex flex-col gap-4 relative" }, _attrs))}><div class="container flex flex-col md:flex-row justify-between md:items-center mb-8 text-center my-8"><h1 class="md:text-4xl text-3xl text-offWhite font-bold uppercase">${ssrInterpolate(unref(problems).title)}</h1><h2 class="md:text-xl text-primary font-semibold uppercase">${ssrInterpolate(unref(problems).subtitle)}</h2></div>`);
      _push(ssrRenderComponent(_component_EffectsScrollX, {
        line1: unref(problems).line1,
        line2: unref(problems).line2
      }, null, _parent));
      _push(`<div class="container my-8">`);
      _push(ssrRenderComponent(_component_FieldButton, {
        class: "uppercase md:w-2/3 rounded-full py-4 mx-auto md:text-xl text-lg",
        onClick: sendMsg
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="w-11/12"${_scopeId}>${ssrInterpolate(unref(problems).cta)}</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "material-symbols:arrow-insert",
              class: "-scale-x-100 text-3xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "w-11/12" }, toDisplayString(unref(problems).cta), 1),
              createVNode(_component_Icon, {
                name: "material-symbols:arrow-insert",
                class: "-scale-x-100 text-3xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/ProblemCases.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "CardHoverBorder",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "wrapper",
        class: "wrapper grow"
      }, _attrs))} data-v-d320295e><div class="bg-gray-700 rounded-xl p-6 h-full" data-v-d320295e>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/effects/CardHoverBorder.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d320295e"]]);
const _sfc_main$4 = {
  __name: "Services",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const content = ([__temp, __restore] = withAsyncContext(() => useContentCustom()), __temp = await __temp, __restore(), __temp);
    const services = content.services;
    const msg = ref("Ol\xE1, quero come\xE7ar minha revolu\xE7\xE3o digital.");
    const sendMsg = () => {
      (void 0).open(`${whatsApp}?text=${encodeURIComponent(msg.value)}`, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EffectsCardHoverBorder = __nuxt_component_0;
      const _component_FieldButton = _sfc_main$6$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-darkTheme flex flex-col gap-4 relative py-12" }, _attrs))}><div class="container gap-4 flex flex-wrap"><!--[-->`);
      ssrRenderList(unref(services), (item, index) => {
        _push(ssrRenderComponent(_component_EffectsCardHoverBorder, { key: index }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><h1 class="text-4xl text-offWhite font-semibold mb-4"${_scopeId}>${ssrInterpolate(item.title)}</h1><p class="text-grayTheme uppercase"${_scopeId}>${ssrInterpolate(item.description)}</p></div>`);
              if (item.img) {
                _push2(`<img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", `Imagem ${item.title}`)}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.cta) {
                _push2(ssrRenderComponent(_component_FieldButton, {
                  fullWidth: "",
                  class: "uppercase rounded-full py-4 mx-auto md:text-xl text-lg",
                  onClick: sendMsg
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="w-11/12"${_scopeId2}>${ssrInterpolate(item.cta)}</span>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "material-symbols:arrow-insert",
                        class: "-scale-x-100 text-3xl"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("span", { class: "w-11/12" }, toDisplayString(item.cta), 1),
                        createVNode(_component_Icon, {
                          name: "material-symbols:arrow-insert",
                          class: "-scale-x-100 text-3xl"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("div", null, [
                  createVNode("h1", { class: "text-4xl text-offWhite font-semibold mb-4" }, toDisplayString(item.title), 1),
                  createVNode("p", { class: "text-grayTheme uppercase" }, toDisplayString(item.description), 1)
                ]),
                item.img ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: item.img,
                  alt: `Imagem ${item.title}`
                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                item.cta ? (openBlock(), createBlock(_component_FieldButton, {
                  key: 1,
                  fullWidth: "",
                  class: "uppercase rounded-full py-4 mx-auto md:text-xl text-lg",
                  onClick: sendMsg
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "w-11/12" }, toDisplayString(item.cta), 1),
                    createVNode(_component_Icon, {
                      name: "material-symbols:arrow-insert",
                      class: "-scale-x-100 text-3xl"
                    })
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="container my-8">`);
      _push(ssrRenderComponent(_component_FieldButton, {
        class: "uppercase md:w-2/3 rounded-full py-4 mx-auto md:text-xl text-lg",
        onClick: sendMsg
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="w-11/12"${_scopeId}>Quero come\xE7ar minha revolu\xE7\xE3o</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "material-symbols:arrow-insert",
              class: "-scale-x-100 text-3xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "w-11/12" }, "Quero come\xE7ar minha revolu\xE7\xE3o"),
              createVNode(_component_Icon, {
                name: "material-symbols:arrow-insert",
                class: "-scale-x-100 text-3xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Services.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-grayTheme flex flex-col gap-4 relative py-24" }, _attrs))}><div class="container flex flex-col md:flex-row"><div class="md:w-2/3"><h1 class="text-4xl text-primary font-semibold mb-4">Mais sobre n\xF3s...</h1><p class="text-justify"> A TSH surgiu com a vis\xE3o de oferecer servi\xE7os e produtos personalizados, fundamentados em processos e requisitos bem definidos. Essa abordagem garante solu\xE7\xF5es r\xE1pidas e de alta qualidade, acreditamos firmemente em uma f\xF3rmula simples para o sucesso: Reduzir o tempo e maximizar os objetivos resulta em menor custo e maior retorno para nossos clientes. Nosso prop\xF3sito \xE9 descomplicar o desenvolvimento de solu\xE7\xF5es em tecnologia, tornando o processo mais eficiente e acess\xEDvel para todos os envolvidos. </p></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/WhoUs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NumberRotate",
  __ssrInlineRender: true,
  props: {
    endAmount: {},
    duration: {},
    prefix: {},
    suffix: {}
  },
  setup(__props) {
    const counter = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Vue3autocounter), {
        ref_key: "counter",
        ref: counter,
        prefix: _ctx.prefix,
        suffix: _ctx.suffix,
        startAmount: 0,
        endAmount: _ctx.endAmount,
        duration: _ctx.duration,
        autoinit: true,
        class: "text-white text-6xl font-bold"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/effects/NumberRotate.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_EffectsNumberRotate = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "bg-gray-700 flex flex-col gap-4 relative py-12",
    id: "expertises"
  }, _attrs))} data-v-e475a309><div class="container flex justify-between items-center flex-col md:flex-row gap-12 md:gap-0" data-v-e475a309><div class="flex justify-center items-center gap-4 w-1/3" data-v-e475a309>`);
  _push(ssrRenderComponent(_component_EffectsNumberRotate, {
    endAmount: 26,
    duration: 1,
    prefix: "+",
    class: "w-28"
  }, null, _parent));
  _push(`<span data-v-e475a309>Anos de<br data-v-e475a309>experi\xEAncia</span></div><div class="flex justify-center items-center gap-4 w-1/3" data-v-e475a309>`);
  _push(ssrRenderComponent(_component_EffectsNumberRotate, {
    endAmount: 73,
    duration: 3,
    suffix: "K",
    class: "w-40 text-right"
  }, null, _parent));
  _push(`<span data-v-e475a309>Horas<br data-v-e475a309>trabalhadas</span></div><div class="flex justify-center items-center gap-4 w-1/3" data-v-e475a309>`);
  _push(ssrRenderComponent(_component_EffectsNumberRotate, {
    endAmount: 42,
    duration: 2,
    class: "w-20"
  }, null, _parent));
  _push(`<span data-v-e475a309>Projetos<br data-v-e475a309>entregues</span></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Expertises.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e475a309"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHero = _sfc_main$8;
      const _component_SectionProblemCases = _sfc_main$6;
      const _component_SectionServices = _sfc_main$4;
      const _component_SectionWhoUs = __nuxt_component_3;
      const _component_SectionExpertises = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionHero, { id: "" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionProblemCases, { id: "solucoes" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionServices, { id: "servicos" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionWhoUs, { id: "sobre-nos" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionExpertises, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-WnT0FZAW.mjs.map
