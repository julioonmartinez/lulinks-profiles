import { c as createComponent, r as renderTemplate, a as renderHead } from '../chunks/astro/server_CtEbSNSe.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><title>Perfil</title>${renderHead()}</head> <body> <div id="profile-container"> <p>index</p> </div> </body></html>`;
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
