import divisao from './divisao'

describe('Testes de divisao', () => {
    test('deve verificar o resultado de uma divisão', () => {
        expect(divisao(6.6, 3)).toBeCloseTo(2.2)
        expect(divisao(2, 8)).toBeCloseTo(0.25)
        expect(divisao(81, 3)).toBeCloseTo(27)
    })
})

test('deve verificar o resultado incorreto de uma divisão', () => {
    expect(divisao(15, 3)).not.toBe(52)
})