# Portal ESEO Teams Personal App

Aplicativo Teams personalizado que traz o Portal ESEO diretamente para o Microsoft Teams, oferecendo acesso rápido ao portal corporativo inteligente integrado com Microsoft 365.

## 📋 Conteúdo do Pacote

```
portal-eseo-teams-app.zip
├── manifest.json       # Definição do aplicativo Teams
├── color.png          # Ícone colorido (128x128px)
├── outline.png        # Ícone outline (20x20px)
└── README.md          # Este arquivo
```

## ✨ Recursos

- **Personal Tab**: Acesso ao Portal ESEO diretamente na aba pessoal do Teams
- **3 Abas Pré-configuradas**:
  - 🏠 **Portal ESEO**: Página principal com homepage integrada
  - 🔍 **Busca**: Componente de busca avançada do portal
  - 📚 **Cursos**: Catálogo de cursos disponíveis
- **Integração M365**: Compatível com SharePoint Online e Teams
- **Design Responsivo**: Interface adaptada para Teams
- **Icones Profissionais**: Branding ESEO com cores oficiais

## 🛠️ Como Fazer Upload no Teams (Upload de Aplicativo Personalizado)

### Pré-requisitos

1. ✅ Microsoft Teams instalado (versão desktop ou web)
2. ✅ Permissão de fazer upload de aplicativos personalizados (ativar na política de aplicativos do Teams)
3. ✅ O arquivo ZIP `portal-eseo-teams-app.zip`

### Passo a Passo

#### **1. Descompactar o arquivo ZIP**

```bash
unzip portal-eseo-teams-app.zip -d portal-eseo-teams-app
```

Você deve ver 3 arquivos:
- `manifest.json`
- `color.png`
- `outline.png`

#### **2. Acessar as Opções de Aplicativos no Teams**

```
Teams (Desktop) → Menu superior esquerdo (⋯) → Aplicativos → Gerenciar seus aplicativos
```

Ou no navegador:

```
https://teams.microsoft.com/l/app/com.eseo.portal
```

#### **3. Fazer Upload de Aplicativo Personalizado**

1. Clique em **"Upload de um aplicativo personalizado"** ou **"Upload a custom app"**
2. Selecione **"Upload para seu org"** (você precisa ser administrador ou ter permissão)
3. Busque e selecione o arquivo **`portal-eseo-teams-app.zip`**

#### **4. Revisar Detalhes da Permissão**

O Teams exibirá:
- Nome: **Portal ESEO**
- Descrição: Acesso ao Portal ESEO integrado com Microsoft 365
- Versão: 1.0.0
- Ícones: cor e outline

Clique em **"Adicionar"** ou **"Add"** para aceitar

#### **5. Usar o Aplicativo**

Após o upload, você verá:

```
Teams Sidebar
├── Mais abas (⋯)
├── Portal ESEO ← NOVO
│   ├── Portal ESEO (aba principal)
│   ├── Busca
│   └── Cursos
```

Clique em **"Portal ESEO"** para abrir o aplicativo personalizado!

## 🔧 Configurações Técnicas

### Manifest.json

O arquivo `manifest.json` define:

| Campo | Valor |
|-------|-------|
| **manifestVersion** | 1.16 |
| **version** | 1.0.0 |
| **id** | 12345678-1234-1234-1234-123456789abc |
| **defaultInstallScope** | personal |
| **accentColor** | #0eb7d5 (ESEO Cyan) |

### Domínios Válidos

O aplicativo é autorizado para carregar conteúdo destes domínios:

```json
"validDomains": [
  "*.sharepoint.com",        // SharePoint Online
  "*.teams.microsoft.com",   // Teams
  "github.com",              // GitHub
  "raw.githubusercontent.com", // GitHub Raw Content
  "marciosqueiroz.github.io" // GitHub Pages
]
```

### Permissões Solicitadas

```json
"permissions": [
  "identity",           // Obter ID do usuário logado
  "messageTeamMembers"  // Enviar mensagens diretas (futuro)
]
```

## 📱 Abas Incluídas

### 1️⃣ Portal ESEO (Página Principal)

- **URL**: `eseo-home-busca.html`
- **Descrição**: Homepage integrada com busca e destaques
- **Funcionalidades**: Notícias, atalhos rápidos, busca portal

### 2️⃣ Busca

- **URL**: `eseo-busca-portal-v4.html`
- **Descrição**: Componente de busca avançada
- **Funcionalidades**: Busca em SharePoint, resultados em tempo real, filtros

### 3️⃣ Cursos

- **URL**: `eseo-catalogo-cursos.html`
- **Descrição**: Catálogo de cursos disponíveis
- **Funcionalidades**: Listagem, inscrição, certificados

## 🚀 Próximos Passos

Após testar o aplicativo, você pode:

### 1. **Melhorar as Abas**
   - Adicionar mais componentes do portal
   - Integrar notificações do SharePoint
   - Conectar com Teams Tabs integrados

### 2. **Adicionar Funcionalidades M365**
   - Integração com Outlook (calendário)
   - Sincronizar com OneDrive (documentos)
   - Teams Notifications (alertas)
   - Microsoft Graph API (usuários, grupos, etc)

### 3. **Distribuir para Organização**
   - Enviar para aprovação do Teams Admin Center
   - Publicar no App Store do Teams (interno)
   - Criar como Aplicativo da Organização

## 🔐 Segurança e Privacidade

- ✅ Usa HTTPS para todas as conexões
- ✅ Validação de domínio (whitelist)
- ✅ Sem armazenamento local de dados sensíveis
- ✅ Respeita configurações de permissão do Teams
- ✅ Compatível com políticas de segurança corporativa

## 🛠️ Troubleshooting

### Erro: "Não é possível fazer upload de aplicativos personalizados"

**Solução**: Peça ao seu administrador do Teams para ativar:
- Teams Admin Center → Políticas de Aplicativos de Teams
- Permitir "Carregar aplicativos personalizados"

### Erro: "Domínio não autorizado"

**Solução**: Um dos domínios nas `validDomains` pode estar bloqueado. Verifique:
- Firewall corporativo
- Proxy de internet
- Políticas de rede

### As Abas Não Carregam

**Solução**: Verifique se:
- O repositório GitHub está público
- URLs no manifest.json estão corretas
- Você tem acesso à internet
- GitHub não está com problemas (https://www.githubstatus.com)

## 📝 Personalização

Para modificar o aplicativo:

### 1. **Alterar Ícones**
   - Substituir `color.png` (128x128px) e `outline.png` (20x20px)
   - Manter formato PNG com fundo transparente

### 2. **Adicionar Mais Abas**
   ```json
   {
     "entityId": "portal-eseo-custom",
     "name": "Minha Aba",
     "contentUrl": "https://raw.githubusercontent.com/.../meu-componente.html",
     "scopes": ["personal"]
   }
   ```

### 3. **Mudar Cores**
   - Alterar `accentColor` no manifest.json
   - Exemplo: `"accentColor": "#FFD700"` (dourado)

### 4. **Atualizar Descrições**
   - Editar `name.short` e `description.short`
   - Suporta até 80 caracteres

## 📚 Recursos Adicionais

- [Microsoft Teams App Development](https://docs.microsoft.com/en-us/microsoftteams/platform/)
- [Manifest Schema Reference](https://docs.microsoft.com/en-us/microsoftteams/platform/resources/schema/manifest-schema)
- [Teams Upload Custom App](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/deploy-and-publish/apps-upload)
- [Portal ESEO GitHub](https://github.com/marciosqueiroz/portal-eseo-webparts)

## 📞 Suporte

Para dúvidas ou problemas:

1. Abra uma issue no [Portal ESEO GitHub](https://github.com/marciosqueiroz/portal-eseo-webparts/issues)
2. Mencione: Teams version, SO, erro específico
3. Inclua print da tela de erro

## ©️ Licença

Este aplicativo Teams segue a mesma licença do projeto Portal ESEO Webparts.

---

**Versão**: 1.0.0  
**Data**: 2026-07-22  
**Mantido por**: Portal ESEO Team
