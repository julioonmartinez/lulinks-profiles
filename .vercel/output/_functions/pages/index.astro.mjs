import { c as createComponent, r as renderTemplate, d as renderHead } from '../chunks/astro/server_Du6sCcPO.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const defaultProfile = {
    uuid: "",
    userName: "Cargando...",
    name: "Nombre no disponible",
    status: true,
    socialMedia: []
  };
  return renderTemplate`<html lang="es"> <head><title>Perfil</title>${renderHead()}</head> <body> <div id="profile-container"> <h1>${defaultProfile.name} </h1> </div> </body></html>`;
}, "/home/julioonmartinez/astro/nebulous-nova/src/pages/index.astro", undefined);

const $$file = "/home/julioonmartinez/astro/nebulous-nova/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
