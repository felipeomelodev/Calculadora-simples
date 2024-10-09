import subtracao from './subtracao'

describe('Testes de subtração', () => {
    test('deve verificar o resultado de uma subtração', () => {
        expect(subtracao(8.7, 2.5)).toBeCloseTo(6.2)
        expect(subtracao(30, 4)).toBeCloseTo(26)
        expect(subtracao(100, 30)).toBeCloseTo(70)
    })
})

test('deve verificar o resultado incorreto de uma subtração', () => {
    expect(subtracao(8, 2)).not.toBe(3)
})