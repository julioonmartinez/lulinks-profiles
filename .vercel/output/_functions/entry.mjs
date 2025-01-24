import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_uMubjPZW.mjs';
import { manifest } from './manifest_B745X2rn.mjs';

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
    "middlewareSecret": "f4900f50-c764-4723-a27b-5cb40ae6e9b5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
