import { expect, test } from 'vitest'
import { fibonacci, serieN} from '../components/Calculate'
/*
test('fibonnaci for number 3 equal to 2', () => {
    expect(fibonacci(3)).toBe(2)
  })
*/
  test('serie 1 equal to 4', () => {
    expect(serieN(1)).toBe(4)
  })
