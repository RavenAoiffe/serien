import { expect, test } from 'vitest'
import { fibonacci, serieN } from '../components/Calculate'
/*
test('fibonnaci for number 3 equal to 2', () => {
    expect(fibonacci(3)).toBe(2)
  })
*/
test('serie of n = 1 equal to 4', () => {
    expect(serieN(1)).toBe(4)
})


test('serie of n = 2 equal to 3.67', () => {
    expect(serieN(2)).toBe(3.67)
})

test('serie of n = 3 equal to 3.4', () => {
    expect(serieN(3)).toBe(3.4)
})


test('serie of n = 4 equal to 2.75', () => {
    expect(serieN(4)).toBe(2.75)
})


test('serie of n = 5 equal to 2.62', () => {
    expect(serieN(5)).toBe(2.62)
})


test('serie of n = 6 equal to 1.76', () => {
    expect(serieN(6)).toBe(1.76)
})


test('serie of n = 7 equal to 1.38', () => {
    expect(serieN(7)).toBe(1.38)
})


test('serie of n = 8 equal to 0.88', () => {
    expect(serieN(8)).toBe(0.87)
})


test('serie of n = 9 equal to 0.63', () => {
    expect(serieN(9)).toBe(0.63)
})

test('serie of n = 10 equal to 0.49', () => {
    expect(serieN(10)).toBe(0.49)
})
