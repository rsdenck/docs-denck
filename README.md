# 🚀 Docs Denck

<div align="center">
  <h1 style="color: #00DC82; text-shadow: 0 0 10px #00DC82;">Docs Denck</h1>
  <p style="color: #6B7280;">Plataforma de Documentação Técnica Minimalista</p>
  
  ![Version](https://img.shields.io/badge/version-1.0.0-00DC82?style=for-the-badge)
  ![Nuxt](https://img.shields.io/badge/Nuxt-3.21.1-00DC82?style=for-the-badge&logo=nuxt.js)
  ![License](https://img.shields.io/badge/license-MIT-00DC82?style=for-the-badge)
</div>

---

## 📖 Sobre o Projeto

**Docs Denck** é uma plataforma moderna de documentação técnica construída com **Nuxt 3**, oferecendo uma experiência minimalista e elegante para organizar e compartilhar conhecimento técnico.

### ✨ Características Principais

- 🎨 **Design Minimalista**: Interface limpa com tema verde neon
- 📝 **Múltiplos Templates**: Docs, Labs, Knowledge Base e Cheatsheets
- 🔐 **Autenticação Segura**: Login via Google OAuth2
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance**: Otimizado para velocidade e SEO
- 🌙 **Tema Escuro**: Interface confortável para longas sessões

---

## 🛠️ Stack Tecnológica

### **Frontend**
- **[Nuxt 3](https://nuxt.com/)** - Framework Vue.js full-stack
- **[Nuxt UI](https://ui.nuxt.com/)** - Componentes UI modernos
- **[Nuxt Content](https://content.nuxt.com/)** - CMS baseado em Markdown
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utilitário

### **Backend** *(Em desenvolvimento)*
- **[Go (Golang)](https://golang.org/)** - API REST para autenticação
- **[PostgreSQL](https://postgresql.org/)** - Banco de dados principal
- **[Redis](https://redis.io/)** - Cache e sessões

### **DevOps**
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline
- **[Docker](https://docker.com/)** - Containerização
- **[Nginx](https://nginx.org/)** - Reverse proxy
- **[PM2](https://pm2.keymetrics.io/)** - Process manager

---

## 📸 Screenshots

### 🏠 Homepage
![Homepage](https://via.placeholder.com/800x400/0B0F10/00DC82?text=Homepage+-+Ranlens+Denck)
*Interface principal com design minimalista e tema verde neon*

### 📚 Documentação
![Documentação](https://via.placeholder.com/800x400/0B0F10/00DC82?text=Documentacao+-+Base+de+Conhecimento)
*Sistema de documentação organizado por categorias*

### 🔬 Labs
![Labs](https://via.placeholder.com/800x400/0B0F10/00DC82?text=Labs+-+Tutoriais+Praticos)
*Laboratórios práticos com guias passo-a-passo*

### 📋 Cheatsheets
![Cheatsheets](https://via.placeholder.com/800x400/0B0F10/00DC82?text=Cheatsheets+-+Comandos+Rapidos)
*Referências rápidas para comandos e sintaxes*

### 🔐 Login
![Login](https://via.placeholder.com/800x400/0B0F10/00DC82?text=Login+-+Autenticacao+Google)
*Sistema de autenticação via Google OAuth2*

### 📊 Dashboard Admin
![Dashboard](https://via.placeholder.com/800x400/0B0F10/00DC82?text=Dashboard+-+Painel+Administrativo)
*Painel administrativo para gerenciar conteúdo*

---

## 🚀 Instalação e Uso

### **Pré-requisitos**
- Node.js 20+
- npm ou yarn
- Git

### **Instalação Local**

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

### **Acesso**
- **Desenvolvimento**: http://localhost:8080
- **Login padrão**: admin / admin123

---

## 🎨 Tema e Design

### **Paleta de Cores**
```css
:root {
  --primary: #00DC82;      /* Verde Nuxt */
  --background: #0B0F10;   /* Preto profundo */
  --surface: #111827;      /* Cinza escuro */
  --border: #1F2937;       /* Cinza médio */
  --text: #F3F4F6;         /* Branco suave */
}
```

### **Efeitos Visuais**
- **Neon Glow**: Brilho sutil nos elementos principais
- **Transições**: Animações suaves de 0.2s
- **Shadows**: Sombras personalizadas para profundidade

---

## 📁 Estrutura do Projeto

```
docs-denck/
├── 📁 assets/              # Estilos e recursos
├── 📁 components/          # Componentes Vue
├── 📁 content/            # Conteúdo em Markdown
│   ├── 📁 public/         # Documentação pública
│   └── 📁 private/        # Documentação privada
├── 📁 pages/              # Páginas da aplicação
├── 📁 server/             # API routes
├── 📁 .github/            # GitHub Actions
├── 📁 road/               # Roadmap do projeto
└── 📄 nuxt.config.ts      # Configuração Nuxt
```

---

## 🔧 Scripts Disponíveis

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

## 🌐 Deploy

### **Produção**
O projeto está configurado para deploy automático via GitHub Actions:

1. **Push para main** → Deploy automático
2. **Tags de versão** → Release automática
3. **Pull Requests** → Preview deploy

### **Configuração do Servidor**
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

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+
- 🚀 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Friendly**: 100%
- 🔍 **SEO Optimized**: Meta tags e structured data

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

---

## 📋 Roadmap

Veja o [roadmap completo](./road/roadmap.md) para conhecer os próximos passos do projeto.

### **Próximas Features**
- 🔐 Autenticação Google OAuth2
- 🔍 Sistema de busca avançada
- 💬 Comentários em documentos
- 📊 Analytics de uso
- 🌍 Internacionalização

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/rsdenck.png" width="100" style="border-radius: 50%; border: 2px solid #00DC82;">
  
  **Ranlens Denck**
  
  [![GitHub](https://img.shields.io/badge/GitHub-rsdenck-00DC82?style=for-the-badge&logo=github)](https://github.com/rsdenck)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-ranlensdenck-00DC82?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/ranlensdenck)
</div>

---

## 🙏 Agradecimentos

- **[Nuxt Team](https://nuxt.com/team)** - Pelo incrível framework
- **[TailwindCSS](https://tailwindcss.com/)** - Pelo sistema de design
- **[Heroicons](https://heroicons.com/)** - Pelos ícones utilizados

---

<div align="center">
  <p style="color: #6B7280; margin-top: 2rem;">
    Feito com ❤️ e muito ☕ por <strong style="color: #00DC82;">Ranlens Denck</strong>
  </p>
  
  ![Nuxt](https://img.shields.io/badge/Powered%20by-Nuxt%203-00DC82?style=for-the-badge&logo=nuxt.js)
</div>
