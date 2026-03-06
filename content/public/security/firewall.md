---
title: Firewall com UFW
description: Configuração de firewall
visibility: public
template: docs
category: security
---

# Firewall com UFW

Uncomplicated Firewall - gerenciamento simplificado de firewall.

## Instalação

```bash
apt install ufw
```

## Comandos básicos

```bash
# Status
ufw status

# Habilitar
ufw enable

# Desabilitar
ufw disable

# Permitir porta
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp

# Negar porta
ufw deny 3306/tcp

# Remover regra
ufw delete allow 80/tcp
```

## Regras avançadas

```bash
# Permitir de IP específico
ufw allow from 192.168.1.100

# Permitir range de IPs
ufw allow from 192.168.1.0/24

# Permitir porta de IP específico
ufw allow from 192.168.1.100 to any port 22

# Limitar conexões (proteção brute force)
ufw limit ssh
```

## Listar regras

```bash
ufw status numbered
ufw status verbose
```
