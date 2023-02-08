# Cubo-challenge
Desafio de frontend do Cubo Itaú

## Tecnologias utilizadas
- Angular 15
- SCSS
- Karma
- Jasmine

## Instalações e como rodar o projeto

### instalação das ferramentas necessárias:

Para rodar o projeto, é necessário ter instalado o [Nodejs](https://nodejs.org) e o [Angular](https://angular.io)

Para instalar o Angular CLI, é necessário ter o Node.js instalado, e dar o seguinte comando no terminal:

```
$ npm i -g @angular/cli@15
```

PS: O projeto foi criado usando a versão LTS atual do Node (18.14.0)

### Como rodar o projeto

O primeiro passo é instalar as dependências do projeto através do comando `npm install` na raiz do projeto. Esse comando vai instalar todas as dependências que estão no package.json

```
$ npm install
```

Após a finalização da instalação das dependências, você pode executar o seguinte comando para inicializar o projeto em modo de desenvolvimento:
```
$ npm run start
```

Esse comando vai compilar o projeto e você poderá navegar no projeto via navegador, no seguinte endereço: http://localhost:4200
onde: `localhost` é o endereço local da sua máquina (127.0.0.1) e `4200` é a porta padrão definida pelo Angular, para o projeto rodar

### Como rodar testes do projeto
O projeto possui testes unitários e cobertura de teste em 100%.
Para rodar os testes unitários, você precisa ter o Google Chrome instalado no seu computador, e executar o seguinte comando no terminal:
```
$ npm run test
```
Será aberta uma aba do Google Chrome, com a interface do Karma, mostrando os testes que foram executados.
Caso queira ver a cobertura de código, você pode executar o comando:
```
$ npm run test:coverage
```
Esse comando vai rodar os testes unitários e criar uma pasta na raíz do projeto, chamada `coverage`, onde será gerado um relatório com dados sobre a cobertura de código.
