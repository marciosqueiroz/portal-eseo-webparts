# Proposta Pedagógica ESEO — experiência interativa

## Diagnóstico

O documento oficial possui 71 páginas em formato A4 e foi produzido no Adobe
InDesign. A estrutura editorial é boa, mas o PDF não é marcado para acessibilidade
e não funciona como uma base de dados estruturada.

O ponto principal não é onde o arquivo está armazenado. A diferença em relação ao
Portfólio de Cursos é que o Portfólio recebe registros estruturados, enquanto a
Proposta Pedagógica é um documento editorial contínuo.

Converter integralmente as 71 páginas para HTML criaria duas fontes de verdade e
aumentaria o risco de o portal apresentar conteúdo diferente do PDF vigente.

## Solução recomendada

Criar uma camada de navegação HTML sobre o documento oficial:

1. Exibir a capa oficial sem redesenhá-la.
2. Mostrar a versão do documento e a data de atualização.
3. Organizar o conteúdo em seis macrocapítulos.
4. Abrir um painel lateral com um resumo executivo de cada capítulo.
5. Oferecer o botão **Ler no documento oficial**.
6. Oferecer o botão **Abrir documento completo**.
7. Manter o PDF do SharePoint como fonte oficial e única.

## Macrocapítulos mapeados

| Seção | Página inicial no PDF |
|---|---:|
| Introdução | 4 |
| Contexto, identidade e criação da escola | 6 |
| Demanda por tipo de atendimento | 19 |
| Metodologia dos processos da ESEO | 41 |
| Recursos institucionais, humanos, tecnológicos e físicos | 50 |
| Legislação, normas, políticas e diretrizes | 64 |

Referências e créditos permanecem disponíveis no documento oficial.

## Comportamento da interface

- A página inicial mostra a capa oficial à esquerda.
- À direita, aparecem os seis capítulos como itens navegáveis.
- Ao selecionar um capítulo, abre-se um painel lateral semelhante ao detalhe de
  curso do Portfólio.
- O painel apresenta:
  - objetivo do capítulo;
  - assuntos tratados;
  - público que mais se beneficia da leitura;
  - página inicial;
  - botão para abrir o PDF oficial.
- A URL do PDF deve continuar no SharePoint.
- A capa deve ser exportada da arte oficial e armazenada no `SiteAssets` do
  SharePoint. O HTML apenas referencia essa imagem.

## Dependências para produzir o HTML final

1. URL direta do PDF no SharePoint.
2. URL da capa oficial exportada em PNG ou JPG no `SiteAssets`.
3. Confirmação do texto que identifica a versão: `Proposta Pedagógica 1.50`.
4. Definição sobre a abertura:
   - mesma guia;
   - nova guia;
   - visualizador do SharePoint.

## Evolução futura

- Registrar cliques por capítulo em uma lista do SharePoint.
- Criar indicador de capítulos mais consultados.
- Acrescentar busca por tema dentro dos resumos.
- Criar versão acessível com hierarquia semântica e navegação por teclado.
