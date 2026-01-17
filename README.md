# Jhones Police - Painel Policial FiveM

Sistema de painel policial moderno para servidores FiveM, desenvolvido com React, TypeScript e Tailwind CSS v4.

## 🎨 Características

- ✅ Interface moderna e responsiva com design dark theme
- ✅ Dimensões otimizadas para tablet (1266x864px)
- ✅ Navegação intuitiva com sidebar
- ✅ Comunicação com Lua do FiveM
- ✅ Múltiplas páginas:
  - Overview (Dashboard com estatísticas)
  - Consultar (Busca de indivíduos e veículos)
  - Prisão (Registrar prisões)
  - Multar (Aplicar multas)
  - Procurados (Lista de procurados)
  - Boletim de Ocorrência
  - Gerenciamento de membros
  - Ranking de policiais

## 🚀 Tecnologias

- **React 19** com TypeScript
- **Vite** para build rápido
- **Tailwind CSS v4** para estilização
- **shadcn/ui** para componentes reutilizáveis
- **Lucide React** para ícones
- **Arquitetura limpa** com separação de responsabilidades

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/          # Componentes de layout (Sidebar, Header, etc)
│   └── ui/              # Componentes shadcn/ui
├── pages/               # Páginas da aplicação
├── services/            # Serviços (comunicação com Lua)
├── hooks/               # Custom hooks
├── types/               # Tipos TypeScript
└── utils/               # Utilitários
```

## 🎨 Cores do Tema

- **Primary**: `#FF2D75` (Rosa)
- **Background**: `#0A0A0A` (Preto profundo)
- **Card**: `#1A1A1A` (Cinza escuro)
- **Secondary**: `#2A2A2A` (Cinza médio)

## 🛠️ Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Execute em modo desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Build para produção:

```bash
npm run build
# ou
yarn build
```

## 🔗 Comunicação com Lua

O serviço `fivem.ts` gerencia toda a comunicação com o lado Lua do FiveM:

### Enviar dados para Lua:

```typescript
import { fivem } from '@/services/fivem';

// Exemplo: Efetuar prisão
await fivem.send('prisao', {
  passaporte: '12345',
  infrações: ['art1', 'art2'],
  pena: 30,
  multa: 10000,
});
```

### Receber eventos do Lua:

```typescript
useEffect(() => {
  const cleanup = fivem.on('atualizarDados', (data) => {
    console.log('Dados atualizados:', data);
  });

  return cleanup; // Remove listener ao desmontar
}, []);
```

### Fechar o painel:

```typescript
fivem.close(); // Envia evento para esconder a NUI
```

## 📝 Exemplo Lua (server-side)

```lua
-- Registrar callback para receber dados do NUI
RegisterNUICallback('prisao', function(data, cb)
    local passaporte = data.passaporte
    local pena = data.pena
    local multa = data.multa
    
    -- Sua lógica de prisão aqui
    
    cb({ success = true, data = { message = 'Prisão efetuada com sucesso' } })
end)

RegisterNUICallback('close', function(data, cb)
    SetNuiFocus(false, false)
    cb({ success = true })
end)

-- Abrir painel
function AbrirPainelPolicia()
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = 'setVisible',
        data = true
    })
end
```

## 🎯 Próximos Passos

- [ ] Implementar páginas de Boletim de Ocorrência e Gerenciamento
- [ ] Adicionar componentes shadcn (Dialog, Select, etc.)
- [ ] Implementar validações de formulários
- [ ] Adicionar animações e transições
- [ ] Integrar gráficos na página Overview
- [ ] Adicionar sistema de notificações
- [ ] Implementar busca e filtros avançados

## 📄 Licença

Este projeto foi desenvolvido para uso em servidores FiveM.

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
