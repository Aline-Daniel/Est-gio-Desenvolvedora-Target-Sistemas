# Desafio Target Sistemas — análise de faturamento com JavaScript

Resolução de cinco desafios de lógica de programação apresentados em uma página HTML com módulos JavaScript.

## O que o projeto demonstra
1. Soma de números em um laço.
2. Identificação de valores da sequência de Fibonacci.
3. Análise de faturamento diário a partir de dados.json.
4. Distribuição percentual de faturamento por estado.
5. Inversão de uma palavra.

## Análise de dados
O módulo scripts/calcularFaturamento.js calcula valor máximo, mínimo, soma, média e quantidade de dias acima da média. A média considera somente os dias que tiveram faturamento (valor positivo), conforme o enunciado do desafio. Os valores de exemplo estão em dados.json. Dados inválidos e meses sem faturamento são tratados explicitamente.

## Executar
Abra o projeto com um servidor HTTP local (o navegador pode bloquear fetch de dados.json quando index.html é aberto como arquivo). Você pode usar a extensão Live Server no VS Code e abrir a página index.html.

## Testes automatizados
Com Node.js 20 ou superior, execute: npm test
Os testes unitários validam médias, dias sem faturamento e entradas inválidas; o GitHub Actions executa os testes automaticamente.

## Organização
- index.html: interface do desafio.
- main.js: inicialização dos módulos.
- dados.json: amostra de faturamento por dia.
- scripts/: funções das questões e cálculo reutilizável.
- test/: testes unitários.

## Observações
Este repositório é uma demonstração de lógica e análise de dados; não depende de banco de dados e não usa informações de produção. Os demais desafios permanecem com a lógica original.

Origem: AlineDaniel/Est-gio-Desenvolvedora-Target-Sistemas.
