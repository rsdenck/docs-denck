---
title: Ceph Storage
description: Storage distribuído com Ceph
visibility: public
template: docs
category: storage
---

# Ceph Storage

Sistema de armazenamento distribuído.

## Arquitetura

- MON: Monitores do cluster
- OSD: Object Storage Daemons
- MDS: Metadata Server (para CephFS)
- RGW: RADOS Gateway (S3/Swift)

## Instalação básica

```bash
# Instalar cephadm
curl --silent --remote-name --location https://github.com/ceph/ceph/raw/quincy/src/cephadm/cephadm
chmod +x cephadm
./cephadm add-repo --release quincy
./cephadm install

# Bootstrap cluster
cephadm bootstrap --mon-ip 192.168.1.10
```

## Comandos básicos

```bash
# Status do cluster
ceph status
ceph health

# Listar OSDs
ceph osd tree

# Listar pools
ceph osd pool ls

# Criar pool
ceph osd pool create mypool 128

# Uso de espaço
ceph df
```

## RBD (Block Device)

```bash
# Criar imagem
rbd create mypool/myimage --size 10G

# Listar imagens
rbd ls mypool

# Mapear imagem
rbd map mypool/myimage

# Formatar e montar
mkfs.ext4 /dev/rbd0
mount /dev/rbd0 /mnt
```
