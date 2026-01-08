import { readFile, writeFile } from "./data-manager.js";

// Criar produto
export function createProduct(product) {
  const data = readFile();

  // Gera ID sem repetir mesmo após deletar produtos
  const maxId = (data.products || []).reduce(
    (max, p) => Math.max(max, Number(p.id) || 0),
    0
  );

  const newProduct = { id: maxId + 1, ...product };

  data.products = data.products || [];
  data.products.push(newProduct);

  writeFile(data);
  return newProduct;
}

// Listar todos os produtos
export function listProducts() {
  const data = readFile();
  return data.products || [];
}

// Buscar produto por ID
export function getProductById(id) {
  const numericId = Number(id);
  if (Number.isNaN(numericId)) return null;

  const data = readFile();
  return data.products?.find((prod) => Number(prod.id) === numericId) || null;
}

// Atualizar produto por ID
export function updateProduct(id, updatedData) {
  const data = readFile();
  const numericId = Number(id);
  if (Number.isNaN(numericId)) return null;

  const index = data.products?.findIndex((prod) => Number(prod.id) === numericId);
  if (index === -1 || index === undefined) return null;

  data.products[index] = { ...data.products[index], ...updatedData };
  writeFile(data);
  return data.products[index];
}

// Deletar produto por ID
export function deleteProduct(id) {
  const data = readFile();
  const numericId = Number(id);
  if (Number.isNaN(numericId)) return false;

  const current = data.products || [];
  const updatedProducts = current.filter((prod) => Number(prod.id) !== numericId);

  if (current.length === updatedProducts.length) return false;

  data.products = updatedProducts;
  writeFile(data);
  return true;
}
