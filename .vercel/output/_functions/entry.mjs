import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_uMubjPZW.mjs';
import { manifest } from './manifest_BGtA2d0L.mjs';

const serverIslandMap = new Map([
	['HeaderProfile', () => import('./chunks/HeaderProfile_HjERiZfW.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_username_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/[username].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b79b21ef-a887-4f41-b72a-2086e8b8899a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
