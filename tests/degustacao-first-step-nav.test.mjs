import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const file = fileURLToPath(
  new URL('../Oxigênio - O²/degustacao-smart-factory-v3-botoes-corrigidos.html', import.meta.url),
);
const html = await readFile(file, 'utf8');

assert.match(
  html,
  /\.lesson>\.nav-row\.first-step #next\{width:100%;min-width:0;margin-left:0;justify-content:center\}/,
  'Na primeira etapa, Avançar deve ocupar toda a linha.',
);
assert.match(
  html,
  /\$\('#next'\)\.classList\.toggle\('full-width',step===0\);/,
  'A navegação deve marcar Avançar como largura total apenas na primeira etapa.',
);
assert.match(
  html,
  /\.lesson>\.nav-row \.btn\.full-width\{\s*grid-column:1 \/ -1;/,
  'Em celular, o botão de largura total deve ocupar as duas colunas.',
);
