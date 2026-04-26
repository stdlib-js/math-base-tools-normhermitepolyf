<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Normalized Hermite Polynomial

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate a normalized [Hermite polynomial][hermite-polynomial] using single-precision floating-point arithmetic.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The normalized (aka "probabilist") [Hermite polynomials][hermite-polynomial] are given by

<!-- <equation class="equation" label="eq:normalized_hermite_polynomials" align="center" raw="He_{n}(x)=(-1)^{n} e^{\frac{x^2}{2}} \frac{\mathrm d^{n}}{\mathrm d x^{n}} e^{-\frac{x^2}{2}}" alt="Equation for normalized Hermite polynomials."> -->

```math
He_{n}(x)=(-1)^{n} e^{\frac{x^2}{2}} \frac{\mathrm d^{n}}{\mathrm d x^{n}} e^{-\frac{x^2}{2}}
```

<!-- <div class="equation" align="center" data-raw-text="He_{n}(x)=(-1)^{n} e^{\frac{x^2}{2}} \frac{\mathrm{d}^{n}}{\mathrm{d}x^n} e^{-\frac{x^2}{2}}" data-equation="eq:normalized_hermite_polynomials">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bea0101eb61892f160eec8d97dc79188fd937523/lib/node_modules/@stdlib/math/base/tools/normhermitepoly/docs/img/equation_normalized_hermite_polynomials.svg" alt="Equation for normalized Hermite polynomials.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
normhermitepolyf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-normhermitepolyf@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var normhermitepolyf = require( 'path/to/vendor/umd/math-base-tools-normhermitepolyf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-normhermitepolyf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.normhermitepolyf;
})();
</script>
```

#### normhermitepolyf( n, x )

Evaluates a normalized [Hermite polynomial][hermite-polynomial] of degree `n` using single-precision floating-point arithmetic.

```javascript
var v = normhermitepolyf( 1, 1.0 );
// returns 1.0

v = normhermitepolyf( 1, 0.5 );
// returns 0.5

v = normhermitepolyf( 0, 0.5 );
// returns 1.0

v = normhermitepolyf( 2, 0.5 );
// returns -0.75

v = normhermitepolyf( -1, 0.5 );
// returns NaN
```

#### normhermitepolyf.factory( n )

Returns a function for evaluating a normalized [Hermite polynomial][hermite-polynomial] of degree `n` using single-precision floating-point arithmetic.

```javascript
var polyval = normhermitepolyf.factory( 2 );

var v = polyval( 0.5 );
// returns -0.75
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-smap@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-normhermitepolyf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Generate random values at which to evaluate a polynomial:
var x = uniform( 10, -50.0, 50.0, {
    'dtype': 'float32'
});

// Create a polynomial function of degree 1:
var f = normhermitepolyf.factory( 1 );

// Allocate an output array:
var y = zeros( x.length, 'float32' );

// Evaluate the polynomial:
smap( x.length, x, 1, y, 1, f );
logEach( 'He_%d(%.3f) = %.3f', 1, x, y );

// Create a polynomial function of degree 2:
f = normhermitepolyf.factory( 2 );

// Allocate an output array:
y = zeros( x.length, 'float32' );

// Evaluate the polynomial:
smap( x.length, x, 1, y, 1, f );
logEach( 'He_%d(%.3f) = %.3f', 2, x, y );

// Create a polynomial function of degree 3:
f = normhermitepolyf.factory( 3 );

// Allocate an output array:
y = zeros( x.length, 'float32' );

// Evaluate the polynomial:
smap( x.length, x, 1, y, 1, f );
logEach( 'He_%d(%.3f) = %.3f', 3, x, y );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools-normhermitepolyf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools-normhermitepolyf

[test-image]: https://github.com/stdlib-js/math-base-tools-normhermitepolyf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-tools-normhermitepolyf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools-normhermitepolyf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools-normhermitepolyf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools-normhermitepolyf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools-normhermitepolyf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-tools-normhermitepolyf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-tools-normhermitepolyf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-tools-normhermitepolyf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-tools-normhermitepolyf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-tools-normhermitepolyf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-tools-normhermitepolyf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-tools-normhermitepolyf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-tools-normhermitepolyf/main/LICENSE

[hermite-polynomial]: https://en.wikipedia.org/wiki/Hermite_polynomials

</section>

<!-- /.links -->
