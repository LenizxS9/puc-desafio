import * as fs from 'node:fs';
import * as path from 'node:path';


const filePath = path.resolve('db', 'data.json');

// Função para ler o arquivo JSON
export function readFile() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ categories: [], products: [] }, null, 2));
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// Função para salvar no arquivo JSON
export function writeFile(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

