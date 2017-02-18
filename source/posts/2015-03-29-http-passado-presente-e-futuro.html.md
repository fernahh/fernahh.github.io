---
layout: post
title: HTTP - passado, presente e futuro
summary: O principal protocolo para desenvolvedores web irá mudar. Grandes mudanças de performance. Um pouco de história, como ele funciona atualmente e o futuro com o HTTP 2.
category: Development
tags: http, http2, web, protocolo HTTP
---

Para quem acompanha o mundo tecnológico sabe que em muito pouco tempo o que é padrão pode se tornar defasado. Mas um dos pilares da web continua igual a quase duas décadas, o HTTP. A versão atual, 1.1, já existe há 16 anos. Sim, DE-ZES-SEIS anos *(procurei no Google para saber quais eram as sílabas dessa palavra, ok)*.

Em sua representação longa, HTTP é uma abreviação para *HyperText Transfer Protocol*. Ênfase na paralavra Hyper<strong>Text</strong>.

Vamos a um exemplo de uma request e response HTTP:


```http
  telnet www.organicadigital.com.br 80
  Trying 107.170.169.4...
  Connected to www.organicadigital.com.br.
  Escape character is '^]'.
  GET / HTTP/1.1
  Host: www.organicadigital.com.br

  HTTP/1.1 200 OK
  Content-Type: text/html; charset=utf-8
  Transfer-Encoding: chunked
  Connection: keep-alive
  Status: 200 OK
  X-UA-Compatible: IE=Edge,chrome=1
  ETag: "4618f5c69dfa0ee8cb492830482c0bbe"
  Cache-Control: max-age=0, private, must-revalidate
  Set-Cookie: _organicadigital_session=BAh7B0kiD3Nlc3Npb25faWQGOgZFVEkiJTRhYmFkYzczZTlkZDkwNWNlZmI0ZjljZWJjNGQ3OGI2BjsAVEkiEF9jc3JmX3Rva2VuBjsARkkiMW81aUF1dnlZeHBZaXpzOE9GalNyYXkvMHVudHF4SGlTQ0tmVHVxVFh6OUE9BjsARg%3D%3D--9d0b2992a517706a8c98832ca05b504c30eb9776; path=/; HttpOnly
  Date: Sat, 21 Mar 2015 19:23:51 GMT
  X-Rack-Cache: miss
  X-Request-Id: f2eb550c1f45d3ccac102908752d0724
  X-Runtime: 0.052659
  X-Powered-By: Phusion Passenger 4.0.42
  Server: nginx/1.6.0 + Phusion Passenger 4.0.42

  1000
  <!DOCTYPE html>
```

Só texto, certo?

Deixo a palavra com o criador da web, [Tim Berners-Lee](http://www.w3.org/People/Berners-Lee/):

> O hypertexto fornece uma única interface de usuário para muitas grandes classes de informações armazenadas, tais como relatórios, notas, bases de dados, documentação e sistemas online de ajuda.

Alguém aí leu algo sobre "imagem", "vídeo" ou "múltiplas interfaces"? Aí é que começam nossos problemas e gambiarras para resolve-los. Durante todo esse tempo, como homem sempre fez durante sua evolução, fomos achando soluções e nos adaptando as condições que nosso ambiente nos proporcionava. Foi assim que surgiram técnicas como *spriting* e *concatenating*. Além disso, também surgiram serviços e ferramentas como CDNs e [SPDY](http://www.chromium.org/spdy). Vamos dar um pouco mais de atenção para esse último.

## Tudo começou com o SPDY

O SPDY (leia-se *speedy*) é um protocolo criado pelo [Google](http://www.google.com) para conseguir ter aplicações mais performáticas. Vale lembrar que ele **não é um substitudo** para o HTTP, ele nada mais é que uma camada a mais ao protocolo:

![SPDY](http://i.imgur.com/CR2xTkD.jpg?1)

[Segundo o próprio Google](http://www.chromium.org/spdy/spdy-whitepaper) é possível reduzir em até 64% o tempo de carregamento de uma página usando SPDY. O mais importante desse cara, é que ele serviu de base para a [especificação do HTTP2](http://http2.github.io/), que iremos ver agora.

## As novidades

### Compressão automática

A primeira grande mudança do HTTP 1.1 para sua segunda versão, é que ele deixa de ser texto para ser binário. Ou seja, o protocolo que foi projetado para humanos agora foi projeto para máquinas. Uma interação HTTP2 ficaria mais ou menos assim:

```http
  0010101010101010101

  01010101
  010101010100
  0101010101
  01010101101
  010101010

  ?T?%.?JI?;1?R,1?T?.?[mŚ???,1?   Q?_?*f0
  ?{{?un?T?%.?JI?;1?R,1?T?.?[mŚ???,1?   Q?
  _?*f0?{{?un,1?T?.?[mŚ?T?%??????????0
```

Nesse exemplo também podemos observar que a compressão gzip é **obrigatória** no HTTP2.

Como você deve ter percebido, o essa mudança irá quebrar em navegadores antigos. O fallback nesse caso deverá ser o uso HTTP2, sendo assim, de quebra ganhamos segurança.

### Request, process, response...

Aprendemos a conviver com essa rotina:

- Pedir algo pro servidor;
- Esperar ele processar;
- Receber a resposta.

Podemos dizer que esse é um dos maiores gargalos da web. Só temos direito a uma request por vez.

![HTTP/1.1](http://i.imgur.com/qsoGVRW.jpg?1)

No HTTP2 tudo vai mudar. Dê adeus à técnicas como sprite. Agora teremos **requests e response PA-RA-LE-LAS!** O nome dessa belezinha é *multiplexing*. Será lindo. Veja comigo no replay:

![Multiplexing](http://i.imgur.com/FBRkNC9.jpg?1)

### Priorizações de requests

Poderemos priorizar recursos que serão entregues ao usuário. Na prática, deixaremos de lados códigos inline que deveriam chegar na primeira response, agora teremos mais controle sobre a renderização de nossas aplicações. Saca só:

![Priorização de requests](http://i.imgur.com/gAPdaUR.jpg?1)

### O servidor também manda!

Isso mesmo. Os servidores poderão nos dizer quando um recurso está processado e enviar mesmo sem o cliente fizer uma request. Isso é tão óbvio que nem precisaria desenhar, mas vamos lá:

![Server Push](http://i.imgur.com/U7mFAbG.jpg?1)

## Nem tudo são flores

Depois de mostrar todas essas maravilhas, podemos observar que essa nova versão do protocolo é basicamente melhorias de performance. Porém, teremos alguns custos que deverão ser pagos.

As boas práticas de hoje serão futuros problemas no HTTP/2. Não fará mais sentido concatenar assets, por exemplo.

- Por que entregar um arquivo gigante pra economizar uma request se a quantidade delas não serão mais um problema?
- Abrir conexão de outro domínio para carregar assets não será eficiente em um protocolo que preza por "todos os ovos na mesma cesta".
- Nossos servidor serão mais exigidos.
- Deveremos ter HTTPS como fallback, ou seja, mais custo.

**Bônus**

Na última sexta-feira, dia 27, apresentei uma talk sobre HTTP na empresa onde trabalho, a Orgânica Digital. Basicamente é esse artigo de forma ilustrada:

<script async class="speakerdeck-embed" data-id="f73c06a98c284f379bdc8825613cdd5e" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

Por hoje é isso.

**Referências:**

- [http://blog.caelum.com.br/as-fantasticas-novidades-do-http-2-0-e-do-spdy/](http://blog.caelum.com.br/as-fantasticas-novidades-do-http-2-0-e-do-spdy/)
- [http://pt.slideshare.net/caelumdev/http2-spdy-e-otimizaes-web-front-in-macei-2014-srgio-lopes7](http://pt.slideshare.net/caelumdev/http2-spdy-e-otimizaes-web-front-in-macei-2014-srgio-lopes7)
- [https://mattwilcox.net/web-development/http2-for-front-end-web-developers](https://mattwilcox.net/web-development/http2-for-front-end-web-developers)
- [https://http2.github.io/](https://http2.github.io/)

[Texto publicado no Seeds, blog da Orgânica Digital.](http://seeds.organicadigital.com/post/115022491735/http-passado-presente-e-futuro)
