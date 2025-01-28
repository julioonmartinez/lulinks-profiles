import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Dcbq1Jh5.mjs';
import { manifest } from './manifest_oho6IA4g.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/_username_/_idwidget_/_idpost_.astro.mjs');
const _page3 = () => import('./pages/_username_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/[username]/[idWidget]/[idPost].astro", _page2],
    ["src/pages/[username].astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3a56bb1f-87a4-4988-9a77-f2877dbddc33",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
