import { expect, test } from 'vitest'
import { fibonacci} from '../components/Calculate'

test('fibonnaci for number 3 equal to 2', () => {
    expect(fibonacci(3)).toBe(2)
  })