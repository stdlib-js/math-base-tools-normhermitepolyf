"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=v(function(g,y){
var o=require('@stdlib/number-float64-base-to-float32/dist'),s=require('@stdlib/math-base-assert-is-nanf/dist'),F=require('@stdlib/math-base-assert-is-integer/dist');function T(r,e){var i,u,t,a;if(s(r)||s(e)||r<0||!F(r))return NaN;if(r===0)return 1;if(e=o(e),r===1)return e;for(u=1,t=0,a=r;a>1;a--)i=o(o(e*u)-o(a*t)),t=u,u=i;return o(o(e*u)-t)}y.exports=T
});var p=v(function(j,N){
var f=require('@stdlib/number-float64-base-to-float32/dist'),q=require('@stdlib/utils-constant-function/dist'),l=require('@stdlib/math-base-assert-is-nanf/dist'),d=require('@stdlib/math-base-assert-is-integer/dist');function h(r){if(r<0||l(r)||!d(r))return q(NaN);if(r===0)return q(1);return e;function e(i){var u,t,a,n;if(l(i))return NaN;for(i=f(i),t=1,a=0,n=r;n>1;n--)u=f(f(i*t)-f(n*a)),a=t,t=u;return f(f(i*t)-a)}}N.exports=h
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=c(),R=p();O(m,"factory",R);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
