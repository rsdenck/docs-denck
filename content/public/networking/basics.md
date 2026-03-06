---
title: Networking Básico
description: Fundamentos de redes
visibility: public
template: docs
category: networking
---

# Networking Básico

Conceitos fundamentais de redes de computadores.

## Modelo OSI

1. Física
2. Enlace
3. Rede
4. Transporte
5. Sessão
6. Apresentação
7. Aplicação

## Comandos de diagnóstico

```bash
# Testar conectividade
ping 8.8.8.8

# Traçar rota
traceroute google.com

# Informações de rede
ip addr show
ip route show

# DNS lookup
nslookup google.com
dig google.com

# Portas abertas
netstat -tulpn
ss -tulpn
```

## Configurar IP estático

```bash
# /etc/netplan/01-netcfg.yaml
network:
  version: 2
  ethernets:
    eth0:
      addresses:
        - 192.168.1.100/24
      gateway4: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8, 8.8.4.4]
```

Aplicar:

```bash
netplan apply
```
