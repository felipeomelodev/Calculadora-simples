# Calculadora Simples

Este projeto é uma calculadora simples desenvolvida em JavaScript e TypeScript, que realiza as quatro operações matemáticas básicas: `adição`, `subtração`, `multiplicação` e `divisão`. 
Inclui testes automatizados, importação e exportação de módulos e uma configuração de build completa. 

## Funcionalidades

- **Soma**: Soma dois números.  
  Exemplo: `soma(2, 3)` retornaria `5`.

- **Subtração**: Subtrai um número do outro.  
  Exemplo: `subtracao(5, 2)` retornaria `3`.

- **Multiplicação**: Multiplica dois números.  
  Exemplo: `multiplicacao(22.1, 4.5)` retornaria `99.45`.

- **Divisão**: Divide um número pelo outro.  
  Exemplo: `divisao(2, 8)` retornaria `0.25`.

## Tecnologias Utilizadas

- **TypeScript**: Superconjunto do JavaScript que permite adicionar tipos ao código, ajudando a prevenir erros comuns e melhorando a legibilidade.
- **JavaScript**: Linguagem base usada, sendo que TypeScript é um superconjunto de JavaScript.
- **Node.js**: Plataforma que permite a execução de JavaScript no servidor, essencial para rodar testes e scripts de build.
- **Jest**: Framework para testes automatizados.
- **NPM**: Gerenciador de dependências e scripts. Além de gerenciar pacotes, permite a execução de scripts definidos no `package.json`, como `npm run build`

## Testes

O projeto inclui uma suíte de testes automatizados com Jest, cobrindo todas as operações da calculadora para garantir a precisão dos resultados.

## Scripts Disponíveis

- `jest`: Executa todos os testes automatizados.
- `npm run build`: Compila o projeto usando o TypeScript Compiler (tsc), gerando os arquivos JavaScript na pasta `dist`.
- `npx tsc`: Compila o projeto diretamente, sem precisar definir um script no `package.json`.

## Instalação

Para instalar as dependências do projeto, execute:
`npm install`

## Execução

Para rodar a calculadora, execute o script `npm run build` e, em seguida, execute o arquivo JavaScript gerado na pasta `dist`.
`node dist/nome-do-arquivo.js`

## Referências

- [Documentação do JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript): Referência abrangente sobre JavaScript, incluindo informações sobre importação de arquivos e bibliotecas.
  
- [Documentação do Jest](https://jestjs.io/docs/getting-started): Guia completo para usar o Jest, um framework de testes que auxilia na criação e execução de testes automatizados.

- [Documentação do TypeScript](https://www.typescriptlang.org/docs/): Para entender melhor as funcionalidades e benefícios do TypeScript, como tipagem e módulos.

- [Node.js Documentation](https://nodejs.org/en/docs/): Para aprofundar-se na execução de JavaScript no servidor e no uso de pacotes.

