---
layout: post
title: Web Workers FTW!
summary: Como todos sabemos, paralelismo sempre foi um problema quando estamos falando de JavaScript. Porém, com a Web Workers API a situação muda. Vamos conhecer essa oitava maravilha do mundo!
category: "Front-end"
---
![Web Workers FTW!](http://andafter.org/media/images/posts/thumbs/770x300/webworkers_770x300.jpg)

Imagine a seguinte situação: uma página onde você carrega um plugin de slideshow, autenticação com Facebook e load de dados através de JavaScript, entre outra carralhada de arquivos. Comum, certo? Agora me diga, quantas vezes você teve problema com botões que não respondiam aos seus eventos? Nenhum? Ok. Quantas vezes essa aplicação gerou um crash no navegador?

Se você já enfrentou os problemas que citei acima, keep calm, você não está 100% errado. Cada vez mais nós, desenvolvedores, estamos fazendo aplicações que exigem trabalho pesado usando JavaScript. Pensando nisso, eis que surge a oitava maravilha do mundo, [Web Workers API](http://www.w3.org/TR/workers/).

## O que é paralelismo

Vamos à uma rápida explicação. Caso você já esteja ligado no assunto, pule para o próximo tópico.

Paralelismo, ou melhor, **Programação Paralela**, é a forma com que conseguimos fazer um algoritmo executar diversas tarefas usando mais de um processo, thread, ou no nosso caso, **workers**! Tudo isso com o intuito de ganhar mais performance. Não entendeu? Beleza. Uma imagem fala mais do que mil palavras:

![Representação de paralelismo](http://andafter.org/media/users/1740/web-workers-explained.jpg)

Se interessou por Programação Paralela? Ainda não entendeu? Aí vai uma boa referência: [https://computing.llnl.gov/tutorials/parallel_comp/](https://computing.llnl.gov/tutorials/parallel_comp/).

## Como funciona

Atualmente é possível executar eventos de forma assíncrona usando `setTimeout()`, `setInterval()`, `XMLHttpRequest` entre outros hacks (ok, chutem-me). Porém, isso não quer dizer que é paralelo, sendo que os eventos são executados quando o script é renderizado.

Web Workers trabalham de forma diferente. E melhor. Como JavaScript não é uma linguagem que usa multi-threads, os Workers de certa forma "estendem-a" em alguns casos, possibilitando executar tarefas com mais uma thread. A API define que processos serão executados de forma assíncrona em outro contexto, por scripts que se comunicam através de mensagens que são passadas pelo método `postMessage()`.

## Mãos à obra

Para não sair da tradição (risos), vamos à um "Hello World".

Como Web Workers executam paralelamente de forma isolada ao processo principal, vamos criar um novo arquivo que receberá a "ordem" desse processo e executará sua função. No nosso exemplo, chamei de **worker.js** e possui a função abaixo:

```javascript
  // recebe a mensagem do processo principal
  onmessage = function(event) {
    var message = event.data;
    var result = message + ' no And After!';
    postMessage(result);
  }
```

Feito isso, vamos criá-lo no processo principal:

```javascript
  var myWorker = new Worker('worker.js');
```


Para passar nossa informação, precisamos do método `postMessage()`:


```javascript
  var message = 'Web Workers';
  myWorker.postMessage(message);
```

E para finalizar, precisamos receber a mensagem do Worker:

```javascript
  // Recebe a mensagem do worker
  myWorker.onmessage = function(event) {
    alert(event.data);
  };
```

Se não quiser fazer na mão, é só baixar o [exemplo aqui](http://www.euescuto.com.br/worker-and-after.zip). Ou, você pode ver uns exemplos [nesse link](http://www.html5rocks.com/en/tutorials/workers/basics/#toc-gettingstarted).

PS: isso não vai rodar localmente por restrições dos browsers modernos. Então, para aproveitar a trégua, aproveito para explicar que, como workers são arquivos externos, não será possível carregá-lo através de scripts que começaram com http:. Para ver esse exemplo funcionando, clique aqui.

PS: isso não vai rodar localmente por restrições dos browsers modernos. Então, para aproveitar a trégua, aproveito para explicar que, como workers são arquivos externos, não será possível carregá-lo através de scripts que começaram com http:. Para ver esse exemplo funcionando, [clique aqui](http://www.euescuto.com.br/worker-and-after/worker-andafter.html).

Leia mais sobre segurança em [http://www.html5rocks.com/en/tutorials/workers/basics/#toc-security](http://www.html5rocks.com/en/tutorials/workers/basics/#toc-security).

Talvez você esteja pensando *"porrah, pra quê tanta enrolação para escrever uma mensagem na tela?"*. Calma lá. Web Workers servem para auxiliar em tarefas porradas, como renderização 3D, cálculos que exigem mais desempenho, etc.

**Importante: caso você não tenha percebido, o nosso exemplo não acessa o DOM diretamente. Web Workers não tem acesso ao DOM!**

Além do DOM, Web Workers não tem acesso aos objetos `window`, `document` e `parent`. Mas calma, apesar disso, Web Workers tem acesso aos seguintes recursos do JavaScript:

- `navigator` com quatro propriedades: `appName`, `appVersion`, `userAgent` e `platform`.
- `location` (somente leitura)
- `self`, que aponta para o objeto worker global
- `importScripts()` para fazer load de um JavaScript externo
- todos os objetos do JavaScript, como `Object`, `Array`, `Math`, etc
- `XMLHttpRequest`
- `setTimeout()/clearTimeout()` e `setInterval()/clearInterval()`
- há também um método `close()` usado parar um Worker

## Conclusão

Web Workers é algo novo, logo, a API pode mudar a qualquer hora, e pra melhor. Acredito que eles irão além do browser. Isso é só o começo, e já é demais!

**Referências:**

- [Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers), no Mozilla Developer Network
- [Especificação do Web Workers](http://www.whatwg.org/specs/web-apps/current-work/multipage/workers.html), no WHATWG community
- [The Basics of Web Workers](http://www.html5rocks.com/en/tutorials/workers/basics/), no HTML5 Rocks
- [Web Workers rise up!](https://dev.opera.com/articles/web-workers-rise-up/), no Dev Opera.


[Publicado originalmente no blog O Desenvolvedor.](http://odesenvolvedor.andafter.org/publicacoes/web-workers-ftw.html)
