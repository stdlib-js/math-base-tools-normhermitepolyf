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

var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var constantFunction = require( '@stdlib/utils-constant-function' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var isint = require( '@stdlib/math-base-assert-is-integer' );


// MAIN //

/**
* Returns a function for evaluating a normalized Hermite polynomial using single-precision floating-point arithmetic.
*
* @param {NonNegativeInteger} n - polynomial degree
* @returns {Function} function for evaluating a normalized Hermite polynomial
*
* @example
* var polyval = factory( 2 );
*
* var v = polyval( 0.5 );
* // returns -0.75
*/
function factory( n ) {
	if ( n < 0 || isnanf( n ) || !isint( n ) ) {
		return constantFunction( NaN );
	}
	if ( n === 0 ) {
		return constantFunction( 1.0 );
	}
	return polyval;

	/**
	* Evaluates a normalized Hermite polynomial using single-precision floating-point arithmetic.
	*
	* @private
	* @param {number} x - value at which to evaluate a normalized Hermite polynomial
	* @returns {number} result
	*/
	function polyval( x ) {
		var y1;
		var y2;
		var y3;
		var i;

		if ( isnanf( x ) ) {
			return NaN;
		}
		x = float64ToFloat32( x );
		y2 = 1.0;
		y3 = 0.0;
		for ( i = n; i > 1; i-- ) {
			y1 = float64ToFloat32( float64ToFloat32( x*y2 ) - float64ToFloat32( i*y3 ) ); // eslint-disable-line max-len
			y3 = y2;
			y2 = y1;
		}
		return float64ToFloat32( float64ToFloat32( x*y2 ) - y3 );
	}
}


// EXPORTS //

module.exports = factory;
