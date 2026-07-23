# Portal ESEO — atualização do menu, carrossel e da Central de Acesso

Data do pacote: 23/07/2026

## O que foi corrigido

- A busca do menu ganhou fundo escuro em gradiente, efeito de vidro e contraste
  suficiente mesmo sobre as áreas claras do banner.
- O campo sugere páginas, serviços e assuntos enquanto a pessoa digita.
- Sugestões conhecidas levam diretamente ao destino correspondente.
- Qualquer outro termo é pesquisado somente dentro do Portal ESEO.
- O campo possui botão para limpar e funciona com teclado.
- O carrossel agora possui quatro slides.
- O slide e a imagem do robô foram retirados do carrossel.
- Todo o JavaScript do carrossel está dentro do próprio HTML.
- O arquivo `eseo-carrossel-config-v3.js` não é mais utilizado.
- A imagem do Boletim ESEO é exibida inteira, sem corte e sem ampliação.
- O slide **Conheça a ESEO** possui o botão **CLIQUE AQUI E ACESSE**.
- Todos os botões do carrossel abrem os links em uma nova guia.
- A Central de Acesso possui quatro itens.
- Os títulos dos acessos permanecem visíveis.
- As explicações aparecem no hover ou no foco do teclado.
- Em celulares e tablets, as explicações ficam visíveis porque esses aparelhos não
  possuem hover.
- Todos os acessos abrem em uma nova guia.
- O componente **Que bom ter você aqui** não foi alterado.

## Arquivos que devem ser substituídos no GitHub

### 1. Menu superior e busca

Substitua o arquivo da raiz do repositório:

`eseo-menu-superior.html`

As sugestões usam o recurso nativo do navegador. Isso permite que a lista apareça
abaixo do campo sem aumentar a altura do iframe e sem empurrar o banner para baixo.

### 2. Carrossel

Copie a pasta abaixo por cima da pasta de mesmo nome no repositório:

`eseo-carrossel-premium-v3-pacote`

O HTML preserva o nome anterior para que o endereço publicado continue funcionando:

`eseo-carrossel-premium-v3-pacote/eseo-carrossel-premium-v3.html`

O pacote contém:

- `eseo-carrossel-premium-v3.html`
- `curso-desenvolvimento.jpg`
- `rotulos-cosmeticos.jpg`
- `boletim-eseo.png`
- `conheca-eseo.jpg`

O arquivo antigo `eseo-carrossel-config-v3.js` pode continuar no GitHub por enquanto,
mas não é mais carregado pelo novo carrossel. Ele não deve ser copiado para a pasta
local sincronizada pelo OneDrive.

### 3. Central de Acesso

Substitua o arquivo da raiz do repositório:

`eseo-atalhos-horizontal-premium.html`

## Iframes para o SharePoint

### Menu superior — Home

```html
<iframe
  src="https://marciosqueiroz.github.io/portal-eseo-webparts/eseo-menu-superior.html?v=20260723-5&ativa=home"
  title="Menu e busca do Portal ESEO"
  width="100%"
  height="145"
  loading="eager"
  style="display:block;width:100%;border:0;"
></iframe>
```

Nas demais páginas, troque somente o final:

- Conheça a ESEO: `&ativa=conheca`
- Oferta de cursos: `&ativa=oferta`

### Carrossel

```html
<iframe
  src="https://marciosqueiroz.github.io/portal-eseo-webparts/eseo-carrossel-premium-v3-pacote/eseo-carrossel-premium-v3.html?v=20260723-5"
  title="Novidades do Portal ESEO"
  width="100%"
  height="510"
  loading="eager"
  style="display:block;width:100%;border:0;"
  allow="fullscreen"
></iframe>
```

### Central de Acesso

```html
<iframe
  src="https://marciosqueiroz.github.io/portal-eseo-webparts/eseo-atalhos-horizontal-premium.html?v=20260723-5"
  title="Central de Acesso do Portal ESEO"
  width="100%"
  height="720"
  loading="lazy"
  style="display:block;width:100%;border:0;"
></iframe>
```

Não acrescente o atributo `sandbox` aos iframes. Uma configuração restritiva desse
atributo pode impedir a abertura dos links em nova guia.

## Como funciona o preenchimento da busca

O menu oferece sugestões para:

- páginas principais do Portal ESEO;
- Portfólio de cursos;
- liberação de turma SGSET;
- Soluções EAD;
- parceria AQV ESEO;
- Boletim ESEO;
- catálogo, calendários, proposta pedagógica, tutoria, monitoria e orientações.

Os oito primeiros acessos possuem destino direto. Os demais termos e qualquer texto
livre são enviados para a busca do SharePoint com filtro de caminho para o site
`ESEOConecta`.

Uma previsão dinâmica baseada em todos os documentos recém-publicados exigiria um
componente SPFx com Microsoft Graph ou SharePoint Search API. Esta versão funciona
sem backend e sem permissões adicionais.

## Links configurados

1. **Curso Técnico em Desenvolvimento de Sistemas**  
   Página do curso no SENAI-SP.
2. **Por Dentro dos Rótulos de Cosméticos**  
   Mantido o destino atual da publicação no SharePoint.
3. **Boletim ESEO**  
   Mantido o link de assinatura do Outlook.
4. **Conheça a ESEO**  
   `https://sesisenaisp.sharepoint.com/sites/ESEOConecta/SitePages/Sobre-a-ESEO.aspx`

## Se o robô ainda aparecer na página

O robô não faz mais parte do novo carrossel. Se ele continuar aparecendo abaixo do
carrossel, trata-se de outro webpart já inserido na página do SharePoint:

1. Abra a página e clique em **Editar**.
2. Passe o cursor sobre a área do robô até aparecer o contorno do webpart.
3. Selecione o webpart.
4. Clique no ícone da lixeira ou em **Excluir webpart**.
5. Publique novamente a página.

## Prévia local

Abra `PREVIA-LOCAL.html` para visualizar os dois componentes antes de subir os
arquivos ao GitHub.
