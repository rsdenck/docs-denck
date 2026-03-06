# Estrutura do Site Ranlens Denck

## Visão Geral

```
ranlens-denck-site/
├── app.vue                    # App principal
├── nuxt.config.ts            # Configuração Nuxt
├── tailwind.config.ts        # Configuração Tailwind
├── app.config.ts             # Configuração UI
│
├── assets/
│   └── css/
│       └── main.css          # Estilos globais + tema neon
│
├── components/
│   ├── Navbar.vue            # Navegação principal
│   ├── Sidebar.vue           # Sidebar de documentação
│   ├── TableOfContents.vue   # TOC lateral
│   ├── LayoutDocs.vue        # Template docs
│   ├── LayoutLab.vue         # Template lab
│   ├── LayoutKnowledge.vue   # Template knowledge
│   └── LayoutCheatsheet.vue  # Template cheatsheet
│
├── pages/
│   ├── index.vue             # Homepage
│   ├── login.vue             # Página de login
│   ├── docs/
│   │   ├── index.vue         # Lista de documentação
│   │   └── [...slug].vue     # Renderiza docs dinamicamente
│   └── admin/
│       └── dashboard.vue     # Dashboard admin
│
├── middleware/
│   └── auth.ts               # Middleware de autenticação
│
├── server/
│   └── api/
│       └── login.post.ts     # API de login
│
├── content/
│   ├── public/               # Documentação pública
│   │   ├── devops/
│   │   ├── linux/
│   │   ├── cloud/
│   │   ├── networking/
│   │   ├── monitoring/
│   │   ├── virtualization/
│   │   ├── database/
│   │   ├── security/
│   │   ├── backup/
│   │   ├── storage/
│   │   └── middleware/
│   └── private/              # Documentação privada
│       └── labs/
│
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD GitHub Actions
│
├── nginx.conf                # Configuração Nginx
├── ecosystem.config.js       # Configuração PM2
└── DEPLOY.md                 # Guia de deploy
```

## Templates de Documentação

### 1. Docs (template: docs)
Layout tradicional com sidebar e TOC.
Usado para: guias, manuais, tutoriais.

### 2. Lab (template: lab)
Formato passo-a-passo.
Usado para: laboratórios práticos.

### 3. Knowledge (template: knowledge)
Cards por categoria.
Usado para: base de conhecimento ampla.

### 4. Cheatsheet (template: cheatsheet)
Layout compacto.
Usado para: referência rápida de comandos.

## Frontmatter

Cada documento Markdown possui metadados:

```yaml
---
title: Título do documento
description: Descrição breve
visibility: public|private
template: docs|lab|knowledge|cheatsheet
category: devops|linux|cloud|etc
---
```

## Tema

Cores principais:
- Background: #0B0F10
- Surface: #111827
- Border: #1F2937
- Primary: #00DC82 (Nuxt Green)
- Accent: #34F5C5
- Highlight: #00FF94

## Autenticação

Sistema simples sem cadastro:
- Credenciais definidas em variáveis de ambiente
- JWT armazenado em cookie httpOnly
- Middleware protege rotas privadas

## Deploy

1. Build: `npm run build`
2. Upload para VPS via GitHub Actions
3. PM2 gerencia processo Node
4. Nginx como reverse proxy
5. SSL via Let's Encrypt
