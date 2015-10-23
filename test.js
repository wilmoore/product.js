'use strict'

/*!
 * imports.
 */

var test = require('tape')

/*!
 * imports (local).
 */

var product = require('./')

/*!
 * tests.
 */

test('full application', function (t) {
  t.plan(1)
  t.equal(product(10, 2), 20)
})

test('higher order', function (t) {
  t.plan(1)
  t.assert(typeof product(10) === 'function', 'function returned')
})

test('function returned', function (t) {
  t.plan(1)
  t.assert(product(10).length === 1, 'with arity of 1')
})

test('functor', function (t) {
  t.plan(1)
  var tenTimes = product(10)
  var multipliers = [1, 2, 3, 4, 5]
  t.deepEqual(multipliers.map(tenTimes), [ 10, 20, 30, 40, 50 ])
})
