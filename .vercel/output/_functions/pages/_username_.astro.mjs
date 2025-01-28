import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro, d as addAttribute } from '../chunks/astro/server_C6No97fP.mjs';
import 'kleur/colors';
import { g as getProfileByUsername, a as getAllStyleProfiles, b as getActiveWidgets, $ as $$UserLayout } from '../chunks/api_CSoBlGlj.mjs';
import { $ as $$HeaderProfile, a as $$LinkWidget, b as $$BlogWidget, c as $$TimelineWidget, d as $$SectionWidget, e as $$ScheduleWidget, f as $$PostWidget } from '../chunks/PostWidget_CLCv2fJz.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$username = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$username;
  const { username } = Astro2.params;
  const profileResponse = await getProfileByUsername(username, "username");
  const profile = profileResponse?.data || null;
  const styles = await getAllStyleProfiles(profile?.id);
  const widgets = await getActiveWidgets(profile?.id);
  Astro2.props.prerender = profile?.isPremium || false;
  return renderTemplate`${!profile ? renderTemplate`${maybeRenderHead()}<div class="error"><p>Perfil no encontrado</p></div>` : renderTemplate`${renderComponent($$result, "UserLayout", $$UserLayout, { "profile": profile, "styles": styles }, { "default": ($$result2) => renderTemplate`<div${addAttribute([
    "profile-container",
    styles?.adaptativeProfile ? "adaptative-profile" : "no-adaptative"
  ], "class:list")}><div class="header">${renderComponent($$result2, "HeaderProfile", $$HeaderProfile, { "profile": profile, "widgets": widgets, "styles": styles })}</div><div${addAttribute([
    "widgets",
    styles?.banner && "banner",
    styles?.adaptativeProfile ? "adaptative" : "no-adaptative"
  ], "class:list")}>${widgets.map((widget) => {
    if (widget.type === "link") {
      return renderTemplate`${renderComponent($$result2, "LinkWidget", $$LinkWidget, { "widget": widget, "styles": styles })}`;
    }
    if (widget.type === "blog") {
      return renderTemplate`${renderComponent($$result2, "BlogWidget", $$BlogWidget, { "widget": widget, "styles": styles })}`;
    }
    if (widget.type === "timeline") {
      return renderTemplate`${renderComponent($$result2, "TimelineWidget", $$TimelineWidget, { "widget": widget, "styles": styles })}`;
    }
    if (widget.type == "listWidget") {
      return renderTemplate`${renderComponent($$result2, "SectionWidget", $$SectionWidget, { "widget": widget, "styles": styles })}`;
    }
    if (widget.type == "schedule") {
      return renderTemplate`${renderComponent($$result2, "ScheduleWidget", $$ScheduleWidget, { "widget": widget, "styles": styles })}`;
    }
    if (widget.type == "post") {
      return renderTemplate`${renderComponent($$result2, "PostWidget", $$PostWidget, { "widget": widget, "styles": styles })}`;
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
