import { expect, test } from 'vitest'
import {sum, fibonacci} from '../components/Calculate'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('fibonnaci for number 3 equal to 2', () => {
    expect(fibonacci(3)).toBe(2)
  })