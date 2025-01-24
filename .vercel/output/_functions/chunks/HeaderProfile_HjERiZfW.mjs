import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_Du6sCcPO.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const $$Astro = createAstro();
const prerender = false;
const $$HeaderProfile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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
    styles?.modelHeader === "line" && styles?.positionAvatar || "left",
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

const $$file = "/home/julioonmartinez/astro/nebulous-nova/src/components/HeaderProfile.astro";
const $$url = undefined;

export { $$HeaderProfile as default, $$file as file, prerender, $$url as url };
