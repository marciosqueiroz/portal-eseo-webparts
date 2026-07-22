# Portal ESEO — pacote revisado

Este pacote contém somente os componentes revisados nesta rodada. Os HTMLs mantêm
os nomes anteriores para que possam substituir os arquivos já existentes no
GitHub.

## Arquivos

- `eseo-menu-superior.html`: menu transparente com busca integrada.
- `eseo-atalhos-horizontal-premium.html`: quatro cartões translúcidos.
- `eseo-pesquisa-satisfacao.html`: um único botão para o Customer Voice.
- `eseo-pesquisa-convite-premium.html`: convite automático do Boletim ESEO.
- `eseo-rodape-premium.html`: contatos e canais oficiais.
- `assets/`: ícones oficiais de Instagram e Facebook usados pelo rodapé.

## Como substituir no GitHub

1. Envie os cinco HTMLs para a mesma pasta em que estão os arquivos atuais.
2. Envie também a pasta `assets`, mantendo o nome e a estrutura.
3. Confirme a substituição dos arquivos com o mesmo nome.

## Observações importantes

- A busca já faz parte de `eseo-menu-superior.html`. Não é necessário inserir
  `eseo-busca-portal-v4.html` como componente separado.
- A consulta recebe automaticamente o filtro de caminho do site
  `ESEOConecta`, limitando os resultados ao Portal ESEO.
- A página atual do menu é identificada automaticamente. Se algum iframe do
  SharePoint não informar a página de origem, acrescente ao endereço do menu
  `?ativa=home`, `?ativa=conheca` ou `?ativa=oferta`.
- A página atual fica em ciano. O sublinhado aparece somente ao passar o mouse
  ou navegar pelo teclado.
- Use somente `eseo-pesquisa-satisfacao.html` para a pesquisa. Ele abre
  diretamente o Customer Voice e não exibe uma segunda sequência de emoticons.
- O convite do Boletim aparece após 10 segundos. Para testar sem esperar, use
  `?teste=1&reset=1`.
- Os ícones de Instagram e Facebook são locais. Por isso, a pasta `assets`
  precisa permanecer ao lado dos HTMLs.
