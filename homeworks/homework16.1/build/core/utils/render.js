"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var renderTemplate=function(e,r){return Object.keys(r).reduce(function(e,t){return e.replaceAll("{{".concat(t,"}}"),r[t])},e)},_default=renderTemplate;exports.default=_default;