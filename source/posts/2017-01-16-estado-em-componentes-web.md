---
layout: post
title: "Estado em componentes web"
summary: Antes de querer desenvolver algo baseado em uma arquitetura de componentes, você precisa aprender sobre estado de componentes. Esse artigo busca mostrar a evolução desse paradigma e mostrando o que stateful e stateless components.
---
Nunca se falou tanto em componentes para a web como no último ano. O [React](https://facebook.github.io/react/), biblioteca que tem como objetivo facilitar o desenvolvimento de aplicações com componentes, se tornou líder de mercado. Outros frameworks surgiram com a mesma finalidade, e até mesmo a versão [1.x do AngularJS](https://docs.angularjs.org/guide/component) dá suporte ao padrão de desenvolvimento baseado em componentes.

Vamos ver aqui um dos principais conceitos que precisamos saber quando vamos desenvolver algo dessa forma, **stateful** e **stateless components**.

## Os conceitos

Toda aplicação tem um estado. Através dele, temos acesso a informações que podem ser lidas e modificadas, dependendo do paradigma em que a aplicação foi escrita.

Quando falamos de componentes, eles podem ter seus próprios estados ou somente fazer leitura do estado de outro componente. Sendo assim, classificamos eles de duas formas: **stateful** e **stateless.**

### Stateful

Chamamos algo de stateful quando ele possui informações sobre o estado da aplicação, além de poder modificá-lo, sabendo quais foram as mudanças no passado, presente e (as vezes) as futuras.
Podemos exemplificar isso através de uma função impura:

<pre>
<code class="language-javascript">
// estado.
const position = 1;

// função impurta: tem acesso há um
// estado que não faz parte de seu
// escopo.
const increment = () => position + 1;

increment(); // retorna 2.
</code>
</pre>

### Stateless

Diferentemente de algo stateful, quando temos aplicações, funções ou componentes stateless, sabemos que ele não tem informação sobre o estado. Sendo assim, sabemos que algo stateless não muta o estado de algo, assim temos a previsiblidade de que dada uma entrada, teremos sempre a mesma saída.

<pre>
<code class="language-javascript">
// estado.
const position = 1;

// função pura: ao invés de ter
// ter acesso ao estado, ela
// recebe o estado por parâmetro.
const increment = p => p + 1;

increment(); // retorna 2.
</code>
</pre>

## Componentes na era pré-React

O tópico componentes não é novo. Há muito tempo o mercado exigia produtividade maior no desenvolvimento de produtos web. Antes mesmo da era dos frameworks, já tínhamos tentativas de resolver esse problema.

A primeira grande biblioteca que tentou reutilizar código a fim de agilizar o desenvolvimento front-end foi a [jQueryUI](https://jqueryui.com/). Ela tem suas soluções baseadas em JavaScript. Porém, com a evolução do CSS, novos frameworks surgiram sem o uso pesado de script. O primeiro e sem dúvidas mais popular, foi o [Bootstrap](http://getbootstrap.com/).

### Bootstrap

Apesar de não ser pioneiro, podemos dizer que o Bootstrap foi quem popularizou a ideia de componentes para a web. Reza a lenda que *1% da web já foi desenvolvida com esse framework*. Caso você já tenha sacado a diferença dos conceitos, já deve saber que os componentes do Bootstrap são exclusivamente **stateless**. Isso porque eles não guardam e nem podem mudar o estado da aplicação (ao menos que você forçar isso, rs).

O ponto negativo de componentes agnósticos a frameworks, como o Bootstrap, é que para “plugá-los” a sua aplicação, você deverá fazer um *wrapper* para controle de estados. É por esse motivo que existem forks de outros frameworks como [AngularMaterial](https://material.angularjs.org/latest/) ou [React-Bootstrap](https://react-bootstrap.github.io/). No caso do AngularMaterial, os componentes são escritos com diretivas.

### Diretivas do AngularJS

As diretivas do Angular 1.x popularizaram os chamados *custom components*. Através delas podemos inserir comportamento em um elemento do DOM e seus filhos. Caso você nunca tenha tido contato com diretivas, sugiro que dê uma [lida na documentação](https://docs.angularjs.org/guide/directive).

De forma resumida, podemos dizer que uma diretiva nada mais é que uma marcação em um elemento HTML que será interpretada pelo Angular. A sacada boa que o framework teve foi basear-se nas ideias da especificação dos [Web Components](https://www.w3.org/wiki/WebComponents/). Tanto que um dos maiores interessados nessa especificação era o Google, dono do AngularJS.

Para entendermos melhor, vamos ver um exemplo na prática. Abaixo temos uma diretiva que representa um componente de alerta.

<p data-height="265" data-theme-id="dark" data-slug-hash="zNGoyM" data-default-tab="js,result" data-user="lfernahh" data-embed-version="2" data-pen-title="Alert Directive" class="codepen">See the Pen <a href="http://codepen.io/lfernahh/pen/zNGoyM/">Alert Directive</a> by Luiz Fernando Rodrigues (<a href="http://codepen.io/lfernahh">@lfernahh</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Essa diretiva é stateless. Porém, o controle do estado da aplicação pode ser facilmente violado através do `$scope` e `$rootScope` . Ambos os valores dão acesso a outros escopos da aplicação, o que pode ser perigoso se você não tiver um bom controle em seu código.

É recomendado que quando você for escrever um componente usando uma diretiva, sempre deixe o escopo dela isolado através de um objeto literal:

<pre>
<code class="language-javascript">
angular
  .module('alert', [])
  .directive('uiAlert', function() {
    return {
      scope: {},
      template: '<div ng-transclude></div>',
      transclude: true
    };
  });
</code>
</pre>

Mesmo assim, você ainda pode emitir eventos ou ler informações para o `$rootScope,` acessar e mudar o estado de escopo de cima através do `$scope.$parent` . Essa liberdade existe por causa da natureza do framework, que ficou bastante conhecido pela estrutura MV* e o famoso *two-way data binding*.

Escolhas e liberdades como essa são as maiores críticas que o Angular recebe. Isso acontence porque a **divisão de responsabilidades** dele é fácilmente burlável. Não é difícil encontrar projetos que possuem lógica de negócio em diretivas, o que muita vezes a torna stateful, quando como boa prática ela deveria **apenas manipular o DOM**.

Pensando em resolver esse problema, na versão 1.5, foi introduzido o [**component method**](https://docs.angularjs.org/guide/component), e é sobre ele que vamos falar agora.

## Component Method do AngularJS

Segundo a própria [documentação do Angular](https://docs.angularjs.org/guide/component), o `angular.component()` é um tipo especial de diretiva. Ele nos dá mais controle, e agora sabemos definitivamente quando algo deve ser stateless ou stateful. É importante lembrar que esse método não substitui o papel das diretivas. Pelo contrário, ele é até mais restritivo e serve para criarmos uma aplicação baseada em componentes.

A grande vantagem do método `component()` é permitir que uma aplicação seja *one-way dataflow*, sem o uso de `$scope`, `$rootScope` e afins. Além disso, a app ficará mais próxima de paradigmas do Angular2.

Para exemplificar, vamos ver o exemplo abaixo. Nesse caso, o alerta deve desaparecer quando digitado a string `angular` no input disponível.

<p data-height="265" data-theme-id="dark" data-slug-hash="RKPoyw" data-default-tab="js,result" data-user="lfernahh" data-embed-version="2" data-pen-title="Angular Component App" class="codepen">See the Pen <a href="http://codepen.io/lfernahh/pen/RKPoyw/">Angular Component App</a> by Luiz Fernando Rodrigues (<a href="http://codepen.io/lfernahh">@lfernahh</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Perceba que quem mantém o estado é o componente mais externo, que é stateful. O componente de input diz ao seu pai qual o valor digitado no campo, e o pai irá alterar seu estado, refletindo as alterações do alerta.

Os [lifecycle hooks de componentes](https://toddmotto.com/angular-1-5-lifecycle-hooks) foram inspirados pelo React, a biblioteca que tem como objetivo criar uma app baseada nessa estrutura de componentes.

## React Component

De forma simples, componentes React podem ser representados por uma função (ou classe) que recebe parâmetros (props) e retorna um markup através do método `render()` . Para exemplificar, vamos desenvolver nosso componente de alerta usando uma função pura e renderizá-lo através do React.

<p data-height="265" data-theme-id="dark" data-slug-hash="VPKjKd" data-default-tab="js,result" data-user="lfernahh" data-embed-version="2" data-pen-title="React Alert Component" class="codepen">See the Pen <a href="http://codepen.io/lfernahh/pen/VPKjKd/">React Alert Component</a> by Luiz Fernando Rodrigues (<a href="http://codepen.io/lfernahh">@lfernahh</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

A diferença entre usar uma função para definir componentes ao invés de extender a classe `React.Component` , é que extendendo a classe (ou usando o helper method `React.createClass()` ) temos acesso aos chamados “[lifecycle methods](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle)”. Através deles temos acesso sobre quando um componente será montando ou quando ele já está montando.

Agora que já sabemos, resumidamente, como funcionam implementações de componentes com React e AngularJS, vamos entender os conceitos stateful e stateless aplicados a componentes.

## Stateless Component

Componentes stateless dizem **como as coisas se parecem**, ou seja, ele não mantém estado e nem pode alterá-lo. Suas responsabilidades são renderizar informações e emitir eventos para um componente stateful, que será responsável por manter o estado. Com React, podemos representá-los através de *functional components*.

## Stateful Component

Em março de 2015, [Dan Abramov](https://twitter.com/dan_abramov) escreveu um artigo chamado [Presentional and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.emwiglqtn), que até hoje é usado como referência para explicar esse assunto. Na ocasião, ele divide componentes nessas duas categorias, que também são conhecidas com os termos *fat* e *skinny*, *smart* e *dumb* e o que ficou denotado, *stateful* e *stateless.*

Abramov classifica *container components* (stateful) com uma série de items. Levando eles em consideração, podemos dizer que um componente stateful diz **como as coisas funcionam**, isso é: mantendo o estado e passando ele para outros componentes. Seu componente stateful será responsável por guardar o estado, fazer requisições ajax e compor uma parte de sua app. Na prática, um componente stateful é representado por componentes como `<AppContainer>` ,`<NewsContainer>` ou `<UsersList>` .

<p data-height="265" data-theme-id="dark" data-slug-hash="mRrRzY" data-default-tab="js,result" data-user="lfernahh" data-embed-version="2" data-pen-title="React FrameworksContainer " class="codepen">See the Pen <a href="http://codepen.io/lfernahh/pen/mRrRzY/">React FrameworksContainer </a> by Luiz Fernando Rodrigues (<a href="http://codepen.io/lfernahh">@lfernahh</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Perceba que componente `<FrameworksContainer>` é quem possui o estado e passa o conteúdo para seu filho, que é stateless.

## Conclusão

Esses dois conceitos são os primeiros assuntos que você deve aprender ao começar a estudar frameworks que provem uma API para desenvolvimento de aplicações baseadas em componentes. Eles são o ponto de participa para concepção de conceitos que se tornaram absolutos em 2016 e serão fortemente cobrados pelo mercado em 2017. A partir da racionalização do estado em componentes para a web, React, Angular2, programação funcional e outros termos começam a fazer sentido em meio a tanta informação.

Espero ter ajudado.
