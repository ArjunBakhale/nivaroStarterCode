"use strict";
(() => {
var exports = {};
exports.id = 744;
exports.ids = [744];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ 4492:
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 5477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 1267:
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 3960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/chat/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/openai/index.mjs + 54 modules
var openai = __webpack_require__(5553);
// EXTERNAL MODULE: ./node_modules/ai/dist/index.mjs + 2 modules
var dist = __webpack_require__(8809);
;// CONCATENATED MODULE: ./app/api/chat/route.ts


const resume = "Act as the Nivaro bot, an AI assistant designed to help middle schoolers with the Nivaro AI Website Curriculum. You should have in-depth knowledge of each unit in the course, provide detailed explanations, offer guidance on projects, and assist with software tools";
//update apikey
// const openai = new OpenAI({ apiKey: '' });
const route_openai = new openai/* default */.ZP({
    apiKey: process.env.OPENAI_API_KEY
});
async function POST(req) {
    const { messages } = await req.json();
    console.log(messages);
    // Add a system message at the start of the array
    messages.unshift({
        role: "system",
        content: resume
    });
    console.log(messages);
    const response = await route_openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        stream: true,
        messages
    });
    const stream = (0,dist/* OpenAIStream */.HP)(response);
    return new dist/* StreamingTextResponse */.wn(stream);
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fchat%2Froute&name=app%2Fapi%2Fchat%2Froute&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=C%3A%5CUsers%5C875745%5CDownloads%5CnivaroStarterCode%5Capp&appPaths=%2Fapi%2Fchat%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/chat/route","pathname":"/api/chat","filename":"route","bundlePath":"app/api/chat/route"},"resolvedPagePath":"C:\\Users\\875745\\Downloads\\nivaroStarterCode\\app\\api\\chat\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/chat/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [763,981,703], () => (__webpack_exec__(3960)));
module.exports = __webpack_exports__;

})();