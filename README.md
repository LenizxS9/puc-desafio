## 🥤🛒 Gerenciador de Produtos para a Loja AgilStore

Aplicação CLI (terminal) para gerenciar produtos (CRUD): cadastrar, listar, buscar, atualizar e remover.  
Os dados são persistidos em um arquivo JSON (`db/data.json`).

---

## 📱 Funcionalidades

- **Cadastrar Produto:** adiciona um novo produto (nome, categoria, preço e quantidade).
- **Listar Produtos:** exibe todos os produtos com opção de ordenação por nome, preço ou quantidade.
- **Buscar Produto:** encontra um produto por ID ou nome (busca insensível a maiúsculas/minúsculas).
- **Atualizar Produto:** permite atualizar nome, preço e/ou quantidade.
- **Remover Produto:** remove um produto pelo ID.
- **Persistência em JSON:** mantém os dados entre execuções.

---

## 🧰 Tecnologias Utilizadas

- **Node.js** (v20.16.0)
- **Inquirer** (v12.3.0)
- **JavaScript (ES Modules)**

---

## 🧩 Instalação, População e Execução

```bash
# Clonar o repositório
git clone -b main https://github.com/LenizxS9/puc-desafio.git
cd puc-desafio

# Instalar dependências
npm install

# (Opcional) Popular o JSON com dados fictícios
node ./db/populate-data.js

# Rodar a aplicação
npm start


## 👩‍💻 Estrutura do Código
* **index.js**: Arquivo principal onde a lógica do menu e das operações é implementada.

* **services/product-service.js**: Contém as funções que manipulam os dados dos produtos (criação, listagem, atualização e remoção).

* **services/data-manager.js**: Responsável por ler e escrever os dados dos produtos em um arquivo JSON (data.json), que mantém o estado persistente dos produtos entre as execuções da aplicação.
