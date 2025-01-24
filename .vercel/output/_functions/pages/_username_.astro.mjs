import { c as createComponent, r as renderTemplate, d as renderHead, e as renderComponent, b as createAstro } from '../chunks/astro/server_Du6sCcPO.mjs';
import 'kleur/colors';
import $$HeaderProfile from '../chunks/HeaderProfile_HjERiZfW.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const apiBaseUrl = "https://api-izb6asxh2a-uc.a.run.app/api";
async function getAllStyleProfiles(profileId) {
  try {
    const response = await fetch(`${apiBaseUrl}/profile/${profileId}/styles`);
    if (!response.ok) {
      throw new Error(`Error al obtener estilos: ${response.statusText}`);
    }
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error al obtener estilos:", error);
    return null;
  }
}
async function getActiveWidgets(profileId) {
  try {
    const response = await fetch(`${apiBaseUrl}/profile/${profileId}/widgets/active`);
    if (!response.ok) {
      throw new Error(`Error al obtener widgets: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener widgets:", error);
    return [];
  }
}
async function getProfileByUsername(username) {
  try {
    const response = await fetch(`${apiBaseUrl}/profiles/by-username?username=${encodeURIComponent(username)}`);
    if (!response.ok) {
      throw new Error(`Error al obtener el perfil: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener el perfil por nombre de usuario:", error);
    return null;
  }
}

const $$Astro = createAstro();
const prerender = false;
const $$username = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$username;
  const { username } = Astro2.params;
  const profileResponse = await getProfileByUsername(username);
  const profile = profileResponse?.data || null;
  const styles = await getAllStyleProfiles(profile?.id);
  const widgets = await getActiveWidgets(profile?.id);
  console.log(profile, styles, widgets);
  return renderTemplate`<html lang="es"> <head><title>${username}</title><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">${renderHead()}</head> <body> <!-- Renderiza el HeaderProfile con server:defer --> ${renderComponent($$result, "HeaderProfile", $$HeaderProfile, { "server:defer": true, "profile": profile, "widgets": widgets, "styles": styles, "server:component-directive": "defer", "server:component-path": "/home/julioonmartinez/astro/nebulous-nova/src/components/HeaderProfile.astro", "server:component-export": "default" }, { "default": ($$result2) => renderTemplate`   ` })} </body></html>`;
}, "/home/julioonmartinez/astro/nebulous-nova/src/pages/[username].astro", undefined);

const $$file = "/home/julioonmartinez/astro/nebulous-nova/src/pages/[username].astro";
const $$url = "/[username]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$username,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
