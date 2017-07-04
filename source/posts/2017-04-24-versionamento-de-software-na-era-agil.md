---
layout: post
title: "Versionamento de software na Era Ágil"
summary: Muito já se falou sobre como planejar e desenvolver projetos usando métodos ágeis, mas quase nunca vamos como fazer a entrega contínua de software distribuídos. Esse post fala sobre como versionar software na era ágil.
---

O [movimento ágil](http://www.manifestoagil.com.br/) já é realidade no desenvolvimento de software há um bom tempo. Cada vez mais empresas se adaptam a metodologias ágeis e procuram desenvolvedores com experiências nesse aspecto.

A maioria das leituras sobre metodologias ágeis são sobre planejamento e desenvolvimento de produtos. O que ainda não é tão presente em artigos sobre esse assunto é como fazer a entrega contínua de softwares distribuídos.

Nesse artigo vamos ver quais os problemas de versionamento enfrentados ao escolher uma arquitetura distribuída de software e como fazemos para resolver isso na [ContaAzul](https://contaazul.com/).

## Arquiteturas distribuídas

![Foto de Vadim Sherbakov](https://cdn-images-1.medium.com/max/2000/1*PB7Z4QDmCIg8O7Q10H5LMg.jpeg)

A maioria dos softwares desenvolvidos até hoje são estruturas monolíticas, ou seja, toda a base de código está junta, desde a camada de configuração até o cliente. Porém, em um cenário em que temos diferentes times com responsabilidades distintas dentro de um produto, precisamos fazer entregas cada vez mais rápidas. Em um cenário monolítico, acabamos perdendo velocidade e produtividade.

Assim como vários produtos, o ContaAzul busca dividir suas responsabilidades em [microserviços](https://martinfowler.com/articles/microservices.html). No *back-end* temos diversos servidores separados que se conectam através de APIs. No *front-end*, quando possível, buscamos separar a aplicação em módulos que utilizam os mesmos componentes web, que não são nada mais do que *HTML*, *CSS* e *JavaScript*. Além disso, também temos outros produtos web que também utilizam a mesma biblioteca de componentes.

Paralelizar o desenvolvimento através de bibliotecas e microserviços nos dá mais velocidade na hora de fazer *deploy* e *rollback*. Também temos mais controle sobre responsabilidades do que um serviço ou código deve ou não fazer. São inúmeras vantagens em desenvolver *software* com arquitetura distribuída que daria outro artigo só com esse assunto. Em contrapartida, algumas decisões ficam mais burocráticas, e uma delas é como controlar versões.

Falando de componentes web, quando utilizados em diferentes produtos, precisamos de uma API clara de versionamento para que produtos não quebrem em virtude de atualização de versão dos componentes. Esse problema também é conhecido em outras bibliotecas e *frameworks* que são utilizados entre produtos diferentes.

Uma das formas mais populares de manter uma API consistente é o *[SemVer(Semantic Versioning Specification)](http://semver.org/)*, que é usado pela grande massa de projetos Open Source.

## Versionamento Semântico

O versionamento semântico foi criado por [Tom Preston-Werner](http://tom.preston-werner.com/), conhecido como um dos fundadores do [GitHub](https://github.com/). A ideia é simples. Depois de especificar uma API em sua biblioteca, *framework* ou qualquer outra plataforma
de uso compartilhado, você irá indicar mudanças através de incrementos em números específicos. O formato é *X.Y.Z* *(Major.Minor.Patch).* Alguns autores, como [Eric Elliot](https://ericelliottjs.com/), defendem que a definição do formado deveria ser *Breaking.Feature.Fix.*

### Major

Todo projeto deve começar na versão zero (ex: 0.1.0), ou seja, ainda não temos uma API definida. A partir da primeira versão de API, podemos ter a versão **1.0.0** e qualquer alteração que quebre a API, mesmo que pequena, uma nova major version deve ser lançada. Esse é um dos pontos mais “estranhos” quando o *SemVer* é legado a risca. Temos o popular caso do Angular2, que já está na versão 4 por quebra de compatibilidade. Até mesmo na ContaAzul temos bibliotecas que já ganharam até **três major versions** em uma semana.

### Minor

Quando a versão *minor* é incrementada, significa que uma nova *feature* foi lançada.

### Patch

Versões *patch* (ou de correção) são lançadas quando há correção de bugs ou mudanças de segurança que não quebram a API.

É importante lembrar que o incremento de versões são feitos por humanos, logo, o SemVer não é livre de erros. Quando instalamos uma dependência em projetos que usam NPM, geralmente ele acrescenta o caractere * *para indicar que as versões podem ser atualizadas automaticamente quando há *“non-breaking changes”*, sendo elas *minor *ou *patch*. Ele também adiciona o caractere `*`, que indica que
apenas versões *patch* podem ser atualizadas automaticamente.

Para resolver esse problema, o NPM disponibiliza uma opção chamada [“save-exact”](https://docs.npmjs.com/misc/config#save-exact), que não adiciona nenhum desses caracteres em suas dependências.

## Lançando releases

![SpaceX](https://cdn-images-1.medium.com/max/2000/1*FKtuzW1qO8cjszE7eo_Xmw.jpeg)

Apesar de usar o versionamento semântico, muitas vezes os usuários do seu código precisam de mais informações na hora de fazer uma atualização de versão. O GitHub possui uma interface web simples para nos auxiliar nessa tarefa.

![https://github.com/ContaAzul/creditcard.js/releases](https://cdn-images-1.medium.com/max/1600/1*VH1cEJHQL5At8HssoPn7yw.gif)

Cada *release* é marcada com uma [tag no Git](https://git-scm.com/book/pt-br/v2/Git-Basics-Tagging), que aponta para um *commit* do seu projeto. Além disso, você pode adicionar um nome e descrição para a *release*. Na descrição (*changelog*), é importante apontar de forma
direta quais as principais novidades na versão, sob 3 títulos, *Major, Minor e Patch.*

**Exemplo:**

```
  ## Major changes
  - Breaking change X
  - Breaking change Y
  - Breaking change Z

  ## Minor changes
  - New feature X
  - New feature Y
  - New feature Z

  ## Patches
  - Fix X
  - Fix Y
  - Fix Z
```

## Conclusão

O versionamento é só um dos vários processos necessários quando temos arquiteturas distribuídas. Existem inúmeros outros assuntos nesse escopo, que sem dúvidas serão compartilhados aqui no blog. Na ContaAzul, ele nos auxilia principalmente em bibliotecas compartilhadas em diferentes produtos, e aprendemos na prática o valor que ele nos trás.

Espero ter ajudado!

[Publicado originalmente no Blog da ContaAzul.](https://engineering.contaazul.com/versionamento-de-software-na-era-%C3%A1gil-8b53f6c08192)
