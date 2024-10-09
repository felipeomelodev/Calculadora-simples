import soma from './soma'

describe('Testes de soma', () => {
    test('deve verificar o resultado de uma soma', () => {
        expect(soma(5, 15)).toBeCloseTo(20)
    })

    test('deve verificar o resultado incorreto de uma soma', () => {
        expect(soma(5, 15)).not.toBeCloseTo(18)
    })

})



