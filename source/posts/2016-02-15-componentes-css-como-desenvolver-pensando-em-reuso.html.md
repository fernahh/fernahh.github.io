---
layout: post
title: "Componentes CSS: como desenvolver pensando em reuso"
summary: Cada vez mais precisamos de aplicações dinâmicas e modularizadas. E como criar componentes encapsulados em uma linguagem onde tudo é global? Veremos aqui paradigmas e aprender como desenvolver CSS escalável em tempos de módulos JavaScript e Web Components.
---

A palavra *"componente"* nunca foi tão usada na web como nos últimos meses. Na era de bem-sucedidos *frameworks* e bibliotecas como [React](https://facebook.github.io/react/) e [Angular2](https://angular.io/), que se baseiam nesse conceito, é cada vez mais necessário investir tempo em como arquitetar nosso CSS. A velha e boa técnica de *dividir para conquistar* mais do que nunca nos é uma boa opção.

Para definir um componente, ele deve ser **auto-suficiente**, capaz de **encapsular** funcionalidades e permitir uma **API de acesso**. Pensando do ponto de vista de um seletor CSS, vamos exemplificar com um componente de botão:

```css
  .Button {
    display: block;
    max-width: 300px;
    background-color: black;
    color: white;
  }
```

Levando em conta a definição literal, podemos dizer que esse componente é auto-suficiente, afinal, se usarmos somente ele teremos um estilo de botão. Porém, não temos uma API de acesso bem definida, com entrada e saída. Problemas como esse são comuns e inevitáveis com CSS puro. Eles são ainda mais frequentes quando precisamos lidar com aplicações complexas.

Uma das formas encontradas para contornar nossos problemas com CSS foram [metodologias de escrita](http://tableless.com.br/oocss-smacss-bem-dry-css-afinal-como-escrever-css/), como BEM, OOCSS, SMACSS e DRYCSS. Mesmo assim, elas são facilmente burláveis, afinal não há como controlarmos algo em uma linguagem que não nos lança exceção.

Antes de continuar a leitura, recomendo que entenda como funciona a [especificidade de seletores e henraça em CSS](http://tableless.com.br/afinal-como-usar-heranca-no-css/).

## Escopo global, *refactoring* e estados

Se pudéssemos elencar três problemas sérios com nossas queridas folhas de estilo, podemos dizer que são: escopo global, difícil de refatorar e custoso para lidar com estados.

*Escopo Global* é de longe algo que sabemos que é ruim. Se você visitar a página sobre [boas práticas JavaScript no w3fools](http://www.w3schools.com/js/js_best_practices.asp), irá ver que funções e variáveis globais são ruins. Com CSS não é diferente. O problema é que quando pensamos em uma página *web*, logo imaginamos uma árvore. Porém, se levarmos em conta o [CSSOM](https://www.w3.org/TR/2013/WD-cssom-20131205/), veremos que todos os seletores fazem parte do mesmo escopo:

![escopo global de seletores](http://i.imgur.com/8xNFR7c.jpg?1)

Isso é a cascata. Um seletor filho sempre irá herdar os estilos do pai. Por anos convivemos com ela e aprendemos a tirar proveito disso. O [Bootstrap](http://getbootstrap.com/), *framework* CSS mais bem sucedido até então, faz uso bem inteligente do efeito cascata. Porém, em um cenário que desejamos encapsular funcionalidades, o efeito cascata pode ser um grande inimigo. Voltando ao nosso componente de botão, vamos entender porque a cascata pode ser prejudicial há um componente.

Vamos analisar o exemplo abaixo:

<p data-height="255" data-theme-id="0" data-slug-hash="EPMYMy" data-default-tab="result" data-user="fernahh" class='codepen'>See the Pen <a href='http://codepen.io/fernahh/pen/EPMYMy/'>EPMYMy</a> by fernahh (<a href='http://codepen.io/fernahh'>@fernahh</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Nosso componente `.Button` herdou o estilo da propriedade `text-transform` do componente `.Dropdown` e seus filhos. Dessa forma podemos provar que o componentes com CSS puro não encapsulam estilo, afinal eles "vazam" para outros componentes de nossa página.

O segundo problema que temos com CSS é *refactoring*. Através do [httparchive.org](http://httparchive.org/) podemos analisar que as folhas de estilo só crescem. Em cinco anos, pulamos de arquivos de 10kb para 80kb. Obviamente precisamos levar todo o contexto do crescimento da web, mas também devemos ser sinceros e admitir que é sempre mais fácil adicionar uma nova regra ao refatorar algo antigo. Quem nunca adicionou uma nova regra ao *markup* ao invés de refatorar o que existe que atire a primeira pedra.

Uma das soluções nativas para resolver o problema com escopo de seletores é o [Shadow DOM](https://www.w3.org/TR/shadow-dom/). Resumidamente, ele nada mais é uma API que nos permite criar elementos de DOM **independentes** e **isolados** do restante da página, ou seja, uma DOM isolada dentro da própria DOM.

As vantagens dessa abordagem é que faz parte de um pequeno grupo de tecnologias que possuimos para isolar marcação, comportamento e estilo. Além disso, componentes criados com Shadow DOM podem receber parâmetros. Porém, nem tudo é perfeito. O isolamento de escopo que nos permite criar *widgets* como a tag `<video>` e `<audio>`, é prejudicional falando de estilo. Isso porque a cada Shadow DOM, sua página perde o estilo. Por final, sem contar que [não funciona no IE/Edge, Firefox e Safari](http://caniuse.com/#feat=shadowdom) e não resolve problemas com estado.

Falando em estado, esse parece ser nosso grande desafio. No *JavaScript* estamos carecas de saber que é custoso manipularmos o *DOM*. Quando lidamos com estado, é isso que precisamos fazer: **adicionar e remover estilo dependendo do estado de nosso componente**. Pensando em resolver esse problema, na [CSSConf](https://www.youtube.com/watch?v=NoaxsCi13yQ) de 2015, [Colin Megill](https://twitter.com/colinmegill) apresentou uma palestra com um nome polêmico: **Inline Styles are About to Kill CSS**. Recomendo você assistir, no mínimo você ficará em choque com o turbilhão de informações ou irá achar que o cara é maluco. Enfim, essa *talk* foi importante no ponto de levantar diversas discussões na comunidade *web* sobre a tal "morte das folhas de estilo".

[Inline Styles](https://facebook.github.io/react/tips/inline-styles.html) surgiu com o React, que por sinal é a biblioteca que melhor lida com estados na atualidade. Desse ponto de vista, faz muito sentido, afinal a performance será bem melhor, temos regras encapsuladas e faz todo sentido quando lidamos com visualização de dados. Porém temos outros problemas, principalmente porque não há como cachear estilo *inline*.

Ainda antes dessa palestra do Megill, um dos engenheiros do [Facebook](https://facebook.github.io/), [Christopher Chedeau](http://blog.vjeux.com/) cutucou diretamente em nossas feridas, principalmente no slide abaixo:

![CSS Problems](http://i.imgur.com/wBw0LL2.jpg?1)

Esse slide foi tão importante que, provavelmente, irá mudar nossa forma de estilizar com CSS. Uma das formas disponíveis que surgiram são os [CSS Modules](https://github.com/css-modules/css-modules).

## CSS Modules: o futuro passa por aqui

Desde a revolução dos pré-processadores, não tivemos nenhuma grande iniciativa que nos fizesse repensar nossa forma de escrever CSS. Mas isso pode mudar quando falamos de CSS Modules.

Resumidamente, podemos definir essa tecnologia como **folhas de estilo que possuem escopo local**. Aqui já podemos concluir que precisamos de uma tarefa de *build*, pois CSS Modules não funcionam nativamente.

Na prática, supomos um cenário com nosso mesmo componente de botão:

```css
  /* components/button.css */
  .Button {
    display: block;
    max-width: 300px;
    background-color: black;
    color: white;
  }

  .danger {
    background-color: red;
  }
```

Para usar esse componente, precisaremos importar esse módulo em um componente JavaScript:


```javascript
  /* components/button.js */
  import button from './button.css';

  buttonElem.outerHTML = `<button class=${button.danger}>Enviar</button>`
```

Nossos *output* de CSS será como no *snippet* a seguir:

```css
  .components_Button__danger__abc5436-20WEds96_Ee1ra54 {
    display: block;
    max-width: 300px;
    background-color: red;
    color: white;
  }
```

Através desse breve *overview* podemos notar que há uma mudança de *workflow* na forma de desenvolvermos CSS. O nome gerado no *output* nos leva a conclusão que precisamos de `sourcemaps` para *debugging*. Além disso, você deve estar se perguntando:

> "Como faço para usar herança?"

Podemos definir regras globais com CSS Modules, através da declaração com a seguinte sintaxe:

```css
  :global(.Button) {
    display: block;
    max-width: 300px;
    background-color: red;
    color: white;
  }
```

Isso quer dizer que o módulo `.Button` estará disponível para todos os módulos de nossa aplicação. Além disso temos a *keyword* `composes`, que receberá um módulo. Se você já captou a ideia, deverá ter percebido que funciona parecido com o `@extend` do Sass.

```css
  .Button_group {
    composes: button from '../componentes/button.css';
  }
```

Além disso também podemos gerenciar dependências de componentes através de [módulos *JavaScript*](http://www.2ality.com/2014/09/es6-modules-final.html).

## Conclusão

Até os mais puristas (me incluo nesse grupo) precisam dar o braço a torcer e aceitar que apenas HTML, CSS e JavaScript não são mais suficientes para desenvolvermos aplicações ricas. A *web* evoluiu a um nível que necessita de ferramentas auxiliares no dia-a-dia do desenvolvedor *front-end*. **CSS Modules é mais uma delas**.

Precisamos testar, arriscar e utilizar isso em nossos produtos. Apenas dessa forma poderemos dizer se algo irá nos servir ou não.

Ah, e pra não esquecer, **sempre aposte em ideias e iniciativas da comunidade**.
