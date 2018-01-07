---
layout: post
title: Aprendendo a usar Grunt em dois passos
summary: Grunt já uma ferramenta mundialmente conhecida pela comunidade de desenvolvedores. Mesmo assim, conversando com colegas percebo que a maioria só conhece e não usa. Meu objetivo com esse post é intermediar o primeiro contato para que em poucos passos você já possa utilizá-lo sem complicações :)
category: "JavaScript"
---
O Grunt foi desenvolvido pelo [@cowboy](http://twitter.com/cowboy) com o objetivo de automatizar tarefas para desenvolvedores. Com ele é possí­vel minificar, concatenar, automatizar deploy e outras pencas de funcionalidades que são realizadas com o Grunt através da penca de plugins que já existem para essa ferramenta.

![Aprendendo a usar Grunt em dois passos](http://i.imgur.com/SAuq2HD.jpg "Aprendendo a usar Grunt em dois passos

## Primeiro passo: como instalar

Como todos devem saber o Grunt roda no [node.js](http://nodejs.org/), sendo assim você precisa ter ele instalado. Feito isso, caso você tenha instalado ele alguma vez, recomendo que desinstale, senão com certeza você vai ter problemas no futuro, então vai lá:

```bash
  sudo npm uninstall -g grunt
```

Vamos instalar o grunt-cli, assim podemos rodar diferentes versões do Grunt em diferentes projetos, e o melhor, até simultaneamente!

Agora sim, sem qualquer receio, mete ficha:

```bash
  sudo npm install -g grunt-cli
```

## Segundo passo: iniciando um projeto

Há duas formas de iniciar um projeto com Grunt. A primeira é com o comando `grunt-init` passando o template que você deseja, por exemplo, um projeto para um módulo **node.js**:

```
  grunt-init node
```

Depois disso ele cria um scaffolding a partir do template que você escolheu.

A outra forma é criar sem templates. Você precisará de um arquivo **package.json** e o **Gruntfile.js**.

### package.json

Esse json deve conter informações do seu projeto. Você pode gerar ele através do comando `npm init`. Segue abaixo um exemplo básico de um **package.json**:

```javascript
  {
    "name": "and-after",
    "version": "1.0.0",
    "description": "Design e Tecnologia por sua conta",
    "keywords": ["tecnologia, desenvolvimento"],
    "author": "And After"
  }
```

### Gruntfile.js

O **Gruntfile.js** é onde você vai escrever suas tarefas, carregar os plugins e as configurações da sua aplicação. Exemplo:

```javascript
  module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'src/<%= pkg.name %>.js',
          dest: 'build/<%= pkg.name %>.min.js'
        }
      }
    });

    // tarefas
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // plugin
    grunt.registerTask('default', ['uglify']);
    };
  }
```

Nesse caso eu tenho uma tarefa, `unglify`. Para rodar basta passar `grunt nomedatarefa`.

Moçada, acho que é isso. Não vivo mais sem o **Grunt**. Se curtiu, aproveita e vota nele para **"Projeto Open Source do ano"** no [.net awards](https://thenetawards.com/).

**Referências:**

[http://gruntjs.com/](http://gruntjs.com/)

[http://weblog.bocoup.com/introducing-grunt/](http://weblog.bocoup.com/introducing-grunt/)

[Publicado originalmente no And After.](http://andafter.org/publicacoes/aprendendo-a-usar-grunt-em-dois-passos.html)
