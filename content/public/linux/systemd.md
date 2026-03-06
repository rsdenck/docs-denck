---
title: Systemd
description: Gerenciamento de serviços com systemd
visibility: public
template: docs
category: linux
---

# Systemd

Gerenciador de sistema e serviços para Linux.

## Comandos básicos

```bash
# Status do serviço
systemctl status nginx

# Iniciar serviço
systemctl start nginx

# Parar serviço
systemctl stop nginx

# Reiniciar serviço
systemctl restart nginx

# Habilitar no boot
systemctl enable nginx

# Desabilitar no boot
systemctl disable nginx
```

## Criar serviço customizado

Criar arquivo `/etc/systemd/system/myapp.service`:

```ini
[Unit]
Description=My Application
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/node server.js
Restart=always

[Install]
WantedBy=multi-user.target
```

## Recarregar configuração

```bash
systemctl daemon-reload
systemctl start myapp
systemctl enable myapp
```

## Logs

```bash
# Ver logs do serviço
journalctl -u nginx

# Seguir logs em tempo real
journalctl -u nginx -f

# Logs desde boot
journalctl -b
```
