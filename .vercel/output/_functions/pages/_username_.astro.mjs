import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderHead, b as addAttribute, e as renderSlot, f as renderComponent, g as createAstro } from '../chunks/astro/server_CtEbSNSe.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$FloatingAd = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="floating-logo" data-astro-cid-wdwj7f3n> <div class="content-logo" data-astro-cid-wdwj7f3n> <a href="https://lulinks-7e45f.web.app/" target="_blank" class="logo-link" data-astro-cid-wdwj7f3n> <span class="logo-text" data-astro-cid-wdwj7f3n>Crea tu perfil con <strong data-astro-cid-wdwj7f3n>lulinks.com</strong></span> </a> </div> </div> `;
}, "/home/julioonmartinez/astro/nebulous-nova/src/components/FloatingAd.astro", undefined);

const $$Astro$7 = createAstro();
const $$UserLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$UserLayout;
  const { styles, profile } = Astro2.props;
  const getBackgroundStyle = () => {
    if (styles?.typeBackground === "color") {
      return styles.backgroundColor || "#ffffff";
    }
    if (styles?.typeBackground === "image") {
      return `url(${styles?.backgroundImage}) no-repeat center center / cover`;
    }
    if (styles?.typeBackground === "gradient") {
      return styles.backgroundGradient || "linear-gradient(to right, #fff, #000)";
    }
    return "#ffffff";
  };
  return renderTemplate`<html lang="es"> <head><title>${profile?.name || "Perfil"}</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"><style>
  html, body {
    height: 100%;
    margin: 0; /* Evitar márgenes que puedan causar desplazamientos */
    padding: 0;
    display: flex; /* Asegura que el contenido respete el tamaño del contenedor */
    flex-direction: column; /* Organiza el contenido verticalmente */
  }

  body {
    
   
    
  }
</style>${renderHead()}</head> <body class="test-layout"${addAttribute(`
            background: ${getBackgroundStyle()};
            color: ${styles?.fontColor};
            font-family: ${styles?.fontType};
            background-attachment: fixed;
            background-size: cover;
            `, "style")}> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "FloatingAd", $$FloatingAd, {})} </body></html>`;
}, "/home/julioonmartinez/astro/nebulous-nova/src/layouts/UserLayout.astro", undefined);

const $$Astro$6 = createAstro();
const $$HeaderProfile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeaderProfile;
  const { styles, profile, widgets } = Astro2.props;
  const getBackgroundStyle = () => {
    if (styles?.typeBackground === "color") {
      return styles.backgroundColor || "#ffffff";
    }
    if (styles?.typeBackground === "image") {
      return `url(${styles.backgroundImage})`;
    }
    if (styles?.typeBackground === "gradient") {
      return styles.backgroundGradient || "linear-gradient(to right, #fff, #000)";
    }
    return "#ffffff";
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([
    "profile-hero",
    styles?.modelHeader || "center",
    styles?.modelHeader === "line" ? styles?.positionAvatar || "left" : "",
    styles?.banner && "banner",
    styles?.adaptativeProfile ? "adaptative" : "no-adaptative"
  ], "class:list")}${addAttribute(`text-shadow: ${styles?.textShadow || "none"}`, "style")}> <div${addAttribute([
    "content-avatar",
    styles?.modelHeader || "center"
  ], "class:list")}> <div${addAttribute([
    "avatar-image-content",
    styles?.banner && "banner",
    styles?.avatarShape || "circle",
    styles?.modelHeader || "center",
    profile?.activeSpecialShip && "special-ship"
  ], "class:list")}> <div${addAttribute([styles?.avatarShape || "circle", "content-image"], "class:list")}${addAttribute(`background: ${styles?.banner ? getBackgroundStyle() : ""}`, "style")}> <img${addAttribute(profile?.urlImage || "https://via.placeholder.com/150", "src")}${addAttribute([
    "avatar",
    styles?.avatarShape || "circle",
    styles?.sizeAvatar || "medium"
  ], "class:list")} alt="Avatar del usuario"> </div> ${profile?.activeSpecialShip && renderTemplate`<div${addAttribute([
    "content-special-ship",
    styles?.buttonShape || "",
    profile?.activeSpecialColorBorder && "special-border"
  ], "class:list")}${addAttribute(`background-color: ${profile?.activeColorBackgroundSpecialShip ? profile?.backgroundColorSpecialShip || styles?.buttonColor : styles?.buttonColor};
          color: ${profile?.activeTextColorSpecialShip ? profile?.colorTextSpecialShip || styles?.fontColor : styles?.fontColor};
          border: ${profile?.activeSpecialColorBorder ? "none" : styles?.buttonBorder ? `1px solid ${styles?.buttonColorBorder}` : "none"}`, "style")}> <p>${profile?.contentSpecialShip}</p> </div>`} </div> </div> <div class="content-info-profile"> <p${addAttribute([
    "name-profile",
    styles?.sizeName ? "" : "name-profile-undefined"
  ], "class:list")}${addAttribute(`font-size: ${styles?.sizeName}px`, "style")}> ${profile?.name || profile?.userName || "Nombre no disponible"} </p> <p class="description"> ${profile?.description || "Descripci\xF3n no disponible"} </p> </div> ${profile?.activeSocialMedia && (!profile?.posicionSocialMedia || profile?.posicionSocialMedia === "top") && renderTemplate`<div${addAttribute(["content-social-media", profile?.typeButtonSocialMedia || "icon"], "class:list")}> ${profile?.activeContact && renderTemplate`<a${addAttribute([
    "social-media-btn",
    styles?.buttonShape || "",
    profile?.typeButtonSocialMedia || "icon"
  ], "class:list")}${addAttribute(`background-color: ${styles?.buttonColor};
              color: ${styles?.fontColor};
              border: ${styles?.buttonBorder ? `1px solid ${styles?.buttonColorBorder}` : "none"}`, "style")} href="#contact"> <i class="fa-solid fa-envelope"></i> ${profile?.typeButtonSocialMedia === "large" && renderTemplate`<p class="name-btn">Contacto</p>`} </a>`} ${profile?.socialMedia?.map((socialMedia) => renderTemplate`<a${addAttribute([
    "social-media-btn",
    styles?.buttonShape || "",
    profile?.typeButtonSocialMedia || "icon"
  ], "class:list")}${addAttribute(`background-color: ${styles?.buttonColor};
              color: ${styles?.fontColor};
              border: ${styles?.buttonBorder ? `1px solid ${styles?.buttonColorBorder}` : "none"}`, "style")}${addAttribute(socialMedia.url, "href")}> <i${addAttribute(socialMedia.icon, "class")}></i> ${profile?.typeButtonSocialMedia === "large" && renderTemplate`<p class="name-btn">${socialMedia.name}</p>`} </a>`)} </div>`} </section>`;
}, "/home/julioonmartinez/astro/nebulous-nova/src/components/HeaderProfile.astro", undefined);

const $$Astro$5 = createAstro();
const $$LinkWidget = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LinkWidget;
  const { widget, styles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(widget.url, "href")}${addAttribute(`link-widget ${styles.buttonShape || ""} ${widget.vibrate ? widget.animation || "vibrate" : ""} ${widget.stylesButton || "style1"}`, "class")}${addAttribute(`background-color: ${widget.activeColor ? widget.backgroundColor || styles.fontColor : styles.buttonColorTransparent ? "transparent" : styles.buttonColor}; 
          color: ${widget.activeColor ? widget.colorFont || styles.buttonColor : styles.fontColor}; 
          box-shadow: ${styles.boxShadow}; 
          border: ${styles.buttonBorder ? `${styles.borderWidth}px solid ${styles.buttonColorBorder}` : "none"};`, "style")}> <div class="content-first-icon"> ${widget.activeImage ? renderTemplate`<img class="image"${addAttribute(widget.urlImage, "src")} alt="">` : renderTemplate`<i${addAttribute(widget.icon || "fa-solid fa-link", "class")}></i>`} </div> <div class="content-name-link"> <p${addAttribute(`font-family: ${widget.font || ""}; font-weight: ${widget.weightFont || ""};`, "style")} class="name-link"> ${widget.name || "Visita mi web"} </p> </div> ${widget.stylesButton === "style2" && renderTemplate`<div class="content-second-icon"> <i class="fa-solid fa-arrow-right second-icon"></i> </div>`} ${widget.stylesButton === "style3" && renderTemplate`<div class="content-second-icon"> ${widget.activeSecundaryTex ? renderTemplate`<div${addAttribute(`content-secundary-text ${styles.buttonShape || ""}`, "class")}${addAttribute(`background-color: ${widget.activeColorSecondaryText ? widget.backgroundColorSecondaryText : styles.buttonColor}; 
                  color: ${widget.activeColorSecondaryText ? widget.colorFontSecondary : styles.fontColor};`, "style")}> ${widget.subtitleSecondaryText && renderTemplate`<p class="subtitle">${widget.subtitleSecondaryText}</p>`} ${widget.secondaryTex && renderTemplate`<p class="text">${widget.secondaryTex}</p>`} </div>` : renderTemplate`<i class="fa-solid fa-arrow-right second-icon"></i>`} </div>`} </a> `;
}, "/home/julioonmartinez/astro/nebulous-nova/src/components/widgets/LinkWidget/LinkWidget.astro", undefined);

function lightenColor(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const lighten = (value) => Math.min(255, Math.floor(value + (255 - value) * (percent / 100)));
  return rgbToHex(lighten(r), lighten(g), lighten(b));
}
function hexToRgb(hex) {
  const cleanHex = hex.replace("#", "");
  const bigint = parseInt(cleanHex, 16);
  return {
    r: bigint >> 16 & 255,
    g: bigint >> 8 & 255,
    b: bigint & 255
  };
}
function rgbToHex(r, g, b) {
  const toHex = (value) => value.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

const $$Astro$4 = createAstro();
const $$CardPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CardPost;
  const defaultImage = "https://firebasestorage.googleapis.com/v0/b/lulinks-7e45f.firebasestorage.app/o/web%2Fproduct-example.webp?alt=media&token=cbdf2c7d-8631-4a6c-8508-26ba0a4e93ce";
  const { post, styles, styleCard } = Astro2.props;
  return renderTemplate`<!-- DISEÑO 1: Moderno y Minimalista -->${(styleCard === "style1" || styleCard === undefined) && renderTemplate`${maybeRenderHead()}<div${addAttribute(["card-style-1", [
    styles.buttonShape
  ]], "class:list")}${addAttribute({
    backgroundColor: styles.buttonColor,
    color: styles.fontColor,
    boxShadow: styles.boxShadow,
    border: styles.buttonBorder ? `1px solid ${styles.buttonColorBorder}` : "none"
  }, "style")}><img${addAttribute(post.coverImage || defaultImage, "src")} loading="lazy" alt="Cover Image" class="cover-image"><div class="content-wrapper"><h3 class="title"${addAttribute({ color: styles.fontColor }, "style")}>${post.title}</h3><h4 class="subtitle"${addAttribute({ color: lightenColor(styles.fontColor, 30) }, "style")}>${post.subtitle}</h4><p class="short-description">${post.shortDescription}</p><div class="interaction-bar">${post.links2.map((btn) => renderTemplate`<a class="cta"${addAttribute(btn.url, "href")}${addAttribute({
    color: btn.activeColorFont ? btn.colorFont || styles.fontColor : styles.fontColor || "#2b2b2b",
    backgroundColor: btn.activeBackgroundColor ? btn.backgroundColor || styles.buttonColor : styles.buttonColor || "#ffff",
    border: btn.activeColor ? btn.activeBorderColor ? `1px solid ${btn.borderColor || styles.buttonColorBorder}` : "" : `1px solid ${styles.buttonColorBorder || "#2b2b2b"}`
  }, "style")}><i${addAttribute(btn.icon, "class")}></i><p>${btn.name}</p></a>`)}${post.linkPost && renderTemplate`<a class="cta post-btn"${addAttribute({
    color: styles.fontColor,
    backgroundColor: styles.buttonColor,
    border: styles.buttonBorder ? `1px solid ${styles.buttonColorBorder}` : "none"
  }, "style")}><i class="fa-solid fa-rocket"></i><p>Leer más</p></a>`}</div></div></div>`}<!-- DISEÑO 2: Elegante y Dinámico -->${styleCard === "style2" && renderTemplate`<div${addAttribute(["card-style-2", [
    styles.buttonShape
  ]], "class:list")}${addAttribute({
    backgroundColor: styles.buttonColor,
    color: styles.fontColor,
    boxShadow: styles.boxShadow,
    border: styles.buttonBorder ? `1px solid ${styles.buttonColorBorder}` : "none"
  }, "style")}><div class="content-image">${post.coverImage && renderTemplate`<img${addAttribute(post.coverImage || defaultImage, "src")} alt="Cover Image" class="cover-image">`}</div><div class="content-card">${post.title && renderTemplate`<div class="short-title"><p>${post.title}</p></div>`}${post.subtitle && renderTemplate`<div class="subtitle"><p>${post.subtitle}</p></div>`}${post.activeStylesShip && post.tags.length > 0 && renderTemplate`<div class="content-tags">${post.tags.map((tag) => renderTemplate`<div class="tag"${addAttribute({
    backgroundColor: post.backgroundColorShip || "#fff",
    color: post.fontColorShip || "#2b2b2b"
  }, "style")}><span>${tag}</span></div>`)}</div>`}<div class="short-description"><p>${post.shortDescription}</p></div><div class="links">${post.links2.map((link) => renderTemplate`<a${addAttribute(["link", [styles.buttonShape]], "class:list")}${addAttribute({
    color: link.activeColor ? link.activeColorFont ? link.colorFont || styles.fontColor : styles.fontColor || "#2b2b2b" : styles.fontColor,
    backgroundColor: link.activeBackgroundColor ? link.backgroundColor || styles.buttonColor : styles.buttonColor || "#ffff",
    border: link.activeColor ? link.activeBorderColor ? `1px solid ${link.borderColor || styles.buttonColorBorder}` : "" : `1px solid ${styles.buttonColorBorder || "#2b2b2b"}`
  }, "style")}><i${addAttribute(link.icon, "class")}></i><p>${link.name}</p></a>`)}${post.linkPost && renderTemplate`<a class="link post-btn"${addAttribute({
    color: styles.fontColor,
    backgroundColor: styles.buttonColor,
    border: styles.buttonBorder ? `1px solid ${styles.buttonColorBorder}` : "none"
  }, "style")}><i class="fa-solid fa-rocket"></i><p>Leer más</p></a>`}</div></div></div>`}`;
}, "/home/julioonmartinez/astro/nebulous-nova/src/components/CardPost/CardPost.astro", undefined);

const $$Astro$3 = createAstro();
const $$BlogWidget = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlogWidget;
  const { widget, styles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="content-title"${addAttribute(`color: ${styles.fontColor};`, "style")}> ${widget.showIcon && renderTemplate`<div${addAttribute(`content-icon ${styles.buttonShape}`, "class")}${addAttribute({
    backgroundColor: styles.buttonColor,
    color: styles.fontColor,
    boxShadow: styles.boxShadow,
    border: styles.buttonBorder ? `1px solid ${styles.buttonColorBorder}` : "none"
  }, "style")}> <i${addAttribute(widget.icon, "class")}></i> </div>`} <p class="title-section">${widget.blogName}</p> </div> <div class="content-section-container"> <div${addAttribute(`content-section ${widget.layoutStyle || "list"} ${styles.adaptativeProfile ? "desktop" : ""}`, "class")}> ${widget.posts.map((wid, index) => renderTemplate`<div class="widget post"> ${renderComponent($$result, "CardPost", $$CardPost, { "post": wid, "styles": styles, "styleCard": wid.cardStyle })} </div>`)} </div> </div>`;
}, "/home/julioonmartinez/astro/nebulous-nova/src/components/widgets/BlogWidget/BlogWidget.astro", undefined);

const $$Astro$2 = createAstro();
const $$TimelineWidget = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TimelineWidget;
  const { widget, styles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="timeline-container"> <div class="content-title"${addAttribute(`color: ${styles.fontColor};`, "style")}> ${widget.name && renderTemplate`<div${addAttribute([
    "icon-content",
    styles.buttonShape
  ], "class:list")}${addAttribute({
    backgroundColor: styles.buttonColor,
    color: styles.fontColor,
    boxShadow: styles.boxShadow,
    border: styles.buttonBorder ? `1px solid ${styles.buttonColorBorder}` : "none"
  }, "style")}> <i${addAttribute(widget.icon, "class")}></i> </div>`} <p class="title-section">${widget.name}</p> </div> <div class="timeline"> ${widget.events.map((event, index) => renderTemplate`<div class="timeline-item"> <div class="marker"> <i class="fa-solid fa-circle"${addAttribute({
    color: widget.settings?.activeColorIcon ? widget.settings?.colorIcon || styles.buttonColor : styles.buttonColor
  }, "style")}></i> <div class="timeline-conector"${addAttribute({
    backgroundColor: styles.fontColor
  }, "style")}></div> </div> <div class="timeline-content"${addAttribute({
    backgroundColor: widget.settings?.activeCorlorCards ? widget.settings?.colorCards || "" : "transparent"
  }, "style")}> <div class="header-card"> <h3 class="title-event"${addAttribute({
    color: widget.settings?.activeColorTitles ? widget.settings?.colorTitles || styles.fontColor : styles.fontColor
  }, "style")}> ${event.titleEvent} </h3> <h4 class="subtitle-event"${addAttribute({
    color: widget.settings?.activeColorSubtitles ? widget.settings?.colorSubtitles || styles.fontColor : styles.fontColor
  }, "style")}> ${event.subtitle} </h4> <div class="content-time"${addAttribute({ color: widget.settings?.activeColorTimes ? widget.settings?.colorTime || styles.fontColor : styles.fontColor }, "style")}> <p class="time-event-start"> ${`${event.time.monthStart.name} ${event.time.yearStart}`} </p> <p class="time-event-end current"> ${event.time.currently ? "Actualmente" : `${event.time.monthEnd.name || ""} ${event.time.yearEnd || ""}`} </p> </div> </div> ${event.description && renderTemplate`<div class="content-card"${addAttribute({ color: widget.settings?.activeColorText ? widget.settings?.colorText || styles.fontColor : styles.fontColor }, "style")}> <p class="text">${event.description}</p> </div>`} </div> </div>`)} </div> </div>`;
}, "/home/julioonmartinez/astro/nebulous-nova/src/components/widgets/TimelineWidget/TimelineWidget.astro", undefined);

const $$Astro$1 = createAstro();
const $$SectionWidget = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionWidget;
  const { widget, styles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="content-title"> ${!widget.showIcon && renderTemplate`<div${addAttribute(["content-icon", [
    styles.buttonShape
  ]], "class:list")}${addAttribute({
    backgroundColor: styles.buttonColor,
    color: styles.fontColor,
    boxShadow: styles.boxShadow,
    border: styles.buttonBorder ? `1px solid ${styles.buttonColorBorder}` : "none"
  }, "style")}> <i${addAttribute(widget.icon, "class")}></i> </div>`} <p class="title-section">${widget.name}</p> </div> <div class="content-section-container"> <div${addAttribute(["content-section", [
    widget.layoutStyle || "list",
    styles.adaptativeProfile ? "desktop" : ""
  ]], "class:list")}> ${widget.widgets.map((wid, index) => {
    if (wid.type == "post") {
      return renderTemplate`${renderComponent($$result, "CardPost", $$CardPost, { "post": wid, "styles": styles, "styleCard": wid.cardStyle })}`;
    }
    if (wid.type == "link") {
      return renderTemplate`${renderComponent($$result, "LinkWidget", $$LinkWidget, { "widget": wid, "styles": styles })}`;
    }
  })} </div> </div>`;
}, "/home/julioonmartinez/astro/nebulous-nova/src/components/widgets/SectionWidget/SectionWidget.astro", undefined);

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
    const sortingWidgets = data.sort((a, b) => a.position - b.position);
    return sortingWidgets;
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
  console.log(styles);
  console.log(profile);
  console.log(widgets);
  return renderTemplate`${renderComponent($$result, "UserLayout", $$UserLayout, { "profile": profile, "styles": styles }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderProfile", $$HeaderProfile, { "profile": profile, "widgets": widgets, "styles": styles })} ${maybeRenderHead()}<div${addAttribute([
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
    return renderTemplate`<p>Widget no encontrado</p>`;
  })} </div> ` })}`;
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
