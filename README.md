## 🥤🛒 Gerenciador de Produtos
Este é um gerenciador de produtos simples, onde é possível cadastrar, listar, buscar, atualizar e remover produtos. A aplicação utiliza Node.js, inquirer para interação via terminal, e métodos de manipulação de dados para gerenciar as informações dos produtos.

## 📱 Funcionalidades
* Cadastrar Produto: Permite adicionar novos produtos ao sistema.
* Listar Produtos: Exibe todos os produtos cadastrados, com a opção de ordenar por nome, preço ou quantidade.
* Buscar Produto: Permite encontrar um produto pelo seu ID ou nome (com busca insensível a maiúsculas/minúsculas).
* Atualizar Produto: Permite atualizar os dados de um produto existente, escolhendo qual campo (nome, preço ou quantidade) deseja modificar.
* Remover Produto: Permite excluir um produto pelo seu ID.


## 🧰 Tecnologias Utilizadas
* Node.js (v20.16.0): Ambiente de execução JavaScript.
* Inquirer (v12.3.0): Biblioteca para interação com o usuário via terminal.
* JavaScript: Linguagem de programação.

## 🧩 Como Rodar a Aplicação

### 1. Requisitos
Antes de começar, verifique se você possui o Node.js (v20.16.0) instalado. Se não, você pode baixar e instalar a partir do site oficial: Node.js.

### 2. Clonando o Repositório
Primeiro, clone o repositório para sua máquina local:

``` bash
# Clone o repositório.
$ git clone -b main https://github.com/LenizxS9/puc-desafio.git
```

### 3. Instalando as Dependências
Acesse o diretório do projeto e instale as dependências necessárias com o npm:

``` bash
# Entre no diretório e instale as dependências.
$ cd ./puc-desafio
$ npm install

```

### 4. Populando o JSON
Caso queira deixar o arquivo JSON populado com dados ficticios, execute o comando:

``` bash
$ node ./db/populate-data.js
```

### 5. Rodando a Aplicação
Após instalar as dependências, execute o comando abaixo para rodar a aplicação:

``` bash
$ node index.js
```

Isso iniciará a aplicação e você verá o menu interativo no terminal, onde poderá escolher entre as opções para cadastrar, listar, buscar, atualizar ou remover produtos.



## 👩‍💻 Estrutura do Código
* **index.js**: Arquivo principal onde a lógica do menu e das operações é implementada.

* **services/product-service.js**: Contém as funções que manipulam os dados dos produtos (criação, listagem, atualização e remoção).

* **services/data-manager.js**: Responsável por ler e escrever os dados dos produtos em um arquivo JSON (data.json), que mantém o estado persistente dos produtos entre as execuções da aplicação.
