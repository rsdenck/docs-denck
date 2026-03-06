# Docs Denck

<div align="center">
  <h1 style="color: #00DC82; text-shadow: 0 0 10px #00DC82;">Docs Denck</h1>
  <p style="color: #6B7280;">Plataforma de Documentação Técnica Minimalista</p>
  
  <img src="https://img.shields.io/badge/version-1.0.0-00DC82?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Nuxt-3.21.1-00DC82?style=for-the-badge&logo=nuxt.js" alt="Nuxt">
  <img src="https://img.shields.io/badge/license-MIT-00DC82?style=for-the-badge" alt="License">
</div>

---

## Sobre o Projeto

**Docs Denck** é uma plataforma moderna de documentação técnica construída com **Nuxt 3**, oferecendo uma experiência minimalista e elegante para organizar e compartilhar conhecimento técnico.

### Características Principais

- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> **Design Minimalista**: Interface limpa com tema verde neon
- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/></svg> **Múltiplos Templates**: Docs, Labs, Knowledge Base e Cheatsheets
- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg> **Autenticação Segura**: Login via GitHub OAuth2
- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M17 7H7a3 3 0 0 0-3 3v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a3 3 0 0 0-3-3zM7 9h10a1 1 0 0 1 1 1v.38l-6 4.27-6-4.27V10a1 1 0 0 1 1-1z"/></svg> **Responsivo**: Funciona perfeitamente em todos os dispositivos
- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> **Performance**: Otimizado para velocidade e SEO
- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg> **Tema Escuro**: Interface confortável para longas sessões

---

## Stack Tecnológica

### Frontend
- **[Nuxt 3](https://nuxt.com/)** - Framework Vue.js full-stack
- **[Nuxt UI](https://ui.nuxt.com/)** - Componentes UI modernos
- **[Nuxt Content](https://content.nuxt.com/)** - CMS baseado em Markdown
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utilitário

### Backend
- **[Express.js](https://expressjs.com/)** - API REST para autenticação
- **[Axios](https://axios-http.com/)** - Cliente HTTP
- **[GitHub OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps)** - Autenticação via GitHub

### DevOps
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline
- **[Docker](https://docker.com/)** - Containerização
- **[Nginx](https://nginx.org/)** - Reverse proxy
- **[PM2](https://pm2.keymetrics.io/)** - Process manager

---

## Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400/0B0F10/00DC82?text=Homepage+-+Ranlens+Denck)
*Interface principal com design minimalista e tema verde neon*

### Documentação
![Documentação](https://via.placeholder.com/800x400/0B0F10/00DC82?text=Documentacao+-+Base+de+Conhecimento)
*Sistema de documentação organizado por categorias*

### Labs
![Labs](https://via.placeholder.com/800x400/0B0F10/00DC82?text=Labs+-+Tutoriais+Praticos)
*Laboratórios práticos com guias passo-a-passo*

### Cheatsheets
![Cheatsheets](https://via.placeholder.com/800x400/0B0F10/00DC82?text=Cheatsheets+-+Comandos+Rapidos)
*Referências rápidas para comandos e sintaxes*

### Login
![Login](https://via.placeholder.com/800x400/0B0F10/00DC82?text=Login+-+Autenticacao+GitHub)
*Sistema de autenticação via GitHub OAuth2*

### Dashboard Admin
![Dashboard](https://via.placeholder.com/800x400/0B0F10/00DC82?text=Dashboard+-+Painel+Administrativo)
*Painel administrativo para gerenciar conteúdo*

---

## Instalação e Uso

### Pré-requisitos
- Node.js 20+
- npm ou yarn
- Git

### Instalação Local

```bash
# Clone o repositório
git clone https://github.com/rsdenck/docs-denck.git
cd docs-denck

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# Execute em modo de desenvolvimento
npm run dev
```

### Acesso
- **Desenvolvimento**: http://localhost:8080
- **Autenticação**: GitHub OAuth2

---

## Tema e Design

### Paleta de Cores
```css
:root {
  --primary: #00DC82;      /* Verde Nuxt */
  --background: #0B0F10;   /* Preto profundo */
  --surface: #111827;      /* Cinza escuro */
  --border: #1F2937;       /* Cinza médio */
  --text: #F3F4F6;         /* Branco suave */
}
```

### Efeitos Visuais
- **Neon Glow**: Brilho sutil nos elementos principais
- **Transições**: Animações suaves de 0.2s
- **Shadows**: Sombras personalizadas para profundidade

---

## Estrutura do Projeto

```
docs-denck/
├── assets/              # Estilos e recursos
├── components/          # Componentes Vue
├── content/            # Conteúdo em Markdown
│   ├── public/         # Documentação pública
│   └── private/        # Documentação privada
├── pages/              # Páginas da aplicação
├── server/             # API routes
├── .github/            # GitHub Actions
├── road/               # Roadmap do projeto
└── nuxt.config.ts      # Configuração Nuxt
```

---

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Geração estática
npm run generate
```

---

## Deploy

### Produção
O projeto está configurado para deploy automático via GitHub Actions:

1. **Push para main** → Deploy automático
2. **Tags de versão** → Release automática
3. **Pull Requests** → Preview deploy

### Configuração do Servidor
```bash
# Instalar dependências do servidor
sudo apt update
sudo apt install nodejs npm nginx

# Configurar PM2
npm install -g pm2

# Configurar SSL
sudo certbot --nginx -d seudominio.com
```

---

## Performance

- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> **Lighthouse Score**: 95+
- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> **First Contentful Paint**: < 1.5s
- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M17 7H7a3 3 0 0 0-3 3v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a3 3 0 0 0-3-3z"/></svg> **Mobile Friendly**: 100%
- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg> **SEO Optimized**: Meta tags e structured data

---

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

---

## Roadmap

Veja o [roadmap completo](./road/roadmap.md) para conhecer os próximos passos do projeto.

### Próximas Features
- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg> Autenticação GitHub OAuth2
- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg> Sistema de busca avançada
- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/></svg> Comentários em documentos
- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Analytics de uso
- <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.51-6.81l-.02-.02C11.09 5.38 12.14 5 13.5 5c1.36 0 2.41.38 2.65.7-.49 2.16-.2 4.87.51 6.81l.03.03-2.54 2.51-.28.02z"/></svg> Internacionalização

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Autor

<div align="center">
  <img src="https://github.com/rsdenck.png" width="100" style="border-radius: 50%; border: 2px solid #00DC82;">
  
  **Ranlens Denck**
  
  <a href="https://github.com/rsdenck"><img src="https://img.shields.io/badge/GitHub-rsdenck-00DC82?style=for-the-badge&logo=github" alt="GitHub"></a>
  <a href="https://linkedin.com/in/ranlensdenck"><img src="https://img.shields.io/badge/LinkedIn-ranlensdenck-00DC82?style=for-the-badge&logo=linkedin" alt="LinkedIn"></a>
</div>

---

## Agradecimentos

- **[Nuxt Team](https://nuxt.com/team)** - Pelo incrível framework
- **[TailwindCSS](https://tailwindcss.com/)** - Pelo sistema de design
- **[Heroicons](https://heroicons.com/)** - Pelos ícones utilizados

---

<div align="center">
  <p style="color: #6B7280; margin-top: 2rem;">
    Feito com <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> e muito <svg width="16" height="16" fill="#00DC82" viewBox="0 0 24 24"><path d="M18.5 3H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12.5c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5z"/></svg> por <strong style="color: #00DC82;">Ranlens Denck</strong>
  </p>
  
  <img src="https://img.shields.io/badge/Powered%20by-Nuxt%203-00DC82?style=for-the-badge&logo=nuxt.js" alt="Powered by Nuxt 3">
</div>
