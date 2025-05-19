import { k as defineNuxtRouteMiddleware, a as useUserStore, u as useAuthStore, c as useModalStore } from './server.mjs';
import 'vue';
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
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import 'vue/server-renderer';
import '@iconify/utils/lib/css/icon';
import 'vee-validate';
import 'clsx';

const auth = defineNuxtRouteMiddleware(async (to, from) => {
  useUserStore();
  useAuthStore();
  useModalStore();
  to.meta.auth === true;
  to.meta.admin === true;
});

export { auth as default };
//# sourceMappingURL=auth-SQSR3Aep.mjs.map
