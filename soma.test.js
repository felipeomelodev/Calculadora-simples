const soma = require('./soma')

test('deve verificar o resultado de uma soma', () => {
    expect(soma(5, 15)).toBe(20)
})

