# Estrutura do Projeto - Jhones Police

## ✅ Estrutura Criada

```
jhones_police/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TabletContainer.tsx   # Container com dimensões 1266x864
│   │   │   ├── Sidebar.tsx           # Navegação lateral com ícones
│   │   │   └── Header.tsx            # Cabeçalho das páginas
│   │   └── ui/                       # Componentes shadcn (a adicionar)
│   ├── pages/
│   │   ├── OverviewPage.tsx          # Dashboard com gráficos
│   │   ├── ConsultarPage.tsx         # Busca de indivíduos/veículos
│   │   ├── PrisaoPage.tsx            # Registrar prisões
│   │   ├── MultarPage.tsx            # Aplicar multas
│   │   ├── ProcuradosPage.tsx        # Lista de procurados
│   │   ├── RankingPage.tsx           # Ranking de policiais
│   │   └── index.ts                  # Barrel export
│   ├── services/
│   │   └── fivem.ts                  # Comunicação com Lua
│   ├── types/
│   │   └── index.ts                  # Tipos TypeScript
│   ├── hooks/                        # (vazio - para hooks futuros)
│   └── utils/                        # (vazio - para utilitários)
├── App.tsx                           # Componente principal
├── index.css                         # Estilos globais
└── main.tsx                          # Entry point
```

## 🎨 Tema Configurado

### Cores (Tailwind v4)
- **Primary**: `#FF2D75` (Rosa)
- **Background**: `#0A0A0A`
- **Card**: `#1A1A1A`
- **Secondary**: `#2A2A2A`
- **Muted**: `#2A2A2A`
- **Border**: `#2A2A2A`
- **Success**: `#10B981`

### Dimensões
- **Tablet**: 1266px × 864px
- **Sidebar**: 86px

## 📄 Páginas Implementadas

1. **Overview** ✅
   - Tabs (Prisões, Multas, Boletins)
   - Área para gráfico de estatísticas
   - Lista de eventos recentes

2. **Consultar** ✅
   - Barra de pesquisa
   - Empty state com instruções

3. **Prisão** ✅
   - Input de passaporte
   - Seleção de policial e data
   - Seleção de infrações
   - Reduções de multas e pena
   - Exibição de pena e multas
   - Campo de descrição
   - Botão "Efetuar Prisão"

4. **Multar** ✅
   - Similar à prisão, mas focado em multas de veículos
   - Input de placa do veículo

5. **Procurados** ✅
   - Lista de indivíduos procurados com foto, nome, motivo e data
   - Lista de veículos procurados com marca, modelo, placa, dono e data
   - Botões de visualização

6. **Ranking** ✅
   - Tabs (Prisões, Multas, Boletins)
   - Tabela com posição, nome, patente, contagem e status
   - Indicador de status online

## 🔗 Serviço FiveM

### Métodos Disponíveis

```typescript
// Enviar dados para Lua
await fivem.send('action', data);

// Ouvir eventos do Lua
const cleanup = fivem.on('eventName', (data) => {
  // Handle data
});

// Fechar painel
fivem.close();
```

### Eventos Mock (Desenvolvimento)
- `getOfficerInfo`
- `getWanted`
- `getVehicles`
- `getBulletins`
- `getOfficers`
- `getRanking`

## 🚀 Próximas Etapas

### Páginas Pendentes
- [ ] Boletim de Ocorrência
- [ ] Gerenciamento

### Componentes shadcn Sugeridos
```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add select
npx shadcn@latest add dialog
npx shadcn@latest add tabs
npx shadcn@latest add table
npx shadcn@latest add badge
npx shadcn@latest add avatar
npx shadcn@latest add calendar
npx shadcn@latest add checkbox
```

### Melhorias
- [ ] Implementar validação de formulários (React Hook Form + Zod)
- [ ] Adicionar biblioteca de gráficos (recharts ou chart.js)
- [ ] Implementar sistema de notificações/toasts
- [ ] Adicionar animações de transição entre páginas
- [ ] Implementar busca com debounce
- [ ] Adicionar filtros e ordenação nas listas
- [ ] Criar modals para detalhes de procurados
- [ ] Adicionar suporte a paginação

## 📝 Comandos Úteis

```bash
# Desenvolvimento (use Node 20+)
nvm use 20
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Adicionar componente shadcn
npx shadcn@latest add [component-name]
```

## 🎯 Informações Importantes do Figma

Se precisar de informações adicionais do Figma para maior fidelidade, solicite:
- Espaçamentos específicos (padding, margin)
- Tamanhos de fonte exatos
- Opacidades específicas
- Sombras e efeitos
- Transições e animações
- Estados de hover/active
- Breakpoints responsivos

## 💡 Dicas de Integração com FiveM

### Cliente (client.lua)
```lua
RegisterCommand('policia', function()
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = 'setVisible',
        data = true
    })
end)

RegisterNUICallback('close', function(data, cb)
    SetNuiFocus(false, false)
    cb({ success = true })
end)

RegisterNUICallback('prisao', function(data, cb)
    -- Processar prisão
    cb({ success = true, data = { message = 'Prisão efetuada' } })
end)
```

### Build para FiveM
Após `npm run build`, copie os arquivos da pasta `dist/` para a pasta `html/` do seu resource FiveM.
