import { l as loginUser, s as sendMailNewPassword, _ as _sfc_main$2, u as useFetchData } from './auth.service-CIjcSYbX.mjs';
import { _ as _sfc_main$6, b as useRouter, c as useModalStore, d as useLoadingStore } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, unref, withCtx, isRef, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/vue/server-renderer/index.mjs';
import { Form } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/vee-validate/dist/vee-validate.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/clsx/dist/clsx.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unified/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-parse/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-rehype/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/remark-gfm/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/rehype-raw/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/detab/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/hast-util-to-string/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/github-slugger/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/mailersend/lib/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/jsonwebtoken/index.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@prisma/client/default.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unenv/runtime/npm/consola.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/@iconify/utils/lib/css/icon.mjs';

const registerUser = async (data) => {
  const router = useRouter();
  const modal = useModalStore();
  const loading = useLoadingStore();
  loading.showLoading();
  await useFetchData(
    "/api/auth/register",
    {
      method: "POST",
      body: data
      // requiresCaptcha: true,
    }
  ).then((response) => {
    modal.showModal({
      ...response,
      btnText: "OK"
    });
    router.push("/");
  }).catch((error) => {
    throw error;
  }).finally(() => {
    loading.closeLoading();
  });
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Auth",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const senha = ref("");
    const variant = ref("LOGIN");
    const onSubmit = async () => {
      if (variant.value === "REGISTER") {
        register();
      } else if (variant.value === "LOGIN") {
        login();
      } else {
        forgotPassword();
      }
    };
    const login = async () => {
      const body = {
        email: email.value,
        password: senha.value
      };
      await loginUser(body);
    };
    const forgotPassword = async () => {
      const body = {
        email: email.value
      };
      await sendMailNewPassword(body);
    };
    const register = async () => {
      const body = {
        name: name.value,
        email: email.value,
        password: senha.value,
        companyId: 1
      };
      await registerUser(body);
    };
    const toggleForgotPassword = () => {
      if (variant.value === "FORGOT") {
        variant.value = "LOGIN";
      } else {
        variant.value = "FORGOT";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FieldInput = _sfc_main$2;
      const _component_FieldButton = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-grayTheme rounded-md p-8 bg-gray-100 w-full md:w-1/2 lg:w-1/3" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Form), {
        ref: "authForm",
        class: "w-full flex flex-col gap-4",
        onSubmit
      }, {
        default: withCtx(({ errors, isSubmitting }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(variant) === "REGISTER") {
              _push2(ssrRenderComponent(_component_FieldInput, {
                label: "Name",
                name: "name",
                id: "name",
                modelValue: unref(name),
                "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                disabled: isSubmitting,
                type: "text",
                "has-error": !!errors.name,
                rules: "required|noSpecialCharacters|noNumbers"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_FieldInput, {
              label: "Email",
              name: "email",
              id: "email",
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
              disabled: isSubmitting,
              type: "email",
              "has-error": !!errors.email,
              rules: "required|email"
            }, null, _parent2, _scopeId));
            if (unref(variant) !== "FORGOT") {
              _push2(ssrRenderComponent(_component_FieldInput, {
                label: "Senha",
                name: "senha",
                id: "senha",
                modelValue: unref(senha),
                "onUpdate:modelValue": ($event) => isRef(senha) ? senha.value = $event : null,
                disabled: isSubmitting,
                type: "text",
                "has-error": !!errors.senha,
                rules: unref(variant) === "LOGIN" ? "required" : "required|password"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(variant) === "LOGIN") {
              _push2(`<small class="text-right -mt-4 underline cursor-pointer"${_scopeId}> Esqueceu a senha? </small>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_FieldButton, {
              disabled: isSubmitting,
              fullWidth: "",
              type: "submit"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(variant) === "LOGIN" ? "Acessar" : unref(variant) === "REGISTER" ? "Cadastrar" : "Redefinir senha")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(variant) === "LOGIN" ? "Acessar" : unref(variant) === "REGISTER" ? "Cadastrar" : "Redefinir senha"), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            if (unref(variant) === "FORGOT") {
              _push2(ssrRenderComponent(_component_FieldButton, {
                disabled: isSubmitting,
                fullWidth: "",
                outlined: "",
                onClick: toggleForgotPassword
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Voltar `);
                  } else {
                    return [
                      createTextVNode(" Voltar ")
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
              unref(variant) === "REGISTER" ? (openBlock(), createBlock(_component_FieldInput, {
                key: 0,
                label: "Name",
                name: "name",
                id: "name",
                modelValue: unref(name),
                "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                disabled: isSubmitting,
                type: "text",
                "has-error": !!errors.name,
                rules: "required|noSpecialCharacters|noNumbers"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "has-error"])) : createCommentVNode("", true),
              createVNode(_component_FieldInput, {
                label: "Email",
                name: "email",
                id: "email",
                modelValue: unref(email),
                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                disabled: isSubmitting,
                type: "email",
                "has-error": !!errors.email,
                rules: "required|email"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "has-error"]),
              unref(variant) !== "FORGOT" ? (openBlock(), createBlock(_component_FieldInput, {
                key: 1,
                label: "Senha",
                name: "senha",
                id: "senha",
                modelValue: unref(senha),
                "onUpdate:modelValue": ($event) => isRef(senha) ? senha.value = $event : null,
                disabled: isSubmitting,
                type: "text",
                "has-error": !!errors.senha,
                rules: unref(variant) === "LOGIN" ? "required" : "required|password"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "has-error", "rules"])) : createCommentVNode("", true),
              unref(variant) === "LOGIN" ? (openBlock(), createBlock("small", {
                key: 2,
                class: "text-right -mt-4 underline cursor-pointer",
                onClick: toggleForgotPassword
              }, " Esqueceu a senha? ")) : createCommentVNode("", true),
              createVNode(_component_FieldButton, {
                disabled: isSubmitting,
                fullWidth: "",
                type: "submit"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(variant) === "LOGIN" ? "Acessar" : unref(variant) === "REGISTER" ? "Cadastrar" : "Redefinir senha"), 1)
                ]),
                _: 2
              }, 1032, ["disabled"]),
              unref(variant) === "FORGOT" ? (openBlock(), createBlock(_component_FieldButton, {
                key: 3,
                disabled: isSubmitting,
                fullWidth: "",
                outlined: "",
                onClick: toggleForgotPassword
              }, {
                default: withCtx(() => [
                  createTextVNode(" Voltar ")
                ]),
                _: 2
              }, 1032, ["disabled"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col lg:flex-row gap-2 justify-center items-center text-sm mt-6 px-2 text-gray-500 text-center"><div>${ssrInterpolate(unref(variant) === "LOGIN" ? `Don't have an account?` : "Already have an account?")}</div><div class="underline cursor-pointer">${ssrInterpolate(unref(variant) === "LOGIN" ? "Create an account" : "Login")}</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/Auth.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormsAuth = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center gap-8 container" }, _attrs))}><h1 class="text-3xl font-bold text-offWhite uppercase">\xC1rea do cliente</h1>`);
      _push(ssrRenderComponent(_component_FormsAuth, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C78qljfC.mjs.map
