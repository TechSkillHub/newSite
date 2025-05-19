import { r as resetPassword, _ as _sfc_main$2 } from './auth.service-CIjcSYbX.mjs';
import { e as useRoute, _ as _sfc_main$6 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, unref, withCtx, isRef, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Form } from 'vee-validate';
import 'clsx';
import 'pinia';
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
import '@iconify/utils';
import 'consola/core';
import 'node:fs';
import 'node:path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NewPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(false);
    const route = useRoute();
    const token = route.query.token;
    const newPassword = ref("");
    const confirmPassword = ref("");
    const onSubmit = async () => {
      const body = {
        newPassword: newPassword.value,
        token
      };
      await resetPassword(body);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FieldInput = _sfc_main$2;
      const _component_FieldButton = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-grayTheme rounded-md p-8 bg-gray-100 w-full md:w-1/2 lg:w-1/3" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Form), {
        onSubmit,
        class: "w-full flex flex-col gap-4"
      }, {
        default: withCtx(({ errors, isSubmitting }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FieldInput, {
              label: "Nova senha",
              name: "nova senha",
              id: "password",
              type: "password",
              rules: "required|password",
              modelValue: unref(newPassword),
              "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
              disabled: isSubmitting,
              "has-error": !!errors.newPassword
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FieldInput, {
              label: "Confirmar nova senha",
              name: "confirmar nova senha",
              id: "password",
              type: "password",
              rules: "required|password",
              modelValue: unref(confirmPassword),
              "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
              disabled: isSubmitting,
              "has-error": !!errors.confirmPassword
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FieldButton, {
              disabled: unref(isLoading),
              fullWidth: "",
              type: "submit"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Redefinir senha `);
                } else {
                  return [
                    createTextVNode(" Redefinir senha ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FieldInput, {
                label: "Nova senha",
                name: "nova senha",
                id: "password",
                type: "password",
                rules: "required|password",
                modelValue: unref(newPassword),
                "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                disabled: isSubmitting,
                "has-error": !!errors.newPassword
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "has-error"]),
              createVNode(_component_FieldInput, {
                label: "Confirmar nova senha",
                name: "confirmar nova senha",
                id: "password",
                type: "password",
                rules: "required|password",
                modelValue: unref(confirmPassword),
                "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                disabled: isSubmitting,
                "has-error": !!errors.confirmPassword
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "has-error"]),
              createVNode(_component_FieldButton, {
                disabled: unref(isLoading),
                fullWidth: "",
                type: "submit"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Redefinir senha ")
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/NewPassword.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "new-password",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormsNewPassword = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center gap-8 container" }, _attrs))}><h1 class="text-3xl font-bold text-offWhite uppercase">Definir nova senha</h1>`);
      _push(ssrRenderComponent(_component_FormsNewPassword, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/new-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=new-password-ClRu4Vac.mjs.map
