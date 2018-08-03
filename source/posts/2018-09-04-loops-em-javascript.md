---
layout: post
title: "Loops em JavaScript"
summary: Um texto curtinho sobre todas as vezes que minha mãe desafiou minhas visões agnósticas da vida e sempre esteve certa.
category: "JavaScript"
---

A primeira linguagem de programação que aprendi foi C. Entrei na faculdade sem saber o que era uma variável. Nunca vou esquecer o quão complexo achei o `for` loop da primeira vez que vi. Não foi fácil entender que dentro dele muitas coisas poderiam acontecer, e que no caso mais simples eu teria uma operação e mais uma mudança de estado a cada iteração.

Em paralelo a faculdade, comecei a trabalhar em uma agência de publicidade. Lá eles tinham um setor de web, onde entrei sem saber ao menos HTML e CSS. Ganhei uma apostila do meu colega sobre essas linguagens e após um final de semana de estudos já comecei a fazer meu primeiro website. Era tudo muito simples. Eu queria um parágrafo, adicionava uma tag `<p>`. Queria adicionar uma cor, apenas declarava `color: red;` no meu arquivo CSS e já funcionava como eu esperava.

Hoje, quase oito anos depois, me peguei pensando o porquê das duas abordagens do início da minha carreira terem curvas de aprendizado tão diferentes. O título desse texto já responde essa pergunta: HTML e CSS são mais fáceis de aprender porque são declarativos. Mas e o JavaScript? Conseguimos escrever um código tão simples quanto declarar uma tag HTML? É isso que veremos nesse post.

## A abordagem imperativa

> Programação imperativa é quando você diz *como fazer*.

Provavelmente ao ler sobre abordagem imperativa em desenvolvimento de software, você já se deparou com essa frase. Ela é simples quando se tem bastante experiência com o assunto, mas é difícil explicar para quem está começando. Para ficar mais fácil, vamos colocar em prática um caso de uso bem recorrente em projetos web: calcular o preço de uma lista de produtos após a aplicação de um cupom de desconto.

Primeiramente, vamos fazer isso de forma imperativa, usando um `for`:

```javascript
  const productList = [
    {
      name: 'Apple',
      price: 3
    }, {
      name: 'Banana',
      price: 2
    }, {
      name: 'Strawberry',
      price: 5
    }
  ]

  const discount = (products, discountPercentage) => {
    let productsResult = JSON.parse(JSON.stringify(products)) // isso clona a lista de produtos

    for (let i = 0; i < productsResult.length; i++) {
      productsResult[i].price = (productsResult[i].price * discountPercentage) / 100
    }

    return productsResult
  }

  console.log(discount(productList, 50))
  // result:
  // [
  //   {
  //     name: 'Apple',
  //     price: 1.25
  //   }, {
  //     name: 'Banana',
  //     price: 1
  //   }, {
  //     name: 'Strawberry',
  //     price: 2.5
  //   }
  // ]
```

Essa solução funciona e resolve o problema. Porém, ao combinar com outras partes, pode não ser o melhor caminho, por alguns motivos:

- A cada iteração estamos mudando o estado da variável `productsResult`.
- O código não é legível. Não basta apenas olhar pra ele e já saber o que está acontecendo. É necessário olhar cada trecho com atenção, levando em conta o contexto de cada parte da execução.
- Na primeira linha do `for` eu precisei ter um cuidado para não sobreescrever a lista que chegou por parâmetro. No momento em que eu quisesse recalcular o desconto, correria o risco desse efeito colateral exibir um resultado errado, aplicando um desconto sobre o outro.

Ainda que muito usado, esse exemplo pode parecer não tão trivial. Chegando mais próximo ainda do dia-a-dia do desenvolvedor front-end, vamos pensar no seguinte cenário:

> Dado que um cupom de desconto esteja aplicado, quero adicionar um stripe no preço do produto.

Vamos usar nossa saudosa jQuery para exemplificar o paradigma imperativa no front-end:

```javascript
$('#applyCoupon').click(function() {
  $(this).toggleClass('stripped')
})
```

Esse callback do evento de clique é um ponto vunerável para código ruim. Se você ainda não precisou dar manutenção em um código jQuery, prepare-se para achar callbacks com lógicas gigantes em um evento de clique.

## Front-end moderno e a declaratividade

> Programação declarativa é quando você diz *o que precisa fazer*.

Até aqui podemos concluir que abordagem imperativa é sobre quando precisamos dizer ao computador como ele precisa executar algo, e declarativa é quando falamos apenas o que precisa ser feito, sem necessariamente se preocupar com a execução.

```javascript
  const productList = [
    {
      name: 'Apple',
      price: 3
    }, {
      name: 'Banana',
      price: 2
    }, {
      name: 'Strawberry',
      price: 5
    }
  ]

  const discount = (products, discountPercentage) => {
    let productsResult = JSON.parse(JSON.stringify(products)) // isso clona a lista de produtos

    for (let i = 0; i < productsResult.length; i++) {
      productsResult[i].price = (productsResult[i].price * discountPercentage) / 100
    }

    return productsResult
  }

  function discount(products, discountPercentage) {
    return products.map(applyDiscount)
  }

  function applyDiscount(product) {
    product.price = (productsResult[i].price * discountPercentage) / 100

    return product
  }

  console.log(discount(productList, 50))
  // result:
  // [
  //   {
  //     name: 'Apple',
  //     price: 1.25
  //   }, {
  //     name: 'Banana',
  //     price: 1
  //   }, {
  //     name: 'Strawberry',
  //     price: 2.5
  //   }
  // ]
```
