import * as fs from 'node:fs';
import * as path from 'node:path';
import { readFile } from '../services/data-manager.js';

const filePath = path.resolve('db', 'data.json');

const verifyIfDataAlredyExists = readFile();

if (verifyIfDataAlredyExists.products.length > 0) {
  console.log('Já existem dados no arquivo data.json');
  process.exit(1);
}

const products = [
  { id: 1, name: 'Smartphone', price: 1999.99, quantity: 10, category: 'Eletrônicos'},
  { id: 2, name: 'Camiseta', price: 49.90, quantity: 50, category: 'Roupas'},
  { id: 3, name: 'Arroz 5kg', price: 25.00, quantity: 100, category: 'Alimentos'},
  { id: 4, name: 'Romance: A Culpa é das Estrelas', price: 29.90, quantity: 30, category: 'Livros'},
  { id: 5, name: 'Lego Star Wars', price: 349.99, quantity: 15, category: 'Brinquedos'},
  { id: 6, name: 'Furadeira Elétrica', price: 299.90, quantity: 20, category: 'Ferramentas'},
  { id: 7, name: 'Creme Hidratante', price: 19.90, quantity: 40, category: 'Beleza'},
  { id: 8, name: 'Sofá de 3 lugares', price: 1299.90, quantity: 5, category: 'Móveis'},
  { id: 9, name: 'Bola de Futebol', price: 89.90, quantity: 25, category: 'Esportes'},
  { id: 10, name: 'Capa para Banco de Carro', price: 99.90, quantity: 15, category: 'Automotivo' }
];

const dados = {
  products
};

// Salva os dados no arquivo JSON
fs.writeFile(filePath, JSON.stringify(dados, null, 2), (err) => {
  if (err) {
    console.error('Erro ao salvar os dados:', err);
  } else {
    console.log('Dados salvos com sucesso no arquivo dados.json');
  }
});
