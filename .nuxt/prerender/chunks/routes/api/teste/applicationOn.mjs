import { defineEventHandler } from 'file://C:/Users/TechSkillHub/Projetos/tsh.principalSite/node_modules/h3/dist/index.mjs';

const applicationOn = defineEventHandler(async (event) => {
  return {
    user: { name: "teste2", email: "teste", role: "teste" }
  };
});

export { applicationOn as default };
//# sourceMappingURL=applicationOn.mjs.map
