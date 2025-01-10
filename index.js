import inquirer from "inquirer";
import {
  createProduct,
  listProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "./services/product-service.js";

async function showMainMenu() {
  const mainMenuChoices = [
    { name: "Cadastrar Produto", value: "create" },
    { name: "Listar Produtos", value: "list" },
    { name: "Listar Produto por ID ou Nome", value: "find" },
    { name: "Atualizar Produto", value: "update" },
    { name: "Remover Produto", value: "delete" },
    { name: "Encerrar Aplicação", value: "exit" },
  ];

  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Escolha uma opção:",
      choices: mainMenuChoices,
    },
  ]);

  switch (action) {
    case "create":
      await handleCreateProduct();
      break;
    case "list":
      await handleListProducts();
      break;
    case "find":
      await handleFindProduct();
      break;
    case "update":
      await handleUpdateProduct();
      break;
    case "delete":
      await handleDeleteProduct();
      break;
    case "exit":
      console.log("Encerrando aplicação...");
      process.exit(0);
  }

  await showMainMenu();
}

// Cadastrar Produto
async function handleCreateProduct() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Digite o nome do produto:",
      validate: (value) =>
        value.trim()
          ? true
          : "O nome não pode estar vazio ou conter apenas espaços em branco.",
    },
    {
      type: "input",
      name: "category",
      message: "Digite a categoria do produto:",
      validate: (value) =>
        value.trim()
          ? true
          : "A categoria não pode estar vazia ou conter apenas espaços em branco.",
    },
    {
      type: "number",
      name: "price",
      message: "Digite o preço do produto:",
      validate: (value) => (value > 0 ? true : "O preço deve ser maior que 0."),
    },
    {
      type: "number",
      name: "quantity",
      message: "Digite a quantidade em estoque:",
      validate: (value) =>
        value >= 1 ? true : "A quantidade deve ser maior ou igual a 1.",
    },
  ]);

  const product = createProduct(answers);
  console.log("Produto cadastrado com sucesso:", product);
}

// Listar Produtos
async function handleListProducts() {
    const products = listProducts();
  
    if (products.length === 0) {
      console.log('Nenhum produto encontrado.');
      return;
    }
  
    const { orderBy } = await inquirer.prompt([
      {
        type: 'list',
        name: 'orderBy',
        message: 'Escolha um critério de ordenação:',
        choices: [
          { name: 'Nome (A-Z)', value: 'name_asc' },
          { name: 'Nome (Z-A)', value: 'name_desc' },
          { name: 'Preço (Menor para Maior)', value: 'price_asc' },
          { name: 'Preço (Maior para Menor)', value: 'price_desc' },
          { name: 'Quantidade (Menor para Maior)', value: 'quantity_asc' },
          { name: 'Quantidade (Maior para Menor)', value: 'quantity_desc' },
        ],
      },
    ]);
  
    const sortedProducts = [...products].sort((a, b) => {
      switch (orderBy) {
        case 'name_asc':
          return a.name.localeCompare(b.name);
        case 'name_desc':
          return b.name.localeCompare(a.name);
        case 'price_asc':
          return a.price - b.price;
        case 'price_desc':
          return b.price - a.price;
        case 'quantity_asc':
          return a.quantity - b.quantity;
        case 'quantity_desc':
          return b.quantity - a.quantity;
        default:
          return 0;
      }
    });
  
    console.table(sortedProducts);
  }

// Listar Produto por ID ou Nome
async function handleFindProduct() {
  const { searchTerm } = await inquirer.prompt([
    {
      type: "input",
      name: "searchTerm",
      message: "Digite o ID ou nome do produto:",
      validate: (value) =>
        value.trim()
          ? true
          : "O valor não pode estar vazio ou conter apenas espaços em branco.",
    },
  ]);

  const product =
    getProductById(searchTerm) ||
    listProducts().find((prod) => {

        console.log(prod.name);

      if (prod.name && typeof prod.name === "string") {
        return prod.name.toLowerCase().includes(searchTerm.toLowerCase()); // Garente que a busca não irá ser sensitive case
      }
      return false;
    });

  if (!product) {
    console.log("Produto não encontrado.");
    return;
  }

  console.log("Produto encontrado:", product);
}

// Atualizar Produto
async function handleUpdateProduct() {
  const { id } = await inquirer.prompt([
    {
      type: "number",
      name: "id",
      message: "Digite o ID do produto a ser atualizado:",
    },
  ]);

  const existingProduct = getProductById(id);

  if (!existingProduct) {
    console.log("Produto não encontrado.");
    return;
  }

  const { fieldsToUpdate } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "fieldsToUpdate",
      message: "Escolha os campos que deseja atualizar:",
      choices: [
        { name: `Nome (atual: ${existingProduct.name})`, value: "name" },
        { name: `Preço (atual: ${existingProduct.price})`, value: "price" },
        {
          name: `Quantidade (atual: ${existingProduct.quantity})`,
          value: "quantity",
        },
      ],
    },
  ]);

  if (fieldsToUpdate.length === 0) {
    console.log("Nenhum campo selecionado para atualização.");
    return;
  }

  const answers = {};

  if (fieldsToUpdate.includes("name")) {
    answers.getName = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Novo nome (deixe vazio para manter o atual):",
        default: existingProduct.name,
        validate: (value) =>
          value.trim()
            ? true
            : "O nome não pode estar vazio ou conter apenas espaços em branco.",
      },
    ]);
  }

  if (fieldsToUpdate.includes("price")) {
    answers.getPrice = await inquirer.prompt([
      {
        type: "input",
        name: "price",
        message: "Novo preço (deixe vazio para manter o atual):",
        default: existingProduct.price,
        validate: (value) => {
          const price = Number(value);
          return !isNaN(price) && price >= 1
            ? true
            : "O preço deve ser maior que 0.";
        },
      },
    ]);
  }

  if (fieldsToUpdate.includes("quantity")) {
    answers.getQuantity = await inquirer.prompt([
      {
        type: "number",
        name: "quantity",
        message: "Nova quantidade (deixe vazio para manter o atual):",
        default: existingProduct.quantity,
        validate: (value) =>
          value >= 1 ? true : "A quantidade deve ser maior ou igual a 1.",
      },
    ]);
  }

  const newName = answers.getName?.name;
  const newPrice = answers.getPrice?.price;
  const newQuantity = answers.getQuantity?.quantity;

  // Salva os novos dados no arquivo JSON
  const updatedProduct = updateProduct(id, {
    name: newName || existingProduct.name,
    price: newPrice ? Number(newPrice) : existingProduct.price,
    quantity: newQuantity ? Number(newQuantity) : existingProduct.quantity,
  });

  console.log("Produto atualizado com sucesso:", updatedProduct);
}

// Remover Produto
async function handleDeleteProduct() {
  const { id } = await inquirer.prompt([
    {
      type: "number",
      name: "id",
      message: "Digite o ID do produto a ser removido:",
    },
  ]);

  const success = deleteProduct(id);

  if (!success) {
    console.log("Produto não encontrado.");
    return;
  }

  console.log("Produto removido com sucesso.");
}

showMainMenu();
