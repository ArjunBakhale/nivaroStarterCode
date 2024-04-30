exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 5187:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8782, 23))

/***/ }),

/***/ 2395:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3518));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2226))

/***/ }),

/***/ 2226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1963);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Header() {
    // Add more links to your navbar here
    const links = [
        {
            name: "Intro",
            path: "/"
        },
        {
            name: "Example",
            path: "/examplePage"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "z-[999] relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.div, {
                //Edit sm:w-[20rem] to change the width of the navbar :)
                className: "fixed top-0 left-1/2 h-[4rem] sm:w-[10rem] rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",
                initial: {
                    y: -100,
                    x: "-50%",
                    opacity: 0
                },
                animate: {
                    y: 0,
                    x: "-50%",
                    opacity: 1
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",
                    children: links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "h-3/4 flex items-center justify-center relative",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                                href: link.path,
                                children: link.name
                            })
                        }, link.path))
                })
            })
        ]
    });
}


/***/ }),

/***/ 942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Spacing)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Spacing() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-16 sm:block"
    });
}


/***/ }),

/***/ 6282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(9298);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./components/header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/workspaces/nivaroStarterCode/components/header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const header = (__default__);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react-experimental/react.shared-subset.js
var react_shared_subset = __webpack_require__(5465);
;// CONCATENATED MODULE: ./components/footer.tsx


function Footer() {
    return(// Edit the text here to match the needs of your website
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "mb-10 px-4 text-center text-gray-500",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                className: "mb-2 block text-xs",
                children: "\xa9 2024 Nivaro. All rights reserved."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-xs",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-semibold",
                        children: "About this website:"
                    }),
                    " built with React & Next.js, TypeScript, Tailwind CSS."
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs
var dist = __webpack_require__(9035);
;// CONCATENATED MODULE: ./app/layout.tsx






const metadata = {
    title: "Nivaro | Starter Code",
    description: "Starter Code for your AI website."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: "!scroll-smooth",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: `${(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(dist/* Toaster */.x7, {
                    position: "top-right"
                })
            ]
        })
    });
}


/***/ }),

/***/ 3154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/workspaces/nivaroStarterCode/components/spacing.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;