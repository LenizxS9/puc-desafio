import { readFile, writeFile } from "./data-manager.js";

// Criar produto
export function createProduct(product) {
  const data = readFile();
  const newProduct = { id: data.products.length + 1, ...product };
  data.products.push(newProduct);
  writeFile(data);
  return newProduct;
}

// Listar todos os produtos
export function listProducts() {
  return readFile().products;
}

// Buscar produto por ID
export function getProductById(id) {

  if (isNaN(id)) return null;

  const data = readFile();
  return data.products?.find((prod) => prod.id === Number(id)) || null;
}

// Atualizar produto por ID
export function updateProduct(id, updatedData) {
  const data = readFile();
  const index = data.products.findIndex((prod) => prod.id === id);
  if (index === -1) return null;
  data.products[index] = { ...data.products[index], ...updatedData };
  writeFile(data);
  return data.products[index];
}

// Deletar produto por ID
export function deleteProduct(id) {
  const data = readFile();
  const updatedProducts = data.products.filter((prod) => prod.id !== id);
  if (data.products.length === updatedProducts.length) return false;
  data.products = updatedProducts;
  writeFile(data);
  return true;
}