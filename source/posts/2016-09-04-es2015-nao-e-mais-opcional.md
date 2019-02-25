---
layout: post
title: "ES2015 não é mais opcional"
summary: Apesar de parecer muito tempo do release oficial do ES2015, a uso do padrão não é absoluto. Esse artigo busca mostrar os principais valores e razões para adotarmos de vez a versão oficial do JavaScript.
category: "JavaScript"
---

!["Choice", foto do Michael Endy — http://bit.ly/2cAfVoR](https://i.imgur.com/RsuVUtn.jpg)

A adoção a novas tecnologias na web sempre foram um tabu. As APIs do HTML5 ainda são questionadas devido ao suporte dos browsers. Porém, a comunidade sempre buscou caminhos que facilitassem a vida do desenvolvedor sem deixar de suportar browsers mais antigos, afinal, a web nasceu para ser inclusiva. Foi assim que surgiram projetos fantásticos como [Modernizr](https://modernizr.com/) e [HTML5Please](http://html5please.com/).

Antes dos primeiros anúncios de novas features do ES2015 surgiram várias ferramentas que tentavam resolver problemas triviais que o JavaScript não resolvia. Podemos citar aqui duas tecnologias que mais se popularizaram com o mesmo propósito, [TypeScript](https://www.typescriptlang.org/) e [CoffeeScript](http://coffeescript.org/). Além dessas, também surgiram inúmeros frameworks e bibliotecas que tem o mesmo objetivo: **facilitar a vida do desenvolvedor JavaScript**.

Assim como aquele ditado que diz *“há males que vem para o bem”*, tenho a impressão que ocorreu o inverso na comunidade web. Novas tecnologias que vieram para “o bem” acabaram criando uma barreira enorme entre a adoção de novas tecnologias e desenvolvedores puristas. Infelizmente, nesse balaio enorme de bibliotecas e frameworks, colocaram junto a nova versão do ECMAScript. O que melhorou absurdamente os valores da linguagem acabou sendo encarado como um luxo. Porém, adotar o novo padrão do JavaScript não é sobre opção, é sobre permitir que seu produto tenha a possibilidade de um código mais legível, menos vulnerável a bugs e livre de hacks para contornar features básicas que qualquer linguagem de programação precise.

Não vou mostrar e ensinar como cada feature da ES2015 funciona. Pra isso existem inúmeros posts e bibliografias ricas sobre o assunto. Mesmo assim, não posso deixar de citar algumas melhorias indispensáveis.

## Hoisting, variáveis e funções

Simplicidade é uma das melhores características de que um código está bem escrito. Para ser simples, um código deve ser legível. Em contrapartida, a forma de declararmos variáveis em JavaScript sempre foi confusa. No ECMAScript 2015 a *keyword* `var` não faz mais sentido e já é considerada obsoleta por muitos autores. Vou explicar resumidamente o porquê.

Como todo desenvolvedor JavaScript deve saber, toda função e variável são elevadas ao topo do escopo na hora da execução. Para corrigir esse comportamento em variáveis, o ES2015 introduziu outras duas formas de trabalharmos com valores, `const` e `let` . Ambos não são elevadas ao escopo superior e criam um novo escopo dentro de blocos condicionais ou laços.

No caso de funções, além de ter sua declaração elevada, o seu corpo também é elevado. Mas o maior problema sempre foi o `this`. Ao usar funções como *callback*, o `this` sempre nos causou problema por não executar no contexto que imaginamos. Com [Arrow Functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions) a função executa no contexto do `this`, que é geralmente o que queremos. Na prática, podemos evitar hacks como `var self = this`.

## Modularização

JavaScript nunca teve um sistema de módulos nativo. Para resolver esse problema foram criados diversos padrões para reutilização e manutenibilidade da nossa base de código. Além de padrões, também surgiram especificações robustas como AMD (popularizado pelo RequireJS) e CommonJS, que foi adotado pelo NodeJS.

No ECMAScript 6 ganhamos um sistema de módulos nativo. Sem dúvidas é o maior ganho da linguagem nessa especificação. Além da sintaxe expressiva, módulos resolveram um dos principais problemas em aplicações JavaScript: gerenciamento de pacotes.

Apesar do NPM ser um gerenciador de pacotes maduro, ele não é bala de prata para aplicações que não usam um sistema de módulos robusto. Para resolver esse problema usamos o Bower por muito tempo para gerenciar dependências front-end. Particularmente nunca vi sentido em usar dois gerenciadores de dependência em uma mesma aplicação, mas essa foi a forma com que resolvemos esse problema antes de 2015.

Hoje em dia, usando um module loader como [webpack](https://webpack.github.io/), conseguimos suprir necessidades de aplicações JavaScript usando apenas NPM. Não é à toa que bibliotecas como [lodash](https://lodash.com/) não tem versões oficiais no Bower.

## Transpiladores não são um problema

Um dos argumentos mais usados por quem não quer aderir ao ES2015 são os transpiladores, em outras palavras, o [Babel](https://babeljs.io/). Porém, poucos devem saber que todas as engines modernas [compilam JavaScript para JavaScript](https://twitter.com/_ericelliott/status/764628991831486465). Ou seja, apesar de estranho, não existe mais JavaScript interpretado.

Outra razão para apostar nossas fichas no Babel é observando repositórios de empresas que possuem grandes aplicações web, como [Airbnb](https://github.com/airbnb), [Facebook](https://github.com/facebook/), [Netflix](https://github.com/Netflix) ou [Spotify](https://github.com/spotify). Se os produtos dessas empresas já resolvem seus problemas com ES2015, por que não resolveria o seu?

## Conclusão

Ainda temos um longo caminho tratando-se de JavaScript. Faça benchmarks com outros desenvolvedores ou empresas que possuem produtos web e você poderá tirar suas próprias conclusões. Diferentemente das inúmeras bibliotecas e frameworks que não passam de *hypes*, a evolução do JavaScript resolve problemas do mundo real. Se você continuar escrevendo JavaScript como escrevíamos até 2015, você estará escrevendo código novo que será legado logo ali na frente… amanhã.
