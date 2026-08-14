import test from 'node:test'
import assert from 'node:assert/strict'

import { formatPercent, formatUnits } from './onchain.js'

test('formats token units without floating-point conversion', () => {
  assert.equal(formatUnits(123456789n, 8), '1.234567')
  assert.equal(formatUnits(5250000000000000000000000000n, 18, 2), '5,250,000,000')
})

test('formats migration progress using integer arithmetic', () => {
  assert.equal(formatPercent(1n, 4n), '25.00%')
})
