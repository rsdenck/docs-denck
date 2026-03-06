---
title: Restic Backup
description: Backup com Restic
visibility: public
template: docs
category: backup
---

# Restic

Ferramenta de backup rápida, segura e eficiente.

## Instalação

```bash
# Ubuntu/Debian
apt install restic

# RHEL/Rocky
dnf install restic
```

## Inicializar repositório

```bash
# Local
restic init --repo /backup/repo

# S3
restic init --repo s3:s3.amazonaws.com/bucket-name
```

## Fazer backup

```bash
restic backup /home/user --repo /backup/repo
```

## Listar snapshots

```bash
restic snapshots --repo /backup/repo
```

## Restaurar

```bash
# Restaurar último snapshot
restic restore latest --target /restore --repo /backup/repo

# Restaurar snapshot específico
restic restore abc123 --target /restore --repo /backup/repo
```

## Manutenção

```bash
# Verificar integridade
restic check --repo /backup/repo

# Limpar snapshots antigos
restic forget --keep-last 7 --prune --repo /backup/repo
```
