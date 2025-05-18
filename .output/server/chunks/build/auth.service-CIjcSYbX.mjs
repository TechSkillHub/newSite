import { useSSRContext, defineComponent, computed, unref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Field, ErrorMessage } from 'vee-validate';
import clsx from 'clsx';
import { u as useAuthStore, c as useModalStore, b as useRouter, d as useLoadingStore, a as useUserStore } from './server.mjs';
import { defineStore } from 'pinia';

const useRecaptchaStore = defineStore("recaptcha", {
  state: () => ({
    token: null
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },
    clearToken() {
      this.token = null;
    }
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    label: {},
    id: {},
    modelValue: {},
    name: {},
    type: {},
    required: { type: Boolean },
    disabled: { type: Boolean },
    hasError: { type: Boolean },
    rules: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value2) {
        emit("update:modelValue", value2);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label${ssrRenderAttr("for", _ctx.id)} class="block text-sm font-medium leading-6 text-gray-900">${ssrInterpolate(_ctx.label)}</label><div class="tooltip">`);
      _push(ssrRenderComponent(unref(Field), {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        name: _ctx.name,
        type: _ctx.type,
        id: _ctx.id,
        disabled: _ctx.disabled,
        rules: _ctx.rules,
        class: unref(clsx)(
          "block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 outline-none",
          _ctx.disabled && "opacity-70 cursor-default",
          _ctx.hasError && "ring-red-500 focus:ring-red-500"
        )
      }, null, _parent));
      _push(ssrRenderComponent(unref(ErrorMessage), {
        name: _ctx.id,
        class: "tooltiptext"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/field/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useFetchData = async (endpoint, options) => {
  const authStore = useAuthStore();
  const recaptcha = useRecaptchaStore();
  const modalStore = useModalStore();
  const router = useRouter();
  const response = await $fetch(
    `${endpoint}`,
    {
      method: options.method,
      body: options.body,
      headers: {
        // Token
        ...options.requiresAuth && authStore.token && {
          Authorization: `Bearer ${authStore.token}`
        },
        // Captcha
        ...options.requiresCaptcha && recaptcha.token && { captcha: recaptcha.token }
      },
      onResponse({ response: response2 }) {
        if (response2.status === 401) {
          modalStore.showModal({
            title: "Login expired",
            message: "Your session has expired, please log in again."
          });
          console.log("logou");
          authStore.logout();
          router.push("/");
        } else if (response2.status === 500) {
          modalStore.showModal({
            title: "Server failure",
            message: response2._data.message ? response2._data.message : "Internal server error. Please try again later."
          });
        } else if (response2.status === 404) {
          modalStore.showModal({
            title: "Invalid route",
            message: "Internal server error. Please try again later."
          });
        } else if (response2.status === 423) {
          modalStore.showModal({
            title: "Access Temporarily Unavailable",
            message: "The requested feature is currently blocked. Please try again later."
          });
        } else if (response2.status === 409) {
          modalStore.showModal({
            title: "Error when registering",
            message: "Check the data entered and try again."
          });
        } else if (response2.status === 429) {
          modalStore.showModal({
            title: "Attention",
            message: response2._data.message
          });
        }
      }
    }
  );
  return response;
};
const stores = () => {
  const router = useRouter();
  const loadingStore = useLoadingStore();
  const modalStore = useModalStore();
  const authStore = useAuthStore();
  const userStore = useUserStore();
  return { router, loadingStore, modalStore, authStore, userStore };
};
const loginUser = async (data) => {
  const { router, loadingStore, authStore, userStore } = stores();
  loadingStore.showLoading();
  await useFetchData(
    "/api/auth/login",
    {
      method: "POST",
      body: data
      // requiresCaptcha: true,
    }
  ).then((response) => {
    authStore.setToken(response.token);
    userStore.setUser(response.user);
    router.push("/");
  }).catch((error) => {
    throw error;
  }).finally(() => {
    loadingStore.closeLoading();
  });
};
const sendMailNewPassword = async (data) => {
  const { loadingStore, modalStore } = stores();
  loadingStore.showLoading();
  await useFetchData(
    "/api/auth/forgot-password",
    {
      method: "POST",
      body: data
      // requiresCaptcha: true,
    }
  ).then((response) => {
    modalStore.showModal({
      title: "Success",
      message: response.message
    });
    return response;
  }).catch((error) => {
    throw error;
  }).finally(() => {
    loadingStore.closeLoading();
  });
};
const resetPassword = async (data) => {
  const { loadingStore, modalStore } = stores();
  loadingStore.showLoading();
  await useFetchData(
    "/api/auth/reset-password",
    {
      method: "POST",
      body: data
      // requiresCaptcha: true,
    }
  ).then((response) => {
    modalStore.showModal({
      title: "Success",
      message: response.message
    });
    return response;
  }).catch((error) => {
    throw error;
  }).finally(() => {
    loadingStore.closeLoading();
  });
};

export { _sfc_main as _, loginUser as l, resetPassword as r, sendMailNewPassword as s, useFetchData as u };
//# sourceMappingURL=auth.service-CIjcSYbX.mjs.map
