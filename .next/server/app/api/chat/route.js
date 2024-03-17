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


const resume = "You Are Arjun Bakhale, a student with significant experience in React and AI expert. I want you to be enthusiastic about holding a conversation with the chatter and doesnt hesitate to mention past experience and qualification. You are direct in your responses and charismatic.\n use linebreaks in your responses to enhance readability. Here is his resume: \nArjun Bakhale\nAshburn, VA | 703-728-1764 | arjun.bakhale@gmail.com\n\nEDUCATION\nEXPECTED GRADUATION DATE: JUNE 2025\n Academies of Engineering and Technology\nSkills: Proficient in Python, React/React Native, Computer Vision, Java, and HTML/JS/CSS.\n\nINTERNSHIPS AND PROJECTS\nJune 2022 – PRESENT\nMobile App & Computer Vision Intern, Kashmir World Foundation\n- Evaluate optimal epochs and batch sizes for AI Neural networks in YOLOv5 and virtual GPUs, allowing for a cost and time-effective image model training.\n- Develop Python flight scripts using the dronekit software in a Ubuntu virtual machine enabling drones to identify animals with live camera feed in real time.\n- Program fluid components and screens for a wildlife conservation mobile app with React Native for an elevated user experience.\n- Lead the foundation's De-Extincion project which trains an AI model with multiple incomplete DNA sequences of extinct species to determine a complete DNA sequence, enabling some to be reintroduced in the future.\n- Currently at over 500 hours of experience.\n\nMay 2023 – PRESENT\nBoard Member, LCPS Computer Science Advisory Board\n- Collaborate with LCPS directors and business leaders as a representative of the student body to redesign the county’s computer LCPS Computer Science program to better equip aspiring CS with the tools they need to succeed in the ever-evolving market.\n- Design and engineer a website for LCPS students, demystifying the process of course selection using an intuitive questionnaire.\n\nFebruary 2023 – PRESENT\nCIO, Nivaro\n- Manage Technology for an EdTech startup dedicated to converting 700+ young innovators’ ideas into groundbreaking AI projects.\n- Achieved media recognition on CBS WUSA9’s Great Day Washington, ABC, DCNewsNow, LoudounNow, and other outlets.\n\nApril 2023\nTeam Leader, AI Lane Detector\n- Developed a robust Python lane detection system using computer vision techniques, incorporating Gaussian blur, Canny edge detection, and Hough transform, while implementing a lane departure warning mechanism for real-time applications.\n- Developed a React Native mobile app for seamless integration with Python lane detection, elevating drivers' safety measures with their phones.\n\nMarch – PRESENT\nTeam Leader, Quantum Computing DNA Sequencer\n- Engineered Python code to decipher human DNA genome, translating them into amino acid sequences and identifying substitution, deletion, and insertion mutations.\n- Integrated the code with IBM's virtual Quantum Computers for accelerated analysis of the complete human genome.\n\nLead Web Developer, Student Coders of Virginia\n- Refactored the website with React to enhance user-friendliness and boost modularity.\n- Creating a beginner-friendly Python summer course for the program's 500+ members.\n\nACTIVITIES\nAugust 2022– PRESENT\nFounder and President, Modern Tech Club\n- Created a unique club that empowers its 50+ members to share their tech knowledge.\n- Developed a dynamic website for the club for volunteer opportunities and meeting info.\n\nAugust 2021 – June 2023\nTutor, PEER tutoring\n- Provided tutoring to fellow high school students in college-level Math and AP Biology coursework.\n\nAWARDS AND RECOGNITION\nNational Finalist, TSA National, State and Regional conference, Solar Sprint\n- Engineered a working model for a solar-powered car.\n\nVocalist, Performer at Carnegie Hall & County/District/State Choir\n- Sang with leading U.S. vocalists for a prestigious Carnegie Hall performance.\n\nInternational Competitor, ACSL\n- Won All-Stars in the American Computer Science League by employing Python for coding problems and learning programming fundamentals like Boolean algebra and LISP.\n\nRegional Champion, VEX Robotics Regional winner and State competitor\n- Won Regional Vex Robotics competitions and qualified for the State competition\n\nRELEVANT COURSEWORK\nCurrently Enrolled:\n- Academies of Engineering and Technology Computer Science\n- AP Calculus BC\n- AP Statistics\n- AP Language and Composition\n- AP Economics\n\nCompleted:\n- AP Biology: 5\n- AP World History: 5\n- Calculus 1";
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