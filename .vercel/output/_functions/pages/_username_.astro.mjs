import { c as createComponent, r as renderTemplate, a as renderHead, f as renderScript, e as createAstro, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_67gsvqhm.mjs';
import 'kleur/colors';
import { g as getProfileByUsername, a as getAllStyleProfiles, b as getActiveWidgets, $ as $$UserLayout } from '../chunks/api_CZ9fDWLy.mjs';
import { $ as $$HeaderProfile, a as $$LinkWidget, b as $$BlogWidget, c as $$TimelineWidget, d as $$SectionWidget, e as $$ScheduleWidget, f as $$PostWidget } from '../chunks/PostWidget_9l6-gT6i.mjs';
/* empty css                                      */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ProfileNotFound = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProfileNotFound;
  const { username } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-j5tx4guu> <head><title>Perfil no encontrado</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">${renderHead()}</head> <div class="container" data-astro-cid-j5tx4guu> <div class="stars" id="stars" data-astro-cid-j5tx4guu></div> <h1 class="username" data-astro-cid-j5tx4guu>@${username}</h1> <p class="message" data-astro-cid-j5tx4guu>¡Este perfil está libre!</p> <svg class="astronaut" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-j5tx4guu> <!-- Casco mejorado --> <ellipse cx="200" cy="170" rx="70" ry="75" fill="#E2E8F0" data-astro-cid-j5tx4guu></ellipse> <path d="M130 170a70 75 0 0 1 140 0" fill="#60A5FA" fill-opacity="0.3" data-astro-cid-j5tx4guu></path> <ellipse cx="200" cy="170" rx="55" ry="60" fill="#1E293B" data-astro-cid-j5tx4guu></ellipse> <!-- Visor del casco --> <path d="M165 160a35 40 0 0 1 70 0" fill="#38BDF8" fill-opacity="0.6" data-astro-cid-j5tx4guu></path> <circle cx="190" cy="165" r="8" fill="white" fill-opacity="0.8" data-astro-cid-j5tx4guu></circle> <!-- Cuerpo mejorado --> <path d="M140 220h120v100a60 60 0 0 1-120 0v-100z" fill="#60A5FA" data-astro-cid-j5tx4guu></path> <path d="M140 240h120v20" stroke="#2563EB" stroke-width="4" data-astro-cid-j5tx4guu></path> <!-- Mochila propulsora --> <rect x="170" y="240" width="60" height="80" fill="#2563EB" rx="10" data-astro-cid-j5tx4guu></rect> <rect x="180" y="320" width="15" height="30" fill="#DC2626" rx="5" data-astro-cid-j5tx4guu></rect> <rect x="205" y="320" width="15" height="30" fill="#DC2626" rx="5" data-astro-cid-j5tx4guu></rect> <!-- Brazos mejorados --> <path d="M260 240c20 0 40 20 40 50s-20 50-40 50" stroke="#60A5FA" stroke-width="40" stroke-linecap="round" data-astro-cid-j5tx4guu></path> <path d="M140 240c-20 0-40 20-40 50s20 50 40 50" stroke="#60A5FA" stroke-width="40" stroke-linecap="round" data-astro-cid-j5tx4guu></path> <!-- Detalles del traje --> <rect x="170" y="240" width="60" height="80" fill="#2563EB" data-astro-cid-j5tx4guu></rect> <circle cx="200" cy="270" r="15" fill="#A855F7" data-astro-cid-j5tx4guu></circle> <circle cx="200" cy="310" r="10" fill="#A855F7" data-astro-cid-j5tx4guu></circle> <!-- Luces y detalles --> <circle cx="160" cy="250" r="5" fill="#FDE68A" data-astro-cid-j5tx4guu></circle> <circle cx="240" cy="250" r="5" fill="#FDE68A" data-astro-cid-j5tx4guu></circle> </svg> <a href="#" class="btn" data-astro-cid-j5tx4guu>¡Reclama este perfil!</a> </div>  ${renderScript($$result, "/home/julioonmartinez/astro/nebulous-nova/src/components/ProfileNotFound/ProfileNotFound.astro?astro&type=script&index=0&lang.ts")}  </html>`;
}, "/home/julioonmartinez/astro/nebulous-nova/src/components/ProfileNotFound/ProfileNotFound.astro", undefined);

const $$Astro = createAstro();
const $$username = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$username;
  const { username } = Astro2.params;
  const profileResponse = await getProfileByUsername(username, "username");
  const profile = profileResponse?.data || null;
  let styles = null;
  let widgets = null;
  if (!profile) {
    styles = null;
    widgets = null;
  } else {
    styles = await getAllStyleProfiles(profile.id);
    widgets = await getActiveWidgets(profile.id);
  }
  return renderTemplate`${!profile ? (
    // Si el perfil no existe, renderiza el componente ProfileNotFound
    renderTemplate`${renderComponent($$result, "ProfileNotFound", $$ProfileNotFound, { "username": username })}`
  ) : renderTemplate`${renderComponent($$result, "UserLayout", $$UserLayout, { "profile": profile, "styles": styles }, { "default": ($$result2) => renderTemplate`${styles?.banner && renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "content-banner",
    styles.buttonShape || "rounded"
  ], "class:list")}${addAttribute({
    backgroundImage: `url(${styles?.urlBanner})`
  }, "style")}></div>`}<div${addAttribute([
    "profile-container",
    styles?.adaptativeProfile ? "adaptative-profile" : "no-adaptative"
  ], "class:list")}><div class="header">${renderComponent($$result2, "HeaderProfile", $$HeaderProfile, { "profile": profile, "widgets": widgets, "styles": styles })}</div><div${addAttribute([
    "widgets",
    styles?.banner && "banner",
    styles?.adaptativeProfile ? "adaptative" : "no-adaptative"
  ], "class:list")}>${(widgets ?? []).map((widget) => {
    if (widget.type === "link") {
      return renderTemplate`<div class="widget-component widget-link">${renderComponent($$result2, "LinkWidget", $$LinkWidget, { "widget": widget, "styles": styles })}</div>`;
    }
    if (widget.type === "blog") {
      return renderTemplate`<div${addAttribute([
        "widget-component",
        "widget-blog",
        widget.layoutStyle || "list"
      ], "class:list")}>${renderComponent($$result2, "BlogWidget", $$BlogWidget, { "widget": widget, "styles": styles })}</div>`;
    }
    if (widget.type === "timeline") {
      return renderTemplate`<div class="widget-component widget-timeline">${renderComponent($$result2, "TimelineWidget", $$TimelineWidget, { "widget": widget, "styles": styles })}</div>`;
    }
    if (widget.type == "listWidget") {
      return renderTemplate`<div class="widget-component widget-section">${renderComponent($$result2, "SectionWidget", $$SectionWidget, { "widget": widget, "styles": styles })}</div>`;
    }
    if (widget.type == "schedule") {
      return renderTemplate`<div class="widget-component widget-schedule">${renderComponent($$result2, "ScheduleWidget", $$ScheduleWidget, { "widget": widget, "styles": styles })}</div>`;
    }
    if (widget.type == "post") {
      return renderTemplate`<div class="widget-component widget-post">${renderComponent($$result2, "PostWidget", $$PostWidget, { "widget": widget, "styles": styles })}</div>`;
    }
    return renderTemplate`<p>Widget no encontrado</p>`;
  })}</div></div>` })}`}`;
}, "/home/julioonmartinez/astro/nebulous-nova/src/pages/[username].astro", undefined);

const $$file = "/home/julioonmartinez/astro/nebulous-nova/src/pages/[username].astro";
const $$url = "/[username]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$username,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
