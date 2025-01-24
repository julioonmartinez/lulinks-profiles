import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_uMubjPZW.mjs';
import { manifest } from './manifest_BH-h-bay.mjs';

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
    "middlewareSecret": "890a502c-8cf2-47c7-a647-d0f2c653e32c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
