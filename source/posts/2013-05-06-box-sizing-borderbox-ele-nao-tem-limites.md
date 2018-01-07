---
layout: post
title: box sizing borderbox, ele não tem limites
summary: Sigo a risca a ideia de que 80% do que aprendemos com desenvolvimento é na prática. Com box-sizing foi assim. Uma das propriedades mais legais do CSS3 que pode ser usada em todos seus projetos!
category: "CSS"
---

![CSS box-sizing](http://andafter.org/media/images/posts/thumbs/770x300/box-sizing_770x300.jpg "CSS box-sizing")

Mais do que nunca a onda do momento são sites responsivos. Aliás, muito mais que uma "onda", ter um site responsivo, na minha opinião, é questão de obrigação. Mas bem o foco do post não é esse. O foco é que sites responsivos devem ter larguras relativas.

Nos últimos projetos que tive passei um trabalho enorme com elementos que possuem borda, justamente pelo fato de usar larguras relativas (em %). OK, e como faz para descontar aquela borda de 1px de um elemento que tem 50% de largura? É aí que entra uma das propriedades mais legais do CSS3: **box-sizing**.

Por padrão o `box-sizing` vem com `box-sizing: content-box`, o que indica que o tamanho dos elementos são definidos pelo seu conteúdo. Porém, se usarmos `box-sizing: border-box` a situação muda. Dessa forma o tamanho fica por conta da soma do conteúdo com a borda e o padding. Maravilha, né?!

Para entender melhor, [clique aqui e veja uma demonstração](http://codepen.io/lfernahh/full/jFobG).

Há desenvolvedores que já usam essa regra como seletor universal. Tem toda aquela discussão sobre a performance e tal, mas quem quiser usar, fica a dica:


```css
  * {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing:border-box;
    }
```

## Suporte

Aqui vem a motivação de eu escrever esse post. No desenvolvimento do site da Mosh Creative, eu e o [@rodrigowillrich](https://twitter.com/rodrigowillrich) peleamos para fazer isso sem usar box-sizing. Porém, depois de muito sofrimento fomos pesquisar sobre o browser support e veio a surpresa.

Por incrível que pareça essa propriedade funciona do IE8 pra cima! Caso você precisa suportar os IE7 e IE6, pode usar esse [polyfill](https://github.com/Schepp/box-sizing-polyfill). Para o Firefox você ainda deve ser usar o prefixo **-moz-** e também deve usar **-webkit-** para versões do iOS4 pra baixo e para o browser do Android 2.3 pra baixo. Mais informações no [HTML5Please](http://html5please.com/).

Concluindo, o **box-sizing: border-box**, assim como a zuera, ele não tem limites!

[Publicado orginalmente no And After.](http://andafter.org/publicacoes/box-sizing-border-box-ele-nao-tem-limites.html)
