import { f as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, mergeProps, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
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
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ContactCard",
  __ssrInlineRender: true,
  props: {
    contact: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex items-center px-3 py-3 cursor-pointer hover:bg-[#454545] rounded-lg", { "bg-[#454545]": __props.isActive }]
      }, _attrs))}><div class="relative mr-3"><div class="w-12 h-12 rounded-full overflow-hidden">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: __props.contact.avatar,
        alt: __props.contact.name,
        class: "w-full h-full object-cover"
      }, null, _parent));
      _push(`</div>`);
      if (__props.contact.unread) {
        _push(`<div class="absolute -top-1 -right-1 bg-[#25d366] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">${ssrInterpolate(__props.contact.unread)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex-1 min-w-0"><div class="flex justify-between"><h3 class="font-medium truncate">${ssrInterpolate(__props.contact.name)}</h3><span class="text-xs text-gray-500">${ssrInterpolate(__props.contact.time)}</span></div><div class="flex items-center justify-between"><p class="text-sm text-gray-500 truncate pr-2">${ssrInterpolate(__props.contact.lastMessage)}</p>`);
      if (__props.contact.unread === 0) {
        _push(`<div class="text-[#8696a0]">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:check-all",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhatsApp/ContactCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    contacts: {
      type: Array,
      required: true
    },
    activeChat: {
      type: Object,
      default: null
    }
  },
  emits: ["select-chat"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_WhatsAppContactCard = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[400px] flex flex-col border-r border-[#222222] bg-[#2c2c2c] text-white" }, _attrs))}><div class="flex justify-between items-center p-3"><div class="flex items-center"><div class="w-10 h-10 rounded-full overflow-hidden">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:user",
        alt: "Profile",
        class: "w-full h-full object-cover"
      }, null, _parent));
      _push(`</div></div><div class="flex items-center space-x-4 text-[#54656f]"><button class="p-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:dots-vertical",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button><button class="p-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:message-text",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button><button class="p-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:account-circle",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button></div></div><div class="p-2"><div class="bg-[#383838] rounded-lg px-3 py-2 flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:magnify",
        class: "text-[#54656f] w-5 h-5"
      }, null, _parent));
      _push(`<input type="text" placeholder="Pesquisar ou começar uma nova conversa" class="bg-transparent outline-none flex-1 text-sm"></div></div><div class="flex-1 overflow-y-auto space-y-1"><!--[-->`);
      ssrRenderList(__props.contacts, (contact) => {
        var _a;
        _push(`<div>`);
        _push(ssrRenderComponent(_component_WhatsAppContactCard, {
          contact,
          isActive: ((_a = __props.activeChat) == null ? void 0 : _a.id) === contact.id
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhatsApp/Sidebar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChatHeader",
  __ssrInlineRender: true,
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center p-3 bg-[#2c2c2c]" }, _attrs))}><div class="flex items-center"><div class="w-10 h-10 rounded-full overflow-hidden mr-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: __props.contact.avatar,
        alt: __props.contact.name,
        class: "w-full h-full object-cover"
      }, null, _parent));
      _push(`</div><div><h3 class="font-medium text-white">${ssrInterpolate(__props.contact.name)}</h3><span class="text-xs text-gray-500">Online</span></div></div><div class="flex items-center space-x-4 text-[#54656f]"><button class="p-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:magnify",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button><button class="p-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:dots-vertical",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhatsApp/ChatHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChatMessages",
  __ssrInlineRender: true,
  props: {
    messages: {
      type: Array,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 overflow-y-auto p-5 bg-[#efeae2] bg-opacity-50 bg-whatsLg" }, _attrs))}><div class="flex flex-col space-y-2"><!--[-->`);
      ssrRenderList(__props.messages, (message) => {
        _push(`<div class="flex"><div class="${ssrRenderClass([[
          message.senderId === __props.currentUser.id ? "ml-auto bg-[#005c4b] rounded-tr-none" : "bg-[#363636] rounded-tl-none"
        ], "max-w-[65%] px-2 py-1.5 rounded-lg relative text-white"])}"><p>${ssrInterpolate(message.content)}</p><div class="flex items-center justify-end space-x-1 mt-1"><span class="text-xs text-gray-500">${ssrInterpolate(message.timestamp)}</span>`);
        if (message.senderId === __props.currentUser.id) {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: message.read ? "mdi:check-all" : "mdi:check",
            class: [
              "w-3 h-3",
              message.read ? "bg-[#47afd5]" : "bg-[#82afa7]"
            ]
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhatsApp/ChatMessages.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MessageInput",
  __ssrInlineRender: true,
  emits: ["send-message"],
  setup(__props, { emit: __emit }) {
    const messageText = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#2c2c2c] px-4 py-3 flex items-center" }, _attrs))}><div class="flex items-center space-x-3 mr-2"><button class="text-[#54656f]">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:emoticon-outline",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button><button class="text-[#54656f]">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:paperclip",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button></div><div class="flex-1"><input${ssrRenderAttr("value", messageText.value)} type="text" placeholder="Digite uma mensagem" class="w-full py-2 px-4 rounded-lg focus:outline-none"></div><button class="ml-2 text-[#54656f]">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: messageText.value.trim() ? "mdi:send" : "mdi:microphone",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhatsApp/MessageInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chat",
  __ssrInlineRender: true,
  setup(__props) {
    const currentUser = {
      id: 1,
      name: "Eu",
      avatar: "mdi:user"
    };
    const contacts = ref([
      {
        id: 2,
        name: "João Silva",
        avatar: "mdi:user",
        lastMessage: "Tudo bem?",
        time: "10:30",
        unread: 2
      },
      {
        id: 3,
        name: "Maria Oliveira",
        avatar: "mdi:user",
        lastMessage: "Me liga quando puder",
        time: "09:15",
        unread: 0
      },
      {
        id: 4,
        name: "Carlos Eduardo",
        avatar: "mdi:user",
        lastMessage: "Vamos marcar aquele café",
        time: "Ontem",
        unread: 0
      },
      {
        id: 5,
        name: "Família",
        avatar: "mdi:user",
        lastMessage: "Ana: Vamos nos encontrar domingo?",
        time: "Ontem",
        unread: 5
      }
    ]);
    const chatMessages = ref({
      2: [
        // João Silva
        {
          id: 1,
          content: "Olá João, tudo bem?",
          timestamp: "10:20",
          senderId: 1,
          // Eu
          received: true,
          read: true
        },
        {
          id: 2,
          content: "Tudo ótimo! E com você?",
          timestamp: "10:21",
          senderId: 2,
          // João
          received: true,
          read: true
        },
        {
          id: 3,
          content: "Estou bem também. Vamos marcar algo para o final de semana?",
          timestamp: "10:25",
          senderId: 1,
          // Eu
          received: true,
          read: true
        }
      ],
      3: [
        // Maria Oliveira
        {
          id: 1,
          content: "Oi Maria, preciso falar com você",
          timestamp: "09:10",
          senderId: 1,
          // Eu
          received: true,
          read: true
        },
        {
          id: 2,
          content: "Me liga quando puder",
          timestamp: "09:15",
          senderId: 3,
          // Maria
          received: true,
          read: true
        }
      ],
      4: [
        // Carlos Eduardo
        {
          id: 1,
          content: "Oi Carlos, tudo certo?",
          timestamp: "08:30",
          senderId: 1,
          // Eu
          received: true,
          read: true
        },
        {
          id: 2,
          content: "Tudo bem, e você?",
          timestamp: "08:35",
          senderId: 4,
          // Carlos
          received: true,
          read: true
        },
        {
          id: 3,
          content: "Vamos marcar aquele café",
          timestamp: "08:40",
          senderId: 4,
          // Carlos
          received: true,
          read: true
        }
      ],
      5: [
        // Família
        {
          id: 1,
          content: "Olá pessoal!",
          timestamp: "18:00",
          senderId: 1,
          // Eu
          received: true,
          read: true
        },
        {
          id: 2,
          content: "Olá! Como estão todos?",
          timestamp: "18:05",
          senderId: 6,
          // Outro membro da família
          received: true,
          read: true
        },
        {
          id: 3,
          content: "Ana: Vamos nos encontrar domingo?",
          timestamp: "18:10",
          senderId: 7,
          // Ana
          received: true,
          read: true
        }
      ]
    });
    const activeChat = ref(null);
    const messages = ref([]);
    const setActiveChat = (contact) => {
      if (contact.unread > 0) {
        contact.unread = 0;
      }
      activeChat.value = contact;
      messages.value = chatMessages.value[contact.id] || [];
    };
    const sendMessage = (content) => {
      if (!content.trim() || !activeChat.value) return;
      const newMessage = {
        id: messages.value.length + 1,
        content,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        senderId: currentUser.id,
        received: false,
        read: false
      };
      messages.value.push(newMessage);
      if (activeChat.value) {
        activeChat.value.lastMessage = content;
        activeChat.value.time = newMessage.timestamp;
      }
      if (activeChat.value) {
        chatMessages.value[activeChat.value.id] = [...messages.value];
      }
      setTimeout(() => {
        newMessage.received = true;
        setTimeout(() => {
          newMessage.read = true;
        }, 1e3);
      }, 2e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WhatsAppSidebar = _sfc_main$4;
      const _component_WhatsAppChatHeader = _sfc_main$3;
      const _component_WhatsAppChatMessages = _sfc_main$2;
      const _component_WhatsAppMessageInput = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen bg-[#f0f2f5]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_WhatsAppSidebar, {
        contacts: contacts.value,
        activeChat: activeChat.value,
        onSelectChat: setActiveChat
      }, null, _parent));
      _push(`<div class="flex-1 flex flex-col">`);
      if (activeChat.value) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_WhatsAppChatHeader, { contact: activeChat.value }, null, _parent));
        _push(ssrRenderComponent(_component_WhatsAppChatMessages, {
          messages: messages.value,
          currentUser
        }, null, _parent));
        _push(ssrRenderComponent(_component_WhatsAppMessageInput, { onSendMessage: sendMessage }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<div class="flex-1 flex items-center justify-center bg-[#f0f2f5] border-b border-l border-[#d1d7db]"><div class="text-center text-gray-500"><div class="mb-6">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:whatsapp",
          class: "w-16 h-16 mx-auto text-gray-300"
        }, null, _parent));
        _push(`</div><h1 class="text-3xl font-light mb-3">WhatsApp Web</h1><p class="max-w-md"> Envie e receba mensagens sem precisar manter seu celular conectado. <br>Use o WhatsApp em até 4 dispositivos conectados e 1 celular ao mesmo tempo. </p></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=chat-CEz7_fXA.js.map
