# Guia de Deploy

## Requisitos no VPS

- Node.js 20+
- PM2
- Nginx
- Git

## Instalação no servidor

```bash
# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Instalar PM2
npm install -g pm2

# Instalar Nginx
apt install -y nginx

# Clonar repositório
cd /var/www
git clone https://github.com/seu-usuario/infra-docs.git
cd infra-docs

# Instalar dependências
npm install

# Build
npm run build

# Configurar variáveis de ambiente
cp .env.example .env
nano .env
```

## Configurar Nginx

```bash
# Copiar configuração
cp nginx.conf /etc/nginx/sites-available/infra-docs
ln -s /etc/nginx/sites-available/infra-docs /etc/nginx/sites-enabled/

# Testar configuração
nginx -t

# Reiniciar Nginx
systemctl restart nginx
```

## Iniciar aplicação

```bash
# Iniciar com PM2
pm2 start ecosystem.config.js

# Salvar configuração PM2
pm2 save

# Configurar PM2 para iniciar no boot
pm2 startup
```

## SSL com Let's Encrypt

```bash
# Instalar Certbot
apt install -y certbot python3-certbot-nginx

# Obter certificado
certbot --nginx -d denck.tech -d www.denck.tech

# Renovação automática já está configurada
```

## Atualizar aplicação

```bash
cd /var/www/infra-docs
git pull
npm install
npm run build
pm2 restart infra-docs
```

## Monitoramento

```bash
# Ver logs
pm2 logs infra-docs

# Status
pm2 status

# Monitoramento
pm2 monit
```
