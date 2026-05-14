# 🎯 Guia de Teste - MeetStranger Mobile

## 🚀 Como Rodar o Projeto

### 1. Instalar Dependências
```bash
npm install
# ou
yarn install
```

### 2. Limpar Cache (importante!)
```bash
npx expo start --clear --web
```

### 3. Acessar a App
- **Web**: http://localhost:8081 (aparecerá automaticamente)
- **Mobile (iOS)**: Usar app Expo Go
- **Mobile (Android)**: Usar app Expo Go

---

## ✅ Checklist de Teste - Tela por Tela

### 📱 **LANDING** (`/`)
- [ ] Logo (gatinho) visível e centralizado no topo
- [ ] Texto "MEET" em vermelho com sombra
- [ ] Texto "STRANGER" em azul com sombra
- [ ] Tagline "Converse com pessoas aleatórias por temas!" visível
- [ ] 2 botões ("Entrar" e "Criar conta") centralizados
- [ ] Botão "Entrar" leva a `/auth/login`
- [ ] Botão "Criar conta" leva a `/auth/register`
- [ ] Disclaimer visível na base
- [ ] **SEM scroll no mouse** (todo conteúdo cabe na tela)
- [ ] Layout responsivo em telas diferentes (360px até 1920px)

### 🔐 **LOGIN** (`/auth/login`)
- [ ] Card com fundo bege e borda preta está **centralizado**
- [ ] Título "LOGIN" em azul com sombra
- [ ] Subtítulo "JÁ TEM UMA CONTA?" em vermelho
- [ ] 2 fields: Email e Senha
- [ ] Labels em azul
- [ ] Link "esqueceu sua senha?"
- [ ] Botão "Entrar" com sombra
- [ ] Link "Nao tem conta, Crie agora" leva a Register
- [ ] **SEM scroll necessário** (cabe tudo na tela)
- [ ] Ao clicar "Entrar", navega para `/home`

### 📝 **REGISTER** (`/auth/register`)
- [ ] Card com fundo bege e borda preta está **centralizado**
- [ ] Título "REGISTER" em azul com sombra
- [ ] 4 fields: Nome, Email, Senha, Confirmar Senha
- [ ] Validação de password matching (mostrar erro se não conferir)
- [ ] Botão "Criar conta" com sombra
- [ ] Link "Já tem conta? Faça login" leva a Login
- [ ] Ao clicar "Criar conta", navega para `/home`

### 🏠 **HOME** (`/home`)
- [ ] Logo (gatinho) **grande** (~180px) e visível
- [ ] Texto "MEET" + "STRANGER" com sombras
- [ ] **2 botões quadrados** (Chat 💬 e Sobre ❓)
- [ ] Botão "Chat" leva a `/chat/select`
- [ ] Botão "Sobre" leva a `/about`
- [ ] Botão "Sair" na base, leva a `/auth/login`
- [ ] **SEM scroll necessário**
- [ ] Logo **NÃO está cortada** no topo

### 🎨 **SELECT (Tópicos)** (`/chat/select`)
- [ ] Header azul com seta voltar (←) e título "Tópicos"
- [ ] Badge "Chat" visível no topo
- [ ] Card com título "TOPICOS"
- [ ] 3 botões de categoria: Filme, Jogos, Series
- [ ] Botão selecionado muda cor (highlight)
- [ ] Botão "Conversar" na base
- [ ] Ao clicar categoria e depois "Conversar", leva a `/chat/room?category=<id>`
- [ ] Seta voltar (←) leva a `/home`

### 💬 **ROOM (Chat)** (`/chat/room`)
- [ ] Header azul mostra o tema da conversa (ex: "Tema: Filme")
- [ ] Seta voltar (←) leva a `/chat/select`
- [ ] FlatList de mensagens renderiza (inicialmente vazia)
- [ ] Input de mensagem na base
- [ ] Botão de envio funciona
- [ ] Scroll automático para última mensagem

### ❓ **ABOUT** (`/about`)
- [ ] Header azul com seta voltar
- [ ] **Tela HOME**: 4 botões de navegação
  - [ ] "Como usar?" → abre seção HOWTO
  - [ ] "Regras de uso" → abre seção RULES
  - [ ] "Problemas comuns" → abre seção PROBLEMS
  - [ ] "Suporte" → abre seção SUPPORT
- [ ] **Seção HOWTO**:
  - [ ] Botão "← Voltar" no topo retorna a HOME
  - [ ] Lista de 5 passos numerados
- [ ] **Seção RULES**:
  - [ ] Botão "← Voltar" no topo retorna a HOME
  - [ ] Lista de 4 regras
- [ ] **Seção PROBLEMS**:
  - [ ] Botão "← Voltar" no topo retorna a HOME
  - [ ] 3 perguntas com respostas (FAQ)
- [ ] **Seção SUPPORT**:
  - [ ] Botão "← Voltar" no topo retorna a HOME
  - [ ] Campo "Nome" com TextInput
  - [ ] Campo "Mensagem" com TextInput multiline
  - [ ] Botão "Enviar" estilizado (vermelho com sombra)
- [ ] Seta voltar (←) no header leva a `/home`

---

## 🎯 Testes de Responsividade

### Pequena (Mobile - 375px):
```bash
# No DevTools do navegador:
- Clique em Device Toolbar (Ctrl+Shift+M ou Cmd+Shift+M)
- Selecione "iPhone SE" (375px)
- Teste se:
  - [ ] Logo não sai da tela
  - [ ] Botões têm tamanho adequado
  - [ ] Texto não transborda
  - [ ] Sem scroll horizontal
```

### Média (Tablet - 768px):
```bash
- Selecione "iPad" (768px)
- [ ] Layout se adapta bem
- [ ] Cards não ficam muito largos
- [ ] Logo permanece proporcional
```

### Grande (Desktop - 1920px):
```bash
- Redimensione a janela para 1920px
- [ ] Layout não fica deformado
- [ ] Cards têm maxWidth limitado
- [ ] Conteúdo centralizado
```

---

## 🐛 Testes de Bugs Conhecidos (Anteriormente Resolvidos)

### ❌ NÃO deve acontecer:
- [ ] ~~Logo cortada no topo~~  ✅ CORRIGIDO
- [ ] ~~Scroll desnecessário~~ ✅ CORRIGIDO
- [ ] ~~Cards desalinhados à direita~~ ✅ CORRIGIDO
- [ ] ~~TextShadow quebrado no web~~ ✅ CORRIGIDO
- [ ] ~~About alternando telas~~ ✅ CORRIGIDO

---

## 📊 Testes de Performance

### No Console do Navegador:
```javascript
// Verificar Performance
console.time('renderTime');
// ... navigate
console.timeEnd('renderTime');

// Verificar Memory
console.memory.usedJSHeapSize
```

- [ ] Não há memory leaks em navegação
- [ ] Telas renderizam em < 500ms
- [ ] Scroll é smooth (60fps)

---

## 📱 Testes em Dispositivo Real

### iPhone:
1. Instalar app Expo Go
2. Abrir QR code gerado por `npx expo start`
3. Testar em diferentes orientações (portrait/landscape)
4. [ ] Teclado não quebra layout (usamos KeyboardAvoidingView)
5. [ ] SafeAreaView respeita notch/bezels

### Android:
1. Instalar app Expo Go
2. Abrir QR code
3. Testar keyboard com `overScrollMode="never"`
4. [ ] Scroll bounce está desabilitado

---

## 🎨 Testes Visuais

- [ ] Todas as fonts têm shadow/outline visível
- [ ] Cores (vermelho #b20d1d, azul #2196F3, bege #fff9f1) estão corretas
- [ ] Cards têm borda preta 3px
- [ ] Botões têm sombra 3x3 (offset de 3 pixels)
- [ ] Gap entre elementos é consistente
- [ ] Nenhum elemento fica pixelizado

---

## ✨ Testes de UX

- [ ] Navegação é intuitiva (voltar sempre funciona)
- [ ] Não há telas em branco por muito tempo
- [ ] Botões respondem ao clique (activeOpacity visual)
- [ ] Textos são legíveis em todos os backgrounds
- [ ] Contraste de cores é suficiente (WCAG AA)

---

## 🔍 Verificar Console (DevTools)

Ao abrir o projeto, verificar:
```
❌ Não deve haver:
- Erros de TypeScript (red squiggles)
- Erros de importação ("Cannot find module")
- Warnings de deprecated props
- Erros de layout ("Indexed property setter...")

✅ Deve haver:
- Metro bundler carregado
- Nenhuma mensagem de erro no terminal
- App renderizado no localhost:8081
```

---

## 📝 Relatório de Teste

Ao testar, preencha este template:

```markdown
## Teste em: [Data]

### Ambiente:
- [ ] Web (Chrome)
- [ ] Web (Firefox)
- [ ] iOS Real Device
- [ ] Android Real Device
- [ ] iOS Simulator
- [ ] Android Emulator

### Tamanho da Tela: 
- [ ] 375px (mobile)
- [ ] 768px (tablet)
- [ ] 1920px (desktop)

### Resultado Geral:
- [x] Passou ✅
- [ ] Falhou ❌ (descrever abaixo)

### Bugs Encontrados:
1. ...
2. ...

### Notas:
...
```

---

## 🎯 Próximo Sprint (Não Testar Agora)

Estes itens ainda precisam de implementação:
- [ ] Autenticação real com backend
- [ ] WebSocket para chat em tempo real
- [ ] Avatar/Perfil do usuário
- [ ] Histórico de conversas
- [ ] Animações de transição
- [ ] Dark mode

---

**Última Atualização**: 2026-05-14
**Status**: 🟢 **Pronto para testes**
