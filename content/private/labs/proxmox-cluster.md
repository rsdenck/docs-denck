---
title: Lab Proxmox Cluster
description: Configuração de cluster Proxmox HA
visibility: private
template: lab
category: labs
---

# Proxmox Cluster Lab

Laboratório para criar cluster Proxmox com alta disponibilidade.

## Step 1: Preparar nodes

```bash
# Atualizar sistema
apt update && apt upgrade -y

# Configurar hostname
hostnamectl set-hostname pve1.lab.local

# Editar /etc/hosts
192.168.1.10 pve1.lab.local pve1
192.168.1.11 pve2.lab.local pve2
192.168.1.12 pve3.lab.local pve3
```

## Step 2: Criar cluster

No primeiro node:

```bash
pvecm create mycluster
```

## Step 3: Adicionar nodes

Nos demais nodes:

```bash
pvecm add 192.168.1.10
```

## Step 4: Verificar cluster

```bash
pvecm status
pvecm nodes
```

## Step 5: Configurar storage compartilhado

```bash
# Criar storage NFS
pvesm add nfs shared-storage \
  --server 192.168.1.100 \
  --export /mnt/storage \
  --content images,vztmpl,iso
```

## Step 6: Testar HA

```bash
# Criar VM com HA
qm create 100 --name test-vm --memory 2048
ha-manager add vm:100
```
