---
layout: post
title: "Programação declarativa, imperativa e front-end"
summary: Divagando sobre as curvas de aprendizado que tive no início da minha  carreira, escrevi sobre como o paradigma declarativo foi importante para  me fazer escolher o front-end como especialidade.
category: "JavaScript"
---

A primeira linguagem de programação que tive contato foi [C](https://en.wikipedia.org/wiki/C_(programming_language)). Entrei na faculdade sem saber o que era uma variável. Nunca vou esquecer o quão complexo achei o [for-loop](https://en.wikipedia.org/wiki/For_loop) da primeira vez que vi. Não foi fácil entender que dentro dele muitas coisas poderiam acontecer, e que no caso mais simples eu teria dois contextos, uma operação e mais uma mudança de estado a cada iteração.

Em paralelo a faculdade, comecei a trabalhar em uma agência de publicidade. Lá eles tinham um "setor de web", onde entrei sem saber ao menos HTML e CSS. Ganhei uma apostila de um colega sobre essas linguagens e após um final de semana de estudos já comecei a fazer meu primeiro website. Era tudo muito simples. Eu queria um parágrafo, adicionava uma tag `<p>`. Queria adicionar uma cor, apenas declarava `color: red;` no meu arquivo CSS e já funcionava como eu esperava. Quando eu queria mostrar uma imagem para o usuário, usava apenas uma tag `<img />` com o endereço dela, e eu não precisava saber como ela iria ser requisitada ao servidor.

Com JavaScript minha curva de aprendizado foi diferente. Assim como quando estava usando C, eu dava instruções para um software, que no caso era o navegador. Essas instruções geralmente envolviam a entrada do usuário, como uma request, alguma lógica de validação e uma saída. Chamamos esse processo de instruções de "programar", mas o que eu não sabia é que quando eu dava instruções, eu estava programando de forma **imperativa**.

Hoje, quase dez anos depois, me peguei pensando o porquê dos dois caminhos do início da minha carreira terem curvas de aprendizado tão diferentes. Uma das conclusões que cheguei é que HTML e CSS foram fáceis de aprender porque possuem paradigma **declarativo**. Ao invés de dizer o que o computador deveria fazer, eu falava o que eu queria.

Tendo chegado a essa conclusão, busquei abordagens para diminuir a curva de aprendizado sobre quem lê meu código JavaScript, aproximando meu código ao paradigma declarivo, e é isso que veremos nesse post.

## A abordagem imperativa

> "Programação imperativa é quando você diz como fazer."

Provavelmente ao ler sobre paradigma imperativo em desenvolvimento de software, você já se deparou com essa definição. Ela é simples de entender quando se tem bastante experiência com o assunto, mas é difícil de explicar para quem está começando. Para ficar mais fácil, vamos imaginar um cenário onde precisamos fazer um botão de liga e desliga. Dependendo de seu estado, o botão deve ter um estilo. Quando clicado, o estado deve ser alterado.

Vamos usar nossa saudosa jQuery para exemplificar o paradigma imperativo no front-end:

<p data-height="265" data-theme-id="0" data-slug-hash="gjeqNy" data-default-tab="js,result" data-user="lfernahh" data-pen-title="gjeqNy" class="codepen">See the Pen <a href="https://codepen.io/lfernahh/pen/gjeqNy/">gjeqNy</a> by Luiz Fernando Rodrigues (<a href="https://codepen.io/lfernahh">@lfernahh</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

O código acima não é o santo graal da legibilidade. É difícil olhar pra ele e entender de primeira o que está acontecendo. Para ter uma boa compreensão, devo ler linha a linha e entender em que contexto determinada instrução será executada. Além disso, se o código precisar ser usado em outro momento, as mesmas instruções deverão ser executadas.

## Componentes, abstração e a declaratividade

> "Programação declarativa é quando você diz o que você quer."

Até aqui podemos concluir que abordagem imperativa é sobre quando precisamos dizer ao computador como ele precisa executar algo, e declarativa é quando falamos o que queremos, sem nos preocupar com a execução.

Tendo o mesmo requisito anterior, veremos uma implementação usando um componente, escrito em React:

<p data-height="265" data-theme-id="0" data-slug-hash="djmLGP" data-default-tab="js,result" data-user="lfernahh" data-pen-title="React Power Button " class="codepen">See the Pen <a href="https://codepen.io/lfernahh/pen/djmLGP/">React Power Button </a> by Luiz Fernando Rodrigues (<a href="https://codepen.io/lfernahh">@lfernahh</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Talvez você nunca tenha tido contato com React anteriormente, mas o que quero destacar aqui é a simplicidade e declaratividade que ganhamos ao escrever nosso componente.

Vamos comparar os snippets que precisamos para aplicar nossa interação com jQuery e com React:

```javascript
  // jQuery
  $('.power_button').on('click', function() {
  $(this).toggleClass('is-active')
  $('.power_status').text() === 'On'
    ? $('.power_status').text('Off')
    : $('.power_status').text('On')
  })

  // React
  <PowerButton
    isToggledOn={this.state.isToggledOn}
    onToggleButton={this.handleToggleButton} />
```

Analisando o componente React, basta ver sua declaração e fica simples de entender o que irá acontecer quando renderizado ao usuário. Diferentemente da implementação com jQuery, o gerenciamento do estado não fica no DOM, fica no próprio componente. E por fim, um dos melhores benefícios do paradigma declarativo: nosso código fica **independente do contexto de onde ele está sendo usado**, preparado para o reuso.

## Conclusão

Buscar escrever meu código de forma declarativa tem me ajudado a entregar um código melhor para as pessoas que trabalham comigo, e consequentemente, ser um desenvolvedor melhor.

As ferramentas e frameworks estão cada vez mais caminhando para esse lado. Se formos analisar a popularidade da programação funcional, tem muito a ver com o fato dessa abordagem ser declarativa, e ajuda a escrevermos um código mais legível e reutilizável, afinal códigos imperativos geralmente dependem do contexto em que eles estão executados.

Era isso. Espero que a leitura tenha valido a pena.
