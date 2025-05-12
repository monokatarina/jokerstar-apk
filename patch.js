// patch.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(
  process.cwd(),
  'node_modules',
  'nome-da-biblioteca-problematica',
  'dist',
  'index.esm.js'
);

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/kg\.init\(\)\{[^}]*\.add\(\)/g, 'kg.init(){}');
  fs.writeFileSync(filePath, content);
  console.log('Patch aplicado com sucesso!');
} else {
  console.log('Arquivo não encontrado:', filePath);
}