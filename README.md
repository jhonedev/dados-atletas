# 🏅 Dados dos Atletas

Este projeto tem como objetivo aplicar **Programação Orientada a Objetos (POO)** em JavaScript para manipular informações de atletas, calcular suas médias válidas, categorias e IMC.  

Cada atleta possui nome, idade, peso, altura e notas dadas por juízes.  
O sistema organiza esses dados, calcula a **média válida** (descartando a maior e a menor nota) e exibe todas as informações no console.

---

## 📋 Como funciona

O código percorre uma lista de atletas, onde cada um possui suas próprias informações.  
Para cada atleta, são realizadas as seguintes etapas:

1. **Criação da Classe Atleta**  
   A classe `Atleta` define as propriedades (nome, idade, peso, altura e notas) e métodos responsáveis por calcular e retornar informações específicas.

2. **Criação dos Objetos**  
   Com o método `forEach`, cada atleta da lista é transformado em um objeto da classe `Atleta` e adicionado ao array `listaDeAtletas`.

3. **Cálculo do IMC**  
   O método `calculaIMC()` calcula o índice de massa corporal com a fórmula:  
   
   IMC = peso / (altura * altura)
   

4. **Definição da Categoria**  
   O método `calculaCategoria()` classifica o atleta conforme a idade:
   - 9 a 11 anos → **Infantil**  
   - 12 a 13 anos → **Juvenil**  
   - 14 a 15 anos → **Intermediário**  
   - 16 a 30 anos → **Adulto**  
   - Fora desses intervalos → **Sem categoria**

5. **Cálculo da Média Válida**  
   O método `calculaMediaValida()` faz:
   - Ordena as notas em ordem decrescente;  
   - Remove a maior e a menor nota com `.slice(1, 4)`;  
   - Soma as notas restantes com `.reduce()`;  
   - Calcula a média dividindo pela quantidade de notas válidas.

6. **Exibição dos Resultados**  
   O método `obtemMediaValida()` mostra no console todas as informações do atleta:
   - Nome, idade, peso e altura;  
   - Notas originais;  
   - Média válida calculada.

---

## 🧠 O que eu aprendi

Durante o desenvolvimento deste projeto, pude praticar:

- Uso de **classes e objetos** para organizar dados e comportamentos;  
- Aplicação do **encapsulamento** com métodos específicos para cada cálculo;  
- Manipulação de **arrays** com métodos como `.sort()`, `.slice()` e `.reduce()`;  
- Utilização do `this` para acessar propriedades do próprio objeto;  
- Uso do **forEach** para gerar dinamicamente vários objetos;  
- Impressão formatada de resultados no **console**.

---

## 🚀 Como executar

1. Copie o código para um arquivo chamado `dados-atletas.js`;  
2. Execute o arquivo com o Node.js no terminal:

```bash
node dados-atletas.js
