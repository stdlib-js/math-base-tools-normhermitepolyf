// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.2.4-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function i(t,n){var i,o,m,d;if(r(t)||r(n)||t<0||!s(t))return NaN;if(0===t)return 1;if(n=e(n),1===t)return n;for(o=1,m=0,d=t;d>1;d--)i=e(e(n*o)-e(d*m)),m=o,o=i;return e(e(n*o)-m)}function o(t){return t<0||r(t)||!s(t)?n(NaN):0===t?n(1):function(s){var n,i,o,m;if(r(s))return NaN;for(s=e(s),i=1,o=0,m=t;m>1;m--)n=e(e(s*i)-e(m*o)),o=i,i=n;return e(e(s*i)-o)}}t(i,"factory",o);export{i as default,o as factory};
//# sourceMappingURL=index.mjs.map
