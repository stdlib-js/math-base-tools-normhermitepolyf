"use strict";var v=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var c=v(function(g,y){
var o=require('@stdlib/number-float64-base-to-float32/dist'),s=require('@stdlib/math-base-assert-is-nanf/dist'),F=require('@stdlib/math-base-assert-is-integer/dist');function T(r,e){var t,u,a,i;if(s(r)||s(e)||r<0||!F(r))return NaN;if(r===0)return 1;if(e=o(e),r===1)return e;for(u=1,a=0,i=r;i>1;i--)t=o(o(e*u)-o(i*a)),a=u,u=t;return o(o(e*u)-a)}y.exports=T
});var p=v(function(j,N){
var f=require('@stdlib/number-float64-base-to-float32/dist'),q=require('@stdlib/utils-constant-function/dist'),l=require('@stdlib/math-base-assert-is-nanf/dist'),d=require('@stdlib/math-base-assert-is-integer/dist');function h(r){if(r<0||l(r)||!d(r))return q(NaN);if(r===0)return q(1);return e;function e(t){var u,a,i,n;if(l(t))return NaN;for(t=f(t),a=1,i=0,n=r;n>1;n--)u=f(f(t*a)-f(n*i)),i=a,a=u;return f(f(t*a)-i)}}N.exports=h
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=c(),R=p();O(m,"factory",R);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
