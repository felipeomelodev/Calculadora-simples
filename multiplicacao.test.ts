import multiplicacao from './multiplicacao'

describe('Testes de multiplicacao', () => {
    test('deve verificar o resultado de uma multiplicação', () => {
        expect(multiplicacao(22.1, 4.5)).toBeCloseTo(99.45)
        expect(multiplicacao(13.2, 2)).toBeCloseTo(26.4)
        expect(multiplicacao(41.8, 7.3)).toBeCloseTo(305.14)
    })
})

test('deve verificar o resultado incorreto de uma multiplicação', () => {
    expect(multiplicacao(4, 2)).not.toBe(3)
})