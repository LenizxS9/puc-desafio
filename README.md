## 🥤🛒 Gerenciador de Produtos para a Loja AgilStore

Aplicação de linha de comando (CLI) desenvolvida em Node.js para o gerenciamento de produtos.  
O sistema permite cadastrar, listar, buscar, atualizar e remover produtos, mantendo os dados persistidos em um arquivo JSON.

---

## 📱 Funcionalidades

- **Cadastrar Produto**  
  Permite adicionar novos produtos ao sistema, informando nome, categoria, preço e quantidade.

- **Listar Produtos**  
  Exibe todos os produtos cadastrados, com opção de ordenação por nome, preço ou quantidade.

- **Buscar Produto**  
  Permite localizar um produto pelo ID ou pelo nome, utilizando busca insensível a maiúsculas e minúsculas.

- **Atualizar Produto**  
  Possibilita a atualização de um ou mais campos (nome, preço ou quantidade) de um produto existente.

- **Remover Produto**  
  Remove um produto do sistema a partir do seu ID.

- **Persistência em Arquivo JSON**  
  Os dados são armazenados em um arquivo JSON, garantindo persistência entre as execuções da aplicação.

---

## 🧰 Tecnologias Utilizadas

- **Node.js** (v20.16.0) – Ambiente de execução JavaScript.  
- **Inquirer** (v12.3.0) – Biblioteca para criação de interfaces interativas no terminal.  
- **JavaScript (ES Modules)** – Linguagem utilizada no desenvolvimento da aplicação.

---

## 🧩 Instalação, Execução e Estrutura do Projeto

```bash
# Clonar o repositório
git clone -b main https://github.com/LenizxS9/puc-desafio.git
cd puc-desafio

# Instalar as dependências
npm install

# (Opcional) Popular o arquivo JSON com dados fictícios
node ./db/populate-data.js

# Executar a aplicação
npm start
```
---

## 🏗️ Estrutura do Projeto
puc-desafio/
├── db/
│   ├── data.json              # Arquivo de persistência dos produtos
│   └── populate-data.js       # Script opcional para dados fictícios
├── services/
│   ├── data-manager.js        # Leitura e escrita do arquivo JSON
│   └── product-service.js     # Regras de negócio e operações CRUD
├── index.js                   # Arquivo principal (CLI)
├── package.json
├── package-lock.json
└── README.md

---

## 👩‍💻 Estrutura do Código

index.js
Arquivo principal da aplicação. Responsável por exibir o menu interativo no terminal e coordenar as operações de cadastro, listagem, busca, atualização e remoção de produtos.

services/product-service.js
Implementa as regras de negócio da aplicação, concentrando as funções responsáveis pelas operações de CRUD dos produtos.

services/data-manager.js
Responsável pela persistência dos dados, realizando a leitura e escrita no arquivo JSON (data.json), garantindo a manutenção do estado da aplicação entre diferentes execuções.



