# Calculadora de Índice de Massa Corporal (IMC)

Este repositório contém um simples módulo para calcular o Índice de Massa Corporal (IMC) e seus respectivos testes unitários.

## Funcionalidades

- Calcula o IMC com base no peso (em quilogramas) e altura (em centímetros) fornecidos.
- Verifica se a altura é zero, retornando 'NaN' nesse caso.
- Verifica se o peso ou a altura são valores negativos, retornando 'Valores inválidos' nesse caso.

## Como usar

1. Clone este repositório
2. Execute npm install para instalar as dependências (assumindo que você tenha o Node.js e npm instalados)
3. Use a função calcularIMC para calcular o IMC como mostrado no arquivo imc.js.
4. Execute os testes usando npm test (assumindo que você tenha configurado um script de teste no package.json).

## Testes

Os testes verificam o cálculo correto do IMC, bem como os casos de altura zero e valores negativos para peso e altura. Você pode encontrar os testes no arquivo imc.test.js.