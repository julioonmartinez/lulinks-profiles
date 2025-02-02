import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_67gsvqhm.mjs';
import 'kleur/colors';
import { g as getProfileByUsername, a as getAllStyleProfiles, b as getActiveWidgets, $ as $$UserLayout } from '../chunks/api_CZ9fDWLy.mjs';
import { $ as $$HeaderProfile, a as $$LinkWidget, b as $$BlogWidget, c as $$TimelineWidget, d as $$SectionWidget, e as $$ScheduleWidget, f as $$PostWidget } from '../chunks/PostWidget_9l6-gT6i.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const profileResponse = await getProfileByUsername("homes");
  const profile = profileResponse?.data || null;
  const styles = await getAllStyleProfiles(profile?.id);
  const widgets = await getActiveWidgets(profile?.id);
  console.log(styles);
  console.log(profile);
  console.log(widgets);
  return renderTemplate`${renderComponent($$result, "UserLayout", $$UserLayout, { "profile": profile, "styles": styles }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "profile-container",
    styles?.adaptativeProfile ? "adaptative-profile" : "no-adaptative"
  ], "class:list")}> <div class="header"> ${renderComponent($$result2, "HeaderProfile", $$HeaderProfile, { "profile": profile, "widgets": widgets, "styles": styles })} </div> <div${addAttribute([
    "widgets",
    styles?.banner && "banner",
    styles?.adaptativeProfile ? "adaptative" : "no-adaptative"
  ], "class:list")}> ${widgets.map((widget) => {
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
  })} </div> </div> ` })}`;
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
