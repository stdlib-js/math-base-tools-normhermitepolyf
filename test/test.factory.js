/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var abs = require( '@stdlib/math-base-special-abs' );
var EPS = require( '@stdlib/constants-float32-eps' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var factory = require( './../lib' ).factory;


// FIXTURES //

var random2 = require( './fixtures/python/random2.json' );

var mediumNegative1 = require( './fixtures/python/medium_negative_1.json' );
var mediumNegative2 = require( './fixtures/python/medium_negative_2.json' );
var mediumNegative5 = require( './fixtures/python/medium_negative_5.json' );

var mediumPositive1 = require( './fixtures/python/medium_positive_1.json' );
var mediumPositive2 = require( './fixtures/python/medium_positive_2.json' );
var mediumPositive5 = require( './fixtures/python/medium_positive_5.json' );

var smallPositive1 = require( './fixtures/python/small_positive_1.json' );
var smallPositive2 = require( './fixtures/python/small_positive_2.json' );
var smallPositive5 = require( './fixtures/python/small_positive_5.json' );

var smallNegative1 = require( './fixtures/python/small_negative_1.json' );
var smallNegative2 = require( './fixtures/python/small_negative_2.json' );
var smallNegative5 = require( './fixtures/python/small_negative_5.json' );

var tiny1 = require( './fixtures/python/tiny_1.json' );
var tiny2 = require( './fixtures/python/tiny_2.json' );
var tiny5 = require( './fixtures/python/tiny_5.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	t.strictEqual( typeof factory( 2 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function which accurately computes `Hen(x)` for random `n` and `x`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = random2.n;
	x = random2.x;
	expected = random2.expected;

	for ( i = 0; i < x.length; i++ ) {
		f = factory( n[ i ] );
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 5.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n[ i ] + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He1(x)` for small positive numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = smallPositive1.n;
	x = smallPositive1.x;
	expected = smallPositive1.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 1.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes `He2(x)` for small positive numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = smallPositive2.n;
	x = smallPositive2.x;
	expected = smallPositive2.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 1.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He5(x)` for small positive numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = smallPositive5.n;
	x = smallPositive5.x;
	expected = smallPositive5.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 1.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He1(x)` for small negative numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = smallNegative1.n;
	x = smallNegative1.x;
	expected = smallNegative1.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 1.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He2(x)` for small negative numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = smallNegative2.n;
	x = smallNegative2.x;
	expected = smallNegative2.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 1.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He5(x)` for small negative numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = smallNegative5.n;
	x = smallNegative5.x;
	expected = smallNegative5.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 1.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He1(x)` for tiny numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = tiny1.n;
	x = tiny1.x;
	expected = tiny1.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 1.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He2(x)` for tiny numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = tiny2.n;
	x = tiny2.x;
	expected = tiny2.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 1.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He5(x)` for tiny numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = tiny5.n;
	x = tiny5.x;
	expected = tiny5.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 1.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He1(x)` for positive medium numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = mediumPositive1.n;
	x = mediumPositive1.x;
	expected = mediumPositive1.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 1.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He2(x)` for positive medium numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = mediumPositive2.n;
	x = mediumPositive2.x;
	expected = mediumPositive2.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 1.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He5(x)` for positive medium numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = mediumPositive5.n;
	x = mediumPositive5.x;
	expected = mediumPositive5.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 5.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He1(x)` for negative medium numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = mediumNegative1.n;
	x = mediumNegative1.x;
	expected = mediumNegative1.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 1.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He2(x)` for negative medium numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = mediumNegative2.n;
	x = mediumNegative2.x;
	expected = mediumNegative2.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 1.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which accurately computes `He5(x)` for negative medium numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var f;
	var x;
	var v;
	var i;
	var n;
	var e;

	n = mediumNegative5.n;
	x = mediumNegative5.x;
	expected = mediumNegative5.expected;

	f = factory( n );

	for ( i = 0; i < x.length; i++ ) {
		v = f( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		delta = abs( v - e );
		tol = 5.0 * EPS * abs( e );
		t.ok( delta <= tol, 'within tolerance. n: ' + n + '. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + e + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns a function which returns `1.0` whenever `n` is `0`', function test( t ) {
	var f;
	var y;

	f = factory( 0 );

	y = f( -1.0 );
	t.strictEqual( y, 1.0, 'returns expected value' );

	y = f( 0.0 );
	t.strictEqual( y, 1.0, 'returns expected value' );

	y = f( 1.0 );
	t.strictEqual( y, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which returns `NaN` whenever `n` is `NaN`', function test( t ) {
	var f;
	var y;

	f = factory( NaN );

	y = f( 0.0 );
	t.strictEqual( isnanf( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which returns `NaN` when `x` is `NaN`', function test( t ) {
	var f;
	var y;

	f = factory( 1 );

	y = f( NaN );
	t.strictEqual( isnanf( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which returns `NaN` when `n` is a negative integer`', function test( t ) {
	var f;
	var y;

	f = factory( -1 );

	y = f( 0.0 );
	t.strictEqual( isnanf( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which returns `NaN` when `n` is not an integer`', function test( t ) {
	var f;
	var y;

	f = factory( 1.01 );

	y = f( 0.0 );
	t.strictEqual( isnanf( y ), true, 'returns expected value' );

	t.end();
});
