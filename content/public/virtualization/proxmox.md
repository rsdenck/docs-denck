---
title: Proxmox VE
description: Virtualização com Proxmox
visibility: public
template: docs
category: virtualization
---

# Proxmox VE

Plataforma de virtualização open source.

## Instalação

Download ISO: https://www.proxmox.com/downloads

Instalar via USB bootável.

## Comandos básicos

```bash
# Listar VMs
qm list

# Criar VM
qm create 100 --name test-vm --memory 2048 --cores 2

# Iniciar VM
qm start 100

# Parar VM
qm stop 100

# Status VM
qm status 100

# Remover VM
qm destroy 100
```

## Containers LXC

```bash
# Listar containers
pct list

# Criar container
pct create 101 local:vztmpl/ubuntu-22.04-standard_22.04-1_amd64.tar.zst \
  --hostname ubuntu-ct \
  --memory 1024 \
  --net0 name=eth0,bridge=vmbr0,ip=dhcp

# Iniciar container
pct start 101

# Entrar no container
pct enter 101
```

## Storage

```bash
# Listar storages
pvesm status

# Adicionar NFS
pvesm add nfs nfs-storage \
  --server 192.168.1.100 \
  --export /mnt/storage \
  --content images,vztmpl
```
