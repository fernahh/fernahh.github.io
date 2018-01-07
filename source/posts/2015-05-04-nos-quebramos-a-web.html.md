---
layout: post
title: Nós quebramos a web
summary: É sempre difícil apontar o erro de alguém. Ainda mais para pessoas que não aceitam críticas. Porém, é preciso olhar para nós mesmos para corrigir nossos problemas.
category: "Front-end"
---

Depois das grandes evoluções que tivemos na web (HTML5, CSS3 e novas APIs JavaScript), junto vieram alguns problemas, aquela história de *"Com grandes poderes vem grandes responsabilidades"*. As novas features da Open Web são fantásticas. Lembro-me bem quando nós eramos cautelosos no usar certos recursos com medo de não conseguir entregar o conteúdo ao usuário. No fim, surgiram (e surgem) *polyfills* e n maneiras de darmos *fallback* ao usuário com menos recursos. Sendo assim, conseguimos entregar um conteúdo rico para usuários com recursos modernos, e o conteúdo com uma experiência mais simples à usuários com recursos simples.

Tudo perfeito? Na teoria sim, na prática não.

## Ao menos tente aplicar Progressive Enhancement

Em poucas palavras, **Progressive Enhancement** é uma maneira de desenvolver aplicações de forma a suportar browser antigos, conexões lentar, etc. Se você não sabe o que é esse termo, vá atrás porque passou da hora. *(Recomendo esse post do @diegoeis sobre o assunto: [Fault Tolerance: a base do Progressive Enhancement](http://tableless.com.br/faut-tolerant-base-progressive-enhancement/))*

Há pouco tempo eu era um hater de aplicações e frameworks que não davam suporte ao <abbr alt="Progressive Enhancement"></abbr> ou dificultam esse tipo de abordagem. Mas extremismo nunca é saudável. Em um comentário que fiz em um tweet do [@danielfilho](https://twitter.com/danielfilho), ele respondeu algo que me fez mudar de opinião:

<blockquote class="tw-align-center twitter-tweet" lang="en"><p><a href="https://twitter.com/fernahh">@fernahh</a> it might not support it. but you need to be aware that it’s not everyone who lives on the 1st world &amp; have blazing fast connection.</p>&mdash; Daniel Filho (@danielfilho) <a href="https://twitter.com/danielfilho/status/585604385440432129">April 8, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


**É isso!** Nem todo mundo tem uma internet rápida ou o último release do navegador mais moderno. A ideia da web sempre foi ser inclusiva e entregar o conteúdo a todos. Mas por que não fizemos isso? Por que estamos usando o HTML só pra carregar uma tag `<script>`?

Ao menos tente aplicar Progressive Enhancement. Tudo depende de onde sua aplicação irá rodar, quem serão os usuários dela, mas se estiver na "web pública", considere (muito) o PE.

## A web é acessível

A web em sua forma mais simples é acessível. Veja o exemplo abaixo, só usei [Normalize](http://necolas.github.io/normalize.css/) e HTML.

<p data-height="350" data-theme-id="0" data-slug-hash="OVJNWB" data-default-tab="result" data-user="fernahh" class='codepen'>See the Pen <a href='http://codepen.io/fernahh/pen/OVJNWB/'>OVJNWB</a> by fernahh (<a href='http://codepen.io/fernahh'>@fernahh</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Contraste perfeito. Links legíveis. Botões que parecem botões. Um leitor de tela provavelmente se daria bem lendo o conteúdo dessa página, mesmo sem uma extensão com [WAI-ARAI](http://tableless.com.br/wai-aria-estendendo-o-significado-das-interacoes/). Um usuário provavelmente enterpretaria rápido a informação com elementos expressados dessa forma.

Mas se a web na sua forma mais crua é acessível, por que desenvolvedores fazem isso?

![Instagram](http://41.media.tumblr.com/49748cc0168a329867f45fcc807ae650/tumblr_mslkvjXcmX1sgju96o1_1280.png)

Todos tem a resposta para a pergunta acima na ponta da língua: desenvolvedores fazem isso pelo *hype* de usar novas tecnologias, mas esquecem de atender todos os usuários, **quebrando a web**.

## O reencontro com o caminho para uma web inclusiva

Estamos seguindo o embalo das novas tecnologias deixando de lado o mais básico que um desenvolvedor web deve saber, que consiste em aprender protocolos, algoritimos, HTML, CSS e JavaScript. Apenas com esses caras já conseguimos entregar o conteúdo com uma experiência bacana ao usuário.

Estude padrões.

*Frameworks*, bibliotecas e pré-processadores são fantásticos, mas primeiro vamos fazer o que a web se propôs a fazer desde seu início: **ser inclusiva**.

[Publicado originalmente no Tableless.](http://tableless.com.br/nos-quebramos-web/)
