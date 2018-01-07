---
layout: post
title: "Acessando propriedades de objetos JavaScript"
summary: Como garantir que uma propriedade de um objeto estará definida quando você precisar dela? Esse artigo mostra as várias formas de fazer isso, através condicionais, bibliotecas e conceitos de programação funcional.
category: "Front-end"
---

O JavaScript, como várias linguagens, funciona com um único fluxo de execução. Isso quer dizer que dadas as instruções, elas serão executadas em ordem e de forma contínua. Caso algo quebre no meio do caminho, a execução é interrompida. Isso pode nos ocasionar momentos desastrosos. No browser, a execução do JavaScript é compartilhada com a renderização do layout.

> Para saber mais sobre fluxo de execução em JavaScript, sugiro que leia [esse artigo do @jcemer no Tableless.](https://tableless.com.br/fluxo-de-execucao-assincrono-em-javascript-callbacks/)

Uma forma de quebrar a execução, é tentar acessar a propriedade de algum valor que não é definido. Isso irá quebrar o fluxo de execução, e dependendo da posição em que está sendo executado, pode deixar o usuário sem experiência alguma.

```javascript
  const obj = {}
  obj.x.y // TypeError: Cannot read property 'y' of undefined
```

Parece fácil prever erros como esse, mas é bem comum precisarmos consultar um valor que é definido de forma assíncrona. Além disso, em aplicações complexas não temos garantia sobre todas suas informações. Para evitar erros como esse, geralmente verificamos propriedade a propriedade:

```javascript
  const obj = {}
  if (obj && obj.x && obj.x.y)
    return obj.x.y // undefined
```

 O problema com esssa abordagem é que dependendo do nível de nesting, mais ilegível nosso código fica.

## Optional Chaining

Existe uma proposta de especificação do ECMAScript para resolver esse problema. Ela se chama [Optional Chaining](https://claudepache.github.io/es-optional-chaining/). Em resumo, a proposta diz que o operador `?.` pode ser usado para verificar se um valor existe e evitar uma quebra de fluxo.

Usando nosso exemplo, podemos verificar se `x` existe através do operador *optional chaining*.

```javascript
  const obj = {}
  return obj.x?.y // undefined
```

É bom lembrar que essa proposta ainda está em *state 0*, e não é recomendada para uso.

Outras linguagens, como *Ruby* e *C#*, já possuem essa feauture. O *Ruby on Rails*, possui um método chamado `try()` , que também possui esse objetivo.

## Try method

O `try()` method, que o Rails dispõe, pode ser usado para consultador valores públicos de um objeto. Caso ele não exista, é retornado `nil` . Outra característica é que ele pode ser “chained” *(quem não lembra da jQuery nesse momento?):*

```ruby
  @obj.try(x).try(y)
```

Outra feature mais interessante, é que você pode usar bloco e seus parâmetros, passando esses valores para um método que pode existir ou não:

```ruby
  @posts.try(:each_slice, 2) do |a, b|
    ...
  end
```

### try.js

Inspirado por esse método, decidi implementar algo parecido em JavaScript. Publiquei a implementação em uma pequena biblioteca no NPM. Caso queira ver o código, [está no GitHub](https://github.com/fernahh/try.js).

Não há nada de mágico e inovador, a biblioteca serve apenas para momentos em que não podemos garantir o *path* de um objeto. Seguindo nosso exemplo, ao invés de varrer propriedade a propriedade, podemos passar o *path* como parâmetro para a função:

```javascript
  const obj = {}
  tryjs(obj, 'y.x') // undefined
```

Também é possível executar uma função e passar parâmetros pra ela:

```javascript
  // sem try.js
  const obj = {
    sayHello: () => 'Hello'
  }

  if (obj && (typeof obj.sayHello === 'function')
    return obj.sayHello() // 'Hello'

  // com try.js
  const obj = {
    sayHello: () => 'Hello'
  }
  tryjs(obj, 'sayHello') // 'Hello'

  // com parâmetros
  const obj = {
    add: (x, y) => x + y
  }
  tryjs(obj, 'add', [1, 2]) // 3
```

Quando tive a ideia da biblioteca, fui trocar uma ideia com meu amigo [@rodrigowillrich](http://rodrigowillrich). Na ocasião, ele me mostrou algumas implementações que resolvem esse problema e são elas que vamos ver agora.

## Lodash e Ramda

A [Lodash](https://lodash.com/) possui uma função chamada `_.get()` , que faz a consulta de um valor e retorna um valor *default* caso ele não exista.

```javascript
  const obj = {}
  _.get(obj, 'x.y', 1) // 1
```

O [Ramda](http://ramdajs.com) também possui uma função que pode ser usada pra esse caso. A sintax é o contrário da implementação da Lodash:

```javascript
  const obj = {}
  R.prop('x', obj) // undefined
```

Existem outros milhões de funções do Ramda, outras bem parecidas que podem ser usadas também, dependendo do problema que você precisa resolver.

## Lenses

Lenses é um conceito da Programação Funcional. De forma simplória, podemos dizer que lenses são **getters/setters** funcionais. Isso tem tudo a ver com o assunto desse artigo, onde tentamos acessar propriedades de objetos. Uma implementação simples, seria algo como:

```javascript
  const lens = (getter, setter) => {
    return ({
      get: obj => getter(obj),
      set: (val, obj) => setter(val, obj),
    })
  }
```

Essa função, `lens()` irá nos retornar um objeto com função de *get* e *set*. Feito isso, podemos acessar e mudar valor de objetos sem precisar **"mutar"** nosso objeto nativo. Isso faz bastante sentido quando lidamos com imutabilidade. No exemplo abaixo, o objeto R representa o [ramda](http://ramdajs.com/).

```javascript
  const lens = (getter, setter) => {
    return ({
      get: obj => getter(obj),
      set: (val, obj) => setter(val, obj),
    })
  }
  const view = (lens, obj) => lens.get(obj)
  const set = (lens, val, obj) => lens.set(val, obj)

  const obj = { x: 1 }
  const xLens = lens(R.prop('x'), R.assoc('x'))

  const newObj = set(xLens, 3, obj)
  newObj.x // return 3
  obj.x // return 1
```

Essa explicação é extramamente básica. Sugiro que para se aprofundar no assunto, dê uma lida no artigo do @sharifsbeat, [A Introduction into Lenses in JavaScript](https://medium.com/javascript-inside/an-introduction-into-lenses-in-javascript-e494948d1ea5), onde há outras links e referências.

## Conclusão

Acessar e como acessar propriedades em JavaScript já possui várias soluções. O interessante aqui é acompanhar e saber qual vai ser a implementação que o futuro da linguagem irá seguir. Como outras inúmeras features, acesso a propriedades de objetos pode fazer parte de um marco importante para o JavaScript, onde saberemos se ele continuará características funcionais ou OOP.
