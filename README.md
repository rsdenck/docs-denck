# Ranlens Denck - Site Pessoal

Site pessoal com documentação técnica minimalista usando Nuxt, Nuxt UI e Nuxt Content.

## Features

- 📚 Documentação pública e privada
- 🔐 Sistema de autenticação simples
- 🎨 4 templates diferentes (docs, lab, knowledge, cheatsheet)
- 🌙 Tema dark com verde neon (#00DC82)
- 🚀 Deploy automático via GitHub Actions
- 📝 Conteúdo em Markdown

## Stack

- Nuxt 3
- Nuxt UI
- Nuxt Content
- TailwindCSS

## Instalação

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## Configuração

Copie `.env.example` para `.env` e configure:

```env
ADMIN_USER=admin
ADMIN_PASS=sua-senha-segura
JWT_SECRET=seu-jwt-secret
```

## Estrutura de Conteúdo

```
content/
├── public/          # Documentação pública
│   ├── devops/
│   ├── linux/
│   └── cloud/
└── private/         # Documentação privada (requer login)
    └── labs/
```

## Templates

### Docs (template: docs)
Layout tradicional com sidebar e TOC.

### Lab (template: lab)
Formato passo-a-passo para laboratórios.

### Knowledge (template: knowledge)
Base de conhecimento com cards por categoria.

### Cheatsheet (template: cheatsheet)
Layout compacto para comandos rápidos.

## Deploy

O projeto está configurado para deploy automático via GitHub Actions.

Configure os secrets no GitHub:
- `VPS_HOST`: IP do servidor
- `VPS_USER`: usuário SSH
- `VPS_SSH_KEY`: chave privada SSH

## Acesso

- Desenvolvimento: http://localhost:8080
- Login padrão: admin / admin123

## Autor

Ranlens Denck
